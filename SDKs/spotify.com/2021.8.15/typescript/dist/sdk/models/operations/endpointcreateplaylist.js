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
var EndpointCreatePlaylistPathParams = /** @class */ (function (_super) {
    __extends(EndpointCreatePlaylistPathParams, _super);
    function EndpointCreatePlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], EndpointCreatePlaylistPathParams.prototype, "userId", void 0);
    return EndpointCreatePlaylistPathParams;
}(SpeakeasyBase));
export { EndpointCreatePlaylistPathParams };
var EndpointCreatePlaylistHeaders = /** @class */ (function (_super) {
    __extends(EndpointCreatePlaylistHeaders, _super);
    function EndpointCreatePlaylistHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointCreatePlaylistHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointCreatePlaylistHeaders.prototype, "contentType", void 0);
    return EndpointCreatePlaylistHeaders;
}(SpeakeasyBase));
export { EndpointCreatePlaylistHeaders };
var EndpointCreatePlaylistRequestBody = /** @class */ (function (_super) {
    __extends(EndpointCreatePlaylistRequestBody, _super);
    function EndpointCreatePlaylistRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborative" }),
        __metadata("design:type", Boolean)
    ], EndpointCreatePlaylistRequestBody.prototype, "collaborative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EndpointCreatePlaylistRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EndpointCreatePlaylistRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], EndpointCreatePlaylistRequestBody.prototype, "public", void 0);
    return EndpointCreatePlaylistRequestBody;
}(SpeakeasyBase));
export { EndpointCreatePlaylistRequestBody };
var EndpointCreatePlaylistSecurity = /** @class */ (function (_super) {
    __extends(EndpointCreatePlaylistSecurity, _super);
    function EndpointCreatePlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointCreatePlaylistSecurity.prototype, "spotifyAuth", void 0);
    return EndpointCreatePlaylistSecurity;
}(SpeakeasyBase));
export { EndpointCreatePlaylistSecurity };
var EndpointCreatePlaylistRequest = /** @class */ (function (_super) {
    __extends(EndpointCreatePlaylistRequest, _super);
    function EndpointCreatePlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCreatePlaylistPathParams)
    ], EndpointCreatePlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCreatePlaylistHeaders)
    ], EndpointCreatePlaylistRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointCreatePlaylistRequestBody)
    ], EndpointCreatePlaylistRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCreatePlaylistSecurity)
    ], EndpointCreatePlaylistRequest.prototype, "security", void 0);
    return EndpointCreatePlaylistRequest;
}(SpeakeasyBase));
export { EndpointCreatePlaylistRequest };
var EndpointCreatePlaylistResponse = /** @class */ (function (_super) {
    __extends(EndpointCreatePlaylistResponse, _super);
    function EndpointCreatePlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointCreatePlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointCreatePlaylistResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlaylistObject)
    ], EndpointCreatePlaylistResponse.prototype, "playlistObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointCreatePlaylistResponse.prototype, "statusCode", void 0);
    return EndpointCreatePlaylistResponse;
}(SpeakeasyBase));
export { EndpointCreatePlaylistResponse };
