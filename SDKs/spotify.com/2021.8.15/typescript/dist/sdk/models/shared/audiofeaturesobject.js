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
// AudioFeaturesObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject - Find more info on the official Spotify Web API Reference
**/
var AudioFeaturesObject = /** @class */ (function (_super) {
    __extends(AudioFeaturesObject, _super);
    function AudioFeaturesObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acousticness" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "acousticness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analysis_url" }),
        __metadata("design:type", String)
    ], AudioFeaturesObject.prototype, "analysisUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=danceability" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "danceability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration_ms" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "durationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energy" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "energy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AudioFeaturesObject.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instrumentalness" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "instrumentalness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveness" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "liveness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loudness" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "loudness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speechiness" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "speechiness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempo" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "tempo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_signature" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "timeSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=track_href" }),
        __metadata("design:type", String)
    ], AudioFeaturesObject.prototype, "trackHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AudioFeaturesObject.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], AudioFeaturesObject.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valence" }),
        __metadata("design:type", Number)
    ], AudioFeaturesObject.prototype, "valence", void 0);
    return AudioFeaturesObject;
}(SpeakeasyBase));
export { AudioFeaturesObject };
