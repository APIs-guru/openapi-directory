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
export var CreateSourceIpMappingServerList = [
    "https://voice.twilio.com",
];
var CreateSourceIpMappingCreateSourceIpMappingRequest = /** @class */ (function (_super) {
    __extends(CreateSourceIpMappingCreateSourceIpMappingRequest, _super);
    function CreateSourceIpMappingCreateSourceIpMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IpRecordSid;" }),
        __metadata("design:type", String)
    ], CreateSourceIpMappingCreateSourceIpMappingRequest.prototype, "ipRecordSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SipDomainSid;" }),
        __metadata("design:type", String)
    ], CreateSourceIpMappingCreateSourceIpMappingRequest.prototype, "sipDomainSid", void 0);
    return CreateSourceIpMappingCreateSourceIpMappingRequest;
}(SpeakeasyBase));
export { CreateSourceIpMappingCreateSourceIpMappingRequest };
var CreateSourceIpMappingSecurity = /** @class */ (function (_super) {
    __extends(CreateSourceIpMappingSecurity, _super);
    function CreateSourceIpMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSourceIpMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSourceIpMappingSecurity;
}(SpeakeasyBase));
export { CreateSourceIpMappingSecurity };
var CreateSourceIpMappingRequest = /** @class */ (function (_super) {
    __extends(CreateSourceIpMappingRequest, _super);
    function CreateSourceIpMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSourceIpMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSourceIpMappingCreateSourceIpMappingRequest)
    ], CreateSourceIpMappingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSourceIpMappingSecurity)
    ], CreateSourceIpMappingRequest.prototype, "security", void 0);
    return CreateSourceIpMappingRequest;
}(SpeakeasyBase));
export { CreateSourceIpMappingRequest };
var CreateSourceIpMappingResponse = /** @class */ (function (_super) {
    __extends(CreateSourceIpMappingResponse, _super);
    function CreateSourceIpMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSourceIpMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSourceIpMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VoiceV1SourceIpMapping)
    ], CreateSourceIpMappingResponse.prototype, "voiceV1SourceIpMapping", void 0);
    return CreateSourceIpMappingResponse;
}(SpeakeasyBase));
export { CreateSourceIpMappingResponse };
