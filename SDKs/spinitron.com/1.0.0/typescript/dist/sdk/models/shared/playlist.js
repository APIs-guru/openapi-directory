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
import { Link } from "./link";
var PlaylistLinks = /** @class */ (function (_super) {
    __extends(PlaylistLinks, _super);
    function PlaylistLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persona" }),
        __metadata("design:type", Link)
    ], PlaylistLinks.prototype, "persona", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", Link)
    ], PlaylistLinks.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show" }),
        __metadata("design:type", Link)
    ], PlaylistLinks.prototype, "show", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spins" }),
        __metadata("design:type", Link)
    ], PlaylistLinks.prototype, "spins", void 0);
    return PlaylistLinks;
}(SpeakeasyBase));
export { PlaylistLinks };
var Playlist = /** @class */ (function (_super) {
    __extends(Playlist, _super);
    function Playlist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", PlaylistLinks)
    ], Playlist.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automation" }),
        __metadata("design:type", Boolean)
    ], Playlist.prototype, "automation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Playlist.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Date)
    ], Playlist.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episode_description" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "episodeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episode_name" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "episodeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hide_dj" }),
        __metadata("design:type", Boolean)
    ], Playlist.prototype, "hideDj", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Playlist.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persona_id" }),
        __metadata("design:type", Number)
    ], Playlist.prototype, "personaId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_id" }),
        __metadata("design:type", Number)
    ], Playlist.prototype, "showId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=since" }),
        __metadata("design:type", Number)
    ], Playlist.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Date)
    ], Playlist.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "url", void 0);
    return Playlist;
}(SpeakeasyBase));
export { Playlist };
