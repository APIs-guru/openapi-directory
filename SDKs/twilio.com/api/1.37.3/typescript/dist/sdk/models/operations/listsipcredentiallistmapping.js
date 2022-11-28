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
export var ListSipCredentialListMappingServerList = [
    "https://api.twilio.com",
];
var ListSipCredentialListMappingPathParams = /** @class */ (function (_super) {
    __extends(ListSipCredentialListMappingPathParams, _super);
    function ListSipCredentialListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListSipCredentialListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], ListSipCredentialListMappingPathParams.prototype, "domainSid", void 0);
    return ListSipCredentialListMappingPathParams;
}(SpeakeasyBase));
export { ListSipCredentialListMappingPathParams };
var ListSipCredentialListMappingQueryParams = /** @class */ (function (_super) {
    __extends(ListSipCredentialListMappingQueryParams, _super);
    function ListSipCredentialListMappingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSipCredentialListMappingQueryParams.prototype, "pageSize", void 0);
    return ListSipCredentialListMappingQueryParams;
}(SpeakeasyBase));
export { ListSipCredentialListMappingQueryParams };
var ListSipCredentialListMappingSecurity = /** @class */ (function (_super) {
    __extends(ListSipCredentialListMappingSecurity, _super);
    function ListSipCredentialListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSipCredentialListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSipCredentialListMappingSecurity;
}(SpeakeasyBase));
export { ListSipCredentialListMappingSecurity };
var ListSipCredentialListMappingListSipCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipCredentialListMappingListSipCredentialListMappingResponse, _super);
    function ListSipCredentialListMappingListSipCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credential_list_mappings", elemType: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping }),
        __metadata("design:type", Array)
    ], ListSipCredentialListMappingListSipCredentialListMappingResponse.prototype, "credentialListMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListSipCredentialListMappingListSipCredentialListMappingResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListSipCredentialListMappingListSipCredentialListMappingResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListSipCredentialListMappingListSipCredentialListMappingResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSipCredentialListMappingListSipCredentialListMappingResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipCredentialListMappingListSipCredentialListMappingResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListSipCredentialListMappingListSipCredentialListMappingResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListSipCredentialListMappingListSipCredentialListMappingResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListSipCredentialListMappingListSipCredentialListMappingResponse.prototype, "uri", void 0);
    return ListSipCredentialListMappingListSipCredentialListMappingResponse;
}(SpeakeasyBase));
export { ListSipCredentialListMappingListSipCredentialListMappingResponse };
var ListSipCredentialListMappingRequest = /** @class */ (function (_super) {
    __extends(ListSipCredentialListMappingRequest, _super);
    function ListSipCredentialListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSipCredentialListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipCredentialListMappingPathParams)
    ], ListSipCredentialListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipCredentialListMappingQueryParams)
    ], ListSipCredentialListMappingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipCredentialListMappingSecurity)
    ], ListSipCredentialListMappingRequest.prototype, "security", void 0);
    return ListSipCredentialListMappingRequest;
}(SpeakeasyBase));
export { ListSipCredentialListMappingRequest };
var ListSipCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(ListSipCredentialListMappingResponse, _super);
    function ListSipCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSipCredentialListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSipCredentialListMappingListSipCredentialListMappingResponse)
    ], ListSipCredentialListMappingResponse.prototype, "listSipCredentialListMappingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSipCredentialListMappingResponse.prototype, "statusCode", void 0);
    return ListSipCredentialListMappingResponse;
}(SpeakeasyBase));
export { ListSipCredentialListMappingResponse };
