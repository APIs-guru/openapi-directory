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
var EndpointGetAListOfCurrentUsersPlaylistsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetAListOfCurrentUsersPlaylistsQueryParams, _super);
    function EndpointGetAListOfCurrentUsersPlaylistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetAListOfCurrentUsersPlaylistsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetAListOfCurrentUsersPlaylistsQueryParams.prototype, "offset", void 0);
    return EndpointGetAListOfCurrentUsersPlaylistsQueryParams;
}(SpeakeasyBase));
export { EndpointGetAListOfCurrentUsersPlaylistsQueryParams };
var EndpointGetAListOfCurrentUsersPlaylistsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetAListOfCurrentUsersPlaylistsHeaders, _super);
    function EndpointGetAListOfCurrentUsersPlaylistsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetAListOfCurrentUsersPlaylistsHeaders.prototype, "authorization", void 0);
    return EndpointGetAListOfCurrentUsersPlaylistsHeaders;
}(SpeakeasyBase));
export { EndpointGetAListOfCurrentUsersPlaylistsHeaders };
var EndpointGetAListOfCurrentUsersPlaylistsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetAListOfCurrentUsersPlaylistsSecurity, _super);
    function EndpointGetAListOfCurrentUsersPlaylistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetAListOfCurrentUsersPlaylistsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetAListOfCurrentUsersPlaylistsSecurity;
}(SpeakeasyBase));
export { EndpointGetAListOfCurrentUsersPlaylistsSecurity };
// EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson, _super);
    function EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SimplifiedPlaylistObject }),
        __metadata("design:type", Array)
    ], EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson.prototype, "total", void 0);
    return EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson;
}(SpeakeasyBase));
export { EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson };
var EndpointGetAListOfCurrentUsersPlaylistsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetAListOfCurrentUsersPlaylistsRequest, _super);
    function EndpointGetAListOfCurrentUsersPlaylistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAListOfCurrentUsersPlaylistsQueryParams)
    ], EndpointGetAListOfCurrentUsersPlaylistsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAListOfCurrentUsersPlaylistsHeaders)
    ], EndpointGetAListOfCurrentUsersPlaylistsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAListOfCurrentUsersPlaylistsSecurity)
    ], EndpointGetAListOfCurrentUsersPlaylistsRequest.prototype, "security", void 0);
    return EndpointGetAListOfCurrentUsersPlaylistsRequest;
}(SpeakeasyBase));
export { EndpointGetAListOfCurrentUsersPlaylistsRequest };
var EndpointGetAListOfCurrentUsersPlaylistsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetAListOfCurrentUsersPlaylistsResponse, _super);
    function EndpointGetAListOfCurrentUsersPlaylistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetAListOfCurrentUsersPlaylistsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetAListOfCurrentUsersPlaylistsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetAListOfCurrentUsersPlaylistsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson)
    ], EndpointGetAListOfCurrentUsersPlaylistsResponse.prototype, "endpointGetAListOfCurrentUsersPlaylists200ApplicationJsonObject", void 0);
    return EndpointGetAListOfCurrentUsersPlaylistsResponse;
}(SpeakeasyBase));
export { EndpointGetAListOfCurrentUsersPlaylistsResponse };
