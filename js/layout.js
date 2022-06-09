var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/trangchu", {
            templateUrl: "trangchu.html"
        })
        .when("/about", {
            templateUrl: "about.html"
        })
        .when("/tintuc", {
            templateUrl: "tintuc.html"
        })
        .when("/tainguyen", {
            templateUrl: "tainguyen.html"
        })
        .when("/cks", {
            templateUrl: "cks.html"
        })
        .when("/hddt", {
            templateUrl: "hddt.html"
        })
        .when("/bhxh", {
            templateUrl: "bhxh.html"
        })
        .when("/dvketoan", {
            templateUrl: "pmketoan.html"
        })
        .when("/kkt", {
            templateUrl: "kkt.html"
        })
        .when("/tlcty", {
            templateUrl: "tlcty.html"
        })
        .when("/bctc", {
            templateUrl: "bctc.html"
        })
        .when("/hsvay", {
            templateUrl: "hsvay.html"
        })
        .when("/hsthau", {
            templateUrl: "hsthau.html"
        })
        .when("/tintuc/chu-ki-so-la-gi?", {
            templateUrl: "tt_cks.html"
        })
        .when("/tintuc/quy-trinh-thanh-lap-cong-ty",{
            templateUrl:"tt_tlcty.html"
        })
        .when("/tintuc/hoa-don-dien-tu-la-gi",{
            templateUrl:"tt_hddt.html"
        })
        .when("/tintuc/tai-sao-nen-cai-dat-phan-mem-bhxh-qua-mang",{
            templateUrl:"tt_pmbhxh.html"
        })
        
        .otherwise({
            redirectTo: "/trangchu"
        });
});
