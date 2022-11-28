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
var EndpointToggleShuffleForUsersPlaybackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointToggleShuffleForUsersPlaybackQueryParams, _super);
    function EndpointToggleShuffleForUsersPlaybackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointToggleShuffleForUsersPlaybackQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Boolean)
    ], EndpointToggleShuffleForUsersPlaybackQueryParams.prototype, "state", void 0);
    return EndpointToggleShuffleForUsersPlaybackQueryParams;
}(SpeakeasyBase));
export { EndpointToggleShuffleForUsersPlaybackQueryParams };
var EndpointToggleShuffleForUsersPlaybackHeaders = /** @class */ (function (_super) {
    __extends(EndpointToggleShuffleForUsersPlaybackHeaders, _super);
    function EndpointToggleShuffleForUsersPlaybackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointToggleShuffleForUsersPlaybackHeaders.prototype, "authorization", void 0);
    return EndpointToggleShuffleForUsersPlaybackHeaders;
}(SpeakeasyBase));
export { EndpointToggleShuffleForUsersPlaybackHeaders };
var EndpointToggleShuffleForUsersPlaybackSecurity = /** @class */ (function (_super) {
    __extends(EndpointToggleShuffleForUsersPlaybackSecurity, _super);
    function EndpointToggleShuffleForUsersPlaybackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointToggleShuffleForUsersPlaybackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointToggleShuffleForUsersPlaybackSecurity;
}(SpeakeasyBase));
export { EndpointToggleShuffleForUsersPlaybackSecurity };
var EndpointToggleShuffleForUsersPlaybackRequest = /** @class */ (function (_super) {
    __extends(EndpointToggleShuffleForUsersPlaybackRequest, _super);
    function EndpointToggleShuffleForUsersPlaybackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointToggleShuffleForUsersPlaybackQueryParams)
    ], EndpointToggleShuffleForUsersPlaybackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointToggleShuffleForUsersPlaybackHeaders)
    ], EndpointToggleShuffleForUsersPlaybackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointToggleShuffleForUsersPlaybackSecurity)
    ], EndpointToggleShuffleForUsersPlaybackRequest.prototype, "security", void 0);
    return EndpointToggleShuffleForUsersPlaybackRequest;
}(SpeakeasyBase));
export { EndpointToggleShuffleForUsersPlaybackRequest };
var EndpointToggleShuffleForUsersPlaybackResponse = /** @class */ (function (_super) {
    __extends(EndpointToggleShuffleForUsersPlaybackResponse, _super);
    function EndpointToggleShuffleForUsersPlaybackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointToggleShuffleForUsersPlaybackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointToggleShuffleForUsersPlaybackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointToggleShuffleForUsersPlaybackResponse.prototype, "statusCode", void 0);
    return EndpointToggleShuffleForUsersPlaybackResponse;
}(SpeakeasyBase));
export { EndpointToggleShuffleForUsersPlaybackResponse };
