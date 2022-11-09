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
export var LISTFUNCTIONVERSION_SERVERS = [
    "https://serverless.twilio.com",
];
var ListFunctionVersionPathParams = /** @class */ (function (_super) {
    __extends(ListFunctionVersionPathParams, _super);
    function ListFunctionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionSid" }),
        __metadata("design:type", String)
    ], ListFunctionVersionPathParams.prototype, "functionSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListFunctionVersionPathParams.prototype, "serviceSid", void 0);
    return ListFunctionVersionPathParams;
}(SpeakeasyBase));
export { ListFunctionVersionPathParams };
var ListFunctionVersionQueryParams = /** @class */ (function (_super) {
    __extends(ListFunctionVersionQueryParams, _super);
    function ListFunctionVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFunctionVersionQueryParams.prototype, "pageSize", void 0);
    return ListFunctionVersionQueryParams;
}(SpeakeasyBase));
export { ListFunctionVersionQueryParams };
var ListFunctionVersionSecurity = /** @class */ (function (_super) {
    __extends(ListFunctionVersionSecurity, _super);
    function ListFunctionVersionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFunctionVersionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFunctionVersionSecurity;
}(SpeakeasyBase));
export { ListFunctionVersionSecurity };
var ListFunctionVersionRequest = /** @class */ (function (_super) {
    __extends(ListFunctionVersionRequest, _super);
    function ListFunctionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFunctionVersionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionVersionPathParams)
    ], ListFunctionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionVersionQueryParams)
    ], ListFunctionVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionVersionSecurity)
    ], ListFunctionVersionRequest.prototype, "security", void 0);
    return ListFunctionVersionRequest;
}(SpeakeasyBase));
export { ListFunctionVersionRequest };
var ListFunctionVersionListFunctionVersionResponseMeta = /** @class */ (function (_super) {
    __extends(ListFunctionVersionListFunctionVersionResponseMeta, _super);
    function ListFunctionVersionListFunctionVersionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFunctionVersionListFunctionVersionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFunctionVersionListFunctionVersionResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFunctionVersionListFunctionVersionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFunctionVersionListFunctionVersionResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFunctionVersionListFunctionVersionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFunctionVersionListFunctionVersionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFunctionVersionListFunctionVersionResponseMeta.prototype, "url", void 0);
    return ListFunctionVersionListFunctionVersionResponseMeta;
}(SpeakeasyBase));
export { ListFunctionVersionListFunctionVersionResponseMeta };
var ListFunctionVersionListFunctionVersionResponse = /** @class */ (function (_super) {
    __extends(ListFunctionVersionListFunctionVersionResponse, _super);
    function ListFunctionVersionListFunctionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=function_versions", elemType: shared.ServerlessV1ServiceFunctionFunctionVersion }),
        __metadata("design:type", Array)
    ], ListFunctionVersionListFunctionVersionResponse.prototype, "functionVersions", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListFunctionVersionListFunctionVersionResponseMeta)
    ], ListFunctionVersionListFunctionVersionResponse.prototype, "meta", void 0);
    return ListFunctionVersionListFunctionVersionResponse;
}(SpeakeasyBase));
export { ListFunctionVersionListFunctionVersionResponse };
var ListFunctionVersionResponse = /** @class */ (function (_super) {
    __extends(ListFunctionVersionResponse, _super);
    function ListFunctionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFunctionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFunctionVersionListFunctionVersionResponse)
    ], ListFunctionVersionResponse.prototype, "listFunctionVersionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFunctionVersionResponse.prototype, "statusCode", void 0);
    return ListFunctionVersionResponse;
}(SpeakeasyBase));
export { ListFunctionVersionResponse };
