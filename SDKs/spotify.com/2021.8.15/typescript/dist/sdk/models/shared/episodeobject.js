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
import { EpisodeRestrictionObject } from "./episoderestrictionobject";
import { ResumePointObject } from "./resumepointobject";
import { SimplifiedShowObject } from "./simplifiedshowobject";
// EpisodeObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-episodeobject - Find more info on the official Spotify Web API Reference
**/
var EpisodeObject = /** @class */ (function (_super) {
    __extends(EpisodeObject, _super);
    function EpisodeObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio_preview_url" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "audioPreviewUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration_ms" }),
        __metadata("design:type", Number)
    ], EpisodeObject.prototype, "durationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explicit" }),
        __metadata("design:type", Boolean)
    ], EpisodeObject.prototype, "explicit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_urls" }),
        __metadata("design:type", ExternalUrlObject)
    ], EpisodeObject.prototype, "externalUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_description" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "htmlDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: ImageObject }),
        __metadata("design:type", Array)
    ], EpisodeObject.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_externally_hosted" }),
        __metadata("design:type", Boolean)
    ], EpisodeObject.prototype, "isExternallyHosted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_playable" }),
        __metadata("design:type", Boolean)
    ], EpisodeObject.prototype, "isPlayable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages" }),
        __metadata("design:type", Array)
    ], EpisodeObject.prototype, "languages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=release_date" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=release_date_precision" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "releaseDatePrecision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictions" }),
        __metadata("design:type", EpisodeRestrictionObject)
    ], EpisodeObject.prototype, "restrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resume_point" }),
        __metadata("design:type", ResumePointObject)
    ], EpisodeObject.prototype, "resumePoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show" }),
        __metadata("design:type", SimplifiedShowObject)
    ], EpisodeObject.prototype, "show", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], EpisodeObject.prototype, "uri", void 0);
    return EpisodeObject;
}(SpeakeasyBase));
export { EpisodeObject };
