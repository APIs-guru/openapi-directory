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
var EndpointGetTrackPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetTrackPathParams, _super);
    function EndpointGetTrackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EndpointGetTrackPathParams.prototype, "id", void 0);
    return EndpointGetTrackPathParams;
}(SpeakeasyBase));
export { EndpointGetTrackPathParams };
var EndpointGetTrackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetTrackQueryParams, _super);
    function EndpointGetTrackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetTrackQueryParams.prototype, "market", void 0);
    return EndpointGetTrackQueryParams;
}(SpeakeasyBase));
export { EndpointGetTrackQueryParams };
var EndpointGetTrackHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetTrackHeaders, _super);
    function EndpointGetTrackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetTrackHeaders.prototype, "authorization", void 0);
    return EndpointGetTrackHeaders;
}(SpeakeasyBase));
export { EndpointGetTrackHeaders };
var EndpointGetTrackSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetTrackSecurity, _super);
    function EndpointGetTrackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetTrackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetTrackSecurity;
}(SpeakeasyBase));
export { EndpointGetTrackSecurity };
var EndpointGetTrackRequest = /** @class */ (function (_super) {
    __extends(EndpointGetTrackRequest, _super);
    function EndpointGetTrackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetTrackPathParams)
    ], EndpointGetTrackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetTrackQueryParams)
    ], EndpointGetTrackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetTrackHeaders)
    ], EndpointGetTrackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetTrackSecurity)
    ], EndpointGetTrackRequest.prototype, "security", void 0);
    return EndpointGetTrackRequest;
}(SpeakeasyBase));
export { EndpointGetTrackRequest };
var EndpointGetTrackResponse = /** @class */ (function (_super) {
    __extends(EndpointGetTrackResponse, _super);
    function EndpointGetTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetTrackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetTrackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetTrackResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrackObject)
    ], EndpointGetTrackResponse.prototype, "trackObject", void 0);
    return EndpointGetTrackResponse;
}(SpeakeasyBase));
export { EndpointGetTrackResponse };
