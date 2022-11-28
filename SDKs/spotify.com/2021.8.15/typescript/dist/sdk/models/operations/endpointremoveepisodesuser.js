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
var EndpointRemoveEpisodesUserQueryParams = /** @class */ (function (_super) {
    __extends(EndpointRemoveEpisodesUserQueryParams, _super);
    function EndpointRemoveEpisodesUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointRemoveEpisodesUserQueryParams.prototype, "ids", void 0);
    return EndpointRemoveEpisodesUserQueryParams;
}(SpeakeasyBase));
export { EndpointRemoveEpisodesUserQueryParams };
var EndpointRemoveEpisodesUserHeaders = /** @class */ (function (_super) {
    __extends(EndpointRemoveEpisodesUserHeaders, _super);
    function EndpointRemoveEpisodesUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointRemoveEpisodesUserHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointRemoveEpisodesUserHeaders.prototype, "contentType", void 0);
    return EndpointRemoveEpisodesUserHeaders;
}(SpeakeasyBase));
export { EndpointRemoveEpisodesUserHeaders };
var EndpointRemoveEpisodesUserRequestBody = /** @class */ (function (_super) {
    __extends(EndpointRemoveEpisodesUserRequestBody, _super);
    function EndpointRemoveEpisodesUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], EndpointRemoveEpisodesUserRequestBody.prototype, "ids", void 0);
    return EndpointRemoveEpisodesUserRequestBody;
}(SpeakeasyBase));
export { EndpointRemoveEpisodesUserRequestBody };
var EndpointRemoveEpisodesUserSecurity = /** @class */ (function (_super) {
    __extends(EndpointRemoveEpisodesUserSecurity, _super);
    function EndpointRemoveEpisodesUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointRemoveEpisodesUserSecurity.prototype, "spotifyAuth", void 0);
    return EndpointRemoveEpisodesUserSecurity;
}(SpeakeasyBase));
export { EndpointRemoveEpisodesUserSecurity };
var EndpointRemoveEpisodesUserRequest = /** @class */ (function (_super) {
    __extends(EndpointRemoveEpisodesUserRequest, _super);
    function EndpointRemoveEpisodesUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveEpisodesUserQueryParams)
    ], EndpointRemoveEpisodesUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveEpisodesUserHeaders)
    ], EndpointRemoveEpisodesUserRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointRemoveEpisodesUserRequestBody)
    ], EndpointRemoveEpisodesUserRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveEpisodesUserSecurity)
    ], EndpointRemoveEpisodesUserRequest.prototype, "security", void 0);
    return EndpointRemoveEpisodesUserRequest;
}(SpeakeasyBase));
export { EndpointRemoveEpisodesUserRequest };
var EndpointRemoveEpisodesUserResponse = /** @class */ (function (_super) {
    __extends(EndpointRemoveEpisodesUserResponse, _super);
    function EndpointRemoveEpisodesUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointRemoveEpisodesUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointRemoveEpisodesUserResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointRemoveEpisodesUserResponse.prototype, "statusCode", void 0);
    return EndpointRemoveEpisodesUserResponse;
}(SpeakeasyBase));
export { EndpointRemoveEpisodesUserResponse };
