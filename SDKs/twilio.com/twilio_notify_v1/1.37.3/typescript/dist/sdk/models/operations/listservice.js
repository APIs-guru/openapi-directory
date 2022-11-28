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
export var ListServiceServerList = [
    "https://notify.twilio.com",
];
var ListServiceQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceQueryParams, _super);
    function ListServiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListServiceQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceQueryParams.prototype, "pageSize", void 0);
    return ListServiceQueryParams;
}(SpeakeasyBase));
export { ListServiceQueryParams };
var ListServiceSecurity = /** @class */ (function (_super) {
    __extends(ListServiceSecurity, _super);
    function ListServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceSecurity;
}(SpeakeasyBase));
export { ListServiceSecurity };
var ListServiceListServiceResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceListServiceResponseMeta, _super);
    function ListServiceListServiceResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceListServiceResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceListServiceResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceListServiceResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceListServiceResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceListServiceResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceListServiceResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceListServiceResponseMeta.prototype, "url", void 0);
    return ListServiceListServiceResponseMeta;
}(SpeakeasyBase));
export { ListServiceListServiceResponseMeta };
var ListServiceListServiceResponse = /** @class */ (function (_super) {
    __extends(ListServiceListServiceResponse, _super);
    function ListServiceListServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceListServiceResponseMeta)
    ], ListServiceListServiceResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services", elemType: shared.NotifyV1Service }),
        __metadata("design:type", Array)
    ], ListServiceListServiceResponse.prototype, "services", void 0);
    return ListServiceListServiceResponse;
}(SpeakeasyBase));
export { ListServiceListServiceResponse };
var ListServiceRequest = /** @class */ (function (_super) {
    __extends(ListServiceRequest, _super);
    function ListServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceQueryParams)
    ], ListServiceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceSecurity)
    ], ListServiceRequest.prototype, "security", void 0);
    return ListServiceRequest;
}(SpeakeasyBase));
export { ListServiceRequest };
var ListServiceResponse = /** @class */ (function (_super) {
    __extends(ListServiceResponse, _super);
    function ListServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceListServiceResponse)
    ], ListServiceResponse.prototype, "listServiceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListServiceResponse.prototype, "statusCode", void 0);
    return ListServiceResponse;
}(SpeakeasyBase));
export { ListServiceResponse };
