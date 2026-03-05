<template>
  <view class="container">
    <!-- 顶部标题栏 -->
    <view class="header">
      <text class="title">{{ title }}</text>
    </view>
    
    <scroll-view class="form-scroll" scroll-y="true">
      <view class="form-container">
        <!-- 仅接收Excel表中标注为红色的字段 -->
        <view class="form-section">
          <view class="section-title">基本信息</view>
          <view class="form-grid">
            <view class="form-item">
              <text class="label">记录编号</text>
              <input class="input" v-model="form.jlbh" placeholder="请输入记录编号" />
            </view>
            <view class="form-item">
              <text class="label">检测单位名称</text>
              <input class="input" v-model="form.jcdwmc" placeholder="请输入检测单位名称" />
            </view>
            <view class="form-item">
              <text class="label">工程名称</text>
              <input class="input" v-model="form.gcmc" placeholder="请输入工程名称" />
            </view>
            <view class="form-item">
              <text class="label">合同段</text>
              <input class="input" v-model="form.htd" placeholder="请输入合同段" />
            </view>
            <view class="form-item">
              <text class="label">施工单位</text>
              <input class="input" v-model="form.sgdw" placeholder="请输入施工单位" />
            </view>
            <view class="form-item">
              <text class="label">监理单位</text>
              <input class="input" v-model="form.jldw" placeholder="请输入监理单位" />
            </view>
            <view class="form-item">
              <text class="label">工程部位/用途</text>
              <input class="input" v-model="form.gcbwyt" placeholder="请输入工程部位/用途" />
            </view>
            <view class="form-item">
              <text class="label">样品编号</text>
              <input class="input" v-model="form.ypbh" placeholder="请输入样品编号" />
            </view>
            <view class="form-item">
              <text class="label">试验条件</text>
              <input class="input" v-model="form.sytj" placeholder="请输入试验条件" />
            </view>
            <view class="form-item">
              <text class="label">样品名称</text>
              <input class="input" v-model="form.ypmc" placeholder="请输入样品名称" />
            </view>
            <view class="form-item">
              <text class="label">样品描述</text>
              <input class="input" v-model="form.ypms" placeholder="请输入样品描述" />
            </view>
            <view class="form-item">
              <text class="label">试验日期</text>
              <uni-datetime-picker 
                class="input picker" 
                v-model="form.syrq" 
                type="date" 
                format="yyyy-MM-dd" 
                placeholder="请选择试验日期"
                :border="false"
                :calendar-options="{
                  backgroundColor: '$uni-bg-color',
                  selectedColor: '$uni-color-primary',
                  todayTextColor: '$uni-color-primary'
                }"
              ></uni-datetime-picker>
            </view>
            <view class="form-item">
              <text class="label">主要仪器设备及编号</text>
              <input class="input" v-model="form.zyyqsbjbh" placeholder="请输入主要仪器设备及编号" />
            </view>
            <view class="form-item">
              <text class="label">试验依据</text>
              <input class="input" v-model="form.syyj" placeholder="请输入试验依据" />
            </view>
            <view class="form-item">
              <text class="label">量筒型号(cm3)</text>
              <input class="input" v-model="form.ltxh" placeholder="请输入量筒型号" />
            </view>
            <view class="form-item">
              <text class="label">土样说明</text>
              <input class="input" v-model="form.tysm" placeholder="请输入土样说明" />
            </view>
            <view class="form-item">
              <text class="label">量土杯容积(cm3)</text>
              <input class="input" v-model="form.ltbrj" placeholder="请输入量土杯容积" />
            </view>
          </view>
        </view>
        
        <!-- 试验参数（仅显示标黄列，隐藏标蓝列但仍需提供输入框） -->
        <view class="form-section">
          <view class="section-title">试验参数</view>
          <view class="form-grid">
            <!-- 显示字段（标黄列） -->
            <view class="form-item">
              <text class="label">土样编号_1</text>
              <input class="input" v-model="form.tybh" placeholder="请输入土样编号_1" />
            </view>
            <view class="form-item">
              <text class="label">干土质量(g)_1</text>
              <input class="input" v-model="form.gtzla" placeholder="请输入干土质量(g)_1" />
            </view>
            <view class="form-item">
              <text class="label">量筒编号_1</text>
              <input class="input" v-model="form.ltbha" placeholder="请输入量筒编号_1" />
            </view>
            <view class="form-item">
              <text class="label">2h体积读数(cm3)_1</text>
              <input class="input" v-model="form.a1" placeholder="请输入2h体积读数(cm3)_1" />
            </view>
            <view class="form-item">
              <text class="label">4h体积读数(cm3)_1</text>
              <input class="input" v-model="form.a2" placeholder="请输入4h体积读数(cm3)_1" />
            </view>
            <view class="form-item">
              <text class="label">6h体积读数(cm3)_1</text>
              <input class="input" v-model="form.a3" placeholder="请输入6h体积读数(cm3)_1" />
            </view>
            <view class="form-item">
              <text class="label">8h体积读数(cm3)_1</text>
              <input class="input" v-model="form.a4" placeholder="请输入8h体积读数(cm3)_1" />
            </view>
            <view class="form-item">
              <text class="label">10h体积读数(cm3)_1</text>
              <input class="input" v-model="form.a5" placeholder="请输入10h体积读数(cm3)_1" />
            </view>
            <view class="form-item">
              <text class="label">自由膨胀率(%)单值_1</text>
              <input class="input" v-model="form.a" placeholder="请输入自由膨胀率(%)单值_1" />
            </view>
            
            <view class="form-item">
              <text class="label">干土质量(g)_2</text>
              <input class="input" v-model="form.gtzlb" placeholder="请输入干土质量(g)_2" />
            </view>
            <view class="form-item">
              <text class="label">量筒编号_2</text>
              <input class="input" v-model="form.ltbh" placeholder="请输入量筒编号_2" />
            </view>
            <view class="form-item">
              <text class="label">2h体积读数(cm3)_2</text>
              <input class="input" v-model="form.b1" placeholder="请输入2h体积读数(cm3)_2" />
            </view>
            <view class="form-item">
              <text class="label">4h体积读数(cm3)_2</text>
              <input class="input" v-model="form.b2" placeholder="请输入4h体积读数(cm3)_2" />
            </view>
            <view class="form-item">
              <text class="label">6h体积读数(cm3)_2</text>
              <input class="input" v-model="form.b3" placeholder="请输入6h体积读数(cm3)_2" />
            </view>
            <view class="form-item">
              <text class="label">8h体积读数(cm3)_2</text>
              <input class="input" v-model="form.b4" placeholder="请输入8h体积读数(cm3)_2" />
            </view>
            <view class="form-item">
              <text class="label">10h体积读数(cm3)_2</text>
              <input class="input" v-model="form.b5" placeholder="请输入10h体积读数(cm3)_2" />
            </view>
          </view>
          
          <!-- 隐藏字段（标蓝列）但保留输入框 -->
          <view style="display: none;">
            <input v-model="form.sytj" />
            <input v-model="form.ypmc" />
            <input v-model="form.ypms" />
            <input v-model="form.syrq" />
            <input v-model="form.zyyqsbjbh" />
            <input v-model="form.syyj" />
            <input v-model="form.ltxh" />
            <input v-model="form.tysm" />
            <input v-model="form.ltbrj" />
            <input v-model="form.tybh_1" />
            <input v-model="form.gtzl_g_1" />
            <input v-model="form.ltbh_1" />
            <input v-model="form.tds_2h_1" />
            <input v-model="form.tds_4h_1" />
            <input v-model="form.tds_6h_1" />
            <input v-model="form.tds_8h_1" />
            <input v-model="form.tds_10h_1" />
            <input v-model="form.zypzldz_1" />
            <input v-model="form.gtzl_g_2" />
            <input v-model="form.ltbh_2" />
            <input v-model="form.tds_2h_2" />
            <input v-model="form.tds_4h_2" />
            <input v-model="form.tds_6h_2" />
            <input v-model="form.tds_8h_2" />
            <input v-model="form.tds_10h_2" />

            <input v-model="form.sy" />
            <input v-model="form.jl" />
            <input v-model="form.fh" />
            <input v-model="form.rq" />
            <input v-model="form.position" />
          </view>
        </view>
        
        <!-- 人员信息 -->
        <view class="form-section">
          <view class="section-title">人员信息</view>
          <view class="form-grid">
            <view class="form-item">
              <text class="label">试验</text>
              <input class="input" v-model="form.sy" placeholder="请输入试验人员" />
            </view>
            <view class="form-item">
              <text class="label">记录</text>
              <input class="input" v-model="form.jl" placeholder="请输入记录人员" />
            </view>
            <view class="form-item">
              <text class="label">复核</text>
              <input class="input" v-model="form.fh" placeholder="请输入复核人员" />
            </view>
            <view class="form-item">
              <text class="label">备注</text>
              <input class="input" v-model="form.bz" placeholder="请输入备注信息" />
            </view>
          </view>
        </view>
      </view>
    </scroll-view>

    <view class="form-actions">
      <button class="submit-btn" @click="submitForm">提交</button>
      <button class="cancel-btn" @click="cancel">取消</button>
    </view>
  </view>
