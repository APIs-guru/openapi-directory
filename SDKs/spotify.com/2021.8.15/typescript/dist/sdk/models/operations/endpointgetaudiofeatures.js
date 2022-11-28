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
var EndpointGetAudioFeaturesPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetAudioFeaturesPathParams, _super);
    function EndpointGetAudioFeaturesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EndpointGetAudioFeaturesPathParams.prototype, "id", void 0);
    return EndpointGetAudioFeaturesPathParams;
}(SpeakeasyBase));
export { EndpointGetAudioFeaturesPathParams };
var EndpointGetAudioFeaturesHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetAudioFeaturesHeaders, _super);
    function EndpointGetAudioFeaturesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetAudioFeaturesHeaders.prototype, "authorization", void 0);
    return EndpointGetAudioFeaturesHeaders;
}(SpeakeasyBase));
export { EndpointGetAudioFeaturesHeaders };
var EndpointGetAudioFeaturesSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetAudioFeaturesSecurity, _super);
    function EndpointGetAudioFeaturesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetAudioFeaturesSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetAudioFeaturesSecurity;
}(SpeakeasyBase));
export { EndpointGetAudioFeaturesSecurity };
var EndpointGetAudioFeaturesRequest = /** @class */ (function (_super) {
    __extends(EndpointGetAudioFeaturesRequest, _super);
    function EndpointGetAudioFeaturesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAudioFeaturesPathParams)
    ], EndpointGetAudioFeaturesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAudioFeaturesHeaders)
    ], EndpointGetAudioFeaturesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAudioFeaturesSecurity)
    ], EndpointGetAudioFeaturesRequest.prototype, "security", void 0);
    return EndpointGetAudioFeaturesRequest;
}(SpeakeasyBase));
export { EndpointGetAudioFeaturesRequest };
var EndpointGetAudioFeaturesResponse = /** @class */ (function (_super) {
    __extends(EndpointGetAudioFeaturesResponse, _super);
    function EndpointGetAudioFeaturesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AudioFeaturesObject)
    ], EndpointGetAudioFeaturesResponse.prototype, "audioFeaturesObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetAudioFeaturesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetAudioFeaturesResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetAudioFeaturesResponse.prototype, "statusCode", void 0);
    return EndpointGetAudioFeaturesResponse;
}(SpeakeasyBase));
export { EndpointGetAudioFeaturesResponse };
