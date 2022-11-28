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
var PictureSizes = /** @class */ (function (_super) {
    __extends(PictureSizes, _super);
    function PictureSizes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], PictureSizes.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], PictureSizes.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_with_play_button" }),
        __metadata("design:type", String)
    ], PictureSizes.prototype, "linkWithPlayButton", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], PictureSizes.prototype, "width", void 0);
    return PictureSizes;
}(SpeakeasyBase));
export { PictureSizes };
export var PictureTypeEnum;
(function (PictureTypeEnum) {
    PictureTypeEnum["Caution"] = "caution";
    PictureTypeEnum["Custom"] = "custom";
    PictureTypeEnum["Default"] = "default";
})(PictureTypeEnum || (PictureTypeEnum = {}));
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Picture.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Picture.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], Picture.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizes", elemType: PictureSizes }),
        __metadata("design:type", Array)
    ], Picture.prototype, "sizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Picture.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Picture.prototype, "uri", void 0);
    return Picture;
}(SpeakeasyBase));
export { Picture };
