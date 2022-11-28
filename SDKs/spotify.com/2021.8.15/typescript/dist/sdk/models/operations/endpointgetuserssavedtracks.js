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
var EndpointGetUsersSavedTracksQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedTracksQueryParams, _super);
    function EndpointGetUsersSavedTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedTracksQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedTracksQueryParams.prototype, "market", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedTracksQueryParams.prototype, "offset", void 0);
    return EndpointGetUsersSavedTracksQueryParams;
}(SpeakeasyBase));
export { EndpointGetUsersSavedTracksQueryParams };
var EndpointGetUsersSavedTracksHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedTracksHeaders, _super);
    function EndpointGetUsersSavedTracksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedTracksHeaders.prototype, "authorization", void 0);
    return EndpointGetUsersSavedTracksHeaders;
}(SpeakeasyBase));
export { EndpointGetUsersSavedTracksHeaders };
var EndpointGetUsersSavedTracksSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedTracksSecurity, _super);
    function EndpointGetUsersSavedTracksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetUsersSavedTracksSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetUsersSavedTracksSecurity;
}(SpeakeasyBase));
export { EndpointGetUsersSavedTracksSecurity };
// EndpointGetUsersSavedTracks200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetUsersSavedTracks200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedTracks200ApplicationJson, _super);
    function EndpointGetUsersSavedTracks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedTracks200ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SavedTrackObject }),
        __metadata("design:type", Array)
    ], EndpointGetUsersSavedTracks200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedTracks200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedTracks200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedTracks200ApplicationJson.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedTracks200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedTracks200ApplicationJson.prototype, "total", void 0);
    return EndpointGetUsersSavedTracks200ApplicationJson;
}(SpeakeasyBase));
export { EndpointGetUsersSavedTracks200ApplicationJson };
var EndpointGetUsersSavedTracksRequest = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedTracksRequest, _super);
    function EndpointGetUsersSavedTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersSavedTracksQueryParams)
    ], EndpointGetUsersSavedTracksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersSavedTracksHeaders)
    ], EndpointGetUsersSavedTracksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersSavedTracksSecurity)
    ], EndpointGetUsersSavedTracksRequest.prototype, "security", void 0);
    return EndpointGetUsersSavedTracksRequest;
}(SpeakeasyBase));
export { EndpointGetUsersSavedTracksRequest };
var EndpointGetUsersSavedTracksResponse = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedTracksResponse, _super);
    function EndpointGetUsersSavedTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedTracksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetUsersSavedTracksResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedTracksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersSavedTracks200ApplicationJson)
    ], EndpointGetUsersSavedTracksResponse.prototype, "endpointGetUsersSavedTracks200ApplicationJsonObject", void 0);
    return EndpointGetUsersSavedTracksResponse;
}(SpeakeasyBase));
export { EndpointGetUsersSavedTracksResponse };
