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
export var ListBrandRegistrationsServerList = [
    "https://messaging.twilio.com",
];
var ListBrandRegistrationsQueryParams = /** @class */ (function (_super) {
    __extends(ListBrandRegistrationsQueryParams, _super);
    function ListBrandRegistrationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListBrandRegistrationsQueryParams.prototype, "pageSize", void 0);
    return ListBrandRegistrationsQueryParams;
}(SpeakeasyBase));
export { ListBrandRegistrationsQueryParams };
var ListBrandRegistrationsSecurity = /** @class */ (function (_super) {
    __extends(ListBrandRegistrationsSecurity, _super);
    function ListBrandRegistrationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListBrandRegistrationsSecurity.prototype, "accountSidAuthToken", void 0);
    return ListBrandRegistrationsSecurity;
}(SpeakeasyBase));
export { ListBrandRegistrationsSecurity };
var ListBrandRegistrationsListBrandRegistrationsResponseMeta = /** @class */ (function (_super) {
    __extends(ListBrandRegistrationsListBrandRegistrationsResponseMeta, _super);
    function ListBrandRegistrationsListBrandRegistrationsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListBrandRegistrationsListBrandRegistrationsResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListBrandRegistrationsListBrandRegistrationsResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListBrandRegistrationsListBrandRegistrationsResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListBrandRegistrationsListBrandRegistrationsResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBrandRegistrationsListBrandRegistrationsResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListBrandRegistrationsListBrandRegistrationsResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListBrandRegistrationsListBrandRegistrationsResponseMeta.prototype, "url", void 0);
    return ListBrandRegistrationsListBrandRegistrationsResponseMeta;
}(SpeakeasyBase));
export { ListBrandRegistrationsListBrandRegistrationsResponseMeta };
var ListBrandRegistrationsListBrandRegistrationsResponse = /** @class */ (function (_super) {
    __extends(ListBrandRegistrationsListBrandRegistrationsResponse, _super);
    function ListBrandRegistrationsListBrandRegistrationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.MessagingV1BrandRegistrations }),
        __metadata("design:type", Array)
    ], ListBrandRegistrationsListBrandRegistrationsResponse.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListBrandRegistrationsListBrandRegistrationsResponseMeta)
    ], ListBrandRegistrationsListBrandRegistrationsResponse.prototype, "meta", void 0);
    return ListBrandRegistrationsListBrandRegistrationsResponse;
}(SpeakeasyBase));
export { ListBrandRegistrationsListBrandRegistrationsResponse };
var ListBrandRegistrationsRequest = /** @class */ (function (_super) {
    __extends(ListBrandRegistrationsRequest, _super);
    function ListBrandRegistrationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBrandRegistrationsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBrandRegistrationsQueryParams)
    ], ListBrandRegistrationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBrandRegistrationsSecurity)
    ], ListBrandRegistrationsRequest.prototype, "security", void 0);
    return ListBrandRegistrationsRequest;
}(SpeakeasyBase));
export { ListBrandRegistrationsRequest };
var ListBrandRegistrationsResponse = /** @class */ (function (_super) {
    __extends(ListBrandRegistrationsResponse, _super);
    function ListBrandRegistrationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBrandRegistrationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBrandRegistrationsListBrandRegistrationsResponse)
    ], ListBrandRegistrationsResponse.prototype, "listBrandRegistrationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBrandRegistrationsResponse.prototype, "statusCode", void 0);
    return ListBrandRegistrationsResponse;
}(SpeakeasyBase));
export { ListBrandRegistrationsResponse };
