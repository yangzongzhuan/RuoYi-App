<template>
  <view class="container">
    <!-- 顶部信息模块 -->
    <view class="header">
        <text class="title">CT13土的自由膨胀率检测记录</text>
        <button class="search-btn" @click="getList">搜索</button>
      </view>
      
      <!-- 仅接收Excel表中标注为红色的字段输入框 -->
      <view class="red-fields-container">
        <view class="form-item">
          <text class="label">检测单位名称</text>
          <input class="input" v-model="searchForm.jcdwmc" placeholder="请输入检测单位名称" />
        </view>
        <view class="form-item">
          <text class="label">工程名称</text>
          <input class="input" v-model="searchForm.gcmc" placeholder="请输入工程名称" />
        </view>
        <view class="form-item">
          <text class="label">合同段</text>
          <input class="input" v-model="searchForm.htd" placeholder="请输入合同段" />
        </view>
      </view>
    
    <!-- 数据查询列表 -->
    <view class="table-container">
      <view class="table-header">
        <text class="header-cell">检测单位名称</text>
        <text class="header-cell">工程名称</text>
        <text class="header-cell">试验日期</text>
        <text class="header-cell">操作</text>
      </view>
      <view class="table-row" v-for="item in dataList" :key="item.id">
        <text class="table-cell">{{ item.jcdwmc }}</text>
        <text class="table-cell">{{ item.gcmc }}</text>
        <text class="table-cell">{{ item.syrq }}</text>
        <text class="table-cell edit-link" @click="handleEdit(item)">编辑</text>
      </view>
    </view>
    

    <uni-popup ref="viewPopup" type="dialog">
      <uni-popup-dialog mode="base" title="详情" confirm-text="确定" @confirm="closeViewDialog">
        <scroll-view class="form-scroll" scroll-y>
          <view class="detail-table">
            <!-- 表头 -->
            <view class="detail-table-row header">
              <text class="detail-table-cell">土工试表CT13</text>
              <text class="detail-table-cell">自由膨胀率试验检测记录表</text>
              <text class="detail-table-cell">第 {{ viewForm.page }} 页，共 {{ viewForm.totalPages }} 页</text>
            </view>
            
            <!-- 基本信息行 -->
            <view class="detail-table-row">
              <text class="detail-table-cell">检测单位名称:</text>
              <text class="detail-table-cell">{{ viewForm.jcdwmc }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">记录编号:</text>
              <text class="detail-table-cell">{{ viewForm.jlbh }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
            </view>
            
            <view class="detail-table-row">
              <text class="detail-table-cell">工程名称</text>
              <text class="detail-table-cell">{{ viewForm.gcmc }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">合同段</text>
              <text class="detail-table-cell">{{ viewForm.htd }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
            </view>
            
            <view class="detail-table-row">
              <text class="detail-table-cell">施工单位</text>
              <text class="detail-table-cell">{{ viewForm.sgdw }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">监理单位</text>
              <text class="detail-table-cell">{{ viewForm.jldw }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
            </view>
            
            <view class="detail-table-row">
              <text class="detail-table-cell">工程部位/用途</text>
              <text class="detail-table-cell">{{ viewForm.gcbwyt }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">样品编号</text>
              <text class="detail-table-cell">{{ viewForm.ypbh }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
            </view>
            
            <view class="detail-table-row">
              <text class="detail-table-cell">试验条件</text>
              <text class="detail-table-cell">{{ viewForm.sytj }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">样品名称</text>
              <text class="detail-table-cell">{{ viewForm.ypmc }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
            </view>
            
            <view class="detail-table-row">
              <text class="detail-table-cell">样品描述</text>
              <text class="detail-table-cell">{{ viewForm.ypms }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">试验日期</text>
              <text class="detail-table-cell">{{ viewForm.syrq }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
            </view>
            
            <view class="detail-table-row">
              <text class="detail-table-cell">主要仪器设备及编号</text>
              <text class="detail-table-cell">{{ viewForm.zyyqsbjbh }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">试验依据</text>
              <text class="detail-table-cell">{{ viewForm.syyj }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
            </view>
            
            <view class="detail-table-row">
              <text class="detail-table-cell">量筒型号(cm3)</text>
              <text class="detail-table-cell">{{ viewForm.ltxh }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">土样说明</text>
              <text class="detail-table-cell">{{ viewForm.tysm }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">量土杯容积(cm3)</text>
              <text class="detail-table-cell">{{ viewForm.ltbrj }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
            </view>
            
            <!-- 试验数据表头 -->
            <view class="detail-table-row header">
              <text class="detail-table-cell">土样编号</text>
              <text class="detail-table-cell">干土质量(g)</text>
              <text class="detail-table-cell">量筒编号</text>
              <text class="detail-table-cell">不同时间(h)体积读数(cm3)</text>
              <text class="detail-table-cell">不同时间(h)体积读数(cm3)</text>
              <text class="detail-table-cell">不同时间(h)体积读数(cm3)</text>
              <text class="detail-table-cell">不同时间(h)体积读数(cm3)</text>
              <text class="detail-table-cell">不同时间(h)体积读数(cm3)</text>
              <text class="detail-table-cell">不同时间(h)体积读数(cm3)</text>
              <text class="detail-table-cell">不同时间(h)体积读数(cm3)</text>
              <text class="detail-table-cell">不同时间(h)体积读数(cm3)</text>
              <text class="detail-table-cell">不同时间(h)体积读数(cm3)</text>
              <text class="detail-table-cell">不同时间(h)体积读数(cm3)</text>
              <text class="detail-table-cell">自由膨胀率(%)</text>
              <text class="detail-table-cell">自由膨胀率(%)</text>
            </view>
            
            <view class="detail-table-row header">
              <text class="detail-table-cell">土样编号</text>
              <text class="detail-table-cell">干土质量(g)</text>
              <text class="detail-table-cell">量筒编号</text>
              <text class="detail-table-cell">2</text>
              <text class="detail-table-cell">2</text>
              <text class="detail-table-cell">4</text>
              <text class="detail-table-cell">4</text>
              <text class="detail-table-cell">6</text>
              <text class="detail-table-cell">6</text>
              <text class="detail-table-cell">8</text>
              <text class="detail-table-cell">8</text>
              <text class="detail-table-cell">10</text>
              <text class="detail-table-cell">10</text>
              <text class="detail-table-cell">单值</text>
              <text class="detail-table-cell">平均值</text>
            </view>
            
            <!-- 样本a数据 -->
            <view class="detail-table-row">
              <text class="detail-table-cell">{{ viewForm.tybh }}</text>
              <text class="detail-table-cell">{{ viewForm.gtzla }}</text>
              <text class="detail-table-cell">{{ viewForm.ltbha }}</text>
              <text class="detail-table-cell">{{ viewForm.a1 }}</text>
              <text class="detail-table-cell">{{ viewForm.a1 }}</text>
              <text class="detail-table-cell">{{ viewForm.a2 }}</text>
              <text class="detail-table-cell">{{ viewForm.a2 }}</text>
              <text class="detail-table-cell">{{ viewForm.a3 }}</text>
              <text class="detail-table-cell">{{ viewForm.a3 }}</text>
              <text class="detail-table-cell">{{ viewForm.a4 }}</text>
              <text class="detail-table-cell">{{ viewForm.a4 }}</text>
              <text class="detail-table-cell">{{ viewForm.a5 }}</text>
              <text class="detail-table-cell">{{ viewForm.a5 }}</text>
              <text class="detail-table-cell">{{ viewForm.a }}</text>
              <text class="detail-table-cell">{{ viewForm.p }}</text>
            </view>
            
            <!-- 样本b数据 -->
            <view class="detail-table-row">
              <text class="detail-table-cell">{{ viewForm.tybh }}</text>
              <text class="detail-table-cell">{{ viewForm.gtzlb }}</text>
              <text class="detail-table-cell">{{ viewForm.ltbh }}</text>
              <text class="detail-table-cell">{{ viewForm.b1 }}</text>
              <text class="detail-table-cell">{{ viewForm.b1 }}</text>
              <text class="detail-table-cell">{{ viewForm.b2 }}</text>
              <text class="detail-table-cell">{{ viewForm.b2 }}</text>
              <text class="detail-table-cell">{{ viewForm.b3 }}</text>
              <text class="detail-table-cell">{{ viewForm.b3 }}</text>
              <text class="detail-table-cell">{{ viewForm.b4 }}</text>
              <text class="detail-table-cell">{{ viewForm.b4 }}</text>
              <text class="detail-table-cell">{{ viewForm.b5 }}</text>
              <text class="detail-table-cell">{{ viewForm.b5 }}</text>
              <text class="detail-table-cell">{{ viewForm.b }}</text>
              <text class="detail-table-cell">{{ viewForm.p }}</text>
            </view>
            
            <!-- 备注和签名 -->
            <view class="detail-table-row">
              <text class="detail-table-cell">备注：</text>
              <text class="detail-table-cell" colspan="14">{{ viewForm.bz }}</text>
            </view>
            
            <view class="detail-table-row">
              <text class="detail-table-cell">试验:</text>
              <text class="detail-table-cell">{{ viewForm.sy }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">记录:</text>
              <text class="detail-table-cell">{{ viewForm.jl }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">复核：</text>
              <text class="detail-table-cell">{{ viewForm.fh }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell">日期:</text>
              <text class="detail-table-cell">{{ viewForm.rq }}</text>
              <text class="detail-table-cell"></text>
              <text class="detail-table-cell"></text>
            </view>
          </view>
        </scroll-view>
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
import { listCt13, getCt13, delCt13 } from '@/api/ct13/ct13'

export default {
  data() {
    return {
      dataList: [],
      searchForm: {
        jcdwmc: '',
        gcmc: '',
        htd: ''
      },
      viewForm: {
        // 添加计算字段和页码信息
        a: '',
        b: '',
        p: '',
        page: '1',
        totalPages: '1'
      }, // 用于详情展示的数据
    }
  },
  created() {
    this.getList()
  },
  methods: {
    /** 查询CT13土的自由膨胀率检测记录列表 */
    getList() {
      listCt13(this.searchForm).then(response => {
        this.dataList = response.rows
      })
    },
    /** 跳转到编辑页面 */
    handleEdit(row) {
      uni.navigateTo({
        url: `/pages/ct13/ct13/view?id=${row.id}`
      });
    },
    /** 关闭详情对话框 */
    closeViewDialog() {
      this.$refs.viewPopup.close()
    },

    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || ids 
      this.$modal.confirm('是否确认删除CT13土的自由膨胀率检测记录编号为"' + ids + '"的数据项？').then(function() {
        return delCt13(ids)
      }).then(() => {
        this.getList()
        this.$modal.msgSuccess("删除成功")
      }).catch(() => {})
    },

  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 15rpx;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30rpx;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}

.search-btn {
  background-color: $uni-color-primary;
  color: white;
  border: none;
  padding: 18rpx 36rpx;
  border-radius: $uni-border-radius-base;
  font-size: $uni-font-size-base;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: $uni-shadow-sm;
  margin-left: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: $uni-color-primary-dark;
    transform: translateY(-1rpx);
    box-shadow: $uni-shadow-base;
  }
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.1);
  }
  
  text {
    margin-left: 12rpx;
  }
}

.table-container {
  background-color: white;
  border-radius: 15rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3rpx;
    background: linear-gradient(90deg, #4a90e2, #5fa9f4);
  }
}

.table-header {
  display: flex;
  padding: 30rpx;
  font-weight: 600;
  color: $uni-color-primary;
  background-color: rgba(100, 181, 246, 0.05);
  border-bottom: none;
  backdrop-filter: blur(10rpx);
}

.table-row {
  display: flex;
  padding: 25rpx;
  border-bottom: 1rpx solid #e0e0e0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:nth-child(even) {
    background-color: #f7f9fc;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  // 鼠标悬停效果
  &:hover {
    background-color: rgba(100, 181, 246, 0.03);
    transform: translateY(-1rpx);
    box-shadow: $uni-shadow-sm;
    border-radius: $uni-border-radius-sm;
    z-index: 1;
  }
}

.header-cell, .table-cell {
  flex: 1.2;
  text-align: center;
  font-size: 28rpx;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20rpx 12rpx;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:first-child {
    flex: 2.5;
  }
  
  &:last-child {
    flex: 1.5;
  }
}

.edit-link, .view-link {
  color: #007AFF;
  text-decoration: underline;
  padding: 5rpx 10rpx;
  border-radius: 5rpx;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #007AFF;
    color: white;
    text-decoration: none;
  }
}

.form-scroll {
  max-height: 80vh;
}

.form-container {
  padding: 20rpx;
}

.form-item {
  margin-bottom: 20rpx;
}

/* 红色字段容器样式 */
.red-fields-container {
  background-color: #fff;
  padding: 20rpx;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
  border: 1rpx solid #e0e0e0;
}

.red-fields-container .form-item {
  margin-bottom: 25rpx;
}

.red-fields-container .form-item:last-child {
  margin-bottom: 0;
}

.label {
  display: block;
  margin-bottom: 10rpx;
  font-size: 28rpx;
  color: #333;
  word-wrap: break-word;
  word-break: break-all;
  min-height: 40rpx;
}

.input {
  width: 100%;
  min-height: 80rpx;
  padding: 20rpx 25rpx;
  border: 1rpx solid #ddd;
  border-radius: 10rpx;
  font-size: 28rpx;
  box-sizing: border-box;
  line-height: 40rpx;
}

.picker {
  width: 100%;
  min-height: 80rpx;
  padding: 20rpx 25rpx;
  border: 1rpx solid #ddd;
  border-radius: 10rpx;
  font-size: 28rpx;
  box-sizing: border-box;
  line-height: 40rpx;
}

.form-section {
  margin: 20rpx 0;
  padding: 20rpx;
  border: 1rpx solid #eee;
  border-radius: 10rpx;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 30rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
  display: block;
}

// 详情对话框样式
.view-popup ::v-deep .uni-popup__wrapper {
  .uni-popup__dialog {
    max-width: 95vw;
    width: auto;
    border-radius: $uni-border-radius-xl;
    overflow: hidden;
    box-shadow: $uni-shadow-lg;
    
    .uni-popup__dialog-content {
      padding: 0;
      
      .uni-popup__title {
        padding: 30rpx;
        border-bottom: none;
        background: linear-gradient(90deg, $uni-color-primary, $uni-color-primary-light);
        color: white;
        font-size: $uni-font-size-lg;
        font-weight: 600;
        text-align: center;
        box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
      }
      
      .uni-popup__confirm-buttons {
        padding: 30rpx;
        border-top: none;
        background-color: #f8f9fa;
        text-align: center;
      }
    }
  }
}

// 详情表格样式
.detail-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 36rpx;
  background-color: #fff;
  border-radius: $uni-border-radius-base;
  overflow: hidden;
  box-shadow: $uni-shadow-sm;
  font-size: 24rpx;
  border: 1rpx solid #e0e0e0;
}

.detail-table-row {
  display: flex;
  border-bottom: 1rpx solid #e0e0e0;
  min-height: 60rpx;
  
  &.header {
    background: linear-gradient(to bottom, #f5f7fa, #e4e7f4);
    font-weight: bold;
    color: #333;
  }
  
  &:nth-child(even) {
    background-color: #fafafa;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  // 鼠标悬停效果
  &:hover {
    background-color: #f0f8ff;
  }
}

.detail-table-cell {
  flex: 1;
  padding: 20rpx;
  border-right: 1rpx solid #e0e0e0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:last-child {
    border-right: none;
  }
  
  // 表头特殊样式
   .detail-table-row.header & {
     padding: 20rpx;
     font-weight: 600;
     text-shadow: 0 1rpx 1rpx rgba(0, 0, 0, 0.1);
     background-color: rgba(100, 181, 246, 0.03);
   }
  
  // 根据Excel表格调整特定列的宽度
  &:nth-child(1) { flex: 1.8; }
  &:nth-child(2) { flex: 1.8; }
  &:nth-child(3) { flex: 1.2; }
  &:nth-child(4) { flex: 1.4; }
  &:nth-child(5) { flex: 1.4; }
  &:nth-child(6) { flex: 1.4; }
  &:nth-child(7) { flex: 1.4; }
  &:nth-child(8) { flex: 1.4; }
  &:nth-child(9) { flex: 1.4; }
  &:nth-child(10) { flex: 1.4; }
  &:nth-child(11) { flex: 1.4; }
  &:nth-child(12) { flex: 1.4; }
  &:nth-child(13) { flex: 1.4; }
  &:nth-child(14) { flex: 1.6; }
  &:nth-child(15) { flex: 1.6; }

  // 响应式调整
  @media screen and (max-width: 768px) {
    font-size: 24rpx;
    padding: 10rpx 5rpx;

    &:nth-child(1) { flex: 2; }
    &:nth-child(2) { flex: 2; }
    &:nth-child(3) { flex: 1.5; }
    &:nth-child(n+4) { flex: 1.2; }
    &:nth-child(14), &:nth-child(15) { flex: 1.8; }
  }
}
</style>