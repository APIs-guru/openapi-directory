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
export var HtmlAssetPositionEnum;
(function (HtmlAssetPositionEnum) {
    HtmlAssetPositionEnum["Top"] = "top";
    HtmlAssetPositionEnum["TopRight"] = "topRight";
    HtmlAssetPositionEnum["Right"] = "right";
    HtmlAssetPositionEnum["BottomRight"] = "bottomRight";
    HtmlAssetPositionEnum["Bottom"] = "bottom";
    HtmlAssetPositionEnum["BottomLeft"] = "bottomLeft";
    HtmlAssetPositionEnum["Left"] = "left";
    HtmlAssetPositionEnum["TopLeft"] = "topLeft";
    HtmlAssetPositionEnum["Center"] = "center";
})(HtmlAssetPositionEnum || (HtmlAssetPositionEnum = {}));
// HtmlAsset
/**
 * The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box.
**/
var HtmlAsset = /** @class */ (function (_super) {
    __extends(HtmlAsset, _super);
    function HtmlAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=background" }),
        __metadata("design:type", String)
    ], HtmlAsset.prototype, "background", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=css" }),
        __metadata("design:type", String)
    ], HtmlAsset.prototype, "css", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], HtmlAsset.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], HtmlAsset.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], HtmlAsset.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], HtmlAsset.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], HtmlAsset.prototype, "width", void 0);
    return HtmlAsset;
}(SpeakeasyBase));
export { HtmlAsset };
