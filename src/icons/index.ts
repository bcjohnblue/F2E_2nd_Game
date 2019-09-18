import Vue from 'vue';
// import SvgIcon from '@/components/UI/SvgIcon.vue'; // svg组件

// register globally
// Vue.component('SvgIcon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext);

requireAll(req);
