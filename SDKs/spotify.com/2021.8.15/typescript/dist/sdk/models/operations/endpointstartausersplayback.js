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
var EndpointStartAUsersPlaybackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackQueryParams, _super);
    function EndpointStartAUsersPlaybackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointStartAUsersPlaybackQueryParams.prototype, "deviceId", void 0);
    return EndpointStartAUsersPlaybackQueryParams;
}(SpeakeasyBase));
export { EndpointStartAUsersPlaybackQueryParams };
var EndpointStartAUsersPlaybackHeaders = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackHeaders, _super);
    function EndpointStartAUsersPlaybackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointStartAUsersPlaybackHeaders.prototype, "authorization", void 0);
    return EndpointStartAUsersPlaybackHeaders;
}(SpeakeasyBase));
export { EndpointStartAUsersPlaybackHeaders };
var EndpointStartAUsersPlaybackRequestBody = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackRequestBody, _super);
    function EndpointStartAUsersPlaybackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context_uri" }),
        __metadata("design:type", String)
    ], EndpointStartAUsersPlaybackRequestBody.prototype, "contextUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Map)
    ], EndpointStartAUsersPlaybackRequestBody.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position_ms" }),
        __metadata("design:type", Number)
    ], EndpointStartAUsersPlaybackRequestBody.prototype, "positionMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uris" }),
        __metadata("design:type", Array)
    ], EndpointStartAUsersPlaybackRequestBody.prototype, "uris", void 0);
    return EndpointStartAUsersPlaybackRequestBody;
}(SpeakeasyBase));
export { EndpointStartAUsersPlaybackRequestBody };
var EndpointStartAUsersPlaybackSecurity = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackSecurity, _super);
    function EndpointStartAUsersPlaybackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointStartAUsersPlaybackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointStartAUsersPlaybackSecurity;
}(SpeakeasyBase));
export { EndpointStartAUsersPlaybackSecurity };
var EndpointStartAUsersPlaybackRequest = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackRequest, _super);
    function EndpointStartAUsersPlaybackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointStartAUsersPlaybackQueryParams)
    ], EndpointStartAUsersPlaybackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointStartAUsersPlaybackHeaders)
    ], EndpointStartAUsersPlaybackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointStartAUsersPlaybackRequestBody)
    ], EndpointStartAUsersPlaybackRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointStartAUsersPlaybackSecurity)
    ], EndpointStartAUsersPlaybackRequest.prototype, "security", void 0);
    return EndpointStartAUsersPlaybackRequest;
}(SpeakeasyBase));
export { EndpointStartAUsersPlaybackRequest };
var EndpointStartAUsersPlaybackResponse = /** @class */ (function (_super) {
    __extends(EndpointStartAUsersPlaybackResponse, _super);
    function EndpointStartAUsersPlaybackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointStartAUsersPlaybackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointStartAUsersPlaybackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointStartAUsersPlaybackResponse.prototype, "statusCode", void 0);
    return EndpointStartAUsersPlaybackResponse;
}(SpeakeasyBase));
export { EndpointStartAUsersPlaybackResponse };
