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
export var ListBundleCopyServerList = [
    "https://numbers.twilio.com",
];
var ListBundleCopyPathParams = /** @class */ (function (_super) {
    __extends(ListBundleCopyPathParams, _super);
    function ListBundleCopyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" }),
        __metadata("design:type", String)
    ], ListBundleCopyPathParams.prototype, "bundleSid", void 0);
    return ListBundleCopyPathParams;
}(SpeakeasyBase));
export { ListBundleCopyPathParams };
var ListBundleCopyQueryParams = /** @class */ (function (_super) {
    __extends(ListBundleCopyQueryParams, _super);
    function ListBundleCopyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListBundleCopyQueryParams.prototype, "pageSize", void 0);
    return ListBundleCopyQueryParams;
}(SpeakeasyBase));
export { ListBundleCopyQueryParams };
var ListBundleCopySecurity = /** @class */ (function (_super) {
    __extends(ListBundleCopySecurity, _super);
    function ListBundleCopySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListBundleCopySecurity.prototype, "accountSidAuthToken", void 0);
    return ListBundleCopySecurity;
}(SpeakeasyBase));
export { ListBundleCopySecurity };
var ListBundleCopyListBundleCopyResponseMeta = /** @class */ (function (_super) {
    __extends(ListBundleCopyListBundleCopyResponseMeta, _super);
    function ListBundleCopyListBundleCopyResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListBundleCopyListBundleCopyResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListBundleCopyListBundleCopyResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListBundleCopyListBundleCopyResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBundleCopyListBundleCopyResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBundleCopyListBundleCopyResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListBundleCopyListBundleCopyResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListBundleCopyListBundleCopyResponseMeta.prototype, "url", void 0);
    return ListBundleCopyListBundleCopyResponseMeta;
}(SpeakeasyBase));
export { ListBundleCopyListBundleCopyResponseMeta };
var ListBundleCopyListBundleCopyResponse = /** @class */ (function (_super) {
    __extends(ListBundleCopyListBundleCopyResponse, _super);
    function ListBundleCopyListBundleCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListBundleCopyListBundleCopyResponseMeta)
    ], ListBundleCopyListBundleCopyResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundleBundleCopy }),
        __metadata("design:type", Array)
    ], ListBundleCopyListBundleCopyResponse.prototype, "results", void 0);
    return ListBundleCopyListBundleCopyResponse;
}(SpeakeasyBase));
export { ListBundleCopyListBundleCopyResponse };
var ListBundleCopyRequest = /** @class */ (function (_super) {
    __extends(ListBundleCopyRequest, _super);
    function ListBundleCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBundleCopyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBundleCopyPathParams)
    ], ListBundleCopyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBundleCopyQueryParams)
    ], ListBundleCopyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBundleCopySecurity)
    ], ListBundleCopyRequest.prototype, "security", void 0);
    return ListBundleCopyRequest;
}(SpeakeasyBase));
export { ListBundleCopyRequest };
var ListBundleCopyResponse = /** @class */ (function (_super) {
    __extends(ListBundleCopyResponse, _super);
    function ListBundleCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBundleCopyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBundleCopyListBundleCopyResponse)
    ], ListBundleCopyResponse.prototype, "listBundleCopyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBundleCopyResponse.prototype, "statusCode", void 0);
    return ListBundleCopyResponse;
}(SpeakeasyBase));
export { ListBundleCopyResponse };
