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
export var LISTSIPAUTHCALLSCREDENTIALLISTMAPPING_SERVERS = [
    "https://api.twilio.com",
];
var ListSipAuthCallsCredentialListMappingPathParams = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingPathParams, _super);
    function ListSipAuthCallsCredentialListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingPathParams.prototype, "domainSid", void 0);
    return ListSipAuthCallsCredentialListMappingPathParams;
}(SpeakeasyBase));
export { ListSipAuthCallsCredentialListMappingPathParams };
var ListSipAuthCallsCredentialListMappingQueryParams = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingQueryParams, _super);
    function ListSipAuthCallsCredentialListMappingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingQueryParams.prototype, "pageSize", void 0);
    return ListSipAuthCallsCredentialListMappingQueryParams;
}(SpeakeasyBase));
export { ListSipAuthCallsCredentialListMappingQueryParams };
var ListSipAuthCallsCredentialListMappingSecurity = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingSecurity, _super);
    function ListSipAuthCallsCredentialListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipAuthCallsCredentialListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipAuthCallsCredentialListMappingSecurity;
}(SpeakeasyBase));
export { ListSipAuthCallsCredentialListMappingSecurity };
var ListSipAuthCallsCredentialListMappingRequest = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingRequest, _super);
    function ListSipAuthCallsCredentialListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipAuthCallsCredentialListMappingPathParams)
    ], ListSipAuthCallsCredentialListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipAuthCallsCredentialListMappingQueryParams)
    ], ListSipAuthCallsCredentialListMappingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipAuthCallsCredentialListMappingSecurity)
    ], ListSipAuthCallsCredentialListMappingRequest.prototype, "security", void 0);
    return ListSipAuthCallsCredentialListMappingRequest;
}(SpeakeasyBase));
export { ListSipAuthCallsCredentialListMappingRequest };
var ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse, _super);
    function ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=contents", elemType: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping }),
        __metadata("design:type", Array)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "contents", void 0);
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.prototype, "uri", void 0);
    return ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse;
}(SpeakeasyBase));
export { ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse };
var ListSipAuthCallsCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsCredentialListMappingResponse, _super);
    function ListSipAuthCallsCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSipAuthCallsCredentialListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse)
    ], ListSipAuthCallsCredentialListMappingResponse.prototype, "listSipAuthCallsCredentialListMappingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSipAuthCallsCredentialListMappingResponse.prototype, "statusCode", void 0);
    return ListSipAuthCallsCredentialListMappingResponse;
}(SpeakeasyBase));
export { ListSipAuthCallsCredentialListMappingResponse };
