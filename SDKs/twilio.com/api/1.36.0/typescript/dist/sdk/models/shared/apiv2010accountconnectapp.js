var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum;
(function (ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum) {
    ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum["Head"] = "HEAD";
    ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum["Get"] = "GET";
    ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum["Post"] = "POST";
    ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum["Patch"] = "PATCH";
    ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum["Put"] = "PUT";
    ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum["Delete"] = "DELETE";
})(ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum || (ApiV2010AccountConnectAppDeauthorizeCallbackMethodEnum = {}));
var ApiV2010AccountConnectApp = /** @class */ (function (_super) {
    __extends(ApiV2010AccountConnectApp, _super);
    function ApiV2010AccountConnectApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConnectApp.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=authorize_redirect_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConnectApp.prototype, "authorizeRedirectUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConnectApp.prototype, "companyName", void 0);
    __decorate([
        Metadata({ data: "json, name=deauthorize_callback_method" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConnectApp.prototype, "deauthorizeCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=deauthorize_callback_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConnectApp.prototype, "deauthorizeCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConnectApp.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConnectApp.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=homepage_url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConnectApp.prototype, "homepageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], ApiV2010AccountConnectApp.prototype, "permissions", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConnectApp.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountConnectApp.prototype, "uri", void 0);
    return ApiV2010AccountConnectApp;
}(SpeakeasyBase));
export { ApiV2010AccountConnectApp };
