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
export var PicoSettingsDtoAuthenticationTypeEnum;
(function (PicoSettingsDtoAuthenticationTypeEnum) {
    PicoSettingsDtoAuthenticationTypeEnum["None"] = "None";
    PicoSettingsDtoAuthenticationTypeEnum["Backend"] = "Backend";
})(PicoSettingsDtoAuthenticationTypeEnum || (PicoSettingsDtoAuthenticationTypeEnum = {}));
// PicoSettingsDto
/**
 * DTO for the pico charging station settings
**/
var PicoSettingsDto = /** @class */ (function (_super) {
    __extends(PicoSettingsDto, _super);
    function PicoSettingsDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthenticationType" }),
        __metadata("design:type", String)
    ], PicoSettingsDto.prototype, "authenticationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayBrightness" }),
        __metadata("design:type", String)
    ], PicoSettingsDto.prototype, "displayBrightness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsName" }),
        __metadata("design:type", String)
    ], PicoSettingsDto.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdleImageData" }),
        __metadata("design:type", String)
    ], PicoSettingsDto.prototype, "idleImageData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdleImageUrl" }),
        __metadata("design:type", String)
    ], PicoSettingsDto.prototype, "idleImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InternalIp" }),
        __metadata("design:type", String)
    ], PicoSettingsDto.prototype, "internalIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoadmanagementGroupId" }),
        __metadata("design:type", String)
    ], PicoSettingsDto.prototype, "loadmanagementGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxCurrent" }),
        __metadata("design:type", Number)
    ], PicoSettingsDto.prototype, "maxCurrent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinCurrent" }),
        __metadata("design:type", Number)
    ], PicoSettingsDto.prototype, "minCurrent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModbusTcp" }),
        __metadata("design:type", Boolean)
    ], PicoSettingsDto.prototype, "modbusTcp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], PicoSettingsDto.prototype, "name", void 0);
    return PicoSettingsDto;
}(SpeakeasyBase));
export { PicoSettingsDto };
