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
import { Transition } from "./transition";
export var ClipEffectEnum;
(function (ClipEffectEnum) {
    ClipEffectEnum["ZoomIn"] = "zoomIn";
    ClipEffectEnum["ZoomOut"] = "zoomOut";
    ClipEffectEnum["SlideLeft"] = "slideLeft";
    ClipEffectEnum["SlideRight"] = "slideRight";
    ClipEffectEnum["SlideUp"] = "slideUp";
    ClipEffectEnum["SlideDown"] = "slideDown";
})(ClipEffectEnum || (ClipEffectEnum = {}));
export var ClipFilterEnum;
(function (ClipFilterEnum) {
    ClipFilterEnum["Boost"] = "boost";
    ClipFilterEnum["Contrast"] = "contrast";
    ClipFilterEnum["Darken"] = "darken";
    ClipFilterEnum["Greyscale"] = "greyscale";
    ClipFilterEnum["Lighten"] = "lighten";
    ClipFilterEnum["Muted"] = "muted";
    ClipFilterEnum["Negative"] = "negative";
})(ClipFilterEnum || (ClipFilterEnum = {}));
export var ClipFitEnum;
(function (ClipFitEnum) {
    ClipFitEnum["Cover"] = "cover";
    ClipFitEnum["Contain"] = "contain";
    ClipFitEnum["Crop"] = "crop";
    ClipFitEnum["None"] = "none";
})(ClipFitEnum || (ClipFitEnum = {}));
export var ClipPositionEnum;
(function (ClipPositionEnum) {
    ClipPositionEnum["Top"] = "top";
    ClipPositionEnum["TopRight"] = "topRight";
    ClipPositionEnum["Right"] = "right";
    ClipPositionEnum["BottomRight"] = "bottomRight";
    ClipPositionEnum["Bottom"] = "bottom";
    ClipPositionEnum["BottomLeft"] = "bottomLeft";
    ClipPositionEnum["Left"] = "left";
    ClipPositionEnum["TopLeft"] = "topLeft";
    ClipPositionEnum["Center"] = "center";
})(ClipPositionEnum || (ClipPositionEnum = {}));
// Clip
/**
 * A clip is a container for a specific type of asset, i.e. a title, image, video, audio or html. You use a Clip to define when an asset will display on the timeline, how long it will play for and transitions, filters and effects to apply to it.
**/
var Clip = /** @class */ (function (_super) {
    __extends(Clip, _super);
    function Clip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=asset" }),
        __metadata("design:type", Object)
    ], Clip.prototype, "asset", void 0);
    __decorate([
        Metadata({ data: "json, name=effect" }),
        __metadata("design:type", String)
    ], Clip.prototype, "effect", void 0);
    __decorate([
        Metadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], Clip.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "json, name=fit" }),
        __metadata("design:type", String)
    ], Clip.prototype, "fit", void 0);
    __decorate([
        Metadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], Clip.prototype, "length", void 0);
    __decorate([
        Metadata({ data: "json, name=offset" }),
        __metadata("design:type", Offset)
    ], Clip.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "json, name=opacity" }),
        __metadata("design:type", Number)
    ], Clip.prototype, "opacity", void 0);
    __decorate([
        Metadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], Clip.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "json, name=scale" }),
        __metadata("design:type", Number)
    ], Clip.prototype, "scale", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], Clip.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=transition" }),
        __metadata("design:type", Transition)
    ], Clip.prototype, "transition", void 0);
    return Clip;
}(SpeakeasyBase));
export { Clip };
