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
var EndpointRemoveTracksPlaylistPathParams = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksPlaylistPathParams, _super);
    function EndpointRemoveTracksPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointRemoveTracksPlaylistPathParams.prototype, "playlistId", void 0);
    return EndpointRemoveTracksPlaylistPathParams;
}(SpeakeasyBase));
export { EndpointRemoveTracksPlaylistPathParams };
var EndpointRemoveTracksPlaylistHeaders = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksPlaylistHeaders, _super);
    function EndpointRemoveTracksPlaylistHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointRemoveTracksPlaylistHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointRemoveTracksPlaylistHeaders.prototype, "contentType", void 0);
    return EndpointRemoveTracksPlaylistHeaders;
}(SpeakeasyBase));
export { EndpointRemoveTracksPlaylistHeaders };
var EndpointRemoveTracksPlaylistRequestBody = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksPlaylistRequestBody, _super);
    function EndpointRemoveTracksPlaylistRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshot_id" }),
        __metadata("design:type", String)
    ], EndpointRemoveTracksPlaylistRequestBody.prototype, "snapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracks" }),
        __metadata("design:type", Array)
    ], EndpointRemoveTracksPlaylistRequestBody.prototype, "tracks", void 0);
    return EndpointRemoveTracksPlaylistRequestBody;
}(SpeakeasyBase));
export { EndpointRemoveTracksPlaylistRequestBody };
var EndpointRemoveTracksPlaylistSecurity = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksPlaylistSecurity, _super);
    function EndpointRemoveTracksPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointRemoveTracksPlaylistSecurity.prototype, "spotifyAuth", void 0);
    return EndpointRemoveTracksPlaylistSecurity;
}(SpeakeasyBase));
export { EndpointRemoveTracksPlaylistSecurity };
var EndpointRemoveTracksPlaylistRequest = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksPlaylistRequest, _super);
    function EndpointRemoveTracksPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveTracksPlaylistPathParams)
    ], EndpointRemoveTracksPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveTracksPlaylistHeaders)
    ], EndpointRemoveTracksPlaylistRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointRemoveTracksPlaylistRequestBody)
    ], EndpointRemoveTracksPlaylistRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveTracksPlaylistSecurity)
    ], EndpointRemoveTracksPlaylistRequest.prototype, "security", void 0);
    return EndpointRemoveTracksPlaylistRequest;
}(SpeakeasyBase));
export { EndpointRemoveTracksPlaylistRequest };
var EndpointRemoveTracksPlaylistResponse = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksPlaylistResponse, _super);
    function EndpointRemoveTracksPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointRemoveTracksPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointRemoveTracksPlaylistResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SnapshotIdObject)
    ], EndpointRemoveTracksPlaylistResponse.prototype, "snapshotIdObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointRemoveTracksPlaylistResponse.prototype, "statusCode", void 0);
    return EndpointRemoveTracksPlaylistResponse;
}(SpeakeasyBase));
export { EndpointRemoveTracksPlaylistResponse };