</template>

<script>
import { getCt13, addCt13, updateCt13 } from '@/api/ct13/ct13'

export default {
  name: 'Ct13View',
  data() {
    return {
      title: '添加CT13土的自由膨胀率检测记录',
      form: {
        id: null,
        jcdwmc: null,
        jlbh: null,
        gcmc: null,
        htd: null,
        sgdw: null,
        jldw: null,
        gcbwyt: null,
        ypbh: null,
        sytj: null,
        ypmc: null,
        ypms: null,
        syrq: null,
        zyyqsbjbh: null,
        syyj: null,
        ltxh: null,
        tysm: null,
        ltbrj: null,
        tybh: null,
        gtzla: null,
        ltbha: null,
        a1: null,
        a2: null,
        a3: null,
        a4: null,
        a5: null,
        gtzlb: null,
        ltbh: null,
        b1: null,
        b2: null,
        b3: null,
        b4: null,
        b5: null,
        bz: null,
        sy: null,
        jl: null,
        fh: null,
        rq: null,
        position: null,
        userid: null
      }
    }
  },
  methods: {
    /** 提交按钮 */
    submitForm() {
      const form = Object.assign({}, this.form)
      
      // 自动添加采集时间
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      form.time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      
      // 自动添加用户ID
      form.userid = this.$store.state.user.id;
      
      if (this.form.id !== null) {
        updateCt13(form).then(response => {
          this.$modal.msgSuccess('修改成功')
          this.cancel()
        })
      } else {
        addCt13(form).then(response => {
          this.$modal.msgSuccess('新增成功')
          this.cancel()
        })
      }
    },
    /** 取消按钮 */
    cancel() {
      uni.navigateBack()
    },

    /** 获取当前位置 */
    getLocation() {
      uni.getLocation({
        type: 'wgs84',
        success: (res) => {
          this.form.position = `${res.longitude},${res.latitude}`;
          this.$modal.msgSuccess('位置获取成功');
        },
        fail: (err) => {
          this.$modal.msgError('位置获取失败，请手动输入');
          console.error('getLocation fail:', err);
        }
      });
    },
    /** 页面加载时自动获取时间和位置 */
    onLoad(options) {
      if (options.id) {
        this.title = '修改CT13土的自由膨胀率检测记录'
        getCt13(options.id).then(response => {
          this.form = response.data
        })
      } else {
        // 新增时自动获取当前时间和位置
        const date = new Date();
        const year = date.getFullYear(); // 获取完整年份
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        this.form.syrq = `${year}-${month}-${day}`;
        this.form.rq = `${year}-${month}-${day}`;
        
        // 自动获取位置
        uni.getLocation({
          type: 'wgs84',
          success: (res) => {
            this.form.position = `${res.longitude},${res.latitude}`;
          },
          fail: (err) => {
            console.error('getLocation fail:', err);
          }
        });
      }
      
      // 自动设置采集时间（用于提交时的时间戳）
      this.form.time = new Date().toISOString();
      
      // 自动设置用户ID
      this.form.userid = this.$store.state.user.id;
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: #f5f5f5;
    min-height: 100vh;
    padding: 20rpx;
    box-sizing: border-box;
  }
  
  .header {
    background-color: $uni-bg-color;
    padding: 24rpx;
    border-radius: 16rpx;
    margin-bottom: 24rpx;
    box-shadow: $uni-shadow-base;
    transition: all 0.3s ease;
    
    .title {
      font-size: 36rpx;
      font-weight: 600;
      color: $uni-text-color;
      letter-spacing: 0.5rpx;
    }
  }
  
  .form-scroll {
    max-height: 80vh;
  }
  
  .form-container {
  background-color: #fff;
  padding: 48rpx 30rpx;
  border-radius: $uni-border-radius-xl;
  box-shadow: $uni-shadow-base;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4rpx;
    background: linear-gradient(90deg, $uni-color-primary, $uni-color-primary-light);
  }
}
  
  .form-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25rpx;
  transition: all 0.3s ease;
}
  
  /* 优化表单对齐 */
  .form-item .label {
    text-align: left;
  }
  
  .form-item .input, .form-item .picker {
    max-width: 600rpx;
    width: auto;
    margin: 0 0 0 10rpx;
    display: block;
    padding: 20rpx 15rpx;
  }
  
  .form-section {
    margin-bottom: 32rpx;
    padding: 32rpx;
    background-color: $uni-bg-color;
    border-radius: 16rpx;
    box-shadow: $uni-shadow-base;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2rpx);
      box-shadow: $uni-shadow-base;
    }
  }
  
  .section-title {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 20rpx;
    text-align: center;
    position: relative;
    padding-bottom: 10rpx;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60rpx;
    height: 4rpx;
    background-color: $uni-color-primary;
    border-radius: 2rpx;
  }
  
  .label {
  font-size: 28rpx;
  color: $uni-text-color;
  margin-right: 10rpx;
  width: 200rpx;
  text-align: right;
  font-weight: 500;
  word-wrap: break-word;
  word-break: break-all;
  min-height: 36rpx;
  line-height: 36rpx;
}
  
  .input, .picker {
  width: 100%;
  min-height: 80rpx;
  padding: 20rpx 24rpx;
  box-sizing: border-box;
  border: none;
  border-bottom: 2rpx solid #e0e0e0;
  border-radius: 12rpx 12rpx 0 0;
  font-size: 30rpx;
  box-sizing: border-box;
  line-height: 44rpx;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #fff;
  box-shadow: 0 1rpx 3rpx rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;

  &::placeholder {
    color: $uni-text-color-placeholder;
    font-weight: 400;
  }
}

