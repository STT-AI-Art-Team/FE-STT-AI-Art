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
      <p>담당 선생님께서 뒷쪽두는 숫자를 작성해주세요!</p>
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
  color: #4caf50;
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
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}

.main-content {
  margin-top: 100px;
  text-align: center;
}

.mic-icon img {
  width: 60px;
  height: 60px;
}

.code-box {
  font-size: 32px;
  margin: 20px 0;
  padding: 10px 20px;
  border: 1px solid #4caf50;
  border-radius: 8px;
  display: inline-block;
  color: #4caf50;
}

.connect-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>