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
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { PublicUserObject } from "./publicuserobject";
import { PlaylistTracksRefObject } from "./playlisttracksrefobject";
// SimplifiedPlaylistObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedplaylistobject - Find more info on the official Spotify Web API Reference
**/
var SimplifiedPlaylistObject = /** @class */ (function (_super) {
    __extends(SimplifiedPlaylistObject, _super);
    function SimplifiedPlaylistObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborative" }),
        __metadata("design:type", Boolean)
    ], SimplifiedPlaylistObject.prototype, "collaborative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SimplifiedPlaylistObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_urls" }),
        __metadata("design:type", ExternalUrlObject)
    ], SimplifiedPlaylistObject.prototype, "externalUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SimplifiedPlaylistObject.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SimplifiedPlaylistObject.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: ImageObject }),
        __metadata("design:type", Array)
    ], SimplifiedPlaylistObject.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SimplifiedPlaylistObject.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", PublicUserObject)
    ], SimplifiedPlaylistObject.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], SimplifiedPlaylistObject.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshot_id" }),
        __metadata("design:type", String)
    ], SimplifiedPlaylistObject.prototype, "snapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracks" }),
        __metadata("design:type", PlaylistTracksRefObject)
    ], SimplifiedPlaylistObject.prototype, "tracks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SimplifiedPlaylistObject.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], SimplifiedPlaylistObject.prototype, "uri", void 0);
    return SimplifiedPlaylistObject;
}(SpeakeasyBase));
export { SimplifiedPlaylistObject };
