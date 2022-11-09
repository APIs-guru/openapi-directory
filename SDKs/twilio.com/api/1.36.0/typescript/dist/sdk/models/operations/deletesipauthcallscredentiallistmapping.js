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
export var DELETESIPAUTHCALLSCREDENTIALLISTMAPPING_SERVERS = [
    "https://api.twilio.com",
];
var DeleteSipAuthCallsCredentialListMappingPathParams = /** @class */ (function (_super) {
    __extends(DeleteSipAuthCallsCredentialListMappingPathParams, _super);
    function DeleteSipAuthCallsCredentialListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], DeleteSipAuthCallsCredentialListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], DeleteSipAuthCallsCredentialListMappingPathParams.prototype, "domainSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteSipAuthCallsCredentialListMappingPathParams.prototype, "sid", void 0);
    return DeleteSipAuthCallsCredentialListMappingPathParams;
}(SpeakeasyBase));
export { DeleteSipAuthCallsCredentialListMappingPathParams };
var DeleteSipAuthCallsCredentialListMappingSecurity = /** @class */ (function (_super) {
    __extends(DeleteSipAuthCallsCredentialListMappingSecurity, _super);
    function DeleteSipAuthCallsCredentialListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSipAuthCallsCredentialListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSipAuthCallsCredentialListMappingSecurity;
}(SpeakeasyBase));
export { DeleteSipAuthCallsCredentialListMappingSecurity };
var DeleteSipAuthCallsCredentialListMappingRequest = /** @class */ (function (_super) {
    __extends(DeleteSipAuthCallsCredentialListMappingRequest, _super);
    function DeleteSipAuthCallsCredentialListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSipAuthCallsCredentialListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSipAuthCallsCredentialListMappingPathParams)
    ], DeleteSipAuthCallsCredentialListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSipAuthCallsCredentialListMappingSecurity)
    ], DeleteSipAuthCallsCredentialListMappingRequest.prototype, "security", void 0);
    return DeleteSipAuthCallsCredentialListMappingRequest;
}(SpeakeasyBase));
export { DeleteSipAuthCallsCredentialListMappingRequest };
var DeleteSipAuthCallsCredentialListMappingResponse = /** @class */ (function (_super) {
    __extends(DeleteSipAuthCallsCredentialListMappingResponse, _super);
    function DeleteSipAuthCallsCredentialListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSipAuthCallsCredentialListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSipAuthCallsCredentialListMappingResponse.prototype, "statusCode", void 0);
    return DeleteSipAuthCallsCredentialListMappingResponse;
}(SpeakeasyBase));
export { DeleteSipAuthCallsCredentialListMappingResponse };
