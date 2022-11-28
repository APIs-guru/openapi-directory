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
var EndpointCheckIfUserFollowsPlaylistPathParams = /** @class */ (function (_super) {
    __extends(EndpointCheckIfUserFollowsPlaylistPathParams, _super);
    function EndpointCheckIfUserFollowsPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointCheckIfUserFollowsPlaylistPathParams.prototype, "playlistId", void 0);
    return EndpointCheckIfUserFollowsPlaylistPathParams;
}(SpeakeasyBase));
export { EndpointCheckIfUserFollowsPlaylistPathParams };
var EndpointCheckIfUserFollowsPlaylistQueryParams = /** @class */ (function (_super) {
    __extends(EndpointCheckIfUserFollowsPlaylistQueryParams, _super);
    function EndpointCheckIfUserFollowsPlaylistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointCheckIfUserFollowsPlaylistQueryParams.prototype, "ids", void 0);
    return EndpointCheckIfUserFollowsPlaylistQueryParams;
}(SpeakeasyBase));
export { EndpointCheckIfUserFollowsPlaylistQueryParams };
var EndpointCheckIfUserFollowsPlaylistHeaders = /** @class */ (function (_super) {
    __extends(EndpointCheckIfUserFollowsPlaylistHeaders, _super);
    function EndpointCheckIfUserFollowsPlaylistHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointCheckIfUserFollowsPlaylistHeaders.prototype, "authorization", void 0);
    return EndpointCheckIfUserFollowsPlaylistHeaders;
}(SpeakeasyBase));
export { EndpointCheckIfUserFollowsPlaylistHeaders };
var EndpointCheckIfUserFollowsPlaylistSecurity = /** @class */ (function (_super) {
    __extends(EndpointCheckIfUserFollowsPlaylistSecurity, _super);
    function EndpointCheckIfUserFollowsPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointCheckIfUserFollowsPlaylistSecurity.prototype, "spotifyAuth", void 0);
    return EndpointCheckIfUserFollowsPlaylistSecurity;
}(SpeakeasyBase));
export { EndpointCheckIfUserFollowsPlaylistSecurity };
var EndpointCheckIfUserFollowsPlaylistRequest = /** @class */ (function (_super) {
    __extends(EndpointCheckIfUserFollowsPlaylistRequest, _super);
    function EndpointCheckIfUserFollowsPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckIfUserFollowsPlaylistPathParams)
    ], EndpointCheckIfUserFollowsPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckIfUserFollowsPlaylistQueryParams)
    ], EndpointCheckIfUserFollowsPlaylistRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckIfUserFollowsPlaylistHeaders)
    ], EndpointCheckIfUserFollowsPlaylistRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckIfUserFollowsPlaylistSecurity)
    ], EndpointCheckIfUserFollowsPlaylistRequest.prototype, "security", void 0);
    return EndpointCheckIfUserFollowsPlaylistRequest;
}(SpeakeasyBase));
export { EndpointCheckIfUserFollowsPlaylistRequest };
var EndpointCheckIfUserFollowsPlaylistResponse = /** @class */ (function (_super) {
    __extends(EndpointCheckIfUserFollowsPlaylistResponse, _super);
    function EndpointCheckIfUserFollowsPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointCheckIfUserFollowsPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointCheckIfUserFollowsPlaylistResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointCheckIfUserFollowsPlaylistResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], EndpointCheckIfUserFollowsPlaylistResponse.prototype, "endpointCheckIfUserFollowsPlaylist200ApplicationJsonBooleans", void 0);
    return EndpointCheckIfUserFollowsPlaylistResponse;
}(SpeakeasyBase));
export { EndpointCheckIfUserFollowsPlaylistResponse };
