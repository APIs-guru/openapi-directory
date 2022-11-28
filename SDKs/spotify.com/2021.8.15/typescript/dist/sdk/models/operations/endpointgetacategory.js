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
var EndpointGetACategoryPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetACategoryPathParams, _super);
    function EndpointGetACategoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" }),
        __metadata("design:type", String)
    ], EndpointGetACategoryPathParams.prototype, "categoryId", void 0);
    return EndpointGetACategoryPathParams;
}(SpeakeasyBase));
export { EndpointGetACategoryPathParams };
var EndpointGetACategoryQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetACategoryQueryParams, _super);
    function EndpointGetACategoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], EndpointGetACategoryQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], EndpointGetACategoryQueryParams.prototype, "locale", void 0);
    return EndpointGetACategoryQueryParams;
}(SpeakeasyBase));
export { EndpointGetACategoryQueryParams };
var EndpointGetACategoryHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetACategoryHeaders, _super);
    function EndpointGetACategoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetACategoryHeaders.prototype, "authorization", void 0);
    return EndpointGetACategoryHeaders;
}(SpeakeasyBase));
export { EndpointGetACategoryHeaders };
var EndpointGetACategorySecurity = /** @class */ (function (_super) {
    __extends(EndpointGetACategorySecurity, _super);
    function EndpointGetACategorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetACategorySecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetACategorySecurity;
}(SpeakeasyBase));
export { EndpointGetACategorySecurity };
var EndpointGetACategoryRequest = /** @class */ (function (_super) {
    __extends(EndpointGetACategoryRequest, _super);
    function EndpointGetACategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetACategoryPathParams)
    ], EndpointGetACategoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetACategoryQueryParams)
    ], EndpointGetACategoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetACategoryHeaders)
    ], EndpointGetACategoryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetACategorySecurity)
    ], EndpointGetACategoryRequest.prototype, "security", void 0);
    return EndpointGetACategoryRequest;
}(SpeakeasyBase));
export { EndpointGetACategoryRequest };
var EndpointGetACategoryResponse = /** @class */ (function (_super) {
    __extends(EndpointGetACategoryResponse, _super);
    function EndpointGetACategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CategoryObject)
    ], EndpointGetACategoryResponse.prototype, "categoryObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetACategoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetACategoryResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetACategoryResponse.prototype, "statusCode", void 0);
    return EndpointGetACategoryResponse;
}(SpeakeasyBase));
export { EndpointGetACategoryResponse };
