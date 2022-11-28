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
export var TransitionInEnum;
(function (TransitionInEnum) {
    TransitionInEnum["Fade"] = "fade";
    TransitionInEnum["FadeSlow"] = "fadeSlow";
    TransitionInEnum["FadeFast"] = "fadeFast";
    TransitionInEnum["Reveal"] = "reveal";
    TransitionInEnum["RevealSlow"] = "revealSlow";
    TransitionInEnum["RevealFast"] = "revealFast";
    TransitionInEnum["WipeLeft"] = "wipeLeft";
    TransitionInEnum["WipeLeftSlow"] = "wipeLeftSlow";
    TransitionInEnum["WipeLeftFast"] = "wipeLeftFast";
    TransitionInEnum["WipeRight"] = "wipeRight";
    TransitionInEnum["WipeRightSlow"] = "wipeRightSlow";
    TransitionInEnum["WipeRightFast"] = "wipeRightFast";
    TransitionInEnum["SlideLeft"] = "slideLeft";
    TransitionInEnum["SlideLeftSlow"] = "slideLeftSlow";
    TransitionInEnum["SlideLeftFast"] = "slideLeftFast";
    TransitionInEnum["SlideRight"] = "slideRight";
    TransitionInEnum["SlideRightSlow"] = "slideRightSlow";
    TransitionInEnum["SlideRightFast"] = "slideRightFast";
    TransitionInEnum["SlideUp"] = "slideUp";
    TransitionInEnum["SlideUpSlow"] = "slideUpSlow";
    TransitionInEnum["SlideUpFast"] = "slideUpFast";
    TransitionInEnum["SlideDown"] = "slideDown";
    TransitionInEnum["SlideDownSlow"] = "slideDownSlow";
    TransitionInEnum["SlideDownFast"] = "slideDownFast";
    TransitionInEnum["CarouselLeft"] = "carouselLeft";
    TransitionInEnum["CarouselLeftSlow"] = "carouselLeftSlow";
    TransitionInEnum["CarouselLeftFast"] = "carouselLeftFast";
    TransitionInEnum["CarouselRight"] = "carouselRight";
    TransitionInEnum["CarouselRightSlow"] = "carouselRightSlow";
    TransitionInEnum["CarouselRightFast"] = "carouselRightFast";
    TransitionInEnum["CarouselUp"] = "carouselUp";
    TransitionInEnum["CarouselUpSlow"] = "carouselUpSlow";
    TransitionInEnum["CarouselUpFast"] = "carouselUpFast";
    TransitionInEnum["CarouselDown"] = "carouselDown";
    TransitionInEnum["CarouselDownSlow"] = "carouselDownSlow";
    TransitionInEnum["CarouselDownFast"] = "carouselDownFast";
    TransitionInEnum["ShuffleTopRight"] = "shuffleTopRight";
    TransitionInEnum["ShuffleTopRightSlow"] = "shuffleTopRightSlow";
    TransitionInEnum["ShuffleTopRightFast"] = "shuffleTopRightFast";
    TransitionInEnum["ShuffleRightTop"] = "shuffleRightTop";
    TransitionInEnum["ShuffleRightTopSlow"] = "shuffleRightTopSlow";
    TransitionInEnum["ShuffleRightTopFast"] = "shuffleRightTopFast";
    TransitionInEnum["ShuffleRightBottom"] = "shuffleRightBottom";
    TransitionInEnum["ShuffleRightBottomSlow"] = "shuffleRightBottomSlow";
    TransitionInEnum["ShuffleRightBottomFast"] = "shuffleRightBottomFast";
    TransitionInEnum["ShuffleBottomRight"] = "shuffleBottomRight";
    TransitionInEnum["ShuffleBottomRightSlow"] = "shuffleBottomRightSlow";
    TransitionInEnum["ShuffleBottomRightFast"] = "shuffleBottomRightFast";
    TransitionInEnum["ShuffleBottomLeft"] = "shuffleBottomLeft";
    TransitionInEnum["ShuffleBottomLeftSlow"] = "shuffleBottomLeftSlow";
    TransitionInEnum["ShuffleBottomLeftFast"] = "shuffleBottomLeftFast";
    TransitionInEnum["ShuffleLeftBottom"] = "shuffleLeftBottom";
    TransitionInEnum["ShuffleLeftBottomSlow"] = "shuffleLeftBottomSlow";
    TransitionInEnum["ShuffleLeftBottomFast"] = "shuffleLeftBottomFast";
    TransitionInEnum["ShuffleLeftTop"] = "shuffleLeftTop";
    TransitionInEnum["ShuffleLeftTopSlow"] = "shuffleLeftTopSlow";
    TransitionInEnum["ShuffleLeftTopFast"] = "shuffleLeftTopFast";
    TransitionInEnum["ShuffleTopLeft"] = "shuffleTopLeft";
    TransitionInEnum["ShuffleTopLeftSlow"] = "shuffleTopLeftSlow";
    TransitionInEnum["ShuffleTopLeftFast"] = "shuffleTopLeftFast";
    TransitionInEnum["Zoom"] = "zoom";
})(TransitionInEnum || (TransitionInEnum = {}));
export var TransitionOutEnum;
(function (TransitionOutEnum) {
    TransitionOutEnum["Fade"] = "fade";
    TransitionOutEnum["FadeSlow"] = "fadeSlow";
    TransitionOutEnum["FadeFast"] = "fadeFast";
    TransitionOutEnum["Reveal"] = "reveal";
    TransitionOutEnum["RevealSlow"] = "revealSlow";
    TransitionOutEnum["RevealFast"] = "revealFast";
    TransitionOutEnum["WipeLeft"] = "wipeLeft";
    TransitionOutEnum["WipeLeftSlow"] = "wipeLeftSlow";
    TransitionOutEnum["WipeLeftFast"] = "wipeLeftFast";
    TransitionOutEnum["WipeRight"] = "wipeRight";
    TransitionOutEnum["WipeRightSlow"] = "wipeRightSlow";
    TransitionOutEnum["WipeRightFast"] = "wipeRightFast";
    TransitionOutEnum["SlideLeft"] = "slideLeft";
    TransitionOutEnum["SlideLeftSlow"] = "slideLeftSlow";
    TransitionOutEnum["SlideLeftFast"] = "slideLeftFast";
    TransitionOutEnum["SlideRight"] = "slideRight";
    TransitionOutEnum["SlideRightSlow"] = "slideRightSlow";
    TransitionOutEnum["SlideRightFast"] = "slideRightFast";
    TransitionOutEnum["SlideUp"] = "slideUp";
    TransitionOutEnum["SlideUpSlow"] = "slideUpSlow";
    TransitionOutEnum["SlideUpFast"] = "slideUpFast";
    TransitionOutEnum["SlideDown"] = "slideDown";
    TransitionOutEnum["SlideDownSlow"] = "slideDownSlow";
    TransitionOutEnum["SlideDownFast"] = "slideDownFast";
    TransitionOutEnum["CarouselLeft"] = "carouselLeft";
    TransitionOutEnum["CarouselLeftSlow"] = "carouselLeftSlow";
    TransitionOutEnum["CarouselLeftFast"] = "carouselLeftFast";
    TransitionOutEnum["CarouselRight"] = "carouselRight";
    TransitionOutEnum["CarouselRightSlow"] = "carouselRightSlow";
    TransitionOutEnum["CarouselRightFast"] = "carouselRightFast";
    TransitionOutEnum["CarouselUp"] = "carouselUp";
    TransitionOutEnum["CarouselUpSlow"] = "carouselUpSlow";
    TransitionOutEnum["CarouselUpFast"] = "carouselUpFast";
    TransitionOutEnum["CarouselDown"] = "carouselDown";
    TransitionOutEnum["CarouselDownSlow"] = "carouselDownSlow";
    TransitionOutEnum["CarouselDownFast"] = "carouselDownFast";
    TransitionOutEnum["ShuffleTopRight"] = "shuffleTopRight";
    TransitionOutEnum["ShuffleTopRightSlow"] = "shuffleTopRightSlow";
    TransitionOutEnum["ShuffleTopRightFast"] = "shuffleTopRightFast";
    TransitionOutEnum["ShuffleRightTop"] = "shuffleRightTop";
    TransitionOutEnum["ShuffleRightTopSlow"] = "shuffleRightTopSlow";
    TransitionOutEnum["ShuffleRightTopFast"] = "shuffleRightTopFast";
    TransitionOutEnum["ShuffleRightBottom"] = "shuffleRightBottom";
    TransitionOutEnum["ShuffleRightBottomSlow"] = "shuffleRightBottomSlow";
    TransitionOutEnum["ShuffleRightBottomFast"] = "shuffleRightBottomFast";
    TransitionOutEnum["ShuffleBottomRight"] = "shuffleBottomRight";
    TransitionOutEnum["ShuffleBottomRightSlow"] = "shuffleBottomRightSlow";
    TransitionOutEnum["ShuffleBottomRightFast"] = "shuffleBottomRightFast";
    TransitionOutEnum["ShuffleBottomLeft"] = "shuffleBottomLeft";
    TransitionOutEnum["ShuffleBottomLeftSlow"] = "shuffleBottomLeftSlow";
    TransitionOutEnum["ShuffleBottomLeftFast"] = "shuffleBottomLeftFast";
    TransitionOutEnum["ShuffleLeftBottom"] = "shuffleLeftBottom";
    TransitionOutEnum["ShuffleLeftBottomSlow"] = "shuffleLeftBottomSlow";
    TransitionOutEnum["ShuffleLeftBottomFast"] = "shuffleLeftBottomFast";
    TransitionOutEnum["ShuffleLeftTop"] = "shuffleLeftTop";
    TransitionOutEnum["ShuffleLeftTopSlow"] = "shuffleLeftTopSlow";
    TransitionOutEnum["ShuffleLeftTopFast"] = "shuffleLeftTopFast";
    TransitionOutEnum["ShuffleTopLeft"] = "shuffleTopLeft";
    TransitionOutEnum["ShuffleTopLeftSlow"] = "shuffleTopLeftSlow";
    TransitionOutEnum["ShuffleTopLeftFast"] = "shuffleTopLeftFast";
    TransitionOutEnum["Zoom"] = "zoom";
})(TransitionOutEnum || (TransitionOutEnum = {}));
// Transition
/**
 * In and out transitions for a clip - i.e. fade in and fade out
**/
var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in" }),
        __metadata("design:type", String)
    ], Transition.prototype, "in", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=out" }),
        __metadata("design:type", String)
    ], Transition.prototype, "out", void 0);
    return Transition;
}(SpeakeasyBase));
export { Transition };
