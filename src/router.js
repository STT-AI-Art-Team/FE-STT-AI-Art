import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ClassroomPage from './views/ClassRoom.vue'; // ClassRoom.vue가 ClassroomPage로 가정됩니다

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/classroom',
    name: 'classroom',
    component: ClassroomPage
  }
  // 다른 라우트 설정이 필요할 경우 추가
];

const router = createRouter({
  history: createWebHistory(), // Vue Router 4에서 history 모드 사용
  routes
});

export default router;