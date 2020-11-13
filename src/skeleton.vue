<template>
    <div class="skeleton">
        <div class="skeleton_header">
            <div class="skeleton_swiper">
                <div class="skeleton_img_box">
                    努力加载中.....
                </div>
            </div>
        </div>
        <div class="skeleton_content">
            <div class="box animate">
                <span>
                    <span />
                </span>
            </div>
        </div>
        <div class="skeleton_text">
            系统正在加载中...
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.skeleton {
  width: 100%;
  height: 100vh;
  background: rgba(247, 247, 247, 0.863);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .skeleton_text {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 24px;
    color: #000;
  }
  .skeleton_header {
    width: 100%;
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .skeleton_swiper {
    width: 800px;
    height: 440px;
    position: relative;
    overflow: hidden;
  }
  .skeleton_img_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 400%; /* 横向排列 5张图片 宽度应为主容器5倍 */
    height: 100%;
    font-size: 0;
    transform: translate(0, 0); /* 初始位置位移 */
    animation: loop 20s linear infinite;
  }

  .text {
    float: left;
    width: 800px;
    height: 400px;
  }

  @keyframes loop {
    0% {
      transform: translate(0, 0);
    }
    15% {
      transform: translate(0, 0);
    } /* 停留1500ms */

    20% {
      transform: translate(-25%, 0);
    } /* 切换500ms 位移-25% */
    35% {
      transform: translate(-25%, 0);
    }

    40% {
      transform: translate(-50%, 0);
    }
    55% {
      transform: translate(-50%, 0);
    }

    60% {
      transform: translate(-75%, 0);
    }
    75% {
      transform: translate(-75%, 0);
    }

    80% {
      transform: translate(0, 0);
    }
    95% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(0, 0);
    } /* 复位到第一张图片 */
  }
  .box {
    height: 20px;
    position: relative;
    background: rgba(236, 243, 255, 1);
    box-shadow: 0px 0px 13px 0px rgba(0, 58, 144, 0.23);
    -webkit-border-radius: 15px;
    padding: 6px;
    -webkit-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
    width: 800px;
  }
  .box > span {
    display: block;
    height: 100%;
    -webkit-border-top-right-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    -webkit-border-top-left-radius: 15px;
    -webkit-border-bottom-left-radius: 15px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, #7cb0ff),
      color-stop(1, #307ef3)
    );
    -webkit-box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
      inset 0 -2px 6px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
  }
  .animate > span > span {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: -webkit-gradient(
      linear,
      0 0,
      100% 100%,
      color-stop(0.25, rgba(255, 255, 255, 0.2)),
      color-stop(0.25, transparent),
      color-stop(0.5, transparent),
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.75, rgba(255, 255, 255, 0.2)),
      color-stop(0.75, transparent),
      to(transparent)
    );
    z-index: 2;
    -webkit-border-top-right-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    -webkit-border-top-left-radius: 20px;
    -webkit-border-bottom-left-radius: 20px;
    overflow: hidden;
  }

  .animate > span span {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: -webkit-gradient(
      linear,
      0 0,
      100% 100%,
      color-stop(0.25, rgba(255, 255, 255, 0.2)),
      color-stop(0.25, transparent),
      color-stop(0.5, transparent),
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.75, rgba(255, 255, 255, 0.2)),
      color-stop(0.75, transparent),
      to(transparent)
    );
    z-index: 2;
    -webkit-background-size: 40px;
    -webkit-animation: move 2s linear infinite;
    -webkit-border-top-right-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    -webkit-border-top-left-radius: 20px;
    -webkit-border-bottom-left-radius: 20px;
    overflow: hidden;
  }
  @-webkit-keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }

  .skeleton_content {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #skleton_content_top {
    width: 800px;
    height: 20px;
    background: rgba(236, 243, 255, 1);
    box-shadow: 0px 0px 13px 0px rgba(0, 58, 144, 0.23);
    border-radius: 10px;
    position: relative;
  }
  #fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    background: linear-gradient(
      90deg,
      rgba(48, 126, 243, 1),
      rgba(124, 176, 255, 1)
    );
    border-radius: 10px;
  }
  #skleton_content_top {
    width: 300px;
    border: 1px #669cb8 solid;
    -webkit-box-shadow: 0px 2px 2px #d0d4d6;
    height: 15px;
    -webkit-border-radius: 10px;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#e1e9ee), to(white));
    padding: 1px;
  }

  #fill {
    background: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      from(#7bc3ff),
      color-stop(0.5, #42a9ff),
      to(#7bc3ff)
    );
    width: 0%;
    height: 100%;
    -webkit-border-radius: 10px;
  }
  #fill {
    background: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      from(#7bc3ff),
      color-stop(0.5, #42a9ff),
      to(#7bc3ff)
    );
    width: 0%;
    height: 100%;
    -webkit-border-radius: 10px;
    -webkit-transition: width 1s ease-in-out;
  }
}
</style>