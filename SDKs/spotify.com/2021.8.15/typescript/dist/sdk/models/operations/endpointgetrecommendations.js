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
import * as shared from "../shared";
var EndpointGetRecommendationsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetRecommendationsQueryParams, _super);
    function EndpointGetRecommendationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetRecommendationsQueryParams.prototype, "market", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_acousticness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxAcousticness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_danceability" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxDanceability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_duration_ms" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_energy" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxEnergy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_instrumentalness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxInstrumentalness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_key" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_liveness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxLiveness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_loudness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxLoudness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_mode" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_popularity" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxPopularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_speechiness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxSpeechiness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_tempo" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxTempo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_time_signature" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxTimeSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_valence" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "maxValence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_acousticness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minAcousticness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_danceability" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minDanceability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_duration_ms" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_energy" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minEnergy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_instrumentalness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minInstrumentalness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_key" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_liveness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minLiveness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_loudness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minLoudness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_mode" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_popularity" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minPopularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_speechiness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minSpeechiness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_tempo" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minTempo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_time_signature" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minTimeSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_valence" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "minValence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seed_artists" }),
        __metadata("design:type", String)
    ], EndpointGetRecommendationsQueryParams.prototype, "seedArtists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seed_genres" }),
        __metadata("design:type", String)
    ], EndpointGetRecommendationsQueryParams.prototype, "seedGenres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seed_tracks" }),
        __metadata("design:type", String)
    ], EndpointGetRecommendationsQueryParams.prototype, "seedTracks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_acousticness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetAcousticness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_danceability" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetDanceability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_duration_ms" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_energy" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetEnergy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_instrumentalness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetInstrumentalness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_key" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_liveness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetLiveness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_loudness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetLoudness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_mode" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_popularity" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetPopularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_speechiness" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetSpeechiness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_tempo" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetTempo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_time_signature" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetTimeSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_valence" }),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsQueryParams.prototype, "targetValence", void 0);
    return EndpointGetRecommendationsQueryParams;
}(SpeakeasyBase));
export { EndpointGetRecommendationsQueryParams };
var EndpointGetRecommendationsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetRecommendationsHeaders, _super);
    function EndpointGetRecommendationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetRecommendationsHeaders.prototype, "authorization", void 0);
    return EndpointGetRecommendationsHeaders;
}(SpeakeasyBase));
export { EndpointGetRecommendationsHeaders };
var EndpointGetRecommendationsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetRecommendationsSecurity, _super);
    function EndpointGetRecommendationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetRecommendationsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetRecommendationsSecurity;
}(SpeakeasyBase));
export { EndpointGetRecommendationsSecurity };
var EndpointGetRecommendationsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetRecommendationsRequest, _super);
    function EndpointGetRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetRecommendationsQueryParams)
    ], EndpointGetRecommendationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetRecommendationsHeaders)
    ], EndpointGetRecommendationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetRecommendationsSecurity)
    ], EndpointGetRecommendationsRequest.prototype, "security", void 0);
    return EndpointGetRecommendationsRequest;
}(SpeakeasyBase));
export { EndpointGetRecommendationsRequest };
var EndpointGetRecommendationsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetRecommendationsResponse, _super);
    function EndpointGetRecommendationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetRecommendationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetRecommendationsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RecommendationsObject)
    ], EndpointGetRecommendationsResponse.prototype, "recommendationsObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetRecommendationsResponse.prototype, "statusCode", void 0);
    return EndpointGetRecommendationsResponse;
}(SpeakeasyBase));
export { EndpointGetRecommendationsResponse };