.input:focus, .picker:focus {
  border-bottom-color: $uni-color-primary;
  box-shadow: 0 4rpx 8rpx rgba(100, 181, 246, 0.15);
  outline: none;
  transform: translateY(-2rpx);
}
  
  .picker {
    background-color: #fff;
    border-bottom: 2rpx solid #e0e0e0;
    border-radius: 16rpx 16rpx 0 0;
    box-shadow: 0 1rpx 3rpx rgba(0, 0, 0, 0.05);
    width: 100%;
    margin: 0 auto;
    display: block;
  
    &::placeholder {
      color: $uni-text-color-placeholder;
    }
  }
  
  /* 新增网格布局 */
  .form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(520rpx, 1fr));
  gap: 24rpx;
  width: 100%;
  padding: 20rpx 0;
  justify-content: flex-start;
  box-sizing: border-box;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
  
  /* 平板和桌面端优化 */
  @media (min-width: 768px) {
    .form-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (min-width: 1024px) {
    .form-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 40rpx;
    padding: 24rpx;
    gap: 16rpx;
    background-color: $uni-bg-color;
    border-radius: 16rpx;
    box-shadow: $uni-shadow-base;
    
    .submit-btn, .cancel-btn {
      flex: 1;
      margin: 0 6rpx;
      padding: 12rpx;
      font-size: 24rpx;
      border-radius: 36rpx;
      border: none;
      font-weight: 500;
      transition: all 0.3s ease;
      box-shadow: 0 3rpx 8rpx rgba(0, 0, 0, 0.1);
    }
    
    .submit-btn {
  background-color: $uni-color-primary;
  color: white;
  border: none;
  padding: 0rpx 6rpx;
    border-radius: 14rpx;
    font-size: 28rpx;
  margin-right: 20rpx;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4rpx 12rpx rgba(100, 181, 246, 0.3);
  font-weight: 500;
  letter-spacing: 0.5rpx;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.6s;
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 120rpx; height: 120rpx;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.6s ease-out;
  }

  &:active::after {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
  
  &:hover {
    background-color: $uni-color-primary-dark;
    transform: translateY(-1rpx);
    box-shadow: $uni-shadow-base;
  }
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.1);
  }
}
    
    .cancel-btn {
  background-color: $uni-bg-color;
  color: $uni-text-color;
  border: 2rpx solid $uni-border-color;
  padding: 12rpx 28rpx;
  border-radius: 32rpx;
  font-size: $uni-font-size-base;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: $uni-shadow-sm;
  font-weight: 500;
  letter-spacing: 0.5rpx;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 120rpx; height: 120rpx;
    background: rgba(0,0,0,0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.6s ease-out;
  }

  &:active::after {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
  
  &:hover {
    background-color: #e8e8ea;
    transform: translateY(-1rpx);
    box-shadow: $uni-shadow-base;
  }
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.1);
  }
}
  }
  
  .location-btn {
    margin-top: 10rpx;
    padding: 10rpx;
    font-size: 24rpx;
    background-color: #007aff;
    color: white;
    border: none;
    border-radius: 5rpx;
    transition: all 0.3s ease;
    
    &:active {
      transform: translateY(2rpx);
      box-shadow: 0 1rpx 3rpx rgba(0, 0, 0, 0.1);
    }
  }
  
  /* 添加动画效果 */
  .form-container {
    animation: fadeInUp 0.3s ease forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40rpx);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* 响应式优化 */
  @media (max-width: 767px) {
    .form-actions {
      flex-direction: column;
      
      .submit-btn, .cancel-btn {
        margin: 10rpx 0;
        width: 100%;
      }
    }
  }
</style>