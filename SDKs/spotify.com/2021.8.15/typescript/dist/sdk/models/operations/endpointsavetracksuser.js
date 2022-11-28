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
var EndpointSaveTracksUserQueryParams = /** @class */ (function (_super) {
    __extends(EndpointSaveTracksUserQueryParams, _super);
    function EndpointSaveTracksUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointSaveTracksUserQueryParams.prototype, "ids", void 0);
    return EndpointSaveTracksUserQueryParams;
}(SpeakeasyBase));
export { EndpointSaveTracksUserQueryParams };
var EndpointSaveTracksUserHeaders = /** @class */ (function (_super) {
    __extends(EndpointSaveTracksUserHeaders, _super);
    function EndpointSaveTracksUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointSaveTracksUserHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointSaveTracksUserHeaders.prototype, "contentType", void 0);
    return EndpointSaveTracksUserHeaders;
}(SpeakeasyBase));
export { EndpointSaveTracksUserHeaders };
var EndpointSaveTracksUserRequestBody = /** @class */ (function (_super) {
    __extends(EndpointSaveTracksUserRequestBody, _super);
    function EndpointSaveTracksUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], EndpointSaveTracksUserRequestBody.prototype, "ids", void 0);
    return EndpointSaveTracksUserRequestBody;
}(SpeakeasyBase));
export { EndpointSaveTracksUserRequestBody };
var EndpointSaveTracksUserSecurity = /** @class */ (function (_super) {
    __extends(EndpointSaveTracksUserSecurity, _super);
    function EndpointSaveTracksUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointSaveTracksUserSecurity.prototype, "spotifyAuth", void 0);
    return EndpointSaveTracksUserSecurity;
}(SpeakeasyBase));
export { EndpointSaveTracksUserSecurity };
var EndpointSaveTracksUserRequest = /** @class */ (function (_super) {
    __extends(EndpointSaveTracksUserRequest, _super);
    function EndpointSaveTracksUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSaveTracksUserQueryParams)
    ], EndpointSaveTracksUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSaveTracksUserHeaders)
    ], EndpointSaveTracksUserRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointSaveTracksUserRequestBody)
    ], EndpointSaveTracksUserRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointSaveTracksUserSecurity)
    ], EndpointSaveTracksUserRequest.prototype, "security", void 0);
    return EndpointSaveTracksUserRequest;
}(SpeakeasyBase));
export { EndpointSaveTracksUserRequest };
var EndpointSaveTracksUserResponse = /** @class */ (function (_super) {
    __extends(EndpointSaveTracksUserResponse, _super);
    function EndpointSaveTracksUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointSaveTracksUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointSaveTracksUserResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointSaveTracksUserResponse.prototype, "statusCode", void 0);
    return EndpointSaveTracksUserResponse;
}(SpeakeasyBase));
export { EndpointSaveTracksUserResponse };
