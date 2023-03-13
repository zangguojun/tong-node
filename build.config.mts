import { defineConfig } from '@ice/pkg';

// https://pkg.ice.work/reference/config-list/
export default defineConfig({
  plugins: [
    [
      '@ice/pkg-plugin-docusaurus',
      {
        sidebarItemsGenerator: async () => {
          return [
            { type: 'doc', id: 'index' },
            {
              type: 'category',  // 收敛到一个目录中
              label: '实例',      // 目录名
              collapsed: false,  // 目录是否折叠
              items: [
                { type: 'doc', id: 'a' },
              ],
            },
          ];
        },
        enable: {
          start: true,
          build: false
        },
        title: '标题'
      },
    ],
  ],
  transform: {
    formats: ['es2017'],
  },
});
