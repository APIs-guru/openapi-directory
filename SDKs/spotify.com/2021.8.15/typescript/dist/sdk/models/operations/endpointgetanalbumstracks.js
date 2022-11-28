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
var EndpointGetAnAlbumsTracksPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumsTracksPathParams, _super);
    function EndpointGetAnAlbumsTracksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumsTracksPathParams.prototype, "id", void 0);
    return EndpointGetAnAlbumsTracksPathParams;
}(SpeakeasyBase));
export { EndpointGetAnAlbumsTracksPathParams };
var EndpointGetAnAlbumsTracksQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumsTracksQueryParams, _super);
    function EndpointGetAnAlbumsTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetAnAlbumsTracksQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumsTracksQueryParams.prototype, "market", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetAnAlbumsTracksQueryParams.prototype, "offset", void 0);
    return EndpointGetAnAlbumsTracksQueryParams;
}(SpeakeasyBase));
export { EndpointGetAnAlbumsTracksQueryParams };
var EndpointGetAnAlbumsTracksHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumsTracksHeaders, _super);
    function EndpointGetAnAlbumsTracksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumsTracksHeaders.prototype, "authorization", void 0);
    return EndpointGetAnAlbumsTracksHeaders;
}(SpeakeasyBase));
export { EndpointGetAnAlbumsTracksHeaders };
var EndpointGetAnAlbumsTracksSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumsTracksSecurity, _super);
    function EndpointGetAnAlbumsTracksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetAnAlbumsTracksSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetAnAlbumsTracksSecurity;
}(SpeakeasyBase));
export { EndpointGetAnAlbumsTracksSecurity };
// EndpointGetAnAlbumsTracks200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetAnAlbumsTracks200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumsTracks200ApplicationJson, _super);
    function EndpointGetAnAlbumsTracks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumsTracks200ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SimplifiedTrackObject }),
        __metadata("design:type", Array)
    ], EndpointGetAnAlbumsTracks200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetAnAlbumsTracks200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumsTracks200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetAnAlbumsTracks200ApplicationJson.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumsTracks200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetAnAlbumsTracks200ApplicationJson.prototype, "total", void 0);
    return EndpointGetAnAlbumsTracks200ApplicationJson;
}(SpeakeasyBase));
export { EndpointGetAnAlbumsTracks200ApplicationJson };
var EndpointGetAnAlbumsTracksRequest = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumsTracksRequest, _super);
    function EndpointGetAnAlbumsTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnAlbumsTracksPathParams)
    ], EndpointGetAnAlbumsTracksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnAlbumsTracksQueryParams)
    ], EndpointGetAnAlbumsTracksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnAlbumsTracksHeaders)
    ], EndpointGetAnAlbumsTracksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnAlbumsTracksSecurity)
    ], EndpointGetAnAlbumsTracksRequest.prototype, "security", void 0);
    return EndpointGetAnAlbumsTracksRequest;
}(SpeakeasyBase));
export { EndpointGetAnAlbumsTracksRequest };
var EndpointGetAnAlbumsTracksResponse = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumsTracksResponse, _super);
    function EndpointGetAnAlbumsTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumsTracksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetAnAlbumsTracksResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetAnAlbumsTracksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnAlbumsTracks200ApplicationJson)
    ], EndpointGetAnAlbumsTracksResponse.prototype, "endpointGetAnAlbumsTracks200ApplicationJsonObject", void 0);
    return EndpointGetAnAlbumsTracksResponse;
}(SpeakeasyBase));
export { EndpointGetAnAlbumsTracksResponse };
