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
export var UPDATEDIALINGPERMISSIONSSETTINGS_SERVERS = [
    "https://voice.twilio.com",
];
var UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest, _super);
    function UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=DialingPermissionsInheritance;" }),
        __metadata("design:type", Boolean)
    ], UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest.prototype, "dialingPermissionsInheritance", void 0);
    return UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest;
}(SpeakeasyBase));
export { UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest };
var UpdateDialingPermissionsSettingsSecurity = /** @class */ (function (_super) {
    __extends(UpdateDialingPermissionsSettingsSecurity, _super);
    function UpdateDialingPermissionsSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDialingPermissionsSettingsSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDialingPermissionsSettingsSecurity;
}(SpeakeasyBase));
export { UpdateDialingPermissionsSettingsSecurity };
var UpdateDialingPermissionsSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateDialingPermissionsSettingsRequest, _super);
    function UpdateDialingPermissionsSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDialingPermissionsSettingsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest)
    ], UpdateDialingPermissionsSettingsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDialingPermissionsSettingsSecurity)
    ], UpdateDialingPermissionsSettingsRequest.prototype, "security", void 0);
    return UpdateDialingPermissionsSettingsRequest;
}(SpeakeasyBase));
export { UpdateDialingPermissionsSettingsRequest };
var UpdateDialingPermissionsSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateDialingPermissionsSettingsResponse, _super);
    function UpdateDialingPermissionsSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDialingPermissionsSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDialingPermissionsSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VoiceV1DialingPermissionsDialingPermissionsSettings)
    ], UpdateDialingPermissionsSettingsResponse.prototype, "voiceV1DialingPermissionsDialingPermissionsSettings", void 0);
    return UpdateDialingPermissionsSettingsResponse;
}(SpeakeasyBase));
export { UpdateDialingPermissionsSettingsResponse };
