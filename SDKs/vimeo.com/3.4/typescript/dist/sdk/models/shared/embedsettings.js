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
// EmbedSettingsButtons
/**
 * A collection of information about the buttons that appear on the interface of the embeddable player.
**/
var EmbedSettingsButtons = /** @class */ (function (_super) {
    __extends(EmbedSettingsButtons, _super);
    function EmbedSettingsButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", Boolean)
    ], EmbedSettingsButtons.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullscreen" }),
        __metadata("design:type", Boolean)
    ], EmbedSettingsButtons.prototype, "fullscreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hd" }),
        __metadata("design:type", Boolean)
    ], EmbedSettingsButtons.prototype, "hd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like" }),
        __metadata("design:type", Boolean)
    ], EmbedSettingsButtons.prototype, "like", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaling" }),
        __metadata("design:type", Boolean)
    ], EmbedSettingsButtons.prototype, "scaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=share" }),
        __metadata("design:type", Boolean)
    ], EmbedSettingsButtons.prototype, "share", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", Boolean)
    ], EmbedSettingsButtons.prototype, "watchlater", void 0);
    return EmbedSettingsButtons;
}(SpeakeasyBase));
export { EmbedSettingsButtons };
// EmbedSettingsLogosCustom
/**
 * A collection of information relating to custom logos in the embeddable player.
**/
var EmbedSettingsLogosCustom = /** @class */ (function (_super) {
    __extends(EmbedSettingsLogosCustom, _super);
    function EmbedSettingsLogosCustom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], EmbedSettingsLogosCustom.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], EmbedSettingsLogosCustom.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky" }),
        __metadata("design:type", Boolean)
    ], EmbedSettingsLogosCustom.prototype, "sticky", void 0);
    return EmbedSettingsLogosCustom;
}(SpeakeasyBase));
export { EmbedSettingsLogosCustom };
// EmbedSettingsLogos
/**
 * A collection of information about the logo in the corner of the embeddable player.
**/
var EmbedSettingsLogos = /** @class */ (function (_super) {
    __extends(EmbedSettingsLogos, _super);
    function EmbedSettingsLogos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", EmbedSettingsLogosCustom)
    ], EmbedSettingsLogos.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vimeo" }),
        __metadata("design:type", Boolean)
    ], EmbedSettingsLogos.prototype, "vimeo", void 0);
    return EmbedSettingsLogos;
}(SpeakeasyBase));
export { EmbedSettingsLogos };
export var EmbedSettingsTitleNameEnum;
(function (EmbedSettingsTitleNameEnum) {
    EmbedSettingsTitleNameEnum["Hide"] = "hide";
    EmbedSettingsTitleNameEnum["Show"] = "show";
    EmbedSettingsTitleNameEnum["User"] = "user";
})(EmbedSettingsTitleNameEnum || (EmbedSettingsTitleNameEnum = {}));
export var EmbedSettingsTitleOwnerEnum;
(function (EmbedSettingsTitleOwnerEnum) {
    EmbedSettingsTitleOwnerEnum["Hide"] = "hide";
    EmbedSettingsTitleOwnerEnum["Show"] = "show";
    EmbedSettingsTitleOwnerEnum["User"] = "user";
})(EmbedSettingsTitleOwnerEnum || (EmbedSettingsTitleOwnerEnum = {}));
export var EmbedSettingsTitlePortraitEnum;
(function (EmbedSettingsTitlePortraitEnum) {
    EmbedSettingsTitlePortraitEnum["Hide"] = "hide";
    EmbedSettingsTitlePortraitEnum["Show"] = "show";
    EmbedSettingsTitlePortraitEnum["User"] = "user";
})(EmbedSettingsTitlePortraitEnum || (EmbedSettingsTitlePortraitEnum = {}));
// EmbedSettingsTitle
/**
 * A collection of information relating to the embeddable player's title bar.
**/
var EmbedSettingsTitle = /** @class */ (function (_super) {
    __extends(EmbedSettingsTitle, _super);
    function EmbedSettingsTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EmbedSettingsTitle.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], EmbedSettingsTitle.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portrait" }),
        __metadata("design:type", String)
    ], EmbedSettingsTitle.prototype, "portrait", void 0);
    return EmbedSettingsTitle;
}(SpeakeasyBase));
export { EmbedSettingsTitle };
var EmbedSettings = /** @class */ (function (_super) {
    __extends(EmbedSettings, _super);
    function EmbedSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buttons" }),
        __metadata("design:type", EmbedSettingsButtons)
    ], EmbedSettings.prototype, "buttons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], EmbedSettings.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logos" }),
        __metadata("design:type", EmbedSettingsLogos)
    ], EmbedSettings.prototype, "logos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playbar" }),
        __metadata("design:type", Boolean)
    ], EmbedSettings.prototype, "playbar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speed" }),
        __metadata("design:type", Boolean)
    ], EmbedSettings.prototype, "speed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", EmbedSettingsTitle)
    ], EmbedSettings.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], EmbedSettings.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume" }),
        __metadata("design:type", Boolean)
    ], EmbedSettings.prototype, "volume", void 0);
    return EmbedSettings;
}(SpeakeasyBase));
export { EmbedSettings };
