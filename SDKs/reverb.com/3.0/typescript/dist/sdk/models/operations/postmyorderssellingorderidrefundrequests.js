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
var PostMyOrdersSellingOrderIdRefundRequestsPathParams = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingOrderIdRefundRequestsPathParams, _super);
    function PostMyOrdersSellingOrderIdRefundRequestsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" }),
        __metadata("design:type", String)
    ], PostMyOrdersSellingOrderIdRefundRequestsPathParams.prototype, "orderId", void 0);
    return PostMyOrdersSellingOrderIdRefundRequestsPathParams;
}(SpeakeasyBase));
export { PostMyOrdersSellingOrderIdRefundRequestsPathParams };
var PostMyOrdersSellingOrderIdRefundRequestsSecurity = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingOrderIdRefundRequestsSecurity, _super);
    function PostMyOrdersSellingOrderIdRefundRequestsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostMyOrdersSellingOrderIdRefundRequestsSecurity.prototype, "oauth2", void 0);
    return PostMyOrdersSellingOrderIdRefundRequestsSecurity;
}(SpeakeasyBase));
export { PostMyOrdersSellingOrderIdRefundRequestsSecurity };
var PostMyOrdersSellingOrderIdRefundRequestsRequest = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingOrderIdRefundRequestsRequest, _super);
    function PostMyOrdersSellingOrderIdRefundRequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyOrdersSellingOrderIdRefundRequestsPathParams)
    ], PostMyOrdersSellingOrderIdRefundRequestsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyOrdersSellingOrderIdRefundRequestsSecurity)
    ], PostMyOrdersSellingOrderIdRefundRequestsRequest.prototype, "security", void 0);
    return PostMyOrdersSellingOrderIdRefundRequestsRequest;
}(SpeakeasyBase));
export { PostMyOrdersSellingOrderIdRefundRequestsRequest };
var PostMyOrdersSellingOrderIdRefundRequestsResponse = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingOrderIdRefundRequestsResponse, _super);
    function PostMyOrdersSellingOrderIdRefundRequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMyOrdersSellingOrderIdRefundRequestsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMyOrdersSellingOrderIdRefundRequestsResponse.prototype, "statusCode", void 0);
    return PostMyOrdersSellingOrderIdRefundRequestsResponse;
}(SpeakeasyBase));
export { PostMyOrdersSellingOrderIdRefundRequestsResponse };
