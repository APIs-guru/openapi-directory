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
export var LISTAPP_SERVERS = [
    "https://microvisor.twilio.com",
];
var ListAppQueryParams = /** @class */ (function (_super) {
    __extends(ListAppQueryParams, _super);
    function ListAppQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAppQueryParams.prototype, "pageSize", void 0);
    return ListAppQueryParams;
}(SpeakeasyBase));
export { ListAppQueryParams };
var ListAppSecurity = /** @class */ (function (_super) {
    __extends(ListAppSecurity, _super);
    function ListAppSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAppSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAppSecurity;
}(SpeakeasyBase));
export { ListAppSecurity };
var ListAppRequest = /** @class */ (function (_super) {
    __extends(ListAppRequest, _super);
    function ListAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAppRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAppQueryParams)
    ], ListAppRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAppSecurity)
    ], ListAppRequest.prototype, "security", void 0);
    return ListAppRequest;
}(SpeakeasyBase));
export { ListAppRequest };
var ListAppListAppResponseMeta = /** @class */ (function (_super) {
    __extends(ListAppListAppResponseMeta, _super);
    function ListAppListAppResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListAppListAppResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListAppListAppResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListAppListAppResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAppListAppResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAppListAppResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListAppListAppResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListAppListAppResponseMeta.prototype, "url", void 0);
    return ListAppListAppResponseMeta;
}(SpeakeasyBase));
export { ListAppListAppResponseMeta };
var ListAppListAppResponse = /** @class */ (function (_super) {
    __extends(ListAppListAppResponse, _super);
    function ListAppListAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=apps", elemType: shared.MicrovisorV1App }),
        __metadata("design:type", Array)
    ], ListAppListAppResponse.prototype, "apps", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListAppListAppResponseMeta)
    ], ListAppListAppResponse.prototype, "meta", void 0);
    return ListAppListAppResponse;
}(SpeakeasyBase));
export { ListAppListAppResponse };
var ListAppResponse = /** @class */ (function (_super) {
    __extends(ListAppResponse, _super);
    function ListAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAppResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAppListAppResponse)
    ], ListAppResponse.prototype, "listAppResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAppResponse.prototype, "statusCode", void 0);
    return ListAppResponse;
}(SpeakeasyBase));
export { ListAppResponse };
