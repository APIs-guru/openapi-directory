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
export var UPDATEIPRECORD_SERVERS = [
    "https://voice.twilio.com",
];
var UpdateIpRecordPathParams = /** @class */ (function (_super) {
    __extends(UpdateIpRecordPathParams, _super);
    function UpdateIpRecordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateIpRecordPathParams.prototype, "sid", void 0);
    return UpdateIpRecordPathParams;
}(SpeakeasyBase));
export { UpdateIpRecordPathParams };
var UpdateIpRecordUpdateIpRecordRequest = /** @class */ (function (_super) {
    __extends(UpdateIpRecordUpdateIpRecordRequest, _super);
    function UpdateIpRecordUpdateIpRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateIpRecordUpdateIpRecordRequest.prototype, "friendlyName", void 0);
    return UpdateIpRecordUpdateIpRecordRequest;
}(SpeakeasyBase));
export { UpdateIpRecordUpdateIpRecordRequest };
var UpdateIpRecordSecurity = /** @class */ (function (_super) {
    __extends(UpdateIpRecordSecurity, _super);
    function UpdateIpRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateIpRecordSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateIpRecordSecurity;
}(SpeakeasyBase));
export { UpdateIpRecordSecurity };
var UpdateIpRecordRequest = /** @class */ (function (_super) {
    __extends(UpdateIpRecordRequest, _super);
    function UpdateIpRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateIpRecordRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateIpRecordPathParams)
    ], UpdateIpRecordRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateIpRecordUpdateIpRecordRequest)
    ], UpdateIpRecordRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateIpRecordSecurity)
    ], UpdateIpRecordRequest.prototype, "security", void 0);
    return UpdateIpRecordRequest;
}(SpeakeasyBase));
export { UpdateIpRecordRequest };
var UpdateIpRecordResponse = /** @class */ (function (_super) {
    __extends(UpdateIpRecordResponse, _super);
    function UpdateIpRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateIpRecordResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateIpRecordResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VoiceV1IpRecord)
    ], UpdateIpRecordResponse.prototype, "voiceV1IpRecord", void 0);
    return UpdateIpRecordResponse;
}(SpeakeasyBase));
export { UpdateIpRecordResponse };
