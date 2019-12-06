let httpreq = {
    jizi: require("./jizi"),
    invoice: require("./invoice"),
    bestPlayer: require("./bestPlayer"),
    poster: require("./poster"),
    teacherResume: require("./teacherResume"),
    receiveRewrad: require("./receiveRewrad"),
    superClass: require("./superClass"),
    tellRecord: require("./tellRecord"),
    operateSuperClass: require("./operateSuperclass"),
    yunying: require("./yunying"),
    newyunying: require("./newyunying")
}
module.exports = app =>{
    for (var k in httpreq) {
        console.log(k);
        app.use(httpreq[k])
    }
}

