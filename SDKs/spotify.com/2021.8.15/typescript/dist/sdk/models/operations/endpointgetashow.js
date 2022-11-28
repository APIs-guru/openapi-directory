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
var EndpointGetAShowPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetAShowPathParams, _super);
    function EndpointGetAShowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EndpointGetAShowPathParams.prototype, "id", void 0);
    return EndpointGetAShowPathParams;
}(SpeakeasyBase));
export { EndpointGetAShowPathParams };
var EndpointGetAShowQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetAShowQueryParams, _super);
    function EndpointGetAShowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetAShowQueryParams.prototype, "market", void 0);
    return EndpointGetAShowQueryParams;
}(SpeakeasyBase));
export { EndpointGetAShowQueryParams };
var EndpointGetAShowHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetAShowHeaders, _super);
    function EndpointGetAShowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetAShowHeaders.prototype, "authorization", void 0);
    return EndpointGetAShowHeaders;
}(SpeakeasyBase));
export { EndpointGetAShowHeaders };
var EndpointGetAShowSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetAShowSecurity, _super);
    function EndpointGetAShowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetAShowSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetAShowSecurity;
}(SpeakeasyBase));
export { EndpointGetAShowSecurity };
var EndpointGetAShowRequest = /** @class */ (function (_super) {
    __extends(EndpointGetAShowRequest, _super);
    function EndpointGetAShowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAShowPathParams)
    ], EndpointGetAShowRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAShowQueryParams)
    ], EndpointGetAShowRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAShowHeaders)
    ], EndpointGetAShowRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAShowSecurity)
    ], EndpointGetAShowRequest.prototype, "security", void 0);
    return EndpointGetAShowRequest;
}(SpeakeasyBase));
export { EndpointGetAShowRequest };
var EndpointGetAShowResponse = /** @class */ (function (_super) {
    __extends(EndpointGetAShowResponse, _super);
    function EndpointGetAShowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetAShowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetAShowResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ShowObject)
    ], EndpointGetAShowResponse.prototype, "showObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetAShowResponse.prototype, "statusCode", void 0);
    return EndpointGetAShowResponse;
}(SpeakeasyBase));
export { EndpointGetAShowResponse };
