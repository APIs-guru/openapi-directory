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
var PostMyOrdersSellingIdShipPathParams = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingIdShipPathParams, _super);
    function PostMyOrdersSellingIdShipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostMyOrdersSellingIdShipPathParams.prototype, "id", void 0);
    return PostMyOrdersSellingIdShipPathParams;
}(SpeakeasyBase));
export { PostMyOrdersSellingIdShipPathParams };
var PostMyOrdersSellingIdShipRequestBody = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingIdShipRequestBody, _super);
    function PostMyOrdersSellingIdShipRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], PostMyOrdersSellingIdShipRequestBody.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=send_notification" }),
        __metadata("design:type", Boolean)
    ], PostMyOrdersSellingIdShipRequestBody.prototype, "sendNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracking_number" }),
        __metadata("design:type", String)
    ], PostMyOrdersSellingIdShipRequestBody.prototype, "trackingNumber", void 0);
    return PostMyOrdersSellingIdShipRequestBody;
}(SpeakeasyBase));
export { PostMyOrdersSellingIdShipRequestBody };
var PostMyOrdersSellingIdShipSecurity = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingIdShipSecurity, _super);
    function PostMyOrdersSellingIdShipSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostMyOrdersSellingIdShipSecurity.prototype, "oauth2", void 0);
    return PostMyOrdersSellingIdShipSecurity;
}(SpeakeasyBase));
export { PostMyOrdersSellingIdShipSecurity };
var PostMyOrdersSellingIdShipRequest = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingIdShipRequest, _super);
    function PostMyOrdersSellingIdShipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyOrdersSellingIdShipPathParams)
    ], PostMyOrdersSellingIdShipRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostMyOrdersSellingIdShipRequestBody)
    ], PostMyOrdersSellingIdShipRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyOrdersSellingIdShipSecurity)
    ], PostMyOrdersSellingIdShipRequest.prototype, "security", void 0);
    return PostMyOrdersSellingIdShipRequest;
}(SpeakeasyBase));
export { PostMyOrdersSellingIdShipRequest };
var PostMyOrdersSellingIdShipResponse = /** @class */ (function (_super) {
    __extends(PostMyOrdersSellingIdShipResponse, _super);
    function PostMyOrdersSellingIdShipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMyOrdersSellingIdShipResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMyOrdersSellingIdShipResponse.prototype, "statusCode", void 0);
    return PostMyOrdersSellingIdShipResponse;
}(SpeakeasyBase));
export { PostMyOrdersSellingIdShipResponse };
