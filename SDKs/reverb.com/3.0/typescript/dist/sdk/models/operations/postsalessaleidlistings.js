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
var PostSalesSaleIdListingsPathParams = /** @class */ (function (_super) {
    __extends(PostSalesSaleIdListingsPathParams, _super);
    function PostSalesSaleIdListingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sale_id" }),
        __metadata("design:type", String)
    ], PostSalesSaleIdListingsPathParams.prototype, "saleId", void 0);
    return PostSalesSaleIdListingsPathParams;
}(SpeakeasyBase));
export { PostSalesSaleIdListingsPathParams };
var PostSalesSaleIdListingsSecurity = /** @class */ (function (_super) {
    __extends(PostSalesSaleIdListingsSecurity, _super);
    function PostSalesSaleIdListingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostSalesSaleIdListingsSecurity.prototype, "oauth2", void 0);
    return PostSalesSaleIdListingsSecurity;
}(SpeakeasyBase));
export { PostSalesSaleIdListingsSecurity };
var PostSalesSaleIdListingsRequest = /** @class */ (function (_super) {
    __extends(PostSalesSaleIdListingsRequest, _super);
    function PostSalesSaleIdListingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSalesSaleIdListingsPathParams)
    ], PostSalesSaleIdListingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSalesSaleIdListingsSecurity)
    ], PostSalesSaleIdListingsRequest.prototype, "security", void 0);
    return PostSalesSaleIdListingsRequest;
}(SpeakeasyBase));
export { PostSalesSaleIdListingsRequest };
var PostSalesSaleIdListingsResponse = /** @class */ (function (_super) {
    __extends(PostSalesSaleIdListingsResponse, _super);
    function PostSalesSaleIdListingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSalesSaleIdListingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSalesSaleIdListingsResponse.prototype, "statusCode", void 0);
    return PostSalesSaleIdListingsResponse;
}(SpeakeasyBase));
export { PostSalesSaleIdListingsResponse };
