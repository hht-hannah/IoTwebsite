import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
import Home from '../views/Home.vue'
import IoTHubDashboard from '../views/IoTHub/IoTHubDashboard.vue'
import AKSDashboard from '../views/AKS/AKSDashboard.vue'
import IoTHub from '../views/IoTHub/IoTHub.vue'
import IoTDeviceDashboard from '../views/IoTHub/IoTDeviceDashboard.vue'
import IoTDevice from '../views/IoTHub/IoTDevice.vue'
import IoTEdgeDashboard from '../views/IoTHub/IoTEdgeDashboard.vue'
import IoTEdge from '../views/IoTHub/IoTEdge.vue'
import ResourceGroup from '../views/ResourceGroup/ResourceGroup.vue'
import PackageInstall from '../views/PackageInstall/PackageInstall.vue'
import DigitalTwin from '../views/IoTHub/DigitalTwin.vue'

Vue.use(Router)

const router = new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {requireAuth: true},
		children: [
			{
				path: '/personalInformation',
				name: 'personalInformation',
				component(resolve) {
					require.ensure(['@/views/personalInformation.vue'], () => {
						resolve(require('@/views/personalInformation.vue'));
					});
				},
				// 设置 mata 字段，表示该字段需要验证
				meta: {requireAuth: true}
			},
			{
				path: '/ResourceGroup',
				name: 'ResourceGroup',
				component: ResourceGroup,
				meta: {requireAuth: true}
			},
			{
				path: '/IoTHubDashboard',
				name: 'IoTHubDashboard',
				component: IoTHubDashboard,
				meta: {requireAuth: true}
			},
			{
				path: '/IoTHub/:name',
				name: 'IoTHub',
				component: IoTHub,
				meta: {requireAuth: true}
			},
			{
				path: '/IoTHub/:name/IoTDeviceDashboard',
				name: 'IoTDeviceDashboard',
				component: IoTDeviceDashboard,
				meta: {requireAuth: true}
			},
			{
				path: '/IoTHub/:name/IoTDevice/:deviceID',
				name: 'IoTDevice',
				component: IoTDevice,
				meta: {requireAuth: true}
			},
			{
				path: '/IoTHub/:name/IoTDevice/:deviceID/DigitalTwin',
				name: 'DigitalTwin',
				component: DigitalTwin,
				meta: {requireAuth: true}
			},
			{
				path: '/IoTHub/:name/IoTEdge/:deviceID/DigitalTwin',
				name: 'DigitalTwin',
				component: DigitalTwin,
				meta: {requireAuth: true}
			},
			{
				path: '/IoTHub/:name/IoTEdgeDashboard',
				name: 'IoTEdgeDashboard',
				component: IoTEdgeDashboard,
				meta: {requireAuth: true}
			},
			{
				path: '/IoTHub/:name/IoTEdge/:deviceID',
				name: 'IoTEdge',
				component: IoTEdge,
				meta: {requireAuth: true}
			},
			{
				path: '/AKSDashboard',
				name: 'AKSDashboard',
				component: AKSDashboard,
				meta: {requireAuth: true}
			},
			{
				path: '/PackageInstall',
				name: 'PackageInstall',
				component: PackageInstall,
				meta: {requireAuth: true}
			},
		]
	},
	{
		path: '/login',
		name: 'login',
		component(resolve) {
			require.ensure(['@/components/Login.vue'], () => {
				resolve(require('@/components/Login.vue'));
			});
		}
	},
	{
		path: '/register',
		name: 'register',
		component(resolve) {
			require.ensure(['@/components/Register.vue'], () => {
				resolve(require('@/components/Register.vue'));
			});
		}
	},
	// 简单设置404页面
	{
		path: '*',
		component(resolve) {
			require.ensure(['@/components/404.vue'], () => {
				resolve(require('@/components/404.vue'));
			});
		},
		hidden: true
	}]
})

// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('token')
	if (to.meta.requireAuth) {
		if (token) {
			next()
		} else {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		}
	} else {
		next()
	}
})

export default router
