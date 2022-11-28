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
var EndpointUnfollowPlaylistPathParams = /** @class */ (function (_super) {
    __extends(EndpointUnfollowPlaylistPathParams, _super);
    function EndpointUnfollowPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointUnfollowPlaylistPathParams.prototype, "playlistId", void 0);
    return EndpointUnfollowPlaylistPathParams;
}(SpeakeasyBase));
export { EndpointUnfollowPlaylistPathParams };
var EndpointUnfollowPlaylistHeaders = /** @class */ (function (_super) {
    __extends(EndpointUnfollowPlaylistHeaders, _super);
    function EndpointUnfollowPlaylistHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointUnfollowPlaylistHeaders.prototype, "authorization", void 0);
    return EndpointUnfollowPlaylistHeaders;
}(SpeakeasyBase));
export { EndpointUnfollowPlaylistHeaders };
var EndpointUnfollowPlaylistSecurity = /** @class */ (function (_super) {
    __extends(EndpointUnfollowPlaylistSecurity, _super);
    function EndpointUnfollowPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointUnfollowPlaylistSecurity.prototype, "spotifyAuth", void 0);
    return EndpointUnfollowPlaylistSecurity;
}(SpeakeasyBase));
export { EndpointUnfollowPlaylistSecurity };
var EndpointUnfollowPlaylistRequest = /** @class */ (function (_super) {
    __extends(EndpointUnfollowPlaylistRequest, _super);
    function EndpointUnfollowPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointUnfollowPlaylistPathParams)
    ], EndpointUnfollowPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointUnfollowPlaylistHeaders)
    ], EndpointUnfollowPlaylistRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointUnfollowPlaylistSecurity)
    ], EndpointUnfollowPlaylistRequest.prototype, "security", void 0);
    return EndpointUnfollowPlaylistRequest;
}(SpeakeasyBase));
export { EndpointUnfollowPlaylistRequest };
var EndpointUnfollowPlaylistResponse = /** @class */ (function (_super) {
    __extends(EndpointUnfollowPlaylistResponse, _super);
    function EndpointUnfollowPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointUnfollowPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointUnfollowPlaylistResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointUnfollowPlaylistResponse.prototype, "statusCode", void 0);
    return EndpointUnfollowPlaylistResponse;
}(SpeakeasyBase));
export { EndpointUnfollowPlaylistResponse };
