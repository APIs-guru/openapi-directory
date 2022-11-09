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
export var LISTSIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS = [
    "https://api.twilio.com",
];
var ListSipAuthCallsIpAccessControlListMappingPathParams = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsIpAccessControlListMappingPathParams, _super);
    function ListSipAuthCallsIpAccessControlListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsIpAccessControlListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsIpAccessControlListMappingPathParams.prototype, "domainSid", void 0);
    return ListSipAuthCallsIpAccessControlListMappingPathParams;
}(SpeakeasyBase));
export { ListSipAuthCallsIpAccessControlListMappingPathParams };
var ListSipAuthCallsIpAccessControlListMappingQueryParams = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsIpAccessControlListMappingQueryParams, _super);
    function ListSipAuthCallsIpAccessControlListMappingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsIpAccessControlListMappingQueryParams.prototype, "pageSize", void 0);
    return ListSipAuthCallsIpAccessControlListMappingQueryParams;
}(SpeakeasyBase));
export { ListSipAuthCallsIpAccessControlListMappingQueryParams };
var ListSipAuthCallsIpAccessControlListMappingSecurity = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsIpAccessControlListMappingSecurity, _super);
    function ListSipAuthCallsIpAccessControlListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipAuthCallsIpAccessControlListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipAuthCallsIpAccessControlListMappingSecurity;
}(SpeakeasyBase));
export { ListSipAuthCallsIpAccessControlListMappingSecurity };
var ListSipAuthCallsIpAccessControlListMappingRequest = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsIpAccessControlListMappingRequest, _super);
    function ListSipAuthCallsIpAccessControlListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSipAuthCallsIpAccessControlListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipAuthCallsIpAccessControlListMappingPathParams)
    ], ListSipAuthCallsIpAccessControlListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipAuthCallsIpAccessControlListMappingQueryParams)
    ], ListSipAuthCallsIpAccessControlListMappingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipAuthCallsIpAccessControlListMappingSecurity)
    ], ListSipAuthCallsIpAccessControlListMappingRequest.prototype, "security", void 0);
    return ListSipAuthCallsIpAccessControlListMappingRequest;
}(SpeakeasyBase));
export { ListSipAuthCallsIpAccessControlListMappingRequest };
var ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse, _super);
    function ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=contents", elemType: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping }),
        __metadata("design:type", Array)
    ], ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse.prototype, "contents", void 0);
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse.prototype, "uri", void 0);
    return ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse;
}(SpeakeasyBase));
export { ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse };
var ListSipAuthCallsIpAccessControlListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipAuthCallsIpAccessControlListMappingResponse, _super);
    function ListSipAuthCallsIpAccessControlListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSipAuthCallsIpAccessControlListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse)
    ], ListSipAuthCallsIpAccessControlListMappingResponse.prototype, "listSipAuthCallsIpAccessControlListMappingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSipAuthCallsIpAccessControlListMappingResponse.prototype, "statusCode", void 0);
    return ListSipAuthCallsIpAccessControlListMappingResponse;
}(SpeakeasyBase));
export { ListSipAuthCallsIpAccessControlListMappingResponse };
