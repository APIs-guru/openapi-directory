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
export var UpdateAccountSettingsServerList = [
    "https://insights.twilio.com",
];
var UpdateAccountSettingsUpdateAccountSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateAccountSettingsUpdateAccountSettingsRequest, _super);
    function UpdateAccountSettingsUpdateAccountSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AdvancedFeatures;" }),
        __metadata("design:type", Boolean)
    ], UpdateAccountSettingsUpdateAccountSettingsRequest.prototype, "advancedFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SubaccountSid;" }),
        __metadata("design:type", String)
    ], UpdateAccountSettingsUpdateAccountSettingsRequest.prototype, "subaccountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VoiceTrace;" }),
        __metadata("design:type", Boolean)
    ], UpdateAccountSettingsUpdateAccountSettingsRequest.prototype, "voiceTrace", void 0);
    return UpdateAccountSettingsUpdateAccountSettingsRequest;
}(SpeakeasyBase));
export { UpdateAccountSettingsUpdateAccountSettingsRequest };
var UpdateAccountSettingsSecurity = /** @class */ (function (_super) {
    __extends(UpdateAccountSettingsSecurity, _super);
    function UpdateAccountSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateAccountSettingsSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateAccountSettingsSecurity;
}(SpeakeasyBase));
export { UpdateAccountSettingsSecurity };
var UpdateAccountSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateAccountSettingsRequest, _super);
    function UpdateAccountSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAccountSettingsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateAccountSettingsUpdateAccountSettingsRequest)
    ], UpdateAccountSettingsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAccountSettingsSecurity)
    ], UpdateAccountSettingsRequest.prototype, "security", void 0);
    return UpdateAccountSettingsRequest;
}(SpeakeasyBase));
export { UpdateAccountSettingsRequest };
var UpdateAccountSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateAccountSettingsResponse, _super);
    function UpdateAccountSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAccountSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAccountSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InsightsV1AccountSettings)
    ], UpdateAccountSettingsResponse.prototype, "insightsV1AccountSettings", void 0);
    return UpdateAccountSettingsResponse;
}(SpeakeasyBase));
export { UpdateAccountSettingsResponse };
