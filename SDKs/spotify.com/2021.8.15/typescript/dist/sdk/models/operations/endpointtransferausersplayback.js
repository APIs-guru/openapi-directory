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
var EndpointTransferAUsersPlaybackHeaders = /** @class */ (function (_super) {
    __extends(EndpointTransferAUsersPlaybackHeaders, _super);
    function EndpointTransferAUsersPlaybackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointTransferAUsersPlaybackHeaders.prototype, "authorization", void 0);
    return EndpointTransferAUsersPlaybackHeaders;
}(SpeakeasyBase));
export { EndpointTransferAUsersPlaybackHeaders };
var EndpointTransferAUsersPlaybackRequestBody = /** @class */ (function (_super) {
    __extends(EndpointTransferAUsersPlaybackRequestBody, _super);
    function EndpointTransferAUsersPlaybackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_ids" }),
        __metadata("design:type", Array)
    ], EndpointTransferAUsersPlaybackRequestBody.prototype, "deviceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=play" }),
        __metadata("design:type", Boolean)
    ], EndpointTransferAUsersPlaybackRequestBody.prototype, "play", void 0);
    return EndpointTransferAUsersPlaybackRequestBody;
}(SpeakeasyBase));
export { EndpointTransferAUsersPlaybackRequestBody };
var EndpointTransferAUsersPlaybackSecurity = /** @class */ (function (_super) {
    __extends(EndpointTransferAUsersPlaybackSecurity, _super);
    function EndpointTransferAUsersPlaybackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointTransferAUsersPlaybackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointTransferAUsersPlaybackSecurity;
}(SpeakeasyBase));
export { EndpointTransferAUsersPlaybackSecurity };
var EndpointTransferAUsersPlaybackRequest = /** @class */ (function (_super) {
    __extends(EndpointTransferAUsersPlaybackRequest, _super);
    function EndpointTransferAUsersPlaybackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointTransferAUsersPlaybackHeaders)
    ], EndpointTransferAUsersPlaybackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointTransferAUsersPlaybackRequestBody)
    ], EndpointTransferAUsersPlaybackRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointTransferAUsersPlaybackSecurity)
    ], EndpointTransferAUsersPlaybackRequest.prototype, "security", void 0);
    return EndpointTransferAUsersPlaybackRequest;
}(SpeakeasyBase));
export { EndpointTransferAUsersPlaybackRequest };
var EndpointTransferAUsersPlaybackResponse = /** @class */ (function (_super) {
    __extends(EndpointTransferAUsersPlaybackResponse, _super);
    function EndpointTransferAUsersPlaybackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointTransferAUsersPlaybackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointTransferAUsersPlaybackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointTransferAUsersPlaybackResponse.prototype, "statusCode", void 0);
    return EndpointTransferAUsersPlaybackResponse;
}(SpeakeasyBase));
export { EndpointTransferAUsersPlaybackResponse };
