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
var EndpointCheckUsersSavedShowsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedShowsQueryParams, _super);
    function EndpointCheckUsersSavedShowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedShowsQueryParams.prototype, "ids", void 0);
    return EndpointCheckUsersSavedShowsQueryParams;
}(SpeakeasyBase));
export { EndpointCheckUsersSavedShowsQueryParams };
var EndpointCheckUsersSavedShowsHeaders = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedShowsHeaders, _super);
    function EndpointCheckUsersSavedShowsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedShowsHeaders.prototype, "authorization", void 0);
    return EndpointCheckUsersSavedShowsHeaders;
}(SpeakeasyBase));
export { EndpointCheckUsersSavedShowsHeaders };
var EndpointCheckUsersSavedShowsSecurity = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedShowsSecurity, _super);
    function EndpointCheckUsersSavedShowsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointCheckUsersSavedShowsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointCheckUsersSavedShowsSecurity;
}(SpeakeasyBase));
export { EndpointCheckUsersSavedShowsSecurity };
var EndpointCheckUsersSavedShowsRequest = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedShowsRequest, _super);
    function EndpointCheckUsersSavedShowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckUsersSavedShowsQueryParams)
    ], EndpointCheckUsersSavedShowsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckUsersSavedShowsHeaders)
    ], EndpointCheckUsersSavedShowsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckUsersSavedShowsSecurity)
    ], EndpointCheckUsersSavedShowsRequest.prototype, "security", void 0);
    return EndpointCheckUsersSavedShowsRequest;
}(SpeakeasyBase));
export { EndpointCheckUsersSavedShowsRequest };
var EndpointCheckUsersSavedShowsResponse = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedShowsResponse, _super);
    function EndpointCheckUsersSavedShowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedShowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointCheckUsersSavedShowsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointCheckUsersSavedShowsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], EndpointCheckUsersSavedShowsResponse.prototype, "endpointCheckUsersSavedShows200ApplicationJsonBooleans", void 0);
    return EndpointCheckUsersSavedShowsResponse;
}(SpeakeasyBase));
export { EndpointCheckUsersSavedShowsResponse };
