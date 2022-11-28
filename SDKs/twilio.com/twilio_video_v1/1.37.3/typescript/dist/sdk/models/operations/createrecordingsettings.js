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
export var CreateRecordingSettingsServerList = [
    "https://video.twilio.com",
];
var CreateRecordingSettingsCreateRecordingSettingsRequest = /** @class */ (function (_super) {
    __extends(CreateRecordingSettingsCreateRecordingSettingsRequest, _super);
    function CreateRecordingSettingsCreateRecordingSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AwsCredentialsSid;" }),
        __metadata("design:type", String)
    ], CreateRecordingSettingsCreateRecordingSettingsRequest.prototype, "awsCredentialsSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AwsS3Url;" }),
        __metadata("design:type", String)
    ], CreateRecordingSettingsCreateRecordingSettingsRequest.prototype, "awsS3Url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AwsStorageEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateRecordingSettingsCreateRecordingSettingsRequest.prototype, "awsStorageEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EncryptionEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateRecordingSettingsCreateRecordingSettingsRequest.prototype, "encryptionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EncryptionKeySid;" }),
        __metadata("design:type", String)
    ], CreateRecordingSettingsCreateRecordingSettingsRequest.prototype, "encryptionKeySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateRecordingSettingsCreateRecordingSettingsRequest.prototype, "friendlyName", void 0);
    return CreateRecordingSettingsCreateRecordingSettingsRequest;
}(SpeakeasyBase));
export { CreateRecordingSettingsCreateRecordingSettingsRequest };
var CreateRecordingSettingsSecurity = /** @class */ (function (_super) {
    __extends(CreateRecordingSettingsSecurity, _super);
    function CreateRecordingSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateRecordingSettingsSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateRecordingSettingsSecurity;
}(SpeakeasyBase));
export { CreateRecordingSettingsSecurity };
var CreateRecordingSettingsRequest = /** @class */ (function (_super) {
    __extends(CreateRecordingSettingsRequest, _super);
    function CreateRecordingSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRecordingSettingsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateRecordingSettingsCreateRecordingSettingsRequest)
    ], CreateRecordingSettingsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRecordingSettingsSecurity)
    ], CreateRecordingSettingsRequest.prototype, "security", void 0);
    return CreateRecordingSettingsRequest;
}(SpeakeasyBase));
export { CreateRecordingSettingsRequest };
var CreateRecordingSettingsResponse = /** @class */ (function (_super) {
    __extends(CreateRecordingSettingsResponse, _super);
    function CreateRecordingSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRecordingSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRecordingSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideoV1RecordingSettings)
    ], CreateRecordingSettingsResponse.prototype, "videoV1RecordingSettings", void 0);
    return CreateRecordingSettingsResponse;
}(SpeakeasyBase));
export { CreateRecordingSettingsResponse };
