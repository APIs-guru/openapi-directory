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
import * as shared from "../shared";
export var LISTAUTHORIZEDCONNECTAPP_SERVERS = [
    "https://api.twilio.com",
];
var ListAuthorizedConnectAppPathParams = /** @class */ (function (_super) {
    __extends(ListAuthorizedConnectAppPathParams, _super);
    function ListAuthorizedConnectAppPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListAuthorizedConnectAppPathParams.prototype, "accountSid", void 0);
    return ListAuthorizedConnectAppPathParams;
}(SpeakeasyBase));
export { ListAuthorizedConnectAppPathParams };
var ListAuthorizedConnectAppQueryParams = /** @class */ (function (_super) {
    __extends(ListAuthorizedConnectAppQueryParams, _super);
    function ListAuthorizedConnectAppQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAuthorizedConnectAppQueryParams.prototype, "pageSize", void 0);
    return ListAuthorizedConnectAppQueryParams;
}(SpeakeasyBase));
export { ListAuthorizedConnectAppQueryParams };
var ListAuthorizedConnectAppSecurity = /** @class */ (function (_super) {
    __extends(ListAuthorizedConnectAppSecurity, _super);
    function ListAuthorizedConnectAppSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAuthorizedConnectAppSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAuthorizedConnectAppSecurity;
}(SpeakeasyBase));
export { ListAuthorizedConnectAppSecurity };
var ListAuthorizedConnectAppRequest = /** @class */ (function (_super) {
    __extends(ListAuthorizedConnectAppRequest, _super);
    function ListAuthorizedConnectAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAuthorizedConnectAppRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAuthorizedConnectAppPathParams)
    ], ListAuthorizedConnectAppRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAuthorizedConnectAppQueryParams)
    ], ListAuthorizedConnectAppRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAuthorizedConnectAppSecurity)
    ], ListAuthorizedConnectAppRequest.prototype, "security", void 0);
    return ListAuthorizedConnectAppRequest;
}(SpeakeasyBase));
export { ListAuthorizedConnectAppRequest };
var ListAuthorizedConnectAppListAuthorizedConnectAppResponse = /** @class */ (function (_super) {
    __extends(ListAuthorizedConnectAppListAuthorizedConnectAppResponse, _super);
    function ListAuthorizedConnectAppListAuthorizedConnectAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=authorized_connect_apps", elemType: shared.ApiV2010AccountAuthorizedConnectApp }),
        __metadata("design:type", Array)
    ], ListAuthorizedConnectAppListAuthorizedConnectAppResponse.prototype, "authorizedConnectApps", void 0);
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAuthorizedConnectAppListAuthorizedConnectAppResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAuthorizedConnectAppListAuthorizedConnectAppResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAuthorizedConnectAppListAuthorizedConnectAppResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAuthorizedConnectAppListAuthorizedConnectAppResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAuthorizedConnectAppListAuthorizedConnectAppResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAuthorizedConnectAppListAuthorizedConnectAppResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAuthorizedConnectAppListAuthorizedConnectAppResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAuthorizedConnectAppListAuthorizedConnectAppResponse.prototype, "uri", void 0);
    return ListAuthorizedConnectAppListAuthorizedConnectAppResponse;
}(SpeakeasyBase));
export { ListAuthorizedConnectAppListAuthorizedConnectAppResponse };
var ListAuthorizedConnectAppResponse = /** @class */ (function (_super) {
    __extends(ListAuthorizedConnectAppResponse, _super);
    function ListAuthorizedConnectAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAuthorizedConnectAppResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAuthorizedConnectAppListAuthorizedConnectAppResponse)
    ], ListAuthorizedConnectAppResponse.prototype, "listAuthorizedConnectAppResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAuthorizedConnectAppResponse.prototype, "statusCode", void 0);
    return ListAuthorizedConnectAppResponse;
}(SpeakeasyBase));
export { ListAuthorizedConnectAppResponse };
