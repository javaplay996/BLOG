
var projectName = '博客系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '热点新闻',
	url: './pages/redianxinwen/list.html'
}, 
{
	name: '博客文章',
	url: './pages/bokewenzhang/list.html'
}, 
{
	name: '视频信息',
	url: './pages/shipinxinxi/list.html'
}, 

{
	name: '系统公告',
	url: './pages/news/list.html'
},
{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/ssm3t2mm/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"热点新闻","menuJump":"列表","tableName":"redianxinwen"}],"menu":"热点新闻管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"博主","menuJump":"列表","tableName":"bozhu"}],"menu":"博主管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"文章分类","menuJump":"列表","tableName":"wenzhangfenlei"}],"menu":"文章分类管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"博客文章","menuJump":"列表","tableName":"bokewenzhang"}],"menu":"博客文章管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"视频分类","menuJump":"列表","tableName":"shipinfenlei"}],"menu":"视频分类管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"视频信息","menuJump":"列表","tableName":"shipinxinxi"}],"menu":"视频信息管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"热点新闻列表","menuJump":"列表","tableName":"redianxinwen"}],"menu":"热点新闻模块"},{"child":[{"buttons":["查看"],"menu":"博客文章列表","menuJump":"列表","tableName":"bokewenzhang"}],"menu":"博客文章模块"},{"child":[{"buttons":["查看"],"menu":"视频信息列表","menuJump":"列表","tableName":"shipinxinxi"}],"menu":"视频信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"博客文章","menuJump":"列表","tableName":"bokewenzhang"}],"menu":"博客文章管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"视频信息","menuJump":"列表","tableName":"shipinxinxi"}],"menu":"视频信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"热点新闻列表","menuJump":"列表","tableName":"redianxinwen"}],"menu":"热点新闻模块"},{"child":[{"buttons":["查看"],"menu":"博客文章列表","menuJump":"列表","tableName":"bokewenzhang"}],"menu":"博客文章模块"},{"child":[{"buttons":["查看"],"menu":"视频信息列表","menuJump":"列表","tableName":"shipinxinxi"}],"menu":"视频信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"博主","tableName":"bozhu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
