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
export var CreateParticipantServerList = [
    "https://proxy.twilio.com",
];
var CreateParticipantPathParams = /** @class */ (function (_super) {
    __extends(CreateParticipantPathParams, _super);
    function CreateParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateParticipantPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" }),
        __metadata("design:type", String)
    ], CreateParticipantPathParams.prototype, "sessionSid", void 0);
    return CreateParticipantPathParams;
}(SpeakeasyBase));
export { CreateParticipantPathParams };
var CreateParticipantCreateParticipantRequest = /** @class */ (function (_super) {
    __extends(CreateParticipantCreateParticipantRequest, _super);
    function CreateParticipantCreateParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Identifier;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ProxyIdentifier;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "proxyIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ProxyIdentifierSid;" }),
        __metadata("design:type", String)
    ], CreateParticipantCreateParticipantRequest.prototype, "proxyIdentifierSid", void 0);
    return CreateParticipantCreateParticipantRequest;
}(SpeakeasyBase));
export { CreateParticipantCreateParticipantRequest };
var CreateParticipantSecurity = /** @class */ (function (_super) {
    __extends(CreateParticipantSecurity, _super);
    function CreateParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateParticipantSecurity;
}(SpeakeasyBase));
export { CreateParticipantSecurity };
var CreateParticipantRequest = /** @class */ (function (_super) {
    __extends(CreateParticipantRequest, _super);
    function CreateParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateParticipantPathParams)
    ], CreateParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateParticipantCreateParticipantRequest)
    ], CreateParticipantRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateParticipantSecurity)
    ], CreateParticipantRequest.prototype, "security", void 0);
    return CreateParticipantRequest;
}(SpeakeasyBase));
export { CreateParticipantRequest };
var CreateParticipantResponse = /** @class */ (function (_super) {
    __extends(CreateParticipantResponse, _super);
    function CreateParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProxyV1ServiceSessionParticipant)
    ], CreateParticipantResponse.prototype, "proxyV1ServiceSessionParticipant", void 0);
    return CreateParticipantResponse;
}(SpeakeasyBase));
export { CreateParticipantResponse };
