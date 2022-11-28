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
var EndpointRemoveTracksUserQueryParams = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksUserQueryParams, _super);
    function EndpointRemoveTracksUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointRemoveTracksUserQueryParams.prototype, "ids", void 0);
    return EndpointRemoveTracksUserQueryParams;
}(SpeakeasyBase));
export { EndpointRemoveTracksUserQueryParams };
var EndpointRemoveTracksUserHeaders = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksUserHeaders, _super);
    function EndpointRemoveTracksUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointRemoveTracksUserHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointRemoveTracksUserHeaders.prototype, "contentType", void 0);
    return EndpointRemoveTracksUserHeaders;
}(SpeakeasyBase));
export { EndpointRemoveTracksUserHeaders };
var EndpointRemoveTracksUserRequestBody = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksUserRequestBody, _super);
    function EndpointRemoveTracksUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], EndpointRemoveTracksUserRequestBody.prototype, "ids", void 0);
    return EndpointRemoveTracksUserRequestBody;
}(SpeakeasyBase));
export { EndpointRemoveTracksUserRequestBody };
var EndpointRemoveTracksUserSecurity = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksUserSecurity, _super);
    function EndpointRemoveTracksUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointRemoveTracksUserSecurity.prototype, "spotifyAuth", void 0);
    return EndpointRemoveTracksUserSecurity;
}(SpeakeasyBase));
export { EndpointRemoveTracksUserSecurity };
var EndpointRemoveTracksUserRequest = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksUserRequest, _super);
    function EndpointRemoveTracksUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveTracksUserQueryParams)
    ], EndpointRemoveTracksUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveTracksUserHeaders)
    ], EndpointRemoveTracksUserRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointRemoveTracksUserRequestBody)
    ], EndpointRemoveTracksUserRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveTracksUserSecurity)
    ], EndpointRemoveTracksUserRequest.prototype, "security", void 0);
    return EndpointRemoveTracksUserRequest;
}(SpeakeasyBase));
export { EndpointRemoveTracksUserRequest };
var EndpointRemoveTracksUserResponse = /** @class */ (function (_super) {
    __extends(EndpointRemoveTracksUserResponse, _super);
    function EndpointRemoveTracksUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointRemoveTracksUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointRemoveTracksUserResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointRemoveTracksUserResponse.prototype, "statusCode", void 0);
    return EndpointRemoveTracksUserResponse;
}(SpeakeasyBase));
export { EndpointRemoveTracksUserResponse };
