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
var EndpointGetMultipleShowsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleShowsQueryParams, _super);
    function EndpointGetMultipleShowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleShowsQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleShowsQueryParams.prototype, "market", void 0);
    return EndpointGetMultipleShowsQueryParams;
}(SpeakeasyBase));
export { EndpointGetMultipleShowsQueryParams };
var EndpointGetMultipleShowsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleShowsHeaders, _super);
    function EndpointGetMultipleShowsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleShowsHeaders.prototype, "authorization", void 0);
    return EndpointGetMultipleShowsHeaders;
}(SpeakeasyBase));
export { EndpointGetMultipleShowsHeaders };
var EndpointGetMultipleShowsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleShowsSecurity, _super);
    function EndpointGetMultipleShowsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetMultipleShowsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetMultipleShowsSecurity;
}(SpeakeasyBase));
export { EndpointGetMultipleShowsSecurity };
var EndpointGetMultipleShowsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleShowsRequest, _super);
    function EndpointGetMultipleShowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetMultipleShowsQueryParams)
    ], EndpointGetMultipleShowsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetMultipleShowsHeaders)
    ], EndpointGetMultipleShowsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetMultipleShowsSecurity)
    ], EndpointGetMultipleShowsRequest.prototype, "security", void 0);
    return EndpointGetMultipleShowsRequest;
}(SpeakeasyBase));
export { EndpointGetMultipleShowsRequest };
var EndpointGetMultipleShowsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleShowsResponse, _super);
    function EndpointGetMultipleShowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetMultipleShowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetMultipleShowsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ShowsObject)
    ], EndpointGetMultipleShowsResponse.prototype, "showsObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetMultipleShowsResponse.prototype, "statusCode", void 0);
    return EndpointGetMultipleShowsResponse;
}(SpeakeasyBase));
export { EndpointGetMultipleShowsResponse };
