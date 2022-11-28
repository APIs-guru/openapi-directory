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
var EndpointGetCurrentUsersProfileHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetCurrentUsersProfileHeaders, _super);
    function EndpointGetCurrentUsersProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetCurrentUsersProfileHeaders.prototype, "authorization", void 0);
    return EndpointGetCurrentUsersProfileHeaders;
}(SpeakeasyBase));
export { EndpointGetCurrentUsersProfileHeaders };
var EndpointGetCurrentUsersProfileSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetCurrentUsersProfileSecurity, _super);
    function EndpointGetCurrentUsersProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetCurrentUsersProfileSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetCurrentUsersProfileSecurity;
}(SpeakeasyBase));
export { EndpointGetCurrentUsersProfileSecurity };
var EndpointGetCurrentUsersProfileRequest = /** @class */ (function (_super) {
    __extends(EndpointGetCurrentUsersProfileRequest, _super);
    function EndpointGetCurrentUsersProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetCurrentUsersProfileHeaders)
    ], EndpointGetCurrentUsersProfileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetCurrentUsersProfileSecurity)
    ], EndpointGetCurrentUsersProfileRequest.prototype, "security", void 0);
    return EndpointGetCurrentUsersProfileRequest;
}(SpeakeasyBase));
export { EndpointGetCurrentUsersProfileRequest };
var EndpointGetCurrentUsersProfileResponse = /** @class */ (function (_super) {
    __extends(EndpointGetCurrentUsersProfileResponse, _super);
    function EndpointGetCurrentUsersProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetCurrentUsersProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetCurrentUsersProfileResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PrivateUserObject)
    ], EndpointGetCurrentUsersProfileResponse.prototype, "privateUserObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetCurrentUsersProfileResponse.prototype, "statusCode", void 0);
    return EndpointGetCurrentUsersProfileResponse;
}(SpeakeasyBase));
export { EndpointGetCurrentUsersProfileResponse };
