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
export var LISTMARKETPLACEAVAILABLEADDON_SERVERS = [
    "https://preview.twilio.com",
];
var ListMarketplaceAvailableAddOnQueryParams = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnQueryParams, _super);
    function ListMarketplaceAvailableAddOnQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMarketplaceAvailableAddOnQueryParams.prototype, "pageSize", void 0);
    return ListMarketplaceAvailableAddOnQueryParams;
}(SpeakeasyBase));
export { ListMarketplaceAvailableAddOnQueryParams };
var ListMarketplaceAvailableAddOnSecurity = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnSecurity, _super);
    function ListMarketplaceAvailableAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMarketplaceAvailableAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMarketplaceAvailableAddOnSecurity;
}(SpeakeasyBase));
export { ListMarketplaceAvailableAddOnSecurity };
var ListMarketplaceAvailableAddOnRequest = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnRequest, _super);
    function ListMarketplaceAvailableAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMarketplaceAvailableAddOnQueryParams)
    ], ListMarketplaceAvailableAddOnRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMarketplaceAvailableAddOnSecurity)
    ], ListMarketplaceAvailableAddOnRequest.prototype, "security", void 0);
    return ListMarketplaceAvailableAddOnRequest;
}(SpeakeasyBase));
export { ListMarketplaceAvailableAddOnRequest };
var ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta, _super);
    function ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta.prototype, "url", void 0);
    return ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta;
}(SpeakeasyBase));
export { ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta };
var ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse, _super);
    function ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=available_add_ons", elemType: shared.PreviewMarketplaceAvailableAddOn }),
        __metadata("design:type", Array)
    ], ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse.prototype, "availableAddOns", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta)
    ], ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse.prototype, "meta", void 0);
    return ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse;
}(SpeakeasyBase));
export { ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse };
var ListMarketplaceAvailableAddOnResponse = /** @class */ (function (_super) {
    __extends(ListMarketplaceAvailableAddOnResponse, _super);
    function ListMarketplaceAvailableAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMarketplaceAvailableAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse)
    ], ListMarketplaceAvailableAddOnResponse.prototype, "listMarketplaceAvailableAddOnResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListMarketplaceAvailableAddOnResponse.prototype, "statusCode", void 0);
    return ListMarketplaceAvailableAddOnResponse;
}(SpeakeasyBase));
export { ListMarketplaceAvailableAddOnResponse };
