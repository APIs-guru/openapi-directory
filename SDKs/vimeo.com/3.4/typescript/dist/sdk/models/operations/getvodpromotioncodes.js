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
var GetVodPromotionCodesPathParams = /** @class */ (function (_super) {
    __extends(GetVodPromotionCodesPathParams, _super);
    function GetVodPromotionCodesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], GetVodPromotionCodesPathParams.prototype, "ondemandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" }),
        __metadata("design:type", Number)
    ], GetVodPromotionCodesPathParams.prototype, "promotionId", void 0);
    return GetVodPromotionCodesPathParams;
}(SpeakeasyBase));
export { GetVodPromotionCodesPathParams };
var GetVodPromotionCodesQueryParams = /** @class */ (function (_super) {
    __extends(GetVodPromotionCodesQueryParams, _super);
    function GetVodPromotionCodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVodPromotionCodesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVodPromotionCodesQueryParams.prototype, "perPage", void 0);
    return GetVodPromotionCodesQueryParams;
}(SpeakeasyBase));
export { GetVodPromotionCodesQueryParams };
var GetVodPromotionCodesSecurity = /** @class */ (function (_super) {
    __extends(GetVodPromotionCodesSecurity, _super);
    function GetVodPromotionCodesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetVodPromotionCodesSecurity.prototype, "oauth2", void 0);
    return GetVodPromotionCodesSecurity;
}(SpeakeasyBase));
export { GetVodPromotionCodesSecurity };
var GetVodPromotionCodesRequest = /** @class */ (function (_super) {
    __extends(GetVodPromotionCodesRequest, _super);
    function GetVodPromotionCodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodPromotionCodesPathParams)
    ], GetVodPromotionCodesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodPromotionCodesQueryParams)
    ], GetVodPromotionCodesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodPromotionCodesSecurity)
    ], GetVodPromotionCodesRequest.prototype, "security", void 0);
    return GetVodPromotionCodesRequest;
}(SpeakeasyBase));
export { GetVodPromotionCodesRequest };
var GetVodPromotionCodesResponse = /** @class */ (function (_super) {
    __extends(GetVodPromotionCodesResponse, _super);
    function GetVodPromotionCodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVodPromotionCodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVodPromotionCodesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetVodPromotionCodesResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OnDemandPromotionCode)
    ], GetVodPromotionCodesResponse.prototype, "onDemandPromotionCode", void 0);
    return GetVodPromotionCodesResponse;
}(SpeakeasyBase));
export { GetVodPromotionCodesResponse };
