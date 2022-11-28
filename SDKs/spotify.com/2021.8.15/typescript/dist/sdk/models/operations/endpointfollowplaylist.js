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
var EndpointFollowPlaylistPathParams = /** @class */ (function (_super) {
    __extends(EndpointFollowPlaylistPathParams, _super);
    function EndpointFollowPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointFollowPlaylistPathParams.prototype, "playlistId", void 0);
    return EndpointFollowPlaylistPathParams;
}(SpeakeasyBase));
export { EndpointFollowPlaylistPathParams };
var EndpointFollowPlaylistHeaders = /** @class */ (function (_super) {
    __extends(EndpointFollowPlaylistHeaders, _super);
    function EndpointFollowPlaylistHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointFollowPlaylistHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointFollowPlaylistHeaders.prototype, "contentType", void 0);
    return EndpointFollowPlaylistHeaders;
}(SpeakeasyBase));
export { EndpointFollowPlaylistHeaders };
var EndpointFollowPlaylistRequestBody = /** @class */ (function (_super) {
    __extends(EndpointFollowPlaylistRequestBody, _super);
    function EndpointFollowPlaylistRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], EndpointFollowPlaylistRequestBody.prototype, "public", void 0);
    return EndpointFollowPlaylistRequestBody;
}(SpeakeasyBase));
export { EndpointFollowPlaylistRequestBody };
var EndpointFollowPlaylistSecurity = /** @class */ (function (_super) {
    __extends(EndpointFollowPlaylistSecurity, _super);
    function EndpointFollowPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointFollowPlaylistSecurity.prototype, "spotifyAuth", void 0);
    return EndpointFollowPlaylistSecurity;
}(SpeakeasyBase));
export { EndpointFollowPlaylistSecurity };
var EndpointFollowPlaylistRequest = /** @class */ (function (_super) {
    __extends(EndpointFollowPlaylistRequest, _super);
    function EndpointFollowPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointFollowPlaylistPathParams)
    ], EndpointFollowPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointFollowPlaylistHeaders)
    ], EndpointFollowPlaylistRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointFollowPlaylistRequestBody)
    ], EndpointFollowPlaylistRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointFollowPlaylistSecurity)
    ], EndpointFollowPlaylistRequest.prototype, "security", void 0);
    return EndpointFollowPlaylistRequest;
}(SpeakeasyBase));
export { EndpointFollowPlaylistRequest };
var EndpointFollowPlaylistResponse = /** @class */ (function (_super) {
    __extends(EndpointFollowPlaylistResponse, _super);
    function EndpointFollowPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointFollowPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointFollowPlaylistResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointFollowPlaylistResponse.prototype, "statusCode", void 0);
    return EndpointFollowPlaylistResponse;
}(SpeakeasyBase));
export { EndpointFollowPlaylistResponse };
