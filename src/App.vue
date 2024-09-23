<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <img src="./assets/mic-icon.png" alt="Logo">
        <span>Drory</span>
      </div>
      <nav class="nav">
        <router-link to="/">MAIN</router-link>

      </nav>
      <div class="user-actions">
        <button class="bell"></button>
        <button class="user"></button>
        <button class="add">추가하기 +</button>
      </div>
    </header>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      classCode: '' // 입력된 코드를 저장하는 데이터
    }
  },
  computed: {
    showOnThisPage() {
      // 홈 페이지에 있을 때만 요소를 표시
      return this.$route.path === '/';
    }
  },
  methods: {
    connectToClass() {
      const correctCode = '123456789'; // 올바른 코드
      if (this.classCode === correctCode) {
        // 올바른 코드가 입력되면 /classroom 페이지로 이동
        this.$router.push({ name: 'classroom' });
      } else {
        alert('잘못된 코드입니다. 다시 입력해주세요.');
      }
    },
    goHome() {
      this.$router.push({ path: '/' });
    }
  }
}
</script>
<style scoped>
/* 기존 스타일 유지 */
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
  cursor: pointer;
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
  max-width: 800px;
  padding: 0 20px;
}

.mic-icon {
  margin-top: 30px;
}

.mic-icon img {
  width: 60px;
  height: 60px;
}

.code-input {
  font-size: 32px;
  margin: 20px 0;
  padding: 10px 20px;
  border: 1px solid #51903B;
  border-radius: 8px;
  color: #51903B;
  width: 300px;
  text-align: center;
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
    padding: 0 10px;
  }

  .code-input {
    font-size: 24px;
    padding: 8px 15px;
    width: 100%;
  }

  .connect-button {
    padding: 8px 15px;
    font-size: 16px;
  }
}
</style>