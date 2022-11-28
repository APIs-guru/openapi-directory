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
var PostListingsIdOfferPathParams = /** @class */ (function (_super) {
    __extends(PostListingsIdOfferPathParams, _super);
    function PostListingsIdOfferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostListingsIdOfferPathParams.prototype, "id", void 0);
    return PostListingsIdOfferPathParams;
}(SpeakeasyBase));
export { PostListingsIdOfferPathParams };
var PostListingsIdOfferRequestBody = /** @class */ (function (_super) {
    __extends(PostListingsIdOfferRequestBody, _super);
    function PostListingsIdOfferRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostListingsIdOfferRequestBody.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", String)
    ], PostListingsIdOfferRequestBody.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_price" }),
        __metadata("design:type", String)
    ], PostListingsIdOfferRequestBody.prototype, "shippingPrice", void 0);
    return PostListingsIdOfferRequestBody;
}(SpeakeasyBase));
export { PostListingsIdOfferRequestBody };
var PostListingsIdOfferSecurity = /** @class */ (function (_super) {
    __extends(PostListingsIdOfferSecurity, _super);
    function PostListingsIdOfferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostListingsIdOfferSecurity.prototype, "oauth2", void 0);
    return PostListingsIdOfferSecurity;
}(SpeakeasyBase));
export { PostListingsIdOfferSecurity };
var PostListingsIdOfferRequest = /** @class */ (function (_super) {
    __extends(PostListingsIdOfferRequest, _super);
    function PostListingsIdOfferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListingsIdOfferPathParams)
    ], PostListingsIdOfferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostListingsIdOfferRequestBody)
    ], PostListingsIdOfferRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListingsIdOfferSecurity)
    ], PostListingsIdOfferRequest.prototype, "security", void 0);
    return PostListingsIdOfferRequest;
}(SpeakeasyBase));
export { PostListingsIdOfferRequest };
var PostListingsIdOfferResponse = /** @class */ (function (_super) {
    __extends(PostListingsIdOfferResponse, _super);
    function PostListingsIdOfferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListingsIdOfferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListingsIdOfferResponse.prototype, "statusCode", void 0);
    return PostListingsIdOfferResponse;
}(SpeakeasyBase));
export { PostListingsIdOfferResponse };
