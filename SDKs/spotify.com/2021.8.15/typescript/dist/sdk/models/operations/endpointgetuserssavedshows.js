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
var EndpointGetUsersSavedShowsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedShowsQueryParams, _super);
    function EndpointGetUsersSavedShowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedShowsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedShowsQueryParams.prototype, "offset", void 0);
    return EndpointGetUsersSavedShowsQueryParams;
}(SpeakeasyBase));
export { EndpointGetUsersSavedShowsQueryParams };
var EndpointGetUsersSavedShowsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedShowsHeaders, _super);
    function EndpointGetUsersSavedShowsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedShowsHeaders.prototype, "authorization", void 0);
    return EndpointGetUsersSavedShowsHeaders;
}(SpeakeasyBase));
export { EndpointGetUsersSavedShowsHeaders };
var EndpointGetUsersSavedShowsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedShowsSecurity, _super);
    function EndpointGetUsersSavedShowsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetUsersSavedShowsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetUsersSavedShowsSecurity;
}(SpeakeasyBase));
export { EndpointGetUsersSavedShowsSecurity };
// EndpointGetUsersSavedShows200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetUsersSavedShows200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedShows200ApplicationJson, _super);
    function EndpointGetUsersSavedShows200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedShows200ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.SavedShowObject }),
        __metadata("design:type", Array)
    ], EndpointGetUsersSavedShows200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedShows200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedShows200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedShows200ApplicationJson.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedShows200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedShows200ApplicationJson.prototype, "total", void 0);
    return EndpointGetUsersSavedShows200ApplicationJson;
}(SpeakeasyBase));
export { EndpointGetUsersSavedShows200ApplicationJson };
var EndpointGetUsersSavedShowsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedShowsRequest, _super);
    function EndpointGetUsersSavedShowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersSavedShowsQueryParams)
    ], EndpointGetUsersSavedShowsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersSavedShowsHeaders)
    ], EndpointGetUsersSavedShowsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersSavedShowsSecurity)
    ], EndpointGetUsersSavedShowsRequest.prototype, "security", void 0);
    return EndpointGetUsersSavedShowsRequest;
}(SpeakeasyBase));
export { EndpointGetUsersSavedShowsRequest };
var EndpointGetUsersSavedShowsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedShowsResponse, _super);
    function EndpointGetUsersSavedShowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedShowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetUsersSavedShowsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedShowsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetUsersSavedShows200ApplicationJson)
    ], EndpointGetUsersSavedShowsResponse.prototype, "endpointGetUsersSavedShows200ApplicationJsonObject", void 0);
    return EndpointGetUsersSavedShowsResponse;
}(SpeakeasyBase));
export { EndpointGetUsersSavedShowsResponse };
