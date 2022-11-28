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
export var FetchSipCredentialListMappingServerList = [
    "https://api.twilio.com",
];
var FetchSipCredentialListMappingPathParams = /** @class */ (function (_super) {
    __extends(FetchSipCredentialListMappingPathParams, _super);
    function FetchSipCredentialListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchSipCredentialListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], FetchSipCredentialListMappingPathParams.prototype, "domainSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSipCredentialListMappingPathParams.prototype, "sid", void 0);
    return FetchSipCredentialListMappingPathParams;
}(SpeakeasyBase));
export { FetchSipCredentialListMappingPathParams };
var FetchSipCredentialListMappingSecurity = /** @class */ (function (_super) {
    __extends(FetchSipCredentialListMappingSecurity, _super);
    function FetchSipCredentialListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSipCredentialListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSipCredentialListMappingSecurity;
}(SpeakeasyBase));
export { FetchSipCredentialListMappingSecurity };
var FetchSipCredentialListMappingRequest = /** @class */ (function (_super) {
    __extends(FetchSipCredentialListMappingRequest, _super);
    function FetchSipCredentialListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSipCredentialListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSipCredentialListMappingPathParams)
    ], FetchSipCredentialListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSipCredentialListMappingSecurity)
    ], FetchSipCredentialListMappingRequest.prototype, "security", void 0);
    return FetchSipCredentialListMappingRequest;
}(SpeakeasyBase));
export { FetchSipCredentialListMappingRequest };
var FetchSipCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(FetchSipCredentialListMappingResponse, _super);
    function FetchSipCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSipCredentialListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSipCredentialListMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipDomainSipCredentialListMapping)
    ], FetchSipCredentialListMappingResponse.prototype, "apiV2010AccountSipSipDomainSipCredentialListMapping", void 0);
    return FetchSipCredentialListMappingResponse;
}(SpeakeasyBase));
export { FetchSipCredentialListMappingResponse };
