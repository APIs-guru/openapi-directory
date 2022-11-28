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
var EndpointGetAnArtistsTopTracksPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsTopTracksPathParams, _super);
    function EndpointGetAnArtistsTopTracksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsTopTracksPathParams.prototype, "id", void 0);
    return EndpointGetAnArtistsTopTracksPathParams;
}(SpeakeasyBase));
export { EndpointGetAnArtistsTopTracksPathParams };
var EndpointGetAnArtistsTopTracksQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsTopTracksQueryParams, _super);
    function EndpointGetAnArtistsTopTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsTopTracksQueryParams.prototype, "market", void 0);
    return EndpointGetAnArtistsTopTracksQueryParams;
}(SpeakeasyBase));
export { EndpointGetAnArtistsTopTracksQueryParams };
var EndpointGetAnArtistsTopTracksHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsTopTracksHeaders, _super);
    function EndpointGetAnArtistsTopTracksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsTopTracksHeaders.prototype, "authorization", void 0);
    return EndpointGetAnArtistsTopTracksHeaders;
}(SpeakeasyBase));
export { EndpointGetAnArtistsTopTracksHeaders };
var EndpointGetAnArtistsTopTracksSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsTopTracksSecurity, _super);
    function EndpointGetAnArtistsTopTracksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetAnArtistsTopTracksSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetAnArtistsTopTracksSecurity;
}(SpeakeasyBase));
export { EndpointGetAnArtistsTopTracksSecurity };
var EndpointGetAnArtistsTopTracksRequest = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsTopTracksRequest, _super);
    function EndpointGetAnArtistsTopTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnArtistsTopTracksPathParams)
    ], EndpointGetAnArtistsTopTracksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnArtistsTopTracksQueryParams)
    ], EndpointGetAnArtistsTopTracksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnArtistsTopTracksHeaders)
    ], EndpointGetAnArtistsTopTracksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnArtistsTopTracksSecurity)
    ], EndpointGetAnArtistsTopTracksRequest.prototype, "security", void 0);
    return EndpointGetAnArtistsTopTracksRequest;
}(SpeakeasyBase));
export { EndpointGetAnArtistsTopTracksRequest };
var EndpointGetAnArtistsTopTracksResponse = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsTopTracksResponse, _super);
    function EndpointGetAnArtistsTopTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsTopTracksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetAnArtistsTopTracksResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetAnArtistsTopTracksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TracksObject)
    ], EndpointGetAnArtistsTopTracksResponse.prototype, "tracksObject", void 0);
    return EndpointGetAnArtistsTopTracksResponse;
}(SpeakeasyBase));
export { EndpointGetAnArtistsTopTracksResponse };
