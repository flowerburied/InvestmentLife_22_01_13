<template>
  <div class="index_first" v-if="$store.state.userinfo">
    <div class="index_first_info">
      <div class="first_info_box">
        <img class="info_box_img" src="@/assets/game/14.png" />
        <div class="info_box_name">{{ $store.state.userinfo.phone }}</div>
      </div>
      <div class="first_info_info">年龄 {{ $store.state.userinfo.age }}</div>
    </div>
    <div class="index_first_money">
      <div class="first_money_first">
        <img class="money_first_img" src="@/assets/game/04.png" />
        <div class="money_first_box">
          <div class="first_box_text">现金</div>
          <div class="first_box_money">￥{{ $store.state.userinfo.money }}万</div>
        </div>
      </div>

      <div class="first_money_first">
        <img class="money_first_img" src="@/assets/game/05.png" />
        <div class="money_first_box">
          <div class="first_box_text">现金流</div>
          <div class="first_box_money">￥{{ $store.state.userinfo.merge }}万/月</div>
        </div>
      </div>
      <div class="first_money_second">
        <div class="money_second_box">
          <div class="second_box_text">工资</div>
          <div class="second_box_money">
            {{ $store.state.userinfo.wages }}<span class="box_money_time">/月</span>
          </div>
        </div>
        <div class="money_second_box">
          <div class="second_box_text">投资</div>
          <div class="second_box_money">
            {{ $store.state.userinfo.income || 0 }}万<span class="box_money_time"
              >/月</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.index_first {
  z-index: 1001;
  position: fixed;
  top: 0;
  width: 100%;
  height: 110px;
  background: linear-gradient(-90deg, #ff9948, #ffbd2e);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  .index_first_money {
    width: 277px;
    height: 95px;
    background: #f7d775;
    box-shadow: 0px 2px 5px 0px rgba(136, 63, 14, 0.28);
    border-radius: 2px;

    display: flex;
    flex-direction: column;
    align-items: center;
    .first_money_second {
      margin-top: 11px;
      width: 265px;
      height: 23px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .money_second_box {
        width: 130px;
        height: 23px;
        background: #eeb429;
        border-radius: 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .second_box_text {
          margin-left: 3px;
          font-size: 12px;
          line-height: 12px;
          color: #ffffff;
        }
        .second_box_money {
          margin-right: 9px;
          font-size: 12px;
          line-height: 12px;
          color: #ffffff;
          .box_money_time {
            color: #c37948;
          }
        }
      }
    }
    .first_money_first {
      margin-top: 3px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .money_first_img {
        width: 25px;
        height: 25px;
      }
      .money_first_box {
        width: 240px;
        height: 23px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #e0883e;
        border-radius: 2px;
        .first_box_text {
          margin-left: 5px;
          font-size: 12px;
          line-height: 12px;
          font-weight: bold;
          color: #ffffff;
        }
        .first_box_money {
          margin-right: 5px;
          font-weight: bold;
          color: #ffda2c;
          font-size: 14px;
          line-height: 14px;
        }
      }
    }
  }
  .index_first_info {
    width: 75px;
    height: 95px;
    background: #ffa440;
    box-shadow: 0px 2px 5px 0px rgba(229, 104, 4, 0.5);
    border-radius: 2px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .first_info_info {
      color: #ffffff;
      font-size: 12px;
      line-height: 12px;
      margin-top: 5px;
    }
    .first_info_box {
      margin-top: 3px;
      width: 70px;
      height: 70px;
      position: relative;
      .info_box_img {
        position: absolute;
        top: 0;
        left: 0;
        width: 70px;
        height: 70px;
      }
      .info_box_name {
        position: absolute;
        bottom: 0;
        width: 70px;
        height: 17px;
        opacity: 0.4;
        border-radius: 0px 0px 2px 2px;
        background: #333333;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        line-height: 10px;
        color: #ffffff;
      }
    }
  }
}
</style>
