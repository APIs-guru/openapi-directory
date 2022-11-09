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
export var CREATESIPIPACCESSCONTROLLISTMAPPING_SERVERS = [
    "https://api.twilio.com",
];
var CreateSipIpAccessControlListMappingPathParams = /** @class */ (function (_super) {
    __extends(CreateSipIpAccessControlListMappingPathParams, _super);
    function CreateSipIpAccessControlListMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateSipIpAccessControlListMappingPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" }),
        __metadata("design:type", String)
    ], CreateSipIpAccessControlListMappingPathParams.prototype, "domainSid", void 0);
    return CreateSipIpAccessControlListMappingPathParams;
}(SpeakeasyBase));
export { CreateSipIpAccessControlListMappingPathParams };
var CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest = /** @class */ (function (_super) {
    __extends(CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest, _super);
    function CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=IpAccessControlListSid;" }),
        __metadata("design:type", String)
    ], CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest.prototype, "ipAccessControlListSid", void 0);
    return CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest;
}(SpeakeasyBase));
export { CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest };
var CreateSipIpAccessControlListMappingSecurity = /** @class */ (function (_super) {
    __extends(CreateSipIpAccessControlListMappingSecurity, _super);
    function CreateSipIpAccessControlListMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSipIpAccessControlListMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSipIpAccessControlListMappingSecurity;
}(SpeakeasyBase));
export { CreateSipIpAccessControlListMappingSecurity };
var CreateSipIpAccessControlListMappingRequest = /** @class */ (function (_super) {
    __extends(CreateSipIpAccessControlListMappingRequest, _super);
    function CreateSipIpAccessControlListMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSipIpAccessControlListMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSipIpAccessControlListMappingPathParams)
    ], CreateSipIpAccessControlListMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest)
    ], CreateSipIpAccessControlListMappingRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSipIpAccessControlListMappingSecurity)
    ], CreateSipIpAccessControlListMappingRequest.prototype, "security", void 0);
    return CreateSipIpAccessControlListMappingRequest;
}(SpeakeasyBase));
export { CreateSipIpAccessControlListMappingRequest };
var CreateSipIpAccessControlListMappingResponse = /** @class */ (function (_super) {
    __extends(CreateSipIpAccessControlListMappingResponse, _super);
    function CreateSipIpAccessControlListMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSipIpAccessControlListMappingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSipIpAccessControlListMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping)
    ], CreateSipIpAccessControlListMappingResponse.prototype, "apiV2010AccountSipSipDomainSipIpAccessControlListMapping", void 0);
    return CreateSipIpAccessControlListMappingResponse;
}(SpeakeasyBase));
export { CreateSipIpAccessControlListMappingResponse };
