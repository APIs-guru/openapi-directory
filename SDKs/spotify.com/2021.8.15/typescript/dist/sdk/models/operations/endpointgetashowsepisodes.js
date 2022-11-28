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
var EndpointGetAShowsEpisodesPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetAShowsEpisodesPathParams, _super);
    function EndpointGetAShowsEpisodesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EndpointGetAShowsEpisodesPathParams.prototype, "id", void 0);
    return EndpointGetAShowsEpisodesPathParams;
}(SpeakeasyBase));
export { EndpointGetAShowsEpisodesPathParams };
var EndpointGetAShowsEpisodesQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetAShowsEpisodesQueryParams, _super);
    function EndpointGetAShowsEpisodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetAShowsEpisodesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetAShowsEpisodesQueryParams.prototype, "market", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetAShowsEpisodesQueryParams.prototype, "offset", void 0);
    return EndpointGetAShowsEpisodesQueryParams;
}(SpeakeasyBase));
export { EndpointGetAShowsEpisodesQueryParams };
var EndpointGetAShowsEpisodesHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetAShowsEpisodesHeaders, _super);
    function EndpointGetAShowsEpisodesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetAShowsEpisodesHeaders.prototype, "authorization", void 0);
    return EndpointGetAShowsEpisodesHeaders;
}(SpeakeasyBase));
export { EndpointGetAShowsEpisodesHeaders };
var EndpointGetAShowsEpisodesSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetAShowsEpisodesSecurity, _super);
    function EndpointGetAShowsEpisodesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetAShowsEpisodesSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetAShowsEpisodesSecurity;
}(SpeakeasyBase));
export { EndpointGetAShowsEpisodesSecurity };
// EndpointGetAShowsEpisodes200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetAShowsEpisodes200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetAShowsEpisodes200ApplicationJson, _super);
    function EndpointGetAShowsEpisodes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetAShowsEpisodes200ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SimplifiedEpisodeObject }),
        __metadata("design:type", Array)
    ], EndpointGetAShowsEpisodes200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetAShowsEpisodes200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetAShowsEpisodes200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetAShowsEpisodes200ApplicationJson.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EndpointGetAShowsEpisodes200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetAShowsEpisodes200ApplicationJson.prototype, "total", void 0);
    return EndpointGetAShowsEpisodes200ApplicationJson;
}(SpeakeasyBase));
export { EndpointGetAShowsEpisodes200ApplicationJson };
var EndpointGetAShowsEpisodesRequest = /** @class */ (function (_super) {
    __extends(EndpointGetAShowsEpisodesRequest, _super);
    function EndpointGetAShowsEpisodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAShowsEpisodesPathParams)
    ], EndpointGetAShowsEpisodesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAShowsEpisodesQueryParams)
    ], EndpointGetAShowsEpisodesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAShowsEpisodesHeaders)
    ], EndpointGetAShowsEpisodesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAShowsEpisodesSecurity)
    ], EndpointGetAShowsEpisodesRequest.prototype, "security", void 0);
    return EndpointGetAShowsEpisodesRequest;
}(SpeakeasyBase));
export { EndpointGetAShowsEpisodesRequest };
var EndpointGetAShowsEpisodesResponse = /** @class */ (function (_super) {
    __extends(EndpointGetAShowsEpisodesResponse, _super);
    function EndpointGetAShowsEpisodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetAShowsEpisodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetAShowsEpisodesResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetAShowsEpisodesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAShowsEpisodes200ApplicationJson)
    ], EndpointGetAShowsEpisodesResponse.prototype, "endpointGetAShowsEpisodes200ApplicationJsonObject", void 0);
    return EndpointGetAShowsEpisodesResponse;
}(SpeakeasyBase));
export { EndpointGetAShowsEpisodesResponse };
