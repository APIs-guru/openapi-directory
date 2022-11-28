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
import { FollowersObject } from "./followersobject";
import { ImageObject } from "./imageobject";
import { PublicUserObject } from "./publicuserobject";
import { PlaylistTrackObject } from "./playlisttrackobject";
// PlaylistObjectTracks
/**
 * Information about the tracks of the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var PlaylistObjectTracks = /** @class */ (function (_super) {
    __extends(PlaylistObjectTracks, _super);
    function PlaylistObjectTracks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PlaylistObjectTracks.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: PlaylistTrackObject }),
        __metadata("design:type", Array)
    ], PlaylistObjectTracks.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], PlaylistObjectTracks.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], PlaylistObjectTracks.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], PlaylistObjectTracks.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], PlaylistObjectTracks.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PlaylistObjectTracks.prototype, "total", void 0);
    return PlaylistObjectTracks;
}(SpeakeasyBase));
export { PlaylistObjectTracks };
// PlaylistObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlistobject - Find more info on the official Spotify Web API Reference
**/
var PlaylistObject = /** @class */ (function (_super) {
    __extends(PlaylistObject, _super);
    function PlaylistObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborative" }),
        __metadata("design:type", Boolean)
    ], PlaylistObject.prototype, "collaborative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PlaylistObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_urls" }),
        __metadata("design:type", ExternalUrlObject)
    ], PlaylistObject.prototype, "externalUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", FollowersObject)
    ], PlaylistObject.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PlaylistObject.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PlaylistObject.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: ImageObject }),
        __metadata("design:type", Array)
    ], PlaylistObject.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PlaylistObject.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", PublicUserObject)
    ], PlaylistObject.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], PlaylistObject.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshot_id" }),
        __metadata("design:type", String)
    ], PlaylistObject.prototype, "snapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracks" }),
        __metadata("design:type", PlaylistObjectTracks)
    ], PlaylistObject.prototype, "tracks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PlaylistObject.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PlaylistObject.prototype, "uri", void 0);
    return PlaylistObject;
}(SpeakeasyBase));
export { PlaylistObject };
