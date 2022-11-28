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
export var FetchSipAuthCallsIpAccessControlListMappingServerList = [
    "https://api.twilio.com",
];
var FetchSipAuthCallsIpAccessControlListMappingPathParams = /** @class */ (function (_super) {
    __extends(FetchSipAuthCallsIpAccessControlListMappingPathParams, _super);
    function FetchSipAuthCallsIpAccessControlListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchSipAuthCallsIpAccessControlListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], FetchSipAuthCallsIpAccessControlListMappingPathParams.prototype, "domainSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSipAuthCallsIpAccessControlListMappingPathParams.prototype, "sid", void 0);
    return FetchSipAuthCallsIpAccessControlListMappingPathParams;
}(SpeakeasyBase));
export { FetchSipAuthCallsIpAccessControlListMappingPathParams };
var FetchSipAuthCallsIpAccessControlListMappingSecurity = /** @class */ (function (_super) {
    __extends(FetchSipAuthCallsIpAccessControlListMappingSecurity, _super);
    function FetchSipAuthCallsIpAccessControlListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSipAuthCallsIpAccessControlListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSipAuthCallsIpAccessControlListMappingSecurity;
}(SpeakeasyBase));
export { FetchSipAuthCallsIpAccessControlListMappingSecurity };
var FetchSipAuthCallsIpAccessControlListMappingRequest = /** @class */ (function (_super) {
    __extends(FetchSipAuthCallsIpAccessControlListMappingRequest, _super);
    function FetchSipAuthCallsIpAccessControlListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSipAuthCallsIpAccessControlListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSipAuthCallsIpAccessControlListMappingPathParams)
    ], FetchSipAuthCallsIpAccessControlListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSipAuthCallsIpAccessControlListMappingSecurity)
    ], FetchSipAuthCallsIpAccessControlListMappingRequest.prototype, "security", void 0);
    return FetchSipAuthCallsIpAccessControlListMappingRequest;
}(SpeakeasyBase));
export { FetchSipAuthCallsIpAccessControlListMappingRequest };
var FetchSipAuthCallsIpAccessControlListMappingResponse = /** @class */ (function (_super) {
    __extends(FetchSipAuthCallsIpAccessControlListMappingResponse, _super);
    function FetchSipAuthCallsIpAccessControlListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSipAuthCallsIpAccessControlListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSipAuthCallsIpAccessControlListMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping)
    ], FetchSipAuthCallsIpAccessControlListMappingResponse.prototype, "apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping", void 0);
    return FetchSipAuthCallsIpAccessControlListMappingResponse;
}(SpeakeasyBase));
export { FetchSipAuthCallsIpAccessControlListMappingResponse };
