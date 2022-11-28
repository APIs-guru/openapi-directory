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
var EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams, _super);
    function EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position_ms" }),
        __metadata("design:type", Number)
    ], EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams.prototype, "positionMs", void 0);
    return EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams;
}(SpeakeasyBase));
export { EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams };
var EndpointSeekToPositionInCurrentlyPlayingTrackHeaders = /** @class */ (function (_super) {
    __extends(EndpointSeekToPositionInCurrentlyPlayingTrackHeaders, _super);
    function EndpointSeekToPositionInCurrentlyPlayingTrackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointSeekToPositionInCurrentlyPlayingTrackHeaders.prototype, "authorization", void 0);
    return EndpointSeekToPositionInCurrentlyPlayingTrackHeaders;
}(SpeakeasyBase));
export { EndpointSeekToPositionInCurrentlyPlayingTrackHeaders };
var EndpointSeekToPositionInCurrentlyPlayingTrackSecurity = /** @class */ (function (_super) {
    __extends(EndpointSeekToPositionInCurrentlyPlayingTrackSecurity, _super);
    function EndpointSeekToPositionInCurrentlyPlayingTrackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointSeekToPositionInCurrentlyPlayingTrackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointSeekToPositionInCurrentlyPlayingTrackSecurity;
}(SpeakeasyBase));
export { EndpointSeekToPositionInCurrentlyPlayingTrackSecurity };
var EndpointSeekToPositionInCurrentlyPlayingTrackRequest = /** @class */ (function (_super) {
    __extends(EndpointSeekToPositionInCurrentlyPlayingTrackRequest, _super);
    function EndpointSeekToPositionInCurrentlyPlayingTrackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams)
    ], EndpointSeekToPositionInCurrentlyPlayingTrackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSeekToPositionInCurrentlyPlayingTrackHeaders)
    ], EndpointSeekToPositionInCurrentlyPlayingTrackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSeekToPositionInCurrentlyPlayingTrackSecurity)
    ], EndpointSeekToPositionInCurrentlyPlayingTrackRequest.prototype, "security", void 0);
    return EndpointSeekToPositionInCurrentlyPlayingTrackRequest;
}(SpeakeasyBase));
export { EndpointSeekToPositionInCurrentlyPlayingTrackRequest };
var EndpointSeekToPositionInCurrentlyPlayingTrackResponse = /** @class */ (function (_super) {
    __extends(EndpointSeekToPositionInCurrentlyPlayingTrackResponse, _super);
    function EndpointSeekToPositionInCurrentlyPlayingTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointSeekToPositionInCurrentlyPlayingTrackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointSeekToPositionInCurrentlyPlayingTrackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointSeekToPositionInCurrentlyPlayingTrackResponse.prototype, "statusCode", void 0);
    return EndpointSeekToPositionInCurrentlyPlayingTrackResponse;
}(SpeakeasyBase));
export { EndpointSeekToPositionInCurrentlyPlayingTrackResponse };
