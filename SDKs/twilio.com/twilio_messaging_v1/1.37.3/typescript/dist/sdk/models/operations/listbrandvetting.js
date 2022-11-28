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
export var ListBrandVettingServerList = [
    "https://messaging.twilio.com",
];
var ListBrandVettingPathParams = /** @class */ (function (_super) {
    __extends(ListBrandVettingPathParams, _super);
    function ListBrandVettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BrandSid" }),
        __metadata("design:type", String)
    ], ListBrandVettingPathParams.prototype, "brandSid", void 0);
    return ListBrandVettingPathParams;
}(SpeakeasyBase));
export { ListBrandVettingPathParams };
var ListBrandVettingQueryParams = /** @class */ (function (_super) {
    __extends(ListBrandVettingQueryParams, _super);
    function ListBrandVettingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListBrandVettingQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VettingProvider" }),
        __metadata("design:type", String)
    ], ListBrandVettingQueryParams.prototype, "vettingProvider", void 0);
    return ListBrandVettingQueryParams;
}(SpeakeasyBase));
export { ListBrandVettingQueryParams };
var ListBrandVettingSecurity = /** @class */ (function (_super) {
    __extends(ListBrandVettingSecurity, _super);
    function ListBrandVettingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListBrandVettingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListBrandVettingSecurity;
}(SpeakeasyBase));
export { ListBrandVettingSecurity };
var ListBrandVettingListBrandVettingResponseMeta = /** @class */ (function (_super) {
    __extends(ListBrandVettingListBrandVettingResponseMeta, _super);
    function ListBrandVettingListBrandVettingResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListBrandVettingListBrandVettingResponseMeta.prototype, "url", void 0);
    return ListBrandVettingListBrandVettingResponseMeta;
}(SpeakeasyBase));
export { ListBrandVettingListBrandVettingResponseMeta };
var ListBrandVettingListBrandVettingResponse = /** @class */ (function (_super) {
    __extends(ListBrandVettingListBrandVettingResponse, _super);
    function ListBrandVettingListBrandVettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.MessagingV1BrandRegistrationsBrandVetting }),
        __metadata("design:type", Array)
    ], ListBrandVettingListBrandVettingResponse.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListBrandVettingListBrandVettingResponseMeta)
    ], ListBrandVettingListBrandVettingResponse.prototype, "meta", void 0);
    return ListBrandVettingListBrandVettingResponse;
}(SpeakeasyBase));
export { ListBrandVettingListBrandVettingResponse };
var ListBrandVettingRequest = /** @class */ (function (_super) {
    __extends(ListBrandVettingRequest, _super);
    function ListBrandVettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBrandVettingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBrandVettingPathParams)
    ], ListBrandVettingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBrandVettingQueryParams)
    ], ListBrandVettingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBrandVettingSecurity)
    ], ListBrandVettingRequest.prototype, "security", void 0);
    return ListBrandVettingRequest;
}(SpeakeasyBase));
export { ListBrandVettingRequest };
var ListBrandVettingResponse = /** @class */ (function (_super) {
    __extends(ListBrandVettingResponse, _super);
    function ListBrandVettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBrandVettingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBrandVettingListBrandVettingResponse)
    ], ListBrandVettingResponse.prototype, "listBrandVettingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBrandVettingResponse.prototype, "statusCode", void 0);
    return ListBrandVettingResponse;
}(SpeakeasyBase));
export { ListBrandVettingResponse };
