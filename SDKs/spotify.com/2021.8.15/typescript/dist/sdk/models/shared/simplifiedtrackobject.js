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
import { SimplifiedArtistObject } from "./simplifiedartistobject";
import { ExternalUrlObject } from "./externalurlobject";
import { LinkedTrackObject } from "./linkedtrackobject";
import { TrackRestrictionObject } from "./trackrestrictionobject";
// SimplifiedTrackObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedtrackobject - Find more info on the official Spotify Web API Reference
**/
var SimplifiedTrackObject = /** @class */ (function (_super) {
    __extends(SimplifiedTrackObject, _super);
    function SimplifiedTrackObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artists", elemType: SimplifiedArtistObject }),
        __metadata("design:type", Array)
    ], SimplifiedTrackObject.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_markets" }),
        __metadata("design:type", Array)
    ], SimplifiedTrackObject.prototype, "availableMarkets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disc_number" }),
        __metadata("design:type", Number)
    ], SimplifiedTrackObject.prototype, "discNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration_ms" }),
        __metadata("design:type", Number)
    ], SimplifiedTrackObject.prototype, "durationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explicit" }),
        __metadata("design:type", Boolean)
    ], SimplifiedTrackObject.prototype, "explicit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_urls" }),
        __metadata("design:type", ExternalUrlObject)
    ], SimplifiedTrackObject.prototype, "externalUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SimplifiedTrackObject.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SimplifiedTrackObject.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_local" }),
        __metadata("design:type", Boolean)
    ], SimplifiedTrackObject.prototype, "isLocal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_playable" }),
        __metadata("design:type", Boolean)
    ], SimplifiedTrackObject.prototype, "isPlayable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linked_from" }),
        __metadata("design:type", LinkedTrackObject)
    ], SimplifiedTrackObject.prototype, "linkedFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SimplifiedTrackObject.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preview_url" }),
        __metadata("design:type", String)
    ], SimplifiedTrackObject.prototype, "previewUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictions" }),
        __metadata("design:type", TrackRestrictionObject)
    ], SimplifiedTrackObject.prototype, "restrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=track_number" }),
        __metadata("design:type", Number)
    ], SimplifiedTrackObject.prototype, "trackNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SimplifiedTrackObject.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], SimplifiedTrackObject.prototype, "uri", void 0);
    return SimplifiedTrackObject;
}(SpeakeasyBase));
export { SimplifiedTrackObject };
