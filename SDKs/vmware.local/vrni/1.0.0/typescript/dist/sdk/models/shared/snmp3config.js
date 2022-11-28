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
export var Snmp3ConfigAuthenticationTypeEnum;
(function (Snmp3ConfigAuthenticationTypeEnum) {
    Snmp3ConfigAuthenticationTypeEnum["NoAuth"] = "NO_AUTH";
    Snmp3ConfigAuthenticationTypeEnum["Md5"] = "MD5";
    Snmp3ConfigAuthenticationTypeEnum["Sha"] = "SHA";
})(Snmp3ConfigAuthenticationTypeEnum || (Snmp3ConfigAuthenticationTypeEnum = {}));
export var Snmp3ConfigPrivacyTypeEnum;
(function (Snmp3ConfigPrivacyTypeEnum) {
    Snmp3ConfigPrivacyTypeEnum["Aes"] = "AES";
    Snmp3ConfigPrivacyTypeEnum["Des"] = "DES";
    Snmp3ConfigPrivacyTypeEnum["Aes128"] = "AES128";
    Snmp3ConfigPrivacyTypeEnum["Aes192"] = "AES192";
    Snmp3ConfigPrivacyTypeEnum["Aes256"] = "AES256";
    Snmp3ConfigPrivacyTypeEnum["ThreeDes"] = "3DES";
    Snmp3ConfigPrivacyTypeEnum["NoPriv"] = "NO_PRIV";
})(Snmp3ConfigPrivacyTypeEnum || (Snmp3ConfigPrivacyTypeEnum = {}));
var Snmp3Config = /** @class */ (function (_super) {
    __extends(Snmp3Config, _super);
    function Snmp3Config() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication_password" }),
        __metadata("design:type", String)
    ], Snmp3Config.prototype, "authenticationPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication_type" }),
        __metadata("design:type", String)
    ], Snmp3Config.prototype, "authenticationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context_name" }),
        __metadata("design:type", String)
    ], Snmp3Config.prototype, "contextName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy_password" }),
        __metadata("design:type", String)
    ], Snmp3Config.prototype, "privacyPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy_type" }),
        __metadata("design:type", String)
    ], Snmp3Config.prototype, "privacyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], Snmp3Config.prototype, "username", void 0);
    return Snmp3Config;
}(SpeakeasyBase));
export { Snmp3Config };
