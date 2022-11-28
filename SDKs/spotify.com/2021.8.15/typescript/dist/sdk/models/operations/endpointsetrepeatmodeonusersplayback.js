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
var EndpointSetRepeatModeOnUsersPlaybackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointSetRepeatModeOnUsersPlaybackQueryParams, _super);
    function EndpointSetRepeatModeOnUsersPlaybackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointSetRepeatModeOnUsersPlaybackQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], EndpointSetRepeatModeOnUsersPlaybackQueryParams.prototype, "state", void 0);
    return EndpointSetRepeatModeOnUsersPlaybackQueryParams;
}(SpeakeasyBase));
export { EndpointSetRepeatModeOnUsersPlaybackQueryParams };
var EndpointSetRepeatModeOnUsersPlaybackHeaders = /** @class */ (function (_super) {
    __extends(EndpointSetRepeatModeOnUsersPlaybackHeaders, _super);
    function EndpointSetRepeatModeOnUsersPlaybackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointSetRepeatModeOnUsersPlaybackHeaders.prototype, "authorization", void 0);
    return EndpointSetRepeatModeOnUsersPlaybackHeaders;
}(SpeakeasyBase));
export { EndpointSetRepeatModeOnUsersPlaybackHeaders };
var EndpointSetRepeatModeOnUsersPlaybackSecurity = /** @class */ (function (_super) {
    __extends(EndpointSetRepeatModeOnUsersPlaybackSecurity, _super);
    function EndpointSetRepeatModeOnUsersPlaybackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointSetRepeatModeOnUsersPlaybackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointSetRepeatModeOnUsersPlaybackSecurity;
}(SpeakeasyBase));
export { EndpointSetRepeatModeOnUsersPlaybackSecurity };
var EndpointSetRepeatModeOnUsersPlaybackRequest = /** @class */ (function (_super) {
    __extends(EndpointSetRepeatModeOnUsersPlaybackRequest, _super);
    function EndpointSetRepeatModeOnUsersPlaybackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSetRepeatModeOnUsersPlaybackQueryParams)
    ], EndpointSetRepeatModeOnUsersPlaybackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSetRepeatModeOnUsersPlaybackHeaders)
    ], EndpointSetRepeatModeOnUsersPlaybackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSetRepeatModeOnUsersPlaybackSecurity)
    ], EndpointSetRepeatModeOnUsersPlaybackRequest.prototype, "security", void 0);
    return EndpointSetRepeatModeOnUsersPlaybackRequest;
}(SpeakeasyBase));
export { EndpointSetRepeatModeOnUsersPlaybackRequest };
var EndpointSetRepeatModeOnUsersPlaybackResponse = /** @class */ (function (_super) {
    __extends(EndpointSetRepeatModeOnUsersPlaybackResponse, _super);
    function EndpointSetRepeatModeOnUsersPlaybackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointSetRepeatModeOnUsersPlaybackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointSetRepeatModeOnUsersPlaybackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointSetRepeatModeOnUsersPlaybackResponse.prototype, "statusCode", void 0);
    return EndpointSetRepeatModeOnUsersPlaybackResponse;
}(SpeakeasyBase));
export { EndpointSetRepeatModeOnUsersPlaybackResponse };
