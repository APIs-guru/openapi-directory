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
var EndpointRemoveAlbumsUserQueryParams = /** @class */ (function (_super) {
    __extends(EndpointRemoveAlbumsUserQueryParams, _super);
    function EndpointRemoveAlbumsUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointRemoveAlbumsUserQueryParams.prototype, "ids", void 0);
    return EndpointRemoveAlbumsUserQueryParams;
}(SpeakeasyBase));
export { EndpointRemoveAlbumsUserQueryParams };
var EndpointRemoveAlbumsUserHeaders = /** @class */ (function (_super) {
    __extends(EndpointRemoveAlbumsUserHeaders, _super);
    function EndpointRemoveAlbumsUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointRemoveAlbumsUserHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointRemoveAlbumsUserHeaders.prototype, "contentType", void 0);
    return EndpointRemoveAlbumsUserHeaders;
}(SpeakeasyBase));
export { EndpointRemoveAlbumsUserHeaders };
var EndpointRemoveAlbumsUserRequestBody = /** @class */ (function (_super) {
    __extends(EndpointRemoveAlbumsUserRequestBody, _super);
    function EndpointRemoveAlbumsUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], EndpointRemoveAlbumsUserRequestBody.prototype, "ids", void 0);
    return EndpointRemoveAlbumsUserRequestBody;
}(SpeakeasyBase));
export { EndpointRemoveAlbumsUserRequestBody };
var EndpointRemoveAlbumsUserSecurity = /** @class */ (function (_super) {
    __extends(EndpointRemoveAlbumsUserSecurity, _super);
    function EndpointRemoveAlbumsUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointRemoveAlbumsUserSecurity.prototype, "spotifyAuth", void 0);
    return EndpointRemoveAlbumsUserSecurity;
}(SpeakeasyBase));
export { EndpointRemoveAlbumsUserSecurity };
var EndpointRemoveAlbumsUserRequest = /** @class */ (function (_super) {
    __extends(EndpointRemoveAlbumsUserRequest, _super);
    function EndpointRemoveAlbumsUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveAlbumsUserQueryParams)
    ], EndpointRemoveAlbumsUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveAlbumsUserHeaders)
    ], EndpointRemoveAlbumsUserRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointRemoveAlbumsUserRequestBody)
    ], EndpointRemoveAlbumsUserRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveAlbumsUserSecurity)
    ], EndpointRemoveAlbumsUserRequest.prototype, "security", void 0);
    return EndpointRemoveAlbumsUserRequest;
}(SpeakeasyBase));
export { EndpointRemoveAlbumsUserRequest };
var EndpointRemoveAlbumsUserResponse = /** @class */ (function (_super) {
    __extends(EndpointRemoveAlbumsUserResponse, _super);
    function EndpointRemoveAlbumsUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointRemoveAlbumsUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointRemoveAlbumsUserResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointRemoveAlbumsUserResponse.prototype, "statusCode", void 0);
    return EndpointRemoveAlbumsUserResponse;
}(SpeakeasyBase));
export { EndpointRemoveAlbumsUserResponse };
