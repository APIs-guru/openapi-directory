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
var EndpointGetListUsersPlaylistsPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetListUsersPlaylistsPathParams, _super);
    function EndpointGetListUsersPlaylistsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], EndpointGetListUsersPlaylistsPathParams.prototype, "userId", void 0);
    return EndpointGetListUsersPlaylistsPathParams;
}(SpeakeasyBase));
export { EndpointGetListUsersPlaylistsPathParams };
var EndpointGetListUsersPlaylistsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetListUsersPlaylistsQueryParams, _super);
    function EndpointGetListUsersPlaylistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetListUsersPlaylistsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetListUsersPlaylistsQueryParams.prototype, "offset", void 0);
    return EndpointGetListUsersPlaylistsQueryParams;
}(SpeakeasyBase));
export { EndpointGetListUsersPlaylistsQueryParams };
var EndpointGetListUsersPlaylistsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetListUsersPlaylistsHeaders, _super);
    function EndpointGetListUsersPlaylistsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetListUsersPlaylistsHeaders.prototype, "authorization", void 0);
    return EndpointGetListUsersPlaylistsHeaders;
}(SpeakeasyBase));
export { EndpointGetListUsersPlaylistsHeaders };
var EndpointGetListUsersPlaylistsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetListUsersPlaylistsSecurity, _super);
    function EndpointGetListUsersPlaylistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetListUsersPlaylistsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetListUsersPlaylistsSecurity;
}(SpeakeasyBase));
export { EndpointGetListUsersPlaylistsSecurity };
// EndpointGetListUsersPlaylists200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetListUsersPlaylists200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetListUsersPlaylists200ApplicationJson, _super);
    function EndpointGetListUsersPlaylists200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetListUsersPlaylists200ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SimplifiedPlaylistObject }),
        __metadata("design:type", Array)
    ], EndpointGetListUsersPlaylists200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetListUsersPlaylists200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetListUsersPlaylists200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetListUsersPlaylists200ApplicationJson.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EndpointGetListUsersPlaylists200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetListUsersPlaylists200ApplicationJson.prototype, "total", void 0);
    return EndpointGetListUsersPlaylists200ApplicationJson;
}(SpeakeasyBase));
export { EndpointGetListUsersPlaylists200ApplicationJson };
var EndpointGetListUsersPlaylistsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetListUsersPlaylistsRequest, _super);
    function EndpointGetListUsersPlaylistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetListUsersPlaylistsPathParams)
    ], EndpointGetListUsersPlaylistsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetListUsersPlaylistsQueryParams)
    ], EndpointGetListUsersPlaylistsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetListUsersPlaylistsHeaders)
    ], EndpointGetListUsersPlaylistsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetListUsersPlaylistsSecurity)
    ], EndpointGetListUsersPlaylistsRequest.prototype, "security", void 0);
    return EndpointGetListUsersPlaylistsRequest;
}(SpeakeasyBase));
export { EndpointGetListUsersPlaylistsRequest };
var EndpointGetListUsersPlaylistsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetListUsersPlaylistsResponse, _super);
    function EndpointGetListUsersPlaylistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetListUsersPlaylistsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetListUsersPlaylistsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetListUsersPlaylistsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetListUsersPlaylists200ApplicationJson)
    ], EndpointGetListUsersPlaylistsResponse.prototype, "endpointGetListUsersPlaylists200ApplicationJsonObject", void 0);
    return EndpointGetListUsersPlaylistsResponse;
}(SpeakeasyBase));
export { EndpointGetListUsersPlaylistsResponse };
