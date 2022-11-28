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
var EndpointGetPlaylistCoverPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistCoverPathParams, _super);
    function EndpointGetPlaylistCoverPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistCoverPathParams.prototype, "playlistId", void 0);
    return EndpointGetPlaylistCoverPathParams;
}(SpeakeasyBase));
export { EndpointGetPlaylistCoverPathParams };
var EndpointGetPlaylistCoverHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistCoverHeaders, _super);
    function EndpointGetPlaylistCoverHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetPlaylistCoverHeaders.prototype, "authorization", void 0);
    return EndpointGetPlaylistCoverHeaders;
}(SpeakeasyBase));
export { EndpointGetPlaylistCoverHeaders };
var EndpointGetPlaylistCoverSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistCoverSecurity, _super);
    function EndpointGetPlaylistCoverSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetPlaylistCoverSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetPlaylistCoverSecurity;
}(SpeakeasyBase));
export { EndpointGetPlaylistCoverSecurity };
var EndpointGetPlaylistCoverRequest = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistCoverRequest, _super);
    function EndpointGetPlaylistCoverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistCoverPathParams)
    ], EndpointGetPlaylistCoverRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistCoverHeaders)
    ], EndpointGetPlaylistCoverRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetPlaylistCoverSecurity)
    ], EndpointGetPlaylistCoverRequest.prototype, "security", void 0);
    return EndpointGetPlaylistCoverRequest;
}(SpeakeasyBase));
export { EndpointGetPlaylistCoverRequest };
var EndpointGetPlaylistCoverResponse = /** @class */ (function (_super) {
    __extends(EndpointGetPlaylistCoverResponse, _super);
    function EndpointGetPlaylistCoverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetPlaylistCoverResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetPlaylistCoverResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ImageObject }),
        __metadata("design:type", Array)
    ], EndpointGetPlaylistCoverResponse.prototype, "imageObjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetPlaylistCoverResponse.prototype, "statusCode", void 0);
    return EndpointGetPlaylistCoverResponse;
}(SpeakeasyBase));
export { EndpointGetPlaylistCoverResponse };
