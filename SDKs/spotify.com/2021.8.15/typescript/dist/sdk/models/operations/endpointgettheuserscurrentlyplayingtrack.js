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
var EndpointGetTheUsersCurrentlyPlayingTrackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetTheUsersCurrentlyPlayingTrackQueryParams, _super);
    function EndpointGetTheUsersCurrentlyPlayingTrackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=additional_types" }),
        __metadata("design:type", String)
    ], EndpointGetTheUsersCurrentlyPlayingTrackQueryParams.prototype, "additionalTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetTheUsersCurrentlyPlayingTrackQueryParams.prototype, "market", void 0);
    return EndpointGetTheUsersCurrentlyPlayingTrackQueryParams;
}(SpeakeasyBase));
export { EndpointGetTheUsersCurrentlyPlayingTrackQueryParams };
var EndpointGetTheUsersCurrentlyPlayingTrackHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetTheUsersCurrentlyPlayingTrackHeaders, _super);
    function EndpointGetTheUsersCurrentlyPlayingTrackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetTheUsersCurrentlyPlayingTrackHeaders.prototype, "authorization", void 0);
    return EndpointGetTheUsersCurrentlyPlayingTrackHeaders;
}(SpeakeasyBase));
export { EndpointGetTheUsersCurrentlyPlayingTrackHeaders };
var EndpointGetTheUsersCurrentlyPlayingTrackSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetTheUsersCurrentlyPlayingTrackSecurity, _super);
    function EndpointGetTheUsersCurrentlyPlayingTrackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetTheUsersCurrentlyPlayingTrackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetTheUsersCurrentlyPlayingTrackSecurity;
}(SpeakeasyBase));
export { EndpointGetTheUsersCurrentlyPlayingTrackSecurity };
var EndpointGetTheUsersCurrentlyPlayingTrackRequest = /** @class */ (function (_super) {
    __extends(EndpointGetTheUsersCurrentlyPlayingTrackRequest, _super);
    function EndpointGetTheUsersCurrentlyPlayingTrackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetTheUsersCurrentlyPlayingTrackQueryParams)
    ], EndpointGetTheUsersCurrentlyPlayingTrackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetTheUsersCurrentlyPlayingTrackHeaders)
    ], EndpointGetTheUsersCurrentlyPlayingTrackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetTheUsersCurrentlyPlayingTrackSecurity)
    ], EndpointGetTheUsersCurrentlyPlayingTrackRequest.prototype, "security", void 0);
    return EndpointGetTheUsersCurrentlyPlayingTrackRequest;
}(SpeakeasyBase));
export { EndpointGetTheUsersCurrentlyPlayingTrackRequest };
var EndpointGetTheUsersCurrentlyPlayingTrackResponse = /** @class */ (function (_super) {
    __extends(EndpointGetTheUsersCurrentlyPlayingTrackResponse, _super);
    function EndpointGetTheUsersCurrentlyPlayingTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetTheUsersCurrentlyPlayingTrackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CurrentlyPlayingObject)
    ], EndpointGetTheUsersCurrentlyPlayingTrackResponse.prototype, "currentlyPlayingObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetTheUsersCurrentlyPlayingTrackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetTheUsersCurrentlyPlayingTrackResponse.prototype, "statusCode", void 0);
    return EndpointGetTheUsersCurrentlyPlayingTrackResponse;
}(SpeakeasyBase));
export { EndpointGetTheUsersCurrentlyPlayingTrackResponse };
