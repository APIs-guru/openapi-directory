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
export var ListMarketplaceInstalledAddOnExtensionServerList = [
    "https://preview.twilio.com",
];
var ListMarketplaceInstalledAddOnExtensionPathParams = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionPathParams, _super);
    function ListMarketplaceInstalledAddOnExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InstalledAddOnSid" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionPathParams.prototype, "installedAddOnSid", void 0);
    return ListMarketplaceInstalledAddOnExtensionPathParams;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnExtensionPathParams };
var ListMarketplaceInstalledAddOnExtensionQueryParams = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionQueryParams, _super);
    function ListMarketplaceInstalledAddOnExtensionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnExtensionQueryParams.prototype, "pageSize", void 0);
    return ListMarketplaceInstalledAddOnExtensionQueryParams;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnExtensionQueryParams };
var ListMarketplaceInstalledAddOnExtensionSecurity = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionSecurity, _super);
    function ListMarketplaceInstalledAddOnExtensionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMarketplaceInstalledAddOnExtensionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMarketplaceInstalledAddOnExtensionSecurity;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnExtensionSecurity };
var ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta, _super);
    function ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta.prototype, "url", void 0);
    return ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta };
var ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse, _super);
    function ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extensions", elemType: shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension }),
        __metadata("design:type", Array)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse.prototype, "extensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta)
    ], ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse.prototype, "meta", void 0);
    return ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse };
var ListMarketplaceInstalledAddOnExtensionRequest = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionRequest, _super);
    function ListMarketplaceInstalledAddOnExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMarketplaceInstalledAddOnExtensionPathParams)
    ], ListMarketplaceInstalledAddOnExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMarketplaceInstalledAddOnExtensionQueryParams)
    ], ListMarketplaceInstalledAddOnExtensionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMarketplaceInstalledAddOnExtensionSecurity)
    ], ListMarketplaceInstalledAddOnExtensionRequest.prototype, "security", void 0);
    return ListMarketplaceInstalledAddOnExtensionRequest;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnExtensionRequest };
var ListMarketplaceInstalledAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnExtensionResponse, _super);
    function ListMarketplaceInstalledAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse)
    ], ListMarketplaceInstalledAddOnExtensionResponse.prototype, "listMarketplaceInstalledAddOnExtensionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnExtensionResponse.prototype, "statusCode", void 0);
    return ListMarketplaceInstalledAddOnExtensionResponse;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnExtensionResponse };
