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
export var LISTCONNECTAPP_SERVERS = [
    "https://api.twilio.com",
];
var ListConnectAppPathParams = /** @class */ (function (_super) {
    __extends(ListConnectAppPathParams, _super);
    function ListConnectAppPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListConnectAppPathParams.prototype, "accountSid", void 0);
    return ListConnectAppPathParams;
}(SpeakeasyBase));
export { ListConnectAppPathParams };
var ListConnectAppQueryParams = /** @class */ (function (_super) {
    __extends(ListConnectAppQueryParams, _super);
    function ListConnectAppQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListConnectAppQueryParams.prototype, "pageSize", void 0);
    return ListConnectAppQueryParams;
}(SpeakeasyBase));
export { ListConnectAppQueryParams };
var ListConnectAppSecurity = /** @class */ (function (_super) {
    __extends(ListConnectAppSecurity, _super);
    function ListConnectAppSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListConnectAppSecurity.prototype, "accountSidAuthToken", void 0);
    return ListConnectAppSecurity;
}(SpeakeasyBase));
export { ListConnectAppSecurity };
var ListConnectAppRequest = /** @class */ (function (_super) {
    __extends(ListConnectAppRequest, _super);
    function ListConnectAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConnectAppRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectAppPathParams)
    ], ListConnectAppRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectAppQueryParams)
    ], ListConnectAppRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectAppSecurity)
    ], ListConnectAppRequest.prototype, "security", void 0);
    return ListConnectAppRequest;
}(SpeakeasyBase));
export { ListConnectAppRequest };
var ListConnectAppListConnectAppResponse = /** @class */ (function (_super) {
    __extends(ListConnectAppListConnectAppResponse, _super);
    function ListConnectAppListConnectAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=connect_apps", elemType: shared.ApiV2010AccountConnectApp }),
        __metadata("design:type", Array)
    ], ListConnectAppListConnectAppResponse.prototype, "connectApps", void 0);
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListConnectAppListConnectAppResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListConnectAppListConnectAppResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListConnectAppListConnectAppResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListConnectAppListConnectAppResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConnectAppListConnectAppResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListConnectAppListConnectAppResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListConnectAppListConnectAppResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListConnectAppListConnectAppResponse.prototype, "uri", void 0);
    return ListConnectAppListConnectAppResponse;
}(SpeakeasyBase));
export { ListConnectAppListConnectAppResponse };
var ListConnectAppResponse = /** @class */ (function (_super) {
    __extends(ListConnectAppResponse, _super);
    function ListConnectAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListConnectAppResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListConnectAppListConnectAppResponse)
    ], ListConnectAppResponse.prototype, "listConnectAppResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListConnectAppResponse.prototype, "statusCode", void 0);
    return ListConnectAppResponse;
}(SpeakeasyBase));
export { ListConnectAppResponse };
