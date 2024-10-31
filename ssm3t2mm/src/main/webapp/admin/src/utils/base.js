const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm3t2mm/",
            name: "ssm3t2mm",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm3t2mm/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "博客系统"
        } 
    }
}
export default base
