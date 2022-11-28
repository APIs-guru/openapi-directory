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
var EndpointSaveShowsUserQueryParams = /** @class */ (function (_super) {
    __extends(EndpointSaveShowsUserQueryParams, _super);
    function EndpointSaveShowsUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointSaveShowsUserQueryParams.prototype, "ids", void 0);
    return EndpointSaveShowsUserQueryParams;
}(SpeakeasyBase));
export { EndpointSaveShowsUserQueryParams };
var EndpointSaveShowsUserHeaders = /** @class */ (function (_super) {
    __extends(EndpointSaveShowsUserHeaders, _super);
    function EndpointSaveShowsUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointSaveShowsUserHeaders.prototype, "authorization", void 0);
    return EndpointSaveShowsUserHeaders;
}(SpeakeasyBase));
export { EndpointSaveShowsUserHeaders };
var EndpointSaveShowsUserRequestBody = /** @class */ (function (_super) {
    __extends(EndpointSaveShowsUserRequestBody, _super);
    function EndpointSaveShowsUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], EndpointSaveShowsUserRequestBody.prototype, "ids", void 0);
    return EndpointSaveShowsUserRequestBody;
}(SpeakeasyBase));
export { EndpointSaveShowsUserRequestBody };
var EndpointSaveShowsUserSecurity = /** @class */ (function (_super) {
    __extends(EndpointSaveShowsUserSecurity, _super);
    function EndpointSaveShowsUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointSaveShowsUserSecurity.prototype, "spotifyAuth", void 0);
    return EndpointSaveShowsUserSecurity;
}(SpeakeasyBase));
export { EndpointSaveShowsUserSecurity };
var EndpointSaveShowsUserRequest = /** @class */ (function (_super) {
    __extends(EndpointSaveShowsUserRequest, _super);
    function EndpointSaveShowsUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSaveShowsUserQueryParams)
    ], EndpointSaveShowsUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSaveShowsUserHeaders)
    ], EndpointSaveShowsUserRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointSaveShowsUserRequestBody)
    ], EndpointSaveShowsUserRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSaveShowsUserSecurity)
    ], EndpointSaveShowsUserRequest.prototype, "security", void 0);
    return EndpointSaveShowsUserRequest;
}(SpeakeasyBase));
export { EndpointSaveShowsUserRequest };
var EndpointSaveShowsUserResponse = /** @class */ (function (_super) {
    __extends(EndpointSaveShowsUserResponse, _super);
    function EndpointSaveShowsUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointSaveShowsUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointSaveShowsUserResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointSaveShowsUserResponse.prototype, "statusCode", void 0);
    return EndpointSaveShowsUserResponse;
}(SpeakeasyBase));
export { EndpointSaveShowsUserResponse };
