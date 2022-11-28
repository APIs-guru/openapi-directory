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
var EndpointRemoveShowsUserQueryParams = /** @class */ (function (_super) {
    __extends(EndpointRemoveShowsUserQueryParams, _super);
    function EndpointRemoveShowsUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointRemoveShowsUserQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointRemoveShowsUserQueryParams.prototype, "market", void 0);
    return EndpointRemoveShowsUserQueryParams;
}(SpeakeasyBase));
export { EndpointRemoveShowsUserQueryParams };
var EndpointRemoveShowsUserHeaders = /** @class */ (function (_super) {
    __extends(EndpointRemoveShowsUserHeaders, _super);
    function EndpointRemoveShowsUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointRemoveShowsUserHeaders.prototype, "authorization", void 0);
    return EndpointRemoveShowsUserHeaders;
}(SpeakeasyBase));
export { EndpointRemoveShowsUserHeaders };
var EndpointRemoveShowsUserRequestBody = /** @class */ (function (_super) {
    __extends(EndpointRemoveShowsUserRequestBody, _super);
    function EndpointRemoveShowsUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], EndpointRemoveShowsUserRequestBody.prototype, "ids", void 0);
    return EndpointRemoveShowsUserRequestBody;
}(SpeakeasyBase));
export { EndpointRemoveShowsUserRequestBody };
var EndpointRemoveShowsUserSecurity = /** @class */ (function (_super) {
    __extends(EndpointRemoveShowsUserSecurity, _super);
    function EndpointRemoveShowsUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointRemoveShowsUserSecurity.prototype, "spotifyAuth", void 0);
    return EndpointRemoveShowsUserSecurity;
}(SpeakeasyBase));
export { EndpointRemoveShowsUserSecurity };
var EndpointRemoveShowsUserRequest = /** @class */ (function (_super) {
    __extends(EndpointRemoveShowsUserRequest, _super);
    function EndpointRemoveShowsUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveShowsUserQueryParams)
    ], EndpointRemoveShowsUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveShowsUserHeaders)
    ], EndpointRemoveShowsUserRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointRemoveShowsUserRequestBody)
    ], EndpointRemoveShowsUserRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointRemoveShowsUserSecurity)
    ], EndpointRemoveShowsUserRequest.prototype, "security", void 0);
    return EndpointRemoveShowsUserRequest;
}(SpeakeasyBase));
export { EndpointRemoveShowsUserRequest };
var EndpointRemoveShowsUserResponse = /** @class */ (function (_super) {
    __extends(EndpointRemoveShowsUserResponse, _super);
    function EndpointRemoveShowsUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointRemoveShowsUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointRemoveShowsUserResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointRemoveShowsUserResponse.prototype, "statusCode", void 0);
    return EndpointRemoveShowsUserResponse;
}(SpeakeasyBase));
export { EndpointRemoveShowsUserResponse };
