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
export var ListSipAuthRegistrationsCredentialListMappingServerList = [
    "https://api.twilio.com",
];
var ListSipAuthRegistrationsCredentialListMappingPathParams = /** @class */ (function (_super) {
    __extends(ListSipAuthRegistrationsCredentialListMappingPathParams, _super);
    function ListSipAuthRegistrationsCredentialListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipAuthRegistrationsCredentialListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], ListSipAuthRegistrationsCredentialListMappingPathParams.prototype, "domainSid", void 0);
    return ListSipAuthRegistrationsCredentialListMappingPathParams;
}(SpeakeasyBase));
export { ListSipAuthRegistrationsCredentialListMappingPathParams };
var ListSipAuthRegistrationsCredentialListMappingQueryParams = /** @class */ (function (_super) {
    __extends(ListSipAuthRegistrationsCredentialListMappingQueryParams, _super);
    function ListSipAuthRegistrationsCredentialListMappingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipAuthRegistrationsCredentialListMappingQueryParams.prototype, "pageSize", void 0);
    return ListSipAuthRegistrationsCredentialListMappingQueryParams;
}(SpeakeasyBase));
export { ListSipAuthRegistrationsCredentialListMappingQueryParams };
var ListSipAuthRegistrationsCredentialListMappingSecurity = /** @class */ (function (_super) {
    __extends(ListSipAuthRegistrationsCredentialListMappingSecurity, _super);
    function ListSipAuthRegistrationsCredentialListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipAuthRegistrationsCredentialListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipAuthRegistrationsCredentialListMappingSecurity;
}(SpeakeasyBase));
export { ListSipAuthRegistrationsCredentialListMappingSecurity };
var ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse, _super);
    function ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contents", elemType: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping }),
        __metadata("design:type", Array)
    ], ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse.prototype, "contents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse.prototype, "uri", void 0);
    return ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse;
}(SpeakeasyBase));
export { ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse };
var ListSipAuthRegistrationsCredentialListMappingRequest = /** @class */ (function (_super) {
    __extends(ListSipAuthRegistrationsCredentialListMappingRequest, _super);
    function ListSipAuthRegistrationsCredentialListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSipAuthRegistrationsCredentialListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipAuthRegistrationsCredentialListMappingPathParams)
    ], ListSipAuthRegistrationsCredentialListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipAuthRegistrationsCredentialListMappingQueryParams)
    ], ListSipAuthRegistrationsCredentialListMappingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipAuthRegistrationsCredentialListMappingSecurity)
    ], ListSipAuthRegistrationsCredentialListMappingRequest.prototype, "security", void 0);
    return ListSipAuthRegistrationsCredentialListMappingRequest;
}(SpeakeasyBase));
export { ListSipAuthRegistrationsCredentialListMappingRequest };
var ListSipAuthRegistrationsCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipAuthRegistrationsCredentialListMappingResponse, _super);
    function ListSipAuthRegistrationsCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSipAuthRegistrationsCredentialListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse)
    ], ListSipAuthRegistrationsCredentialListMappingResponse.prototype, "listSipAuthRegistrationsCredentialListMappingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSipAuthRegistrationsCredentialListMappingResponse.prototype, "statusCode", void 0);
    return ListSipAuthRegistrationsCredentialListMappingResponse;
}(SpeakeasyBase));
export { ListSipAuthRegistrationsCredentialListMappingResponse };
