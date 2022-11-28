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
var EndpointGetUsersTopArtistsAndTracksPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetUsersTopArtistsAndTracksPathParams, _super);
    function EndpointGetUsersTopArtistsAndTracksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], EndpointGetUsersTopArtistsAndTracksPathParams.prototype, "type", void 0);
    return EndpointGetUsersTopArtistsAndTracksPathParams;
}(SpeakeasyBase));
export { EndpointGetUsersTopArtistsAndTracksPathParams };
var EndpointGetUsersTopArtistsAndTracksQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetUsersTopArtistsAndTracksQueryParams, _super);
    function EndpointGetUsersTopArtistsAndTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersTopArtistsAndTracksQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersTopArtistsAndTracksQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_range" }),
        __metadata("design:type", String)
    ], EndpointGetUsersTopArtistsAndTracksQueryParams.prototype, "timeRange", void 0);
    return EndpointGetUsersTopArtistsAndTracksQueryParams;
}(SpeakeasyBase));
export { EndpointGetUsersTopArtistsAndTracksQueryParams };
var EndpointGetUsersTopArtistsAndTracksHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetUsersTopArtistsAndTracksHeaders, _super);
    function EndpointGetUsersTopArtistsAndTracksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetUsersTopArtistsAndTracksHeaders.prototype, "authorization", void 0);
    return EndpointGetUsersTopArtistsAndTracksHeaders;
}(SpeakeasyBase));
export { EndpointGetUsersTopArtistsAndTracksHeaders };
var EndpointGetUsersTopArtistsAndTracksSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetUsersTopArtistsAndTracksSecurity, _super);
    function EndpointGetUsersTopArtistsAndTracksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetUsersTopArtistsAndTracksSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetUsersTopArtistsAndTracksSecurity;
}(SpeakeasyBase));
export { EndpointGetUsersTopArtistsAndTracksSecurity };
// EndpointGetUsersTopArtistsAndTracks200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetUsersTopArtistsAndTracks200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetUsersTopArtistsAndTracks200ApplicationJson, _super);
    function EndpointGetUsersTopArtistsAndTracks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetUsersTopArtistsAndTracks200ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items" }),
        __metadata("design:type", Array)
    ], EndpointGetUsersTopArtistsAndTracks200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersTopArtistsAndTracks200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetUsersTopArtistsAndTracks200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersTopArtistsAndTracks200ApplicationJson.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EndpointGetUsersTopArtistsAndTracks200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersTopArtistsAndTracks200ApplicationJson.prototype, "total", void 0);
    return EndpointGetUsersTopArtistsAndTracks200ApplicationJson;
}(SpeakeasyBase));
export { EndpointGetUsersTopArtistsAndTracks200ApplicationJson };
var EndpointGetUsersTopArtistsAndTracksRequest = /** @class */ (function (_super) {
    __extends(EndpointGetUsersTopArtistsAndTracksRequest, _super);
    function EndpointGetUsersTopArtistsAndTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersTopArtistsAndTracksPathParams)
    ], EndpointGetUsersTopArtistsAndTracksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersTopArtistsAndTracksQueryParams)
    ], EndpointGetUsersTopArtistsAndTracksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersTopArtistsAndTracksHeaders)
    ], EndpointGetUsersTopArtistsAndTracksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersTopArtistsAndTracksSecurity)
    ], EndpointGetUsersTopArtistsAndTracksRequest.prototype, "security", void 0);
    return EndpointGetUsersTopArtistsAndTracksRequest;
}(SpeakeasyBase));
export { EndpointGetUsersTopArtistsAndTracksRequest };
var EndpointGetUsersTopArtistsAndTracksResponse = /** @class */ (function (_super) {
    __extends(EndpointGetUsersTopArtistsAndTracksResponse, _super);
    function EndpointGetUsersTopArtistsAndTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetUsersTopArtistsAndTracksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetUsersTopArtistsAndTracksResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetUsersTopArtistsAndTracksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersTopArtistsAndTracks200ApplicationJson)
    ], EndpointGetUsersTopArtistsAndTracksResponse.prototype, "endpointGetUsersTopArtistsAndTracks200ApplicationJsonObject", void 0);
    return EndpointGetUsersTopArtistsAndTracksResponse;
}(SpeakeasyBase));
export { EndpointGetUsersTopArtistsAndTracksResponse };
