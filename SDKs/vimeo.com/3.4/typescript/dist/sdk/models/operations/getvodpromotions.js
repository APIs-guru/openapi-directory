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
var GetVodPromotionsPathParams = /** @class */ (function (_super) {
    __extends(GetVodPromotionsPathParams, _super);
    function GetVodPromotionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], GetVodPromotionsPathParams.prototype, "ondemandId", void 0);
    return GetVodPromotionsPathParams;
}(SpeakeasyBase));
export { GetVodPromotionsPathParams };
export var GetVodPromotionsFilterEnum;
(function (GetVodPromotionsFilterEnum) {
    GetVodPromotionsFilterEnum["Batch"] = "batch";
    GetVodPromotionsFilterEnum["Default"] = "default";
    GetVodPromotionsFilterEnum["Single"] = "single";
    GetVodPromotionsFilterEnum["Vip"] = "vip";
})(GetVodPromotionsFilterEnum || (GetVodPromotionsFilterEnum = {}));
var GetVodPromotionsQueryParams = /** @class */ (function (_super) {
    __extends(GetVodPromotionsQueryParams, _super);
    function GetVodPromotionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVodPromotionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVodPromotionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVodPromotionsQueryParams.prototype, "perPage", void 0);
    return GetVodPromotionsQueryParams;
}(SpeakeasyBase));
export { GetVodPromotionsQueryParams };
var GetVodPromotionsSecurity = /** @class */ (function (_super) {
    __extends(GetVodPromotionsSecurity, _super);
    function GetVodPromotionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetVodPromotionsSecurity.prototype, "oauth2", void 0);
    return GetVodPromotionsSecurity;
}(SpeakeasyBase));
export { GetVodPromotionsSecurity };
var GetVodPromotionsRequest = /** @class */ (function (_super) {
    __extends(GetVodPromotionsRequest, _super);
    function GetVodPromotionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodPromotionsPathParams)
    ], GetVodPromotionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodPromotionsQueryParams)
    ], GetVodPromotionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodPromotionsSecurity)
    ], GetVodPromotionsRequest.prototype, "security", void 0);
    return GetVodPromotionsRequest;
}(SpeakeasyBase));
export { GetVodPromotionsRequest };
var GetVodPromotionsResponse = /** @class */ (function (_super) {
    __extends(GetVodPromotionsResponse, _super);
    function GetVodPromotionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVodPromotionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVodPromotionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetVodPromotionsResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OnDemandPromotion)
    ], GetVodPromotionsResponse.prototype, "onDemandPromotion", void 0);
    return GetVodPromotionsResponse;
}(SpeakeasyBase));
export { GetVodPromotionsResponse };
