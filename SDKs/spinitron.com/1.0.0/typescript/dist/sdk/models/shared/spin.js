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
var SpinLinks = /** @class */ (function (_super) {
    __extends(SpinLinks, _super);
    function SpinLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playlist" }),
        __metadata("design:type", Link)
    ], SpinLinks.prototype, "playlist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", Link)
    ], SpinLinks.prototype, "self", void 0);
    return SpinLinks;
}(SpeakeasyBase));
export { SpinLinks };
var Spin = /** @class */ (function (_super) {
    __extends(Spin, _super);
    function Spin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", SpinLinks)
    ], Spin.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artist" }),
        __metadata("design:type", String)
    ], Spin.prototype, "artist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artist-custom" }),
        __metadata("design:type", String)
    ], Spin.prototype, "artistCustom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catalog-number" }),
        __metadata("design:type", String)
    ], Spin.prototype, "catalogNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classical" }),
        __metadata("design:type", Boolean)
    ], Spin.prototype, "classical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=composer" }),
        __metadata("design:type", String)
    ], Spin.prototype, "composer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conductor" }),
        __metadata("design:type", String)
    ], Spin.prototype, "conductor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Spin.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Date)
    ], Spin.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ensemble" }),
        __metadata("design:type", String)
    ], Spin.prototype, "ensemble", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genre" }),
        __metadata("design:type", String)
    ], Spin.prototype, "genre", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Spin.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], Spin.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isrc" }),
        __metadata("design:type", String)
    ], Spin.prototype, "isrc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iswc" }),
        __metadata("design:type", String)
    ], Spin.prototype, "iswc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Spin.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label-custom" }),
        __metadata("design:type", String)
    ], Spin.prototype, "labelCustom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=local" }),
        __metadata("design:type", Boolean)
    ], Spin.prototype, "local", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medium" }),
        __metadata("design:type", String)
    ], Spin.prototype, "medium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new" }),
        __metadata("design:type", Boolean)
    ], Spin.prototype, "new", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], Spin.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performers" }),
        __metadata("design:type", String)
    ], Spin.prototype, "performers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playlist_id" }),
        __metadata("design:type", Number)
    ], Spin.prototype, "playlistId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=release" }),
        __metadata("design:type", String)
    ], Spin.prototype, "release", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=release-custom" }),
        __metadata("design:type", String)
    ], Spin.prototype, "releaseCustom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=released" }),
        __metadata("design:type", Number)
    ], Spin.prototype, "released", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", Boolean)
    ], Spin.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=song" }),
        __metadata("design:type", String)
    ], Spin.prototype, "song", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Date)
    ], Spin.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Spin.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upc" }),
        __metadata("design:type", String)
    ], Spin.prototype, "upc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=va" }),
        __metadata("design:type", Boolean)
    ], Spin.prototype, "va", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=work" }),
        __metadata("design:type", String)
    ], Spin.prototype, "work", void 0);
    return Spin;
}(SpeakeasyBase));
export { Spin };
