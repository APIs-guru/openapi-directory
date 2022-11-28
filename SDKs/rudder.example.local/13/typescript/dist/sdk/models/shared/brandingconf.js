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
import { Color } from "./color";
import { Logo } from "./logo";
var BrandingConf = /** @class */ (function (_super) {
    __extends(BrandingConf, _super);
    function BrandingConf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barColor" }),
        __metadata("design:type", Color)
    ], BrandingConf.prototype, "barColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayBar" }),
        __metadata("design:type", Boolean)
    ], BrandingConf.prototype, "displayBar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayBarLogin" }),
        __metadata("design:type", Boolean)
    ], BrandingConf.prototype, "displayBarLogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayLabel" }),
        __metadata("design:type", Boolean)
    ], BrandingConf.prototype, "displayLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayMotd" }),
        __metadata("design:type", Boolean)
    ], BrandingConf.prototype, "displayMotd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelColor" }),
        __metadata("design:type", Color)
    ], BrandingConf.prototype, "labelColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelText" }),
        __metadata("design:type", String)
    ], BrandingConf.prototype, "labelText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=motd" }),
        __metadata("design:type", String)
    ], BrandingConf.prototype, "motd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smallLogo" }),
        __metadata("design:type", Logo)
    ], BrandingConf.prototype, "smallLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wideLogo" }),
        __metadata("design:type", Logo)
    ], BrandingConf.prototype, "wideLogo", void 0);
    return BrandingConf;
}(SpeakeasyBase));
export { BrandingConf };
