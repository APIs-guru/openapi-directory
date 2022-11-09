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
export var LISTCUSTOMERPROFILE_SERVERS = [
    "https://trusthub.twilio.com",
];
var ListCustomerProfileQueryParams = /** @class */ (function (_super) {
    __extends(ListCustomerProfileQueryParams, _super);
    function ListCustomerProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListCustomerProfileQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCustomerProfileQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicySid" }),
        __metadata("design:type", String)
    ], ListCustomerProfileQueryParams.prototype, "policySid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListCustomerProfileQueryParams.prototype, "status", void 0);
    return ListCustomerProfileQueryParams;
}(SpeakeasyBase));
export { ListCustomerProfileQueryParams };
var ListCustomerProfileSecurity = /** @class */ (function (_super) {
    __extends(ListCustomerProfileSecurity, _super);
    function ListCustomerProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCustomerProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCustomerProfileSecurity;
}(SpeakeasyBase));
export { ListCustomerProfileSecurity };
var ListCustomerProfileRequest = /** @class */ (function (_super) {
    __extends(ListCustomerProfileRequest, _super);
    function ListCustomerProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCustomerProfileRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCustomerProfileQueryParams)
    ], ListCustomerProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCustomerProfileSecurity)
    ], ListCustomerProfileRequest.prototype, "security", void 0);
    return ListCustomerProfileRequest;
}(SpeakeasyBase));
export { ListCustomerProfileRequest };
var ListCustomerProfileListCustomerProfileResponseMeta = /** @class */ (function (_super) {
    __extends(ListCustomerProfileListCustomerProfileResponseMeta, _super);
    function ListCustomerProfileListCustomerProfileResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCustomerProfileListCustomerProfileResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCustomerProfileListCustomerProfileResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCustomerProfileListCustomerProfileResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCustomerProfileListCustomerProfileResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCustomerProfileListCustomerProfileResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCustomerProfileListCustomerProfileResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCustomerProfileListCustomerProfileResponseMeta.prototype, "url", void 0);
    return ListCustomerProfileListCustomerProfileResponseMeta;
}(SpeakeasyBase));
export { ListCustomerProfileListCustomerProfileResponseMeta };
var ListCustomerProfileListCustomerProfileResponse = /** @class */ (function (_super) {
    __extends(ListCustomerProfileListCustomerProfileResponse, _super);
    function ListCustomerProfileListCustomerProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListCustomerProfileListCustomerProfileResponseMeta)
    ], ListCustomerProfileListCustomerProfileResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.TrusthubV1CustomerProfile }),
        __metadata("design:type", Array)
    ], ListCustomerProfileListCustomerProfileResponse.prototype, "results", void 0);
    return ListCustomerProfileListCustomerProfileResponse;
}(SpeakeasyBase));
export { ListCustomerProfileListCustomerProfileResponse };
var ListCustomerProfileResponse = /** @class */ (function (_super) {
    __extends(ListCustomerProfileResponse, _super);
    function ListCustomerProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCustomerProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCustomerProfileListCustomerProfileResponse)
    ], ListCustomerProfileResponse.prototype, "listCustomerProfileResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListCustomerProfileResponse.prototype, "statusCode", void 0);
    return ListCustomerProfileResponse;
}(SpeakeasyBase));
export { ListCustomerProfileResponse };
