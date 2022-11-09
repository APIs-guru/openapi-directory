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
export var LISTASSETVERSION_SERVERS = [
    "https://serverless.twilio.com",
];
var ListAssetVersionPathParams = /** @class */ (function (_super) {
    __extends(ListAssetVersionPathParams, _super);
    function ListAssetVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssetSid" }),
        __metadata("design:type", String)
    ], ListAssetVersionPathParams.prototype, "assetSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListAssetVersionPathParams.prototype, "serviceSid", void 0);
    return ListAssetVersionPathParams;
}(SpeakeasyBase));
export { ListAssetVersionPathParams };
var ListAssetVersionQueryParams = /** @class */ (function (_super) {
    __extends(ListAssetVersionQueryParams, _super);
    function ListAssetVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAssetVersionQueryParams.prototype, "pageSize", void 0);
    return ListAssetVersionQueryParams;
}(SpeakeasyBase));
export { ListAssetVersionQueryParams };
var ListAssetVersionSecurity = /** @class */ (function (_super) {
    __extends(ListAssetVersionSecurity, _super);
    function ListAssetVersionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAssetVersionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAssetVersionSecurity;
}(SpeakeasyBase));
export { ListAssetVersionSecurity };
var ListAssetVersionRequest = /** @class */ (function (_super) {
    __extends(ListAssetVersionRequest, _super);
    function ListAssetVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAssetVersionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssetVersionPathParams)
    ], ListAssetVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssetVersionQueryParams)
    ], ListAssetVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssetVersionSecurity)
    ], ListAssetVersionRequest.prototype, "security", void 0);
    return ListAssetVersionRequest;
}(SpeakeasyBase));
export { ListAssetVersionRequest };
var ListAssetVersionListAssetVersionResponseMeta = /** @class */ (function (_super) {
    __extends(ListAssetVersionListAssetVersionResponseMeta, _super);
    function ListAssetVersionListAssetVersionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListAssetVersionListAssetVersionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListAssetVersionListAssetVersionResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListAssetVersionListAssetVersionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAssetVersionListAssetVersionResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAssetVersionListAssetVersionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListAssetVersionListAssetVersionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListAssetVersionListAssetVersionResponseMeta.prototype, "url", void 0);
    return ListAssetVersionListAssetVersionResponseMeta;
}(SpeakeasyBase));
export { ListAssetVersionListAssetVersionResponseMeta };
var ListAssetVersionListAssetVersionResponse = /** @class */ (function (_super) {
    __extends(ListAssetVersionListAssetVersionResponse, _super);
    function ListAssetVersionListAssetVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=asset_versions", elemType: shared.ServerlessV1ServiceAssetAssetVersion }),
        __metadata("design:type", Array)
    ], ListAssetVersionListAssetVersionResponse.prototype, "assetVersions", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListAssetVersionListAssetVersionResponseMeta)
    ], ListAssetVersionListAssetVersionResponse.prototype, "meta", void 0);
    return ListAssetVersionListAssetVersionResponse;
}(SpeakeasyBase));
export { ListAssetVersionListAssetVersionResponse };
var ListAssetVersionResponse = /** @class */ (function (_super) {
    __extends(ListAssetVersionResponse, _super);
    function ListAssetVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAssetVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssetVersionListAssetVersionResponse)
    ], ListAssetVersionResponse.prototype, "listAssetVersionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAssetVersionResponse.prototype, "statusCode", void 0);
    return ListAssetVersionResponse;
}(SpeakeasyBase));
export { ListAssetVersionResponse };
