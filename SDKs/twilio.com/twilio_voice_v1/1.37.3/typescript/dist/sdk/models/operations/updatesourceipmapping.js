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
export var UpdateSourceIpMappingServerList = [
    "https://voice.twilio.com",
];
var UpdateSourceIpMappingPathParams = /** @class */ (function (_super) {
    __extends(UpdateSourceIpMappingPathParams, _super);
    function UpdateSourceIpMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSourceIpMappingPathParams.prototype, "sid", void 0);
    return UpdateSourceIpMappingPathParams;
}(SpeakeasyBase));
export { UpdateSourceIpMappingPathParams };
var UpdateSourceIpMappingUpdateSourceIpMappingRequest = /** @class */ (function (_super) {
    __extends(UpdateSourceIpMappingUpdateSourceIpMappingRequest, _super);
    function UpdateSourceIpMappingUpdateSourceIpMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SipDomainSid;" }),
        __metadata("design:type", String)
    ], UpdateSourceIpMappingUpdateSourceIpMappingRequest.prototype, "sipDomainSid", void 0);
    return UpdateSourceIpMappingUpdateSourceIpMappingRequest;
}(SpeakeasyBase));
export { UpdateSourceIpMappingUpdateSourceIpMappingRequest };
var UpdateSourceIpMappingSecurity = /** @class */ (function (_super) {
    __extends(UpdateSourceIpMappingSecurity, _super);
    function UpdateSourceIpMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSourceIpMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSourceIpMappingSecurity;
}(SpeakeasyBase));
export { UpdateSourceIpMappingSecurity };
var UpdateSourceIpMappingRequest = /** @class */ (function (_super) {
    __extends(UpdateSourceIpMappingRequest, _super);
    function UpdateSourceIpMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSourceIpMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSourceIpMappingPathParams)
    ], UpdateSourceIpMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSourceIpMappingUpdateSourceIpMappingRequest)
    ], UpdateSourceIpMappingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSourceIpMappingSecurity)
    ], UpdateSourceIpMappingRequest.prototype, "security", void 0);
    return UpdateSourceIpMappingRequest;
}(SpeakeasyBase));
export { UpdateSourceIpMappingRequest };
var UpdateSourceIpMappingResponse = /** @class */ (function (_super) {
    __extends(UpdateSourceIpMappingResponse, _super);
    function UpdateSourceIpMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSourceIpMappingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSourceIpMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VoiceV1SourceIpMapping)
    ], UpdateSourceIpMappingResponse.prototype, "voiceV1SourceIpMapping", void 0);
    return UpdateSourceIpMappingResponse;
}(SpeakeasyBase));
export { UpdateSourceIpMappingResponse };
