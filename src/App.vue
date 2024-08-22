<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <img src="./assets/logo.png" alt="Logo">
        <span>our title</span>
      </div>
      <nav class="nav">
        <a href="#">MAIN</a>
        <a href="#">교실 연결하기</a>
      </nav>
      <div class="user-actions">
        <button class="bell"></button>
        <button class="user"></button>
        <button class="add">추가하기 +</button>
      </div>
    </header>

    <main class="main-content">
      <div class="mic-icon">
        <img src="./assets/mic-icon.png" alt="Microphone">
      </div>
      <p>교실의 코드를 입력하세요.</p>
      <p>담당 선생님께서 띄워주는 숫자를 작성해주세요!</p>
      <div class="code-box">261 630 8288</div>

      <button class="connect-button">연결하기</button>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* 기본 스타일 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 30px;
  height: 30px;
}

.logo span {
  font-size: 24px;
  margin-left: 10px;
  color: #51903B;
}

.nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
}

.user-actions {
  display: flex;
  align-items: center;
}

.user-actions .bell, .user-actions .user, .user-actions .add {
  background-color: transparent;
  border: none;
  margin-left: 10px;
  cursor: pointer;
}

.user-actions .add {
  background-color: #51903B;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}

/* 메인 콘텐츠 스타일 */
.main-content {
  margin: 20px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px; /* 기본 최대 너비 설정 */
  padding: 0 20px; /* 좌우 패딩 추가 */
}

.mic-icon {
  margin-top: 30px; /* 아이콘 위에 여백 추가 */
}

.mic-icon img {
  width: 60px;
  height: 60px;
}

.code-box {
  font-size: 32px;
  margin: 20px 0;
  padding: 10px 20px;
  border: 1px solid #51903B;
  border-radius: 8px;
  color: #51903B;
}

.connect-button {
  background-color: #51903B;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

/* 반응형 디자인 설정 */
@media (max-width: 600px) {
  .main-content {
    max-width: 100%;
    padding: 0 10px; /* 작은 화면에서 패딩 조정 */
  }

  .code-box {
    font-size: 24px; /* 작은 화면에서 폰트 크기 조정 */
    padding: 8px 15px; /* 작은 화면에서 패딩 조정 */
  }

  .connect-button {
    padding: 8px 15px; /* 작은 화면에서 패딩 조정 */
    font-size: 16px; /* 작은 화면에서 폰트 크기 조정 */
  }
}
</style>