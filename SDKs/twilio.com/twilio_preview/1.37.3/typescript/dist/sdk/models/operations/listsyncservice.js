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
export var ListSyncServiceServerList = [
    "https://preview.twilio.com",
];
var ListSyncServiceQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncServiceQueryParams, _super);
    function ListSyncServiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncServiceQueryParams.prototype, "pageSize", void 0);
    return ListSyncServiceQueryParams;
}(SpeakeasyBase));
export { ListSyncServiceQueryParams };
var ListSyncServiceSecurity = /** @class */ (function (_super) {
    __extends(ListSyncServiceSecurity, _super);
    function ListSyncServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncServiceSecurity;
}(SpeakeasyBase));
export { ListSyncServiceSecurity };
var ListSyncServiceListSyncServiceResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncServiceListSyncServiceResponseMeta, _super);
    function ListSyncServiceListSyncServiceResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncServiceListSyncServiceResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncServiceListSyncServiceResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncServiceListSyncServiceResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncServiceListSyncServiceResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncServiceListSyncServiceResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncServiceListSyncServiceResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncServiceListSyncServiceResponseMeta.prototype, "url", void 0);
    return ListSyncServiceListSyncServiceResponseMeta;
}(SpeakeasyBase));
export { ListSyncServiceListSyncServiceResponseMeta };
var ListSyncServiceListSyncServiceResponse = /** @class */ (function (_super) {
    __extends(ListSyncServiceListSyncServiceResponse, _super);
    function ListSyncServiceListSyncServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncServiceListSyncServiceResponseMeta)
    ], ListSyncServiceListSyncServiceResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services", elemType: shared.PreviewSyncService }),
        __metadata("design:type", Array)
    ], ListSyncServiceListSyncServiceResponse.prototype, "services", void 0);
    return ListSyncServiceListSyncServiceResponse;
}(SpeakeasyBase));
export { ListSyncServiceListSyncServiceResponse };
var ListSyncServiceRequest = /** @class */ (function (_super) {
    __extends(ListSyncServiceRequest, _super);
    function ListSyncServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncServiceQueryParams)
    ], ListSyncServiceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncServiceSecurity)
    ], ListSyncServiceRequest.prototype, "security", void 0);
    return ListSyncServiceRequest;
}(SpeakeasyBase));
export { ListSyncServiceRequest };
var ListSyncServiceResponse = /** @class */ (function (_super) {
    __extends(ListSyncServiceResponse, _super);
    function ListSyncServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncServiceListSyncServiceResponse)
    ], ListSyncServiceResponse.prototype, "listSyncServiceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSyncServiceResponse.prototype, "statusCode", void 0);
    return ListSyncServiceResponse;
}(SpeakeasyBase));
export { ListSyncServiceResponse };
