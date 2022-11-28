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
export var CreateSipAuthCallsIpAccessControlListMappingServerList = [
    "https://api.twilio.com",
];
var CreateSipAuthCallsIpAccessControlListMappingPathParams = /** @class */ (function (_super) {
    __extends(CreateSipAuthCallsIpAccessControlListMappingPathParams, _super);
    function CreateSipAuthCallsIpAccessControlListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateSipAuthCallsIpAccessControlListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], CreateSipAuthCallsIpAccessControlListMappingPathParams.prototype, "domainSid", void 0);
    return CreateSipAuthCallsIpAccessControlListMappingPathParams;
}(SpeakeasyBase));
export { CreateSipAuthCallsIpAccessControlListMappingPathParams };
var CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest = /** @class */ (function (_super) {
    __extends(CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest, _super);
    function CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IpAccessControlListSid;" }),
        __metadata("design:type", String)
    ], CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest.prototype, "ipAccessControlListSid", void 0);
    return CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest;
}(SpeakeasyBase));
export { CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest };
var CreateSipAuthCallsIpAccessControlListMappingSecurity = /** @class */ (function (_super) {
    __extends(CreateSipAuthCallsIpAccessControlListMappingSecurity, _super);
    function CreateSipAuthCallsIpAccessControlListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSipAuthCallsIpAccessControlListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSipAuthCallsIpAccessControlListMappingSecurity;
}(SpeakeasyBase));
export { CreateSipAuthCallsIpAccessControlListMappingSecurity };
var CreateSipAuthCallsIpAccessControlListMappingRequest = /** @class */ (function (_super) {
    __extends(CreateSipAuthCallsIpAccessControlListMappingRequest, _super);
    function CreateSipAuthCallsIpAccessControlListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSipAuthCallsIpAccessControlListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSipAuthCallsIpAccessControlListMappingPathParams)
    ], CreateSipAuthCallsIpAccessControlListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest)
    ], CreateSipAuthCallsIpAccessControlListMappingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSipAuthCallsIpAccessControlListMappingSecurity)
    ], CreateSipAuthCallsIpAccessControlListMappingRequest.prototype, "security", void 0);
    return CreateSipAuthCallsIpAccessControlListMappingRequest;
}(SpeakeasyBase));
export { CreateSipAuthCallsIpAccessControlListMappingRequest };
var CreateSipAuthCallsIpAccessControlListMappingResponse = /** @class */ (function (_super) {
    __extends(CreateSipAuthCallsIpAccessControlListMappingResponse, _super);
    function CreateSipAuthCallsIpAccessControlListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSipAuthCallsIpAccessControlListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSipAuthCallsIpAccessControlListMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping)
    ], CreateSipAuthCallsIpAccessControlListMappingResponse.prototype, "apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping", void 0);
    return CreateSipAuthCallsIpAccessControlListMappingResponse;
}(SpeakeasyBase));
export { CreateSipAuthCallsIpAccessControlListMappingResponse };
