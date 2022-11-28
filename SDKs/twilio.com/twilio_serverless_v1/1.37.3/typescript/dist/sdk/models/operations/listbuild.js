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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var ListBuildServerList = [
    "https://serverless.twilio.com",
];
var ListBuildPathParams = /** @class */ (function (_super) {
    __extends(ListBuildPathParams, _super);
    function ListBuildPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListBuildPathParams.prototype, "serviceSid", void 0);
    return ListBuildPathParams;
}(SpeakeasyBase));
export { ListBuildPathParams };
var ListBuildQueryParams = /** @class */ (function (_super) {
    __extends(ListBuildQueryParams, _super);
    function ListBuildQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListBuildQueryParams.prototype, "pageSize", void 0);
    return ListBuildQueryParams;
}(SpeakeasyBase));
export { ListBuildQueryParams };
var ListBuildSecurity = /** @class */ (function (_super) {
    __extends(ListBuildSecurity, _super);
    function ListBuildSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListBuildSecurity.prototype, "accountSidAuthToken", void 0);
    return ListBuildSecurity;
}(SpeakeasyBase));
export { ListBuildSecurity };
var ListBuildListBuildResponseMeta = /** @class */ (function (_super) {
    __extends(ListBuildListBuildResponseMeta, _super);
    function ListBuildListBuildResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListBuildListBuildResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListBuildListBuildResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListBuildListBuildResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBuildListBuildResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBuildListBuildResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListBuildListBuildResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListBuildListBuildResponseMeta.prototype, "url", void 0);
    return ListBuildListBuildResponseMeta;
}(SpeakeasyBase));
export { ListBuildListBuildResponseMeta };
var ListBuildListBuildResponse = /** @class */ (function (_super) {
    __extends(ListBuildListBuildResponse, _super);
    function ListBuildListBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builds", elemType: shared.ServerlessV1ServiceBuild }),
        __metadata("design:type", Array)
    ], ListBuildListBuildResponse.prototype, "builds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListBuildListBuildResponseMeta)
    ], ListBuildListBuildResponse.prototype, "meta", void 0);
    return ListBuildListBuildResponse;
}(SpeakeasyBase));
export { ListBuildListBuildResponse };
var ListBuildRequest = /** @class */ (function (_super) {
    __extends(ListBuildRequest, _super);
    function ListBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBuildRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuildPathParams)
    ], ListBuildRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuildQueryParams)
    ], ListBuildRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuildSecurity)
    ], ListBuildRequest.prototype, "security", void 0);
    return ListBuildRequest;
}(SpeakeasyBase));
export { ListBuildRequest };
var ListBuildResponse = /** @class */ (function (_super) {
    __extends(ListBuildResponse, _super);
    function ListBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBuildResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBuildListBuildResponse)
    ], ListBuildResponse.prototype, "listBuildResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBuildResponse.prototype, "statusCode", void 0);
    return ListBuildResponse;
}(SpeakeasyBase));
export { ListBuildResponse };
