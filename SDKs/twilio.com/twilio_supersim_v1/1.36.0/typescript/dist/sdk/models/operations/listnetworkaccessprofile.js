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
export var LISTNETWORKACCESSPROFILE_SERVERS = [
    "https://supersim.twilio.com",
];
var ListNetworkAccessProfileQueryParams = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileQueryParams, _super);
    function ListNetworkAccessProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileQueryParams.prototype, "pageSize", void 0);
    return ListNetworkAccessProfileQueryParams;
}(SpeakeasyBase));
export { ListNetworkAccessProfileQueryParams };
var ListNetworkAccessProfileSecurity = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileSecurity, _super);
    function ListNetworkAccessProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListNetworkAccessProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return ListNetworkAccessProfileSecurity;
}(SpeakeasyBase));
export { ListNetworkAccessProfileSecurity };
var ListNetworkAccessProfileRequest = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileRequest, _super);
    function ListNetworkAccessProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListNetworkAccessProfileQueryParams)
    ], ListNetworkAccessProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListNetworkAccessProfileSecurity)
    ], ListNetworkAccessProfileRequest.prototype, "security", void 0);
    return ListNetworkAccessProfileRequest;
}(SpeakeasyBase));
export { ListNetworkAccessProfileRequest };
var ListNetworkAccessProfileListNetworkAccessProfileResponseMeta = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileListNetworkAccessProfileResponseMeta, _super);
    function ListNetworkAccessProfileListNetworkAccessProfileResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponseMeta.prototype, "url", void 0);
    return ListNetworkAccessProfileListNetworkAccessProfileResponseMeta;
}(SpeakeasyBase));
export { ListNetworkAccessProfileListNetworkAccessProfileResponseMeta };
var ListNetworkAccessProfileListNetworkAccessProfileResponse = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileListNetworkAccessProfileResponse, _super);
    function ListNetworkAccessProfileListNetworkAccessProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListNetworkAccessProfileListNetworkAccessProfileResponseMeta)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=network_access_profiles", elemType: shared.SupersimV1NetworkAccessProfile }),
        __metadata("design:type", Array)
    ], ListNetworkAccessProfileListNetworkAccessProfileResponse.prototype, "networkAccessProfiles", void 0);
    return ListNetworkAccessProfileListNetworkAccessProfileResponse;
}(SpeakeasyBase));
export { ListNetworkAccessProfileListNetworkAccessProfileResponse };
var ListNetworkAccessProfileResponse = /** @class */ (function (_super) {
    __extends(ListNetworkAccessProfileResponse, _super);
    function ListNetworkAccessProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListNetworkAccessProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListNetworkAccessProfileListNetworkAccessProfileResponse)
    ], ListNetworkAccessProfileResponse.prototype, "listNetworkAccessProfileResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListNetworkAccessProfileResponse.prototype, "statusCode", void 0);
    return ListNetworkAccessProfileResponse;
}(SpeakeasyBase));
export { ListNetworkAccessProfileResponse };
