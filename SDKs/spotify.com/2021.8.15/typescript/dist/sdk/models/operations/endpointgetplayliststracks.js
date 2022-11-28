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
var EndpointGetPlaylistsTracksPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistsTracksPathParams, _super);
    function EndpointGetPlaylistsTracksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistsTracksPathParams.prototype, "playlistId", void 0);
    return EndpointGetPlaylistsTracksPathParams;
}(SpeakeasyBase));
export { EndpointGetPlaylistsTracksPathParams };
var EndpointGetPlaylistsTracksQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistsTracksQueryParams, _super);
    function EndpointGetPlaylistsTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=additional_types" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistsTracksQueryParams.prototype, "additionalTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistsTracksQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetPlaylistsTracksQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistsTracksQueryParams.prototype, "market", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetPlaylistsTracksQueryParams.prototype, "offset", void 0);
    return EndpointGetPlaylistsTracksQueryParams;
}(SpeakeasyBase));
export { EndpointGetPlaylistsTracksQueryParams };
var EndpointGetPlaylistsTracksHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistsTracksHeaders, _super);
    function EndpointGetPlaylistsTracksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistsTracksHeaders.prototype, "authorization", void 0);
    return EndpointGetPlaylistsTracksHeaders;
}(SpeakeasyBase));
export { EndpointGetPlaylistsTracksHeaders };
var EndpointGetPlaylistsTracksSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistsTracksSecurity, _super);
    function EndpointGetPlaylistsTracksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetPlaylistsTracksSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetPlaylistsTracksSecurity;
}(SpeakeasyBase));
export { EndpointGetPlaylistsTracksSecurity };
// EndpointGetPlaylistsTracks200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetPlaylistsTracks200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistsTracks200ApplicationJson, _super);
    function EndpointGetPlaylistsTracks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistsTracks200ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PlaylistTrackObject }),
        __metadata("design:type", Array)
    ], EndpointGetPlaylistsTracks200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetPlaylistsTracks200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistsTracks200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetPlaylistsTracks200ApplicationJson.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistsTracks200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetPlaylistsTracks200ApplicationJson.prototype, "total", void 0);
    return EndpointGetPlaylistsTracks200ApplicationJson;
}(SpeakeasyBase));
export { EndpointGetPlaylistsTracks200ApplicationJson };
var EndpointGetPlaylistsTracksRequest = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistsTracksRequest, _super);
    function EndpointGetPlaylistsTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistsTracksPathParams)
    ], EndpointGetPlaylistsTracksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistsTracksQueryParams)
    ], EndpointGetPlaylistsTracksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistsTracksHeaders)
    ], EndpointGetPlaylistsTracksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistsTracksSecurity)
    ], EndpointGetPlaylistsTracksRequest.prototype, "security", void 0);
    return EndpointGetPlaylistsTracksRequest;
}(SpeakeasyBase));
export { EndpointGetPlaylistsTracksRequest };
var EndpointGetPlaylistsTracksResponse = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistsTracksResponse, _super);
    function EndpointGetPlaylistsTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetPlaylistsTracksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetPlaylistsTracksResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetPlaylistsTracksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistsTracks200ApplicationJson)
    ], EndpointGetPlaylistsTracksResponse.prototype, "endpointGetPlaylistsTracks200ApplicationJsonObject", void 0);
    return EndpointGetPlaylistsTracksResponse;
}(SpeakeasyBase));
export { EndpointGetPlaylistsTracksResponse };
