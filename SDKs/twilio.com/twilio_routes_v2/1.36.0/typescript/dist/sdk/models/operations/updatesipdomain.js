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
export var UPDATESIPDOMAIN_SERVERS = [
    "https://routes.twilio.com",
];
var UpdateSipDomainPathParams = /** @class */ (function (_super) {
    __extends(UpdateSipDomainPathParams, _super);
    function UpdateSipDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=SipDomain" }),
        __metadata("design:type", String)
    ], UpdateSipDomainPathParams.prototype, "sipDomain", void 0);
    return UpdateSipDomainPathParams;
}(SpeakeasyBase));
export { UpdateSipDomainPathParams };
var UpdateSipDomainUpdateSipDomainRequest = /** @class */ (function (_super) {
    __extends(UpdateSipDomainUpdateSipDomainRequest, _super);
    function UpdateSipDomainUpdateSipDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceRegion;" }),
        __metadata("design:type", String)
    ], UpdateSipDomainUpdateSipDomainRequest.prototype, "voiceRegion", void 0);
    return UpdateSipDomainUpdateSipDomainRequest;
}(SpeakeasyBase));
export { UpdateSipDomainUpdateSipDomainRequest };
var UpdateSipDomainSecurity = /** @class */ (function (_super) {
    __extends(UpdateSipDomainSecurity, _super);
    function UpdateSipDomainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSipDomainSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSipDomainSecurity;
}(SpeakeasyBase));
export { UpdateSipDomainSecurity };
var UpdateSipDomainRequest = /** @class */ (function (_super) {
    __extends(UpdateSipDomainRequest, _super);
    function UpdateSipDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSipDomainRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSipDomainPathParams)
    ], UpdateSipDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSipDomainUpdateSipDomainRequest)
    ], UpdateSipDomainRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSipDomainSecurity)
    ], UpdateSipDomainRequest.prototype, "security", void 0);
    return UpdateSipDomainRequest;
}(SpeakeasyBase));
export { UpdateSipDomainRequest };
var UpdateSipDomainResponse = /** @class */ (function (_super) {
    __extends(UpdateSipDomainResponse, _super);
    function UpdateSipDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSipDomainResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSipDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RoutesV2SipDomain)
    ], UpdateSipDomainResponse.prototype, "routesV2SipDomain", void 0);
    return UpdateSipDomainResponse;
}(SpeakeasyBase));
export { UpdateSipDomainResponse };
