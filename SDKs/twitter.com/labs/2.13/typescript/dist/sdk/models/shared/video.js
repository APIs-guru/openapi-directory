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
// VideoNonPublicMetrics
/**
 * Nonpublic engagement metrics for the Media at the time of the request.
**/
var VideoNonPublicMetrics = /** @class */ (function (_super) {
    __extends(VideoNonPublicMetrics, _super);
    function VideoNonPublicMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_0_count" }),
        __metadata("design:type", Number)
    ], VideoNonPublicMetrics.prototype, "playback0Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_100_count" }),
        __metadata("design:type", Number)
    ], VideoNonPublicMetrics.prototype, "playback100Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_25_count" }),
        __metadata("design:type", Number)
    ], VideoNonPublicMetrics.prototype, "playback25Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_50_count" }),
        __metadata("design:type", Number)
    ], VideoNonPublicMetrics.prototype, "playback50Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_75_count" }),
        __metadata("design:type", Number)
    ], VideoNonPublicMetrics.prototype, "playback75Count", void 0);
    return VideoNonPublicMetrics;
}(SpeakeasyBase));
export { VideoNonPublicMetrics };
// VideoOrganicMetrics
/**
 * Organic nonpublic engagement metrics for the Media at the time of the request.
**/
var VideoOrganicMetrics = /** @class */ (function (_super) {
    __extends(VideoOrganicMetrics, _super);
    function VideoOrganicMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_0_count" }),
        __metadata("design:type", Number)
    ], VideoOrganicMetrics.prototype, "playback0Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_100_count" }),
        __metadata("design:type", Number)
    ], VideoOrganicMetrics.prototype, "playback100Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_25_count" }),
        __metadata("design:type", Number)
    ], VideoOrganicMetrics.prototype, "playback25Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_50_count" }),
        __metadata("design:type", Number)
    ], VideoOrganicMetrics.prototype, "playback50Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_75_count" }),
        __metadata("design:type", Number)
    ], VideoOrganicMetrics.prototype, "playback75Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view_count" }),
        __metadata("design:type", Number)
    ], VideoOrganicMetrics.prototype, "viewCount", void 0);
    return VideoOrganicMetrics;
}(SpeakeasyBase));
export { VideoOrganicMetrics };
// VideoPromotedMetrics
/**
 * Promoted nonpublic engagement metrics for the Media at the time of the request.
**/
var VideoPromotedMetrics = /** @class */ (function (_super) {
    __extends(VideoPromotedMetrics, _super);
    function VideoPromotedMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_0_count" }),
        __metadata("design:type", Number)
    ], VideoPromotedMetrics.prototype, "playback0Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_100_count" }),
        __metadata("design:type", Number)
    ], VideoPromotedMetrics.prototype, "playback100Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_25_count" }),
        __metadata("design:type", Number)
    ], VideoPromotedMetrics.prototype, "playback25Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_50_count" }),
        __metadata("design:type", Number)
    ], VideoPromotedMetrics.prototype, "playback50Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback_75_count" }),
        __metadata("design:type", Number)
    ], VideoPromotedMetrics.prototype, "playback75Count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view_count" }),
        __metadata("design:type", Number)
    ], VideoPromotedMetrics.prototype, "viewCount", void 0);
    return VideoPromotedMetrics;
}(SpeakeasyBase));
export { VideoPromotedMetrics };
// VideoPublicMetrics
/**
 * Engagement metrics for the Media at the time of the request.
**/
var VideoPublicMetrics = /** @class */ (function (_super) {
    __extends(VideoPublicMetrics, _super);
    function VideoPublicMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view_count" }),
        __metadata("design:type", Number)
    ], VideoPublicMetrics.prototype, "viewCount", void 0);
    return VideoPublicMetrics;
}(SpeakeasyBase));
export { VideoPublicMetrics };
export var VideoTypeEnum;
(function (VideoTypeEnum) {
    VideoTypeEnum["Video"] = "video";
})(VideoTypeEnum || (VideoTypeEnum = {}));
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration_ms" }),
        __metadata("design:type", Number)
    ], Video.prototype, "durationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], Video.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media_key" }),
        __metadata("design:type", String)
    ], Video.prototype, "mediaKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=non_public_metrics" }),
        __metadata("design:type", VideoNonPublicMetrics)
    ], Video.prototype, "nonPublicMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organic_metrics" }),
        __metadata("design:type", VideoOrganicMetrics)
    ], Video.prototype, "organicMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preview_image_url" }),
        __metadata("design:type", String)
    ], Video.prototype, "previewImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promoted_metrics" }),
        __metadata("design:type", VideoPromotedMetrics)
    ], Video.prototype, "promotedMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_metrics" }),
        __metadata("design:type", VideoPublicMetrics)
    ], Video.prototype, "publicMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Video.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], Video.prototype, "width", void 0);
    return Video;
}(SpeakeasyBase));
export { Video };
