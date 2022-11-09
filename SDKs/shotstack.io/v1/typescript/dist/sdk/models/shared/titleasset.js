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
import { Offset } from "./offset";
export var TitleAssetPositionEnum;
(function (TitleAssetPositionEnum) {
    TitleAssetPositionEnum["Top"] = "top";
    TitleAssetPositionEnum["TopRight"] = "topRight";
    TitleAssetPositionEnum["Right"] = "right";
    TitleAssetPositionEnum["BottomRight"] = "bottomRight";
    TitleAssetPositionEnum["Bottom"] = "bottom";
    TitleAssetPositionEnum["BottomLeft"] = "bottomLeft";
    TitleAssetPositionEnum["Left"] = "left";
    TitleAssetPositionEnum["TopLeft"] = "topLeft";
    TitleAssetPositionEnum["Center"] = "center";
})(TitleAssetPositionEnum || (TitleAssetPositionEnum = {}));
export var TitleAssetSizeEnum;
(function (TitleAssetSizeEnum) {
    TitleAssetSizeEnum["XxSmall"] = "xx-small";
    TitleAssetSizeEnum["XSmall"] = "x-small";
    TitleAssetSizeEnum["Small"] = "small";
    TitleAssetSizeEnum["Medium"] = "medium";
    TitleAssetSizeEnum["Large"] = "large";
    TitleAssetSizeEnum["XLarge"] = "x-large";
    TitleAssetSizeEnum["XxLarge"] = "xx-large";
})(TitleAssetSizeEnum || (TitleAssetSizeEnum = {}));
export var TitleAssetStyleEnum;
(function (TitleAssetStyleEnum) {
    TitleAssetStyleEnum["Minimal"] = "minimal";
    TitleAssetStyleEnum["Blockbuster"] = "blockbuster";
    TitleAssetStyleEnum["Vogue"] = "vogue";
    TitleAssetStyleEnum["Sketchy"] = "sketchy";
    TitleAssetStyleEnum["Skinny"] = "skinny";
    TitleAssetStyleEnum["Chunk"] = "chunk";
    TitleAssetStyleEnum["ChunkLight"] = "chunkLight";
    TitleAssetStyleEnum["Marker"] = "marker";
    TitleAssetStyleEnum["Future"] = "future";
    TitleAssetStyleEnum["Subtitle"] = "subtitle";
})(TitleAssetStyleEnum || (TitleAssetStyleEnum = {}));
// TitleAsset
/**
 * The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning.
**/
var TitleAsset = /** @class */ (function (_super) {
    __extends(TitleAsset, _super);
    function TitleAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=background" }),
        __metadata("design:type", String)
    ], TitleAsset.prototype, "background", void 0);
    __decorate([
        Metadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], TitleAsset.prototype, "color", void 0);
    __decorate([
        Metadata({ data: "json, name=offset" }),
        __metadata("design:type", Offset)
    ], TitleAsset.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], TitleAsset.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], TitleAsset.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "json, name=style" }),
        __metadata("design:type", String)
    ], TitleAsset.prototype, "style", void 0);
    __decorate([
        Metadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], TitleAsset.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TitleAsset.prototype, "type", void 0);
    return TitleAsset;
}(SpeakeasyBase));
export { TitleAsset };
