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
var EndpointGetSeveralTracksQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetSeveralTracksQueryParams, _super);
    function EndpointGetSeveralTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointGetSeveralTracksQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetSeveralTracksQueryParams.prototype, "market", void 0);
    return EndpointGetSeveralTracksQueryParams;
}(SpeakeasyBase));
export { EndpointGetSeveralTracksQueryParams };
var EndpointGetSeveralTracksHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetSeveralTracksHeaders, _super);
    function EndpointGetSeveralTracksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetSeveralTracksHeaders.prototype, "authorization", void 0);
    return EndpointGetSeveralTracksHeaders;
}(SpeakeasyBase));
export { EndpointGetSeveralTracksHeaders };
var EndpointGetSeveralTracksSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetSeveralTracksSecurity, _super);
    function EndpointGetSeveralTracksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetSeveralTracksSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetSeveralTracksSecurity;
}(SpeakeasyBase));
export { EndpointGetSeveralTracksSecurity };
var EndpointGetSeveralTracksRequest = /** @class */ (function (_super) {
    __extends(EndpointGetSeveralTracksRequest, _super);
    function EndpointGetSeveralTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetSeveralTracksQueryParams)
    ], EndpointGetSeveralTracksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetSeveralTracksHeaders)
    ], EndpointGetSeveralTracksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetSeveralTracksSecurity)
    ], EndpointGetSeveralTracksRequest.prototype, "security", void 0);
    return EndpointGetSeveralTracksRequest;
}(SpeakeasyBase));
export { EndpointGetSeveralTracksRequest };
var EndpointGetSeveralTracksResponse = /** @class */ (function (_super) {
    __extends(EndpointGetSeveralTracksResponse, _super);
    function EndpointGetSeveralTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetSeveralTracksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetSeveralTracksResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetSeveralTracksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TracksObject)
    ], EndpointGetSeveralTracksResponse.prototype, "tracksObject", void 0);
    return EndpointGetSeveralTracksResponse;
}(SpeakeasyBase));
export { EndpointGetSeveralTracksResponse };
