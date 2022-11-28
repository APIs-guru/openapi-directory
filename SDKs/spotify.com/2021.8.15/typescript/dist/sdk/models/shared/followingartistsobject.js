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
import { CursorObject } from "./cursorobject";
import { ArtistObject } from "./artistobject";
// FollowingArtistsObjectArtists
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
var FollowingArtistsObjectArtists = /** @class */ (function (_super) {
    __extends(FollowingArtistsObjectArtists, _super);
    function FollowingArtistsObjectArtists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cursors" }),
        __metadata("design:type", CursorObject)
    ], FollowingArtistsObjectArtists.prototype, "cursors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], FollowingArtistsObjectArtists.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: ArtistObject }),
        __metadata("design:type", Array)
    ], FollowingArtistsObjectArtists.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], FollowingArtistsObjectArtists.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], FollowingArtistsObjectArtists.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], FollowingArtistsObjectArtists.prototype, "total", void 0);
    return FollowingArtistsObjectArtists;
}(SpeakeasyBase));
export { FollowingArtistsObjectArtists };
var FollowingArtistsObject = /** @class */ (function (_super) {
    __extends(FollowingArtistsObject, _super);
    function FollowingArtistsObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artists" }),
        __metadata("design:type", FollowingArtistsObjectArtists)
    ], FollowingArtistsObject.prototype, "artists", void 0);
    return FollowingArtistsObject;
}(SpeakeasyBase));
export { FollowingArtistsObject };
