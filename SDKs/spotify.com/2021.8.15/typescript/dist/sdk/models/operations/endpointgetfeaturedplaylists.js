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
var EndpointGetFeaturedPlaylistsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetFeaturedPlaylistsQueryParams, _super);
    function EndpointGetFeaturedPlaylistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], EndpointGetFeaturedPlaylistsQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetFeaturedPlaylistsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], EndpointGetFeaturedPlaylistsQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetFeaturedPlaylistsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", String)
    ], EndpointGetFeaturedPlaylistsQueryParams.prototype, "timestamp", void 0);
    return EndpointGetFeaturedPlaylistsQueryParams;
}(SpeakeasyBase));
export { EndpointGetFeaturedPlaylistsQueryParams };
var EndpointGetFeaturedPlaylistsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetFeaturedPlaylistsHeaders, _super);
    function EndpointGetFeaturedPlaylistsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetFeaturedPlaylistsHeaders.prototype, "authorization", void 0);
    return EndpointGetFeaturedPlaylistsHeaders;
}(SpeakeasyBase));
export { EndpointGetFeaturedPlaylistsHeaders };
var EndpointGetFeaturedPlaylistsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetFeaturedPlaylistsSecurity, _super);
    function EndpointGetFeaturedPlaylistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetFeaturedPlaylistsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetFeaturedPlaylistsSecurity;
}(SpeakeasyBase));
export { EndpointGetFeaturedPlaylistsSecurity };
var EndpointGetFeaturedPlaylistsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetFeaturedPlaylistsRequest, _super);
    function EndpointGetFeaturedPlaylistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetFeaturedPlaylistsQueryParams)
    ], EndpointGetFeaturedPlaylistsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetFeaturedPlaylistsHeaders)
    ], EndpointGetFeaturedPlaylistsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetFeaturedPlaylistsSecurity)
    ], EndpointGetFeaturedPlaylistsRequest.prototype, "security", void 0);
    return EndpointGetFeaturedPlaylistsRequest;
}(SpeakeasyBase));
export { EndpointGetFeaturedPlaylistsRequest };
var EndpointGetFeaturedPlaylistsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetFeaturedPlaylistsResponse, _super);
    function EndpointGetFeaturedPlaylistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetFeaturedPlaylistsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetFeaturedPlaylistsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FeaturedPlaylistObject)
    ], EndpointGetFeaturedPlaylistsResponse.prototype, "featuredPlaylistObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetFeaturedPlaylistsResponse.prototype, "statusCode", void 0);
    return EndpointGetFeaturedPlaylistsResponse;
}(SpeakeasyBase));
export { EndpointGetFeaturedPlaylistsResponse };
