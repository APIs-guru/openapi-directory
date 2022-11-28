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
var GetMyListingsNegotiationsQueryParams = /** @class */ (function (_super) {
    __extends(GetMyListingsNegotiationsQueryParams, _super);
    function GetMyListingsNegotiationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetMyListingsNegotiationsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetMyListingsNegotiationsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetMyListingsNegotiationsQueryParams.prototype, "perPage", void 0);
    return GetMyListingsNegotiationsQueryParams;
}(SpeakeasyBase));
export { GetMyListingsNegotiationsQueryParams };
var GetMyListingsNegotiationsSecurity = /** @class */ (function (_super) {
    __extends(GetMyListingsNegotiationsSecurity, _super);
    function GetMyListingsNegotiationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetMyListingsNegotiationsSecurity.prototype, "oauth2", void 0);
    return GetMyListingsNegotiationsSecurity;
}(SpeakeasyBase));
export { GetMyListingsNegotiationsSecurity };
var GetMyListingsNegotiationsRequest = /** @class */ (function (_super) {
    __extends(GetMyListingsNegotiationsRequest, _super);
    function GetMyListingsNegotiationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMyListingsNegotiationsQueryParams)
    ], GetMyListingsNegotiationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMyListingsNegotiationsSecurity)
    ], GetMyListingsNegotiationsRequest.prototype, "security", void 0);
    return GetMyListingsNegotiationsRequest;
}(SpeakeasyBase));
export { GetMyListingsNegotiationsRequest };
var GetMyListingsNegotiationsResponse = /** @class */ (function (_super) {
    __extends(GetMyListingsNegotiationsResponse, _super);
    function GetMyListingsNegotiationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMyListingsNegotiationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMyListingsNegotiationsResponse.prototype, "statusCode", void 0);
    return GetMyListingsNegotiationsResponse;
}(SpeakeasyBase));
export { GetMyListingsNegotiationsResponse };
