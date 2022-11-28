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
var EndpointCheckCurrentUserFollowsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointCheckCurrentUserFollowsQueryParams, _super);
    function EndpointCheckCurrentUserFollowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointCheckCurrentUserFollowsQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], EndpointCheckCurrentUserFollowsQueryParams.prototype, "type", void 0);
    return EndpointCheckCurrentUserFollowsQueryParams;
}(SpeakeasyBase));
export { EndpointCheckCurrentUserFollowsQueryParams };
var EndpointCheckCurrentUserFollowsHeaders = /** @class */ (function (_super) {
    __extends(EndpointCheckCurrentUserFollowsHeaders, _super);
    function EndpointCheckCurrentUserFollowsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointCheckCurrentUserFollowsHeaders.prototype, "authorization", void 0);
    return EndpointCheckCurrentUserFollowsHeaders;
}(SpeakeasyBase));
export { EndpointCheckCurrentUserFollowsHeaders };
var EndpointCheckCurrentUserFollowsSecurity = /** @class */ (function (_super) {
    __extends(EndpointCheckCurrentUserFollowsSecurity, _super);
    function EndpointCheckCurrentUserFollowsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointCheckCurrentUserFollowsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointCheckCurrentUserFollowsSecurity;
}(SpeakeasyBase));
export { EndpointCheckCurrentUserFollowsSecurity };
var EndpointCheckCurrentUserFollowsRequest = /** @class */ (function (_super) {
    __extends(EndpointCheckCurrentUserFollowsRequest, _super);
    function EndpointCheckCurrentUserFollowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckCurrentUserFollowsQueryParams)
    ], EndpointCheckCurrentUserFollowsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckCurrentUserFollowsHeaders)
    ], EndpointCheckCurrentUserFollowsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckCurrentUserFollowsSecurity)
    ], EndpointCheckCurrentUserFollowsRequest.prototype, "security", void 0);
    return EndpointCheckCurrentUserFollowsRequest;
}(SpeakeasyBase));
export { EndpointCheckCurrentUserFollowsRequest };
var EndpointCheckCurrentUserFollowsResponse = /** @class */ (function (_super) {
    __extends(EndpointCheckCurrentUserFollowsResponse, _super);
    function EndpointCheckCurrentUserFollowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointCheckCurrentUserFollowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointCheckCurrentUserFollowsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointCheckCurrentUserFollowsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], EndpointCheckCurrentUserFollowsResponse.prototype, "endpointCheckCurrentUserFollows200ApplicationJsonBooleans", void 0);
    return EndpointCheckCurrentUserFollowsResponse;
}(SpeakeasyBase));
export { EndpointCheckCurrentUserFollowsResponse };
