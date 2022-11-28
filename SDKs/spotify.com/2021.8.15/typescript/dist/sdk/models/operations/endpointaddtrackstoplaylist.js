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
var EndpointAddTracksToPlaylistPathParams = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistPathParams, _super);
    function EndpointAddTracksToPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointAddTracksToPlaylistPathParams.prototype, "playlistId", void 0);
    return EndpointAddTracksToPlaylistPathParams;
}(SpeakeasyBase));
export { EndpointAddTracksToPlaylistPathParams };
var EndpointAddTracksToPlaylistQueryParams = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistQueryParams, _super);
    function EndpointAddTracksToPlaylistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" }),
        __metadata("design:type", Number)
    ], EndpointAddTracksToPlaylistQueryParams.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" }),
        __metadata("design:type", String)
    ], EndpointAddTracksToPlaylistQueryParams.prototype, "uris", void 0);
    return EndpointAddTracksToPlaylistQueryParams;
}(SpeakeasyBase));
export { EndpointAddTracksToPlaylistQueryParams };
var EndpointAddTracksToPlaylistHeaders = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistHeaders, _super);
    function EndpointAddTracksToPlaylistHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointAddTracksToPlaylistHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointAddTracksToPlaylistHeaders.prototype, "contentType", void 0);
    return EndpointAddTracksToPlaylistHeaders;
}(SpeakeasyBase));
export { EndpointAddTracksToPlaylistHeaders };
var EndpointAddTracksToPlaylistRequestBody = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistRequestBody, _super);
    function EndpointAddTracksToPlaylistRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], EndpointAddTracksToPlaylistRequestBody.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uris" }),
        __metadata("design:type", Array)
    ], EndpointAddTracksToPlaylistRequestBody.prototype, "uris", void 0);
    return EndpointAddTracksToPlaylistRequestBody;
}(SpeakeasyBase));
export { EndpointAddTracksToPlaylistRequestBody };
var EndpointAddTracksToPlaylistSecurity = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistSecurity, _super);
    function EndpointAddTracksToPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointAddTracksToPlaylistSecurity.prototype, "spotifyAuth", void 0);
    return EndpointAddTracksToPlaylistSecurity;
}(SpeakeasyBase));
export { EndpointAddTracksToPlaylistSecurity };
var EndpointAddTracksToPlaylistRequest = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistRequest, _super);
    function EndpointAddTracksToPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointAddTracksToPlaylistPathParams)
    ], EndpointAddTracksToPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointAddTracksToPlaylistQueryParams)
    ], EndpointAddTracksToPlaylistRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointAddTracksToPlaylistHeaders)
    ], EndpointAddTracksToPlaylistRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointAddTracksToPlaylistRequestBody)
    ], EndpointAddTracksToPlaylistRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointAddTracksToPlaylistSecurity)
    ], EndpointAddTracksToPlaylistRequest.prototype, "security", void 0);
    return EndpointAddTracksToPlaylistRequest;
}(SpeakeasyBase));
export { EndpointAddTracksToPlaylistRequest };
var EndpointAddTracksToPlaylistResponse = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistResponse, _super);
    function EndpointAddTracksToPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointAddTracksToPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointAddTracksToPlaylistResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SnapshotIdObject)
    ], EndpointAddTracksToPlaylistResponse.prototype, "snapshotIdObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointAddTracksToPlaylistResponse.prototype, "statusCode", void 0);
    return EndpointAddTracksToPlaylistResponse;
}(SpeakeasyBase));
export { EndpointAddTracksToPlaylistResponse };
