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
var CreateVodPromotionPathParams = /** @class */ (function (_super) {
    __extends(CreateVodPromotionPathParams, _super);
    function CreateVodPromotionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], CreateVodPromotionPathParams.prototype, "ondemandId", void 0);
    return CreateVodPromotionPathParams;
}(SpeakeasyBase));
export { CreateVodPromotionPathParams };
export var CreateVodPromotionRequestBodyAccessTypeEnum;
(function (CreateVodPromotionRequestBodyAccessTypeEnum) {
    CreateVodPromotionRequestBodyAccessTypeEnum["Default"] = "default";
    CreateVodPromotionRequestBodyAccessTypeEnum["Vip"] = "vip";
})(CreateVodPromotionRequestBodyAccessTypeEnum || (CreateVodPromotionRequestBodyAccessTypeEnum = {}));
export var CreateVodPromotionRequestBodyDiscountTypeEnum;
(function (CreateVodPromotionRequestBodyDiscountTypeEnum) {
    CreateVodPromotionRequestBodyDiscountTypeEnum["Free"] = "free";
    CreateVodPromotionRequestBodyDiscountTypeEnum["Percent"] = "percent";
})(CreateVodPromotionRequestBodyDiscountTypeEnum || (CreateVodPromotionRequestBodyDiscountTypeEnum = {}));
export var CreateVodPromotionRequestBodyProductTypeEnum;
(function (CreateVodPromotionRequestBodyProductTypeEnum) {
    CreateVodPromotionRequestBodyProductTypeEnum["Any"] = "any";
    CreateVodPromotionRequestBodyProductTypeEnum["Buy"] = "buy";
    CreateVodPromotionRequestBodyProductTypeEnum["BuyEpisode"] = "buy_episode";
    CreateVodPromotionRequestBodyProductTypeEnum["Rent"] = "rent";
    CreateVodPromotionRequestBodyProductTypeEnum["RentEpisode"] = "rent_episode";
    CreateVodPromotionRequestBodyProductTypeEnum["Subscribe"] = "subscribe";
})(CreateVodPromotionRequestBodyProductTypeEnum || (CreateVodPromotionRequestBodyProductTypeEnum = {}));
export var CreateVodPromotionRequestBodyStreamPeriodEnum;
(function (CreateVodPromotionRequestBodyStreamPeriodEnum) {
    CreateVodPromotionRequestBodyStreamPeriodEnum["OneWeek"] = "1_week";
    CreateVodPromotionRequestBodyStreamPeriodEnum["OneYear"] = "1_year";
    CreateVodPromotionRequestBodyStreamPeriodEnum["TwentyFourHour"] = "24_hour";
    CreateVodPromotionRequestBodyStreamPeriodEnum["ThirtyDay"] = "30_day";
    CreateVodPromotionRequestBodyStreamPeriodEnum["ThreeMonth"] = "3_month";
    CreateVodPromotionRequestBodyStreamPeriodEnum["FortyEightHour"] = "48_hour";
    CreateVodPromotionRequestBodyStreamPeriodEnum["SixMonth"] = "6_month";
    CreateVodPromotionRequestBodyStreamPeriodEnum["SeventyTwoHour"] = "72_hour";
})(CreateVodPromotionRequestBodyStreamPeriodEnum || (CreateVodPromotionRequestBodyStreamPeriodEnum = {}));
export var CreateVodPromotionRequestBodyTypeEnum;
(function (CreateVodPromotionRequestBodyTypeEnum) {
    CreateVodPromotionRequestBodyTypeEnum["Batch"] = "batch";
    CreateVodPromotionRequestBodyTypeEnum["Single"] = "single";
})(CreateVodPromotionRequestBodyTypeEnum || (CreateVodPromotionRequestBodyTypeEnum = {}));
var CreateVodPromotionRequestBody = /** @class */ (function (_super) {
    __extends(CreateVodPromotionRequestBody, _super);
    function CreateVodPromotionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_type" }),
        __metadata("design:type", String)
    ], CreateVodPromotionRequestBody.prototype, "accessType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CreateVodPromotionRequestBody.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_type" }),
        __metadata("design:type", String)
    ], CreateVodPromotionRequestBody.prototype, "discountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], CreateVodPromotionRequestBody.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_time" }),
        __metadata("design:type", String)
    ], CreateVodPromotionRequestBody.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CreateVodPromotionRequestBody.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percent_off" }),
        __metadata("design:type", Number)
    ], CreateVodPromotionRequestBody.prototype, "percentOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product_type" }),
        __metadata("design:type", String)
    ], CreateVodPromotionRequestBody.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], CreateVodPromotionRequestBody.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stream_period" }),
        __metadata("design:type", String)
    ], CreateVodPromotionRequestBody.prototype, "streamPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CreateVodPromotionRequestBody.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateVodPromotionRequestBody.prototype, "type", void 0);
    return CreateVodPromotionRequestBody;
}(SpeakeasyBase));
export { CreateVodPromotionRequestBody };
var CreateVodPromotionSecurity = /** @class */ (function (_super) {
    __extends(CreateVodPromotionSecurity, _super);
    function CreateVodPromotionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateVodPromotionSecurity.prototype, "oauth2", void 0);
    return CreateVodPromotionSecurity;
}(SpeakeasyBase));
export { CreateVodPromotionSecurity };
var CreateVodPromotionRequest = /** @class */ (function (_super) {
    __extends(CreateVodPromotionRequest, _super);
    function CreateVodPromotionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVodPromotionPathParams)
    ], CreateVodPromotionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.ondemand.promotion+json" }),
        __metadata("design:type", CreateVodPromotionRequestBody)
    ], CreateVodPromotionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVodPromotionSecurity)
    ], CreateVodPromotionRequest.prototype, "security", void 0);
    return CreateVodPromotionRequest;
}(SpeakeasyBase));
export { CreateVodPromotionRequest };
var CreateVodPromotionResponse = /** @class */ (function (_super) {
    __extends(CreateVodPromotionResponse, _super);
    function CreateVodPromotionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVodPromotionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVodPromotionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], CreateVodPromotionResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OnDemandPromotion)
    ], CreateVodPromotionResponse.prototype, "onDemandPromotion", void 0);
    return CreateVodPromotionResponse;
}(SpeakeasyBase));
export { CreateVodPromotionResponse };
