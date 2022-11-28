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
var EndpointUploadCustomPlaylistCoverPathParams = /** @class */ (function (_super) {
    __extends(EndpointUploadCustomPlaylistCoverPathParams, _super);
    function EndpointUploadCustomPlaylistCoverPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointUploadCustomPlaylistCoverPathParams.prototype, "playlistId", void 0);
    return EndpointUploadCustomPlaylistCoverPathParams;
}(SpeakeasyBase));
export { EndpointUploadCustomPlaylistCoverPathParams };
var EndpointUploadCustomPlaylistCoverHeaders = /** @class */ (function (_super) {
    __extends(EndpointUploadCustomPlaylistCoverHeaders, _super);
    function EndpointUploadCustomPlaylistCoverHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointUploadCustomPlaylistCoverHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointUploadCustomPlaylistCoverHeaders.prototype, "contentType", void 0);
    return EndpointUploadCustomPlaylistCoverHeaders;
}(SpeakeasyBase));
export { EndpointUploadCustomPlaylistCoverHeaders };
var EndpointUploadCustomPlaylistCoverSecurity = /** @class */ (function (_super) {
    __extends(EndpointUploadCustomPlaylistCoverSecurity, _super);
    function EndpointUploadCustomPlaylistCoverSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointUploadCustomPlaylistCoverSecurity.prototype, "spotifyAuth", void 0);
    return EndpointUploadCustomPlaylistCoverSecurity;
}(SpeakeasyBase));
export { EndpointUploadCustomPlaylistCoverSecurity };
var EndpointUploadCustomPlaylistCoverRequest = /** @class */ (function (_super) {
    __extends(EndpointUploadCustomPlaylistCoverRequest, _super);
    function EndpointUploadCustomPlaylistCoverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointUploadCustomPlaylistCoverPathParams)
    ], EndpointUploadCustomPlaylistCoverRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointUploadCustomPlaylistCoverHeaders)
    ], EndpointUploadCustomPlaylistCoverRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jpeg" }),
        __metadata("design:type", String)
    ], EndpointUploadCustomPlaylistCoverRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointUploadCustomPlaylistCoverSecurity)
    ], EndpointUploadCustomPlaylistCoverRequest.prototype, "security", void 0);
    return EndpointUploadCustomPlaylistCoverRequest;
}(SpeakeasyBase));
export { EndpointUploadCustomPlaylistCoverRequest };
var EndpointUploadCustomPlaylistCoverResponse = /** @class */ (function (_super) {
    __extends(EndpointUploadCustomPlaylistCoverResponse, _super);
    function EndpointUploadCustomPlaylistCoverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointUploadCustomPlaylistCoverResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointUploadCustomPlaylistCoverResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointUploadCustomPlaylistCoverResponse.prototype, "statusCode", void 0);
    return EndpointUploadCustomPlaylistCoverResponse;
}(SpeakeasyBase));
export { EndpointUploadCustomPlaylistCoverResponse };
