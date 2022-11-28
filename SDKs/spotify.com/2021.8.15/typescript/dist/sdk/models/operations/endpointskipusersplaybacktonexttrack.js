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
var EndpointSkipUsersPlaybackToNextTrackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointSkipUsersPlaybackToNextTrackQueryParams, _super);
    function EndpointSkipUsersPlaybackToNextTrackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointSkipUsersPlaybackToNextTrackQueryParams.prototype, "deviceId", void 0);
    return EndpointSkipUsersPlaybackToNextTrackQueryParams;
}(SpeakeasyBase));
export { EndpointSkipUsersPlaybackToNextTrackQueryParams };
var EndpointSkipUsersPlaybackToNextTrackHeaders = /** @class */ (function (_super) {
    __extends(EndpointSkipUsersPlaybackToNextTrackHeaders, _super);
    function EndpointSkipUsersPlaybackToNextTrackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointSkipUsersPlaybackToNextTrackHeaders.prototype, "authorization", void 0);
    return EndpointSkipUsersPlaybackToNextTrackHeaders;
}(SpeakeasyBase));
export { EndpointSkipUsersPlaybackToNextTrackHeaders };
var EndpointSkipUsersPlaybackToNextTrackSecurity = /** @class */ (function (_super) {
    __extends(EndpointSkipUsersPlaybackToNextTrackSecurity, _super);
    function EndpointSkipUsersPlaybackToNextTrackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointSkipUsersPlaybackToNextTrackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointSkipUsersPlaybackToNextTrackSecurity;
}(SpeakeasyBase));
export { EndpointSkipUsersPlaybackToNextTrackSecurity };
var EndpointSkipUsersPlaybackToNextTrackRequest = /** @class */ (function (_super) {
    __extends(EndpointSkipUsersPlaybackToNextTrackRequest, _super);
    function EndpointSkipUsersPlaybackToNextTrackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSkipUsersPlaybackToNextTrackQueryParams)
    ], EndpointSkipUsersPlaybackToNextTrackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSkipUsersPlaybackToNextTrackHeaders)
    ], EndpointSkipUsersPlaybackToNextTrackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSkipUsersPlaybackToNextTrackSecurity)
    ], EndpointSkipUsersPlaybackToNextTrackRequest.prototype, "security", void 0);
    return EndpointSkipUsersPlaybackToNextTrackRequest;
}(SpeakeasyBase));
export { EndpointSkipUsersPlaybackToNextTrackRequest };
var EndpointSkipUsersPlaybackToNextTrackResponse = /** @class */ (function (_super) {
    __extends(EndpointSkipUsersPlaybackToNextTrackResponse, _super);
    function EndpointSkipUsersPlaybackToNextTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointSkipUsersPlaybackToNextTrackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointSkipUsersPlaybackToNextTrackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointSkipUsersPlaybackToNextTrackResponse.prototype, "statusCode", void 0);
    return EndpointSkipUsersPlaybackToNextTrackResponse;
}(SpeakeasyBase));
export { EndpointSkipUsersPlaybackToNextTrackResponse };
