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
var EndpointSaveAlbumsUserQueryParams = /** @class */ (function (_super) {
    __extends(EndpointSaveAlbumsUserQueryParams, _super);
    function EndpointSaveAlbumsUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointSaveAlbumsUserQueryParams.prototype, "ids", void 0);
    return EndpointSaveAlbumsUserQueryParams;
}(SpeakeasyBase));
export { EndpointSaveAlbumsUserQueryParams };
var EndpointSaveAlbumsUserHeaders = /** @class */ (function (_super) {
    __extends(EndpointSaveAlbumsUserHeaders, _super);
    function EndpointSaveAlbumsUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointSaveAlbumsUserHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointSaveAlbumsUserHeaders.prototype, "contentType", void 0);
    return EndpointSaveAlbumsUserHeaders;
}(SpeakeasyBase));
export { EndpointSaveAlbumsUserHeaders };
var EndpointSaveAlbumsUserRequestBody = /** @class */ (function (_super) {
    __extends(EndpointSaveAlbumsUserRequestBody, _super);
    function EndpointSaveAlbumsUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], EndpointSaveAlbumsUserRequestBody.prototype, "ids", void 0);
    return EndpointSaveAlbumsUserRequestBody;
}(SpeakeasyBase));
export { EndpointSaveAlbumsUserRequestBody };
var EndpointSaveAlbumsUserSecurity = /** @class */ (function (_super) {
    __extends(EndpointSaveAlbumsUserSecurity, _super);
    function EndpointSaveAlbumsUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointSaveAlbumsUserSecurity.prototype, "spotifyAuth", void 0);
    return EndpointSaveAlbumsUserSecurity;
}(SpeakeasyBase));
export { EndpointSaveAlbumsUserSecurity };
var EndpointSaveAlbumsUserRequest = /** @class */ (function (_super) {
    __extends(EndpointSaveAlbumsUserRequest, _super);
    function EndpointSaveAlbumsUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSaveAlbumsUserQueryParams)
    ], EndpointSaveAlbumsUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSaveAlbumsUserHeaders)
    ], EndpointSaveAlbumsUserRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointSaveAlbumsUserRequestBody)
    ], EndpointSaveAlbumsUserRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSaveAlbumsUserSecurity)
    ], EndpointSaveAlbumsUserRequest.prototype, "security", void 0);
    return EndpointSaveAlbumsUserRequest;
}(SpeakeasyBase));
export { EndpointSaveAlbumsUserRequest };
var EndpointSaveAlbumsUserResponse = /** @class */ (function (_super) {
    __extends(EndpointSaveAlbumsUserResponse, _super);
    function EndpointSaveAlbumsUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointSaveAlbumsUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointSaveAlbumsUserResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointSaveAlbumsUserResponse.prototype, "statusCode", void 0);
    return EndpointSaveAlbumsUserResponse;
}(SpeakeasyBase));
export { EndpointSaveAlbumsUserResponse };
