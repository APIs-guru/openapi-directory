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
var EndpointPauseAUsersPlaybackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointPauseAUsersPlaybackQueryParams, _super);
    function EndpointPauseAUsersPlaybackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointPauseAUsersPlaybackQueryParams.prototype, "deviceId", void 0);
    return EndpointPauseAUsersPlaybackQueryParams;
}(SpeakeasyBase));
export { EndpointPauseAUsersPlaybackQueryParams };
var EndpointPauseAUsersPlaybackHeaders = /** @class */ (function (_super) {
    __extends(EndpointPauseAUsersPlaybackHeaders, _super);
    function EndpointPauseAUsersPlaybackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointPauseAUsersPlaybackHeaders.prototype, "authorization", void 0);
    return EndpointPauseAUsersPlaybackHeaders;
}(SpeakeasyBase));
export { EndpointPauseAUsersPlaybackHeaders };
var EndpointPauseAUsersPlaybackSecurity = /** @class */ (function (_super) {
    __extends(EndpointPauseAUsersPlaybackSecurity, _super);
    function EndpointPauseAUsersPlaybackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointPauseAUsersPlaybackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointPauseAUsersPlaybackSecurity;
}(SpeakeasyBase));
export { EndpointPauseAUsersPlaybackSecurity };
var EndpointPauseAUsersPlaybackRequest = /** @class */ (function (_super) {
    __extends(EndpointPauseAUsersPlaybackRequest, _super);
    function EndpointPauseAUsersPlaybackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointPauseAUsersPlaybackQueryParams)
    ], EndpointPauseAUsersPlaybackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointPauseAUsersPlaybackHeaders)
    ], EndpointPauseAUsersPlaybackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointPauseAUsersPlaybackSecurity)
    ], EndpointPauseAUsersPlaybackRequest.prototype, "security", void 0);
    return EndpointPauseAUsersPlaybackRequest;
}(SpeakeasyBase));
export { EndpointPauseAUsersPlaybackRequest };
var EndpointPauseAUsersPlaybackResponse = /** @class */ (function (_super) {
    __extends(EndpointPauseAUsersPlaybackResponse, _super);
    function EndpointPauseAUsersPlaybackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointPauseAUsersPlaybackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointPauseAUsersPlaybackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointPauseAUsersPlaybackResponse.prototype, "statusCode", void 0);
    return EndpointPauseAUsersPlaybackResponse;
}(SpeakeasyBase));
export { EndpointPauseAUsersPlaybackResponse };
