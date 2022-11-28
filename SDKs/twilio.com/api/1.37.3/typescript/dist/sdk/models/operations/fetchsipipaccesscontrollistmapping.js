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
export var FetchSipIpAccessControlListMappingServerList = [
    "https://api.twilio.com",
];
var FetchSipIpAccessControlListMappingPathParams = /** @class */ (function (_super) {
    __extends(FetchSipIpAccessControlListMappingPathParams, _super);
    function FetchSipIpAccessControlListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchSipIpAccessControlListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], FetchSipIpAccessControlListMappingPathParams.prototype, "domainSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSipIpAccessControlListMappingPathParams.prototype, "sid", void 0);
    return FetchSipIpAccessControlListMappingPathParams;
}(SpeakeasyBase));
export { FetchSipIpAccessControlListMappingPathParams };
var FetchSipIpAccessControlListMappingSecurity = /** @class */ (function (_super) {
    __extends(FetchSipIpAccessControlListMappingSecurity, _super);
    function FetchSipIpAccessControlListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSipIpAccessControlListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSipIpAccessControlListMappingSecurity;
}(SpeakeasyBase));
export { FetchSipIpAccessControlListMappingSecurity };
var FetchSipIpAccessControlListMappingRequest = /** @class */ (function (_super) {
    __extends(FetchSipIpAccessControlListMappingRequest, _super);
    function FetchSipIpAccessControlListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSipIpAccessControlListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSipIpAccessControlListMappingPathParams)
    ], FetchSipIpAccessControlListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSipIpAccessControlListMappingSecurity)
    ], FetchSipIpAccessControlListMappingRequest.prototype, "security", void 0);
    return FetchSipIpAccessControlListMappingRequest;
}(SpeakeasyBase));
export { FetchSipIpAccessControlListMappingRequest };
var FetchSipIpAccessControlListMappingResponse = /** @class */ (function (_super) {
    __extends(FetchSipIpAccessControlListMappingResponse, _super);
    function FetchSipIpAccessControlListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSipIpAccessControlListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSipIpAccessControlListMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping)
    ], FetchSipIpAccessControlListMappingResponse.prototype, "apiV2010AccountSipSipDomainSipIpAccessControlListMapping", void 0);
    return FetchSipIpAccessControlListMappingResponse;
}(SpeakeasyBase));
export { FetchSipIpAccessControlListMappingResponse };
