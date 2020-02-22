export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001493040/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001493040/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001493040/lessons"
export const TOPICS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001493040/topics"
export const WIDGETS_API_URL = "https://wbdv-sp20-xi-zheng-app-service.herokuapp.com"
export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/001493040/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/001493040/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `https://wbdv-generic-server.herokuapp.com/api/001493040/lessons/${lessonId}/topics`
