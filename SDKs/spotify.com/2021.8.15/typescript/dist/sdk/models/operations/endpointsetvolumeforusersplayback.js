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
var EndpointSetVolumeForUsersPlaybackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointSetVolumeForUsersPlaybackQueryParams, _super);
    function EndpointSetVolumeForUsersPlaybackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointSetVolumeForUsersPlaybackQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=volume_percent" }),
        __metadata("design:type", Number)
    ], EndpointSetVolumeForUsersPlaybackQueryParams.prototype, "volumePercent", void 0);
    return EndpointSetVolumeForUsersPlaybackQueryParams;
}(SpeakeasyBase));
export { EndpointSetVolumeForUsersPlaybackQueryParams };
var EndpointSetVolumeForUsersPlaybackHeaders = /** @class */ (function (_super) {
    __extends(EndpointSetVolumeForUsersPlaybackHeaders, _super);
    function EndpointSetVolumeForUsersPlaybackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointSetVolumeForUsersPlaybackHeaders.prototype, "authorization", void 0);
    return EndpointSetVolumeForUsersPlaybackHeaders;
}(SpeakeasyBase));
export { EndpointSetVolumeForUsersPlaybackHeaders };
var EndpointSetVolumeForUsersPlaybackSecurity = /** @class */ (function (_super) {
    __extends(EndpointSetVolumeForUsersPlaybackSecurity, _super);
    function EndpointSetVolumeForUsersPlaybackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointSetVolumeForUsersPlaybackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointSetVolumeForUsersPlaybackSecurity;
}(SpeakeasyBase));
export { EndpointSetVolumeForUsersPlaybackSecurity };
var EndpointSetVolumeForUsersPlaybackRequest = /** @class */ (function (_super) {
    __extends(EndpointSetVolumeForUsersPlaybackRequest, _super);
    function EndpointSetVolumeForUsersPlaybackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSetVolumeForUsersPlaybackQueryParams)
    ], EndpointSetVolumeForUsersPlaybackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSetVolumeForUsersPlaybackHeaders)
    ], EndpointSetVolumeForUsersPlaybackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSetVolumeForUsersPlaybackSecurity)
    ], EndpointSetVolumeForUsersPlaybackRequest.prototype, "security", void 0);
    return EndpointSetVolumeForUsersPlaybackRequest;
}(SpeakeasyBase));
export { EndpointSetVolumeForUsersPlaybackRequest };
var EndpointSetVolumeForUsersPlaybackResponse = /** @class */ (function (_super) {
    __extends(EndpointSetVolumeForUsersPlaybackResponse, _super);
    function EndpointSetVolumeForUsersPlaybackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointSetVolumeForUsersPlaybackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointSetVolumeForUsersPlaybackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointSetVolumeForUsersPlaybackResponse.prototype, "statusCode", void 0);
    return EndpointSetVolumeForUsersPlaybackResponse;
}(SpeakeasyBase));
export { EndpointSetVolumeForUsersPlaybackResponse };
