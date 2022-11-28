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
var EndpointGetPlaylistPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistPathParams, _super);
    function EndpointGetPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistPathParams.prototype, "playlistId", void 0);
    return EndpointGetPlaylistPathParams;
}(SpeakeasyBase));
export { EndpointGetPlaylistPathParams };
var EndpointGetPlaylistQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistQueryParams, _super);
    function EndpointGetPlaylistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=additional_types" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistQueryParams.prototype, "additionalTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistQueryParams.prototype, "market", void 0);
    return EndpointGetPlaylistQueryParams;
}(SpeakeasyBase));
export { EndpointGetPlaylistQueryParams };
var EndpointGetPlaylistHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistHeaders, _super);
    function EndpointGetPlaylistHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistHeaders.prototype, "authorization", void 0);
    return EndpointGetPlaylistHeaders;
}(SpeakeasyBase));
export { EndpointGetPlaylistHeaders };
var EndpointGetPlaylistSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistSecurity, _super);
    function EndpointGetPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetPlaylistSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetPlaylistSecurity;
}(SpeakeasyBase));
export { EndpointGetPlaylistSecurity };
var EndpointGetPlaylistRequest = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistRequest, _super);
    function EndpointGetPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistPathParams)
    ], EndpointGetPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistQueryParams)
    ], EndpointGetPlaylistRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistHeaders)
    ], EndpointGetPlaylistRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistSecurity)
    ], EndpointGetPlaylistRequest.prototype, "security", void 0);
    return EndpointGetPlaylistRequest;
}(SpeakeasyBase));
export { EndpointGetPlaylistRequest };
var EndpointGetPlaylistResponse = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistResponse, _super);
    function EndpointGetPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetPlaylistResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlaylistObject)
    ], EndpointGetPlaylistResponse.prototype, "playlistObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetPlaylistResponse.prototype, "statusCode", void 0);
    return EndpointGetPlaylistResponse;
}(SpeakeasyBase));
export { EndpointGetPlaylistResponse };
