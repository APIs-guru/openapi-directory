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
var GetMyOrdersSellingBuyerHistoryBuyerIdPathParams = /** @class */ (function (_super) {
    __extends(GetMyOrdersSellingBuyerHistoryBuyerIdPathParams, _super);
    function GetMyOrdersSellingBuyerHistoryBuyerIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=buyer_id" }),
        __metadata("design:type", String)
    ], GetMyOrdersSellingBuyerHistoryBuyerIdPathParams.prototype, "buyerId", void 0);
    return GetMyOrdersSellingBuyerHistoryBuyerIdPathParams;
}(SpeakeasyBase));
export { GetMyOrdersSellingBuyerHistoryBuyerIdPathParams };
var GetMyOrdersSellingBuyerHistoryBuyerIdSecurity = /** @class */ (function (_super) {
    __extends(GetMyOrdersSellingBuyerHistoryBuyerIdSecurity, _super);
    function GetMyOrdersSellingBuyerHistoryBuyerIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetMyOrdersSellingBuyerHistoryBuyerIdSecurity.prototype, "oauth2", void 0);
    return GetMyOrdersSellingBuyerHistoryBuyerIdSecurity;
}(SpeakeasyBase));
export { GetMyOrdersSellingBuyerHistoryBuyerIdSecurity };
var GetMyOrdersSellingBuyerHistoryBuyerIdRequest = /** @class */ (function (_super) {
    __extends(GetMyOrdersSellingBuyerHistoryBuyerIdRequest, _super);
    function GetMyOrdersSellingBuyerHistoryBuyerIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMyOrdersSellingBuyerHistoryBuyerIdPathParams)
    ], GetMyOrdersSellingBuyerHistoryBuyerIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMyOrdersSellingBuyerHistoryBuyerIdSecurity)
    ], GetMyOrdersSellingBuyerHistoryBuyerIdRequest.prototype, "security", void 0);
    return GetMyOrdersSellingBuyerHistoryBuyerIdRequest;
}(SpeakeasyBase));
export { GetMyOrdersSellingBuyerHistoryBuyerIdRequest };
var GetMyOrdersSellingBuyerHistoryBuyerIdResponse = /** @class */ (function (_super) {
    __extends(GetMyOrdersSellingBuyerHistoryBuyerIdResponse, _super);
    function GetMyOrdersSellingBuyerHistoryBuyerIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMyOrdersSellingBuyerHistoryBuyerIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMyOrdersSellingBuyerHistoryBuyerIdResponse.prototype, "statusCode", void 0);
    return GetMyOrdersSellingBuyerHistoryBuyerIdResponse;
}(SpeakeasyBase));
export { GetMyOrdersSellingBuyerHistoryBuyerIdResponse };
