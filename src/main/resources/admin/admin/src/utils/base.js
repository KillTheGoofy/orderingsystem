const base = {
    get() {
                return {
            url : "http://localhost:8080/orderingsystem/",
            name: "orderingsystem",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/orderingsystem/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "餐厅点餐系统"
        } 
    }
}
export default base