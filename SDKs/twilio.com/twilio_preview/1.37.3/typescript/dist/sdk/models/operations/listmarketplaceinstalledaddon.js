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
export var ListMarketplaceInstalledAddOnServerList = [
    "https://preview.twilio.com",
];
var ListMarketplaceInstalledAddOnQueryParams = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnQueryParams, _super);
    function ListMarketplaceInstalledAddOnQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnQueryParams.prototype, "pageSize", void 0);
    return ListMarketplaceInstalledAddOnQueryParams;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnQueryParams };
var ListMarketplaceInstalledAddOnSecurity = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnSecurity, _super);
    function ListMarketplaceInstalledAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMarketplaceInstalledAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMarketplaceInstalledAddOnSecurity;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnSecurity };
var ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta, _super);
    function ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta.prototype, "url", void 0);
    return ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta };
var ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse, _super);
    function ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installed_add_ons", elemType: shared.PreviewMarketplaceInstalledAddOn }),
        __metadata("design:type", Array)
    ], ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse.prototype, "installedAddOns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta)
    ], ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse.prototype, "meta", void 0);
    return ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse };
var ListMarketplaceInstalledAddOnRequest = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnRequest, _super);
    function ListMarketplaceInstalledAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMarketplaceInstalledAddOnQueryParams)
    ], ListMarketplaceInstalledAddOnRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMarketplaceInstalledAddOnSecurity)
    ], ListMarketplaceInstalledAddOnRequest.prototype, "security", void 0);
    return ListMarketplaceInstalledAddOnRequest;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnRequest };
var ListMarketplaceInstalledAddOnResponse = /** @class */ (function (_super) {
    __extends(ListMarketplaceInstalledAddOnResponse, _super);
    function ListMarketplaceInstalledAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMarketplaceInstalledAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse)
    ], ListMarketplaceInstalledAddOnResponse.prototype, "listMarketplaceInstalledAddOnResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMarketplaceInstalledAddOnResponse.prototype, "statusCode", void 0);
    return ListMarketplaceInstalledAddOnResponse;
}(SpeakeasyBase));
export { ListMarketplaceInstalledAddOnResponse };
