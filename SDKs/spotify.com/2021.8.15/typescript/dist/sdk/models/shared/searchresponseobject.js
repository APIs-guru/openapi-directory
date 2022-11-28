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
import { SimplifiedAlbumObject } from "./simplifiedalbumobject";
import { ArtistObject } from "./artistobject";
import { SimplifiedEpisodeObject } from "./simplifiedepisodeobject";
import { SimplifiedPlaylistObject } from "./simplifiedplaylistobject";
import { SimplifiedShowObject } from "./simplifiedshowobject";
import { TrackObject } from "./trackobject";
// SearchResponseObjectAlbums
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var SearchResponseObjectAlbums = /** @class */ (function (_super) {
    __extends(SearchResponseObjectAlbums, _super);
    function SearchResponseObjectAlbums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SearchResponseObjectAlbums.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedAlbumObject }),
        __metadata("design:type", Array)
    ], SearchResponseObjectAlbums.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectAlbums.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], SearchResponseObjectAlbums.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectAlbums.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], SearchResponseObjectAlbums.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectAlbums.prototype, "total", void 0);
    return SearchResponseObjectAlbums;
}(SpeakeasyBase));
export { SearchResponseObjectAlbums };
// SearchResponseObjectArtists
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var SearchResponseObjectArtists = /** @class */ (function (_super) {
    __extends(SearchResponseObjectArtists, _super);
    function SearchResponseObjectArtists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SearchResponseObjectArtists.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: ArtistObject }),
        __metadata("design:type", Array)
    ], SearchResponseObjectArtists.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectArtists.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], SearchResponseObjectArtists.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectArtists.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], SearchResponseObjectArtists.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectArtists.prototype, "total", void 0);
    return SearchResponseObjectArtists;
}(SpeakeasyBase));
export { SearchResponseObjectArtists };
// SearchResponseObjectEpisodes
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var SearchResponseObjectEpisodes = /** @class */ (function (_super) {
    __extends(SearchResponseObjectEpisodes, _super);
    function SearchResponseObjectEpisodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SearchResponseObjectEpisodes.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedEpisodeObject }),
        __metadata("design:type", Array)
    ], SearchResponseObjectEpisodes.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectEpisodes.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], SearchResponseObjectEpisodes.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectEpisodes.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], SearchResponseObjectEpisodes.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectEpisodes.prototype, "total", void 0);
    return SearchResponseObjectEpisodes;
}(SpeakeasyBase));
export { SearchResponseObjectEpisodes };
// SearchResponseObjectPlaylists
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var SearchResponseObjectPlaylists = /** @class */ (function (_super) {
    __extends(SearchResponseObjectPlaylists, _super);
    function SearchResponseObjectPlaylists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SearchResponseObjectPlaylists.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedPlaylistObject }),
        __metadata("design:type", Array)
    ], SearchResponseObjectPlaylists.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectPlaylists.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], SearchResponseObjectPlaylists.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectPlaylists.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], SearchResponseObjectPlaylists.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectPlaylists.prototype, "total", void 0);
    return SearchResponseObjectPlaylists;
}(SpeakeasyBase));
export { SearchResponseObjectPlaylists };
// SearchResponseObjectShows
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var SearchResponseObjectShows = /** @class */ (function (_super) {
    __extends(SearchResponseObjectShows, _super);
    function SearchResponseObjectShows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SearchResponseObjectShows.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedShowObject }),
        __metadata("design:type", Array)
    ], SearchResponseObjectShows.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectShows.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], SearchResponseObjectShows.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectShows.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], SearchResponseObjectShows.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectShows.prototype, "total", void 0);
    return SearchResponseObjectShows;
}(SpeakeasyBase));
export { SearchResponseObjectShows };
// SearchResponseObjectTracks
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var SearchResponseObjectTracks = /** @class */ (function (_super) {
    __extends(SearchResponseObjectTracks, _super);
    function SearchResponseObjectTracks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SearchResponseObjectTracks.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: TrackObject }),
        __metadata("design:type", Array)
    ], SearchResponseObjectTracks.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectTracks.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], SearchResponseObjectTracks.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectTracks.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], SearchResponseObjectTracks.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SearchResponseObjectTracks.prototype, "total", void 0);
    return SearchResponseObjectTracks;
}(SpeakeasyBase));
export { SearchResponseObjectTracks };
var SearchResponseObject = /** @class */ (function (_super) {
    __extends(SearchResponseObject, _super);
    function SearchResponseObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albums" }),
        __metadata("design:type", SearchResponseObjectAlbums)
    ], SearchResponseObject.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artists" }),
        __metadata("design:type", SearchResponseObjectArtists)
    ], SearchResponseObject.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episodes" }),
        __metadata("design:type", SearchResponseObjectEpisodes)
    ], SearchResponseObject.prototype, "episodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playlists" }),
        __metadata("design:type", SearchResponseObjectPlaylists)
    ], SearchResponseObject.prototype, "playlists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shows" }),
        __metadata("design:type", SearchResponseObjectShows)
    ], SearchResponseObject.prototype, "shows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracks" }),
        __metadata("design:type", SearchResponseObjectTracks)
    ], SearchResponseObject.prototype, "tracks", void 0);
    return SearchResponseObject;
}(SpeakeasyBase));
export { SearchResponseObject };
