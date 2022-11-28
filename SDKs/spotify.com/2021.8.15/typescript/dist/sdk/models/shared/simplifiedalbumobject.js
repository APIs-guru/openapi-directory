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
import { ImageObject } from "./imageobject";
import { AlbumRestrictionObject } from "./albumrestrictionobject";
// SimplifiedAlbumObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedalbumobject - Find more info on the official Spotify Web API Reference
**/
var SimplifiedAlbumObject = /** @class */ (function (_super) {
    __extends(SimplifiedAlbumObject, _super);
    function SimplifiedAlbumObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=album_group" }),
        __metadata("design:type", String)
    ], SimplifiedAlbumObject.prototype, "albumGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=album_type" }),
        __metadata("design:type", String)
    ], SimplifiedAlbumObject.prototype, "albumType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artists", elemType: SimplifiedArtistObject }),
        __metadata("design:type", Array)
    ], SimplifiedAlbumObject.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_markets" }),
        __metadata("design:type", Array)
    ], SimplifiedAlbumObject.prototype, "availableMarkets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_urls" }),
        __metadata("design:type", ExternalUrlObject)
    ], SimplifiedAlbumObject.prototype, "externalUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SimplifiedAlbumObject.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SimplifiedAlbumObject.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: ImageObject }),
        __metadata("design:type", Array)
    ], SimplifiedAlbumObject.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SimplifiedAlbumObject.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=release_date" }),
        __metadata("design:type", String)
    ], SimplifiedAlbumObject.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=release_date_precision" }),
        __metadata("design:type", String)
    ], SimplifiedAlbumObject.prototype, "releaseDatePrecision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictions" }),
        __metadata("design:type", AlbumRestrictionObject)
    ], SimplifiedAlbumObject.prototype, "restrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tracks" }),
        __metadata("design:type", Number)
    ], SimplifiedAlbumObject.prototype, "totalTracks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SimplifiedAlbumObject.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], SimplifiedAlbumObject.prototype, "uri", void 0);
    return SimplifiedAlbumObject;
}(SpeakeasyBase));
export { SimplifiedAlbumObject };
