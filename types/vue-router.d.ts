import { RouteConfig } from 'vue-router';

declare module "vue-router/types/router" {
  interface RouteConfig {
    title?: string;
  }
}