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
import { SimplifiedPlaylistObject } from "./simplifiedplaylistobject";
// FeaturedPlaylistObjectPlaylists
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var FeaturedPlaylistObjectPlaylists = /** @class */ (function (_super) {
    __extends(FeaturedPlaylistObjectPlaylists, _super);
    function FeaturedPlaylistObjectPlaylists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], FeaturedPlaylistObjectPlaylists.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedPlaylistObject }),
        __metadata("design:type", Array)
    ], FeaturedPlaylistObjectPlaylists.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], FeaturedPlaylistObjectPlaylists.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], FeaturedPlaylistObjectPlaylists.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], FeaturedPlaylistObjectPlaylists.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], FeaturedPlaylistObjectPlaylists.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], FeaturedPlaylistObjectPlaylists.prototype, "total", void 0);
    return FeaturedPlaylistObjectPlaylists;
}(SpeakeasyBase));
export { FeaturedPlaylistObjectPlaylists };
var FeaturedPlaylistObject = /** @class */ (function (_super) {
    __extends(FeaturedPlaylistObject, _super);
    function FeaturedPlaylistObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], FeaturedPlaylistObject.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playlists" }),
        __metadata("design:type", FeaturedPlaylistObjectPlaylists)
    ], FeaturedPlaylistObject.prototype, "playlists", void 0);
    return FeaturedPlaylistObject;
}(SpeakeasyBase));
export { FeaturedPlaylistObject };
