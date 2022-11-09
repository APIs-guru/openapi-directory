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
export var LISTASSET_SERVERS = [
    "https://serverless.twilio.com",
];
var ListAssetPathParams = /** @class */ (function (_super) {
    __extends(ListAssetPathParams, _super);
    function ListAssetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListAssetPathParams.prototype, "serviceSid", void 0);
    return ListAssetPathParams;
}(SpeakeasyBase));
export { ListAssetPathParams };
var ListAssetQueryParams = /** @class */ (function (_super) {
    __extends(ListAssetQueryParams, _super);
    function ListAssetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAssetQueryParams.prototype, "pageSize", void 0);
    return ListAssetQueryParams;
}(SpeakeasyBase));
export { ListAssetQueryParams };
var ListAssetSecurity = /** @class */ (function (_super) {
    __extends(ListAssetSecurity, _super);
    function ListAssetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAssetSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAssetSecurity;
}(SpeakeasyBase));
export { ListAssetSecurity };
var ListAssetRequest = /** @class */ (function (_super) {
    __extends(ListAssetRequest, _super);
    function ListAssetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAssetRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssetPathParams)
    ], ListAssetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssetQueryParams)
    ], ListAssetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssetSecurity)
    ], ListAssetRequest.prototype, "security", void 0);
    return ListAssetRequest;
}(SpeakeasyBase));
export { ListAssetRequest };
var ListAssetListAssetResponseMeta = /** @class */ (function (_super) {
    __extends(ListAssetListAssetResponseMeta, _super);
    function ListAssetListAssetResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListAssetListAssetResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListAssetListAssetResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListAssetListAssetResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAssetListAssetResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAssetListAssetResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListAssetListAssetResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListAssetListAssetResponseMeta.prototype, "url", void 0);
    return ListAssetListAssetResponseMeta;
}(SpeakeasyBase));
export { ListAssetListAssetResponseMeta };
var ListAssetListAssetResponse = /** @class */ (function (_super) {
    __extends(ListAssetListAssetResponse, _super);
    function ListAssetListAssetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=assets", elemType: shared.ServerlessV1ServiceAsset }),
        __metadata("design:type", Array)
    ], ListAssetListAssetResponse.prototype, "assets", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListAssetListAssetResponseMeta)
    ], ListAssetListAssetResponse.prototype, "meta", void 0);
    return ListAssetListAssetResponse;
}(SpeakeasyBase));
export { ListAssetListAssetResponse };
var ListAssetResponse = /** @class */ (function (_super) {
    __extends(ListAssetResponse, _super);
    function ListAssetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAssetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssetListAssetResponse)
    ], ListAssetResponse.prototype, "listAssetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAssetResponse.prototype, "statusCode", void 0);
    return ListAssetResponse;
}(SpeakeasyBase));
export { ListAssetResponse };
