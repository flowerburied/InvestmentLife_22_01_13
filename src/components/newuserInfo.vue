<template>
  <div class="index_newinfo" v-if="$store.state.userinfo">
    <img class="index_newinfo_bgimg" src="@/assets/game/33.png" />
    <img class="index_newinfo_bgimg1" src="@/assets/game/35.png" />
    <img class="index_newinfo_bgimg2" src="@/assets/game/36.png" />
    <div class="index_newinfo_box">
      <div class="newinfo_box_money">
        <div class="box_money_box box_left">
          <img class="money_box_img" src="@/assets/game/34.png" />
          <div class="money_box_text">现金:{{ $store.state.userinfo.money }}万</div>
        </div>

        <div class="box_money_box box_right">
          <img class="money_box_img" src="@/assets/game/34.png" />
          <div class="money_box_text">现金流:{{ $store.state.userinfo.merge }}万/月</div>
        </div>
      </div>

      <div class="newinfo_box_userinfo">
        <div class="box_userinfo_add">
          <img class="box_userinfo_img" src="@/assets/game/14.png" />

          <div class="box_userinfo_info">
            <div class="userinfo_info_text">姓名：{{ $store.state.userinfo.phone }}</div>
            <div class="userinfo_info_text">年龄：{{ $store.state.userinfo.age }}</div>
          </div>
        </div>

        <div class="box_userinfo_money">
          <div class="userinfo_money_box">
            <div>工资</div>
            <div class="money_box_bor">{{ $store.state.userinfo.wages }}/月</div>
          </div>
          <div class="userinfo_money_box">
            <div>投资</div>
            <div class="money_box_bor">{{ $store.state.userinfo.income || 0 }}万/月</div>
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
.index_newinfo {
  z-index: 1004;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 257px;
  //   background: linear-gradient(-90deg, #ff9948, #ffbd2e);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  .index_newinfo_bgimg {
    position: absolute;
    width: 100%;
    height: 257px;
  }

  .index_newinfo_bgimg1 {
    position: absolute;
    top: 19px;
    left: 12px;
    width: 101px;
    height: 104px;
  }
  .index_newinfo_bgimg2 {
    position: absolute;
    top: 48px;
    right: 42px;
    width: 43px;
    height: 43px;
  }

  .index_newinfo_box {
    position: absolute;
    width: 100%;
    height: 257px;
    // background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    .newinfo_box_userinfo {
      margin-top: 45px;
      width: 100%;
      height: 58px;
      //   background: #57b6fc;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .box_userinfo_img {
        margin-left: 20px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
      .box_userinfo_info {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        .userinfo_info_text {
            display: flex;
          font-size: 14px;
          line-height: 14px;
          padding: 4px 0;
          color: #b16337;
          font-weight: 500;
        }
      }
      .box_userinfo_money {
        // margin-left: 100px;
        margin-right: 32px;
        display: flex;
        flex-direction: column;
        .userinfo_money_box {
          padding: 9px 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 14px;
          line-height: 14px;

          color: #b16337;
          .money_box_bor {
            border-radius: 5px;
            margin-left: 4px;
            background: #F6B149;
            box-shadow: 0px 3px 6px 0px #e8963b;
            width: 95px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            line-height: 12px;
            color: #ffffff;
          }
        }
      }
      .box_userinfo_add {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
    .newinfo_box_money {
      margin-top: 85px;
      width: 100%;
      height: 32px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .box_left {
        margin-left: 17px;
      }
      .box_right {
        margin-right: 17px;
      }
      .box_money_box {
        // margin-top: 160px;
        width: 90px;
        height: 32px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .money_box_img {
          width: 90px;
          height: 32px;
        }
        .money_box_text {
          position: absolute;
          font-size: 9px;
          line-height: 9px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
