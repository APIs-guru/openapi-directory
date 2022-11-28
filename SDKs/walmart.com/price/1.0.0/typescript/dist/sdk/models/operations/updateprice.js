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
var UpdatePriceHeaders = /** @class */ (function (_super) {
    __extends(UpdatePriceHeaders, _super);
    function UpdatePriceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], UpdatePriceHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" }),
        __metadata("design:type", String)
    ], UpdatePriceHeaders.prototype, "wmConsumerChannelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" }),
        __metadata("design:type", String)
    ], UpdatePriceHeaders.prototype, "wmQosCorrelationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" }),
        __metadata("design:type", String)
    ], UpdatePriceHeaders.prototype, "wmSecAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" }),
        __metadata("design:type", String)
    ], UpdatePriceHeaders.prototype, "wmSvcName", void 0);
    return UpdatePriceHeaders;
}(SpeakeasyBase));
export { UpdatePriceHeaders };
export var UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum;
(function (UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum) {
    UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum["Usd"] = "USD";
    UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum["Cad"] = "CAD";
})(UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum || (UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum = {}));
// UpdatePriceRequestBodyPricingComparisonPrice
/**
 * This is applicable only for promotions
**/
var UpdatePriceRequestBodyPricingComparisonPrice = /** @class */ (function (_super) {
    __extends(UpdatePriceRequestBodyPricingComparisonPrice, _super);
    function UpdatePriceRequestBodyPricingComparisonPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], UpdatePriceRequestBodyPricingComparisonPrice.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], UpdatePriceRequestBodyPricingComparisonPrice.prototype, "currency", void 0);
    return UpdatePriceRequestBodyPricingComparisonPrice;
}(SpeakeasyBase));
export { UpdatePriceRequestBodyPricingComparisonPrice };
export var UpdatePriceRequestBodyPricingComparisonPriceTypeEnum;
(function (UpdatePriceRequestBodyPricingComparisonPriceTypeEnum) {
    UpdatePriceRequestBodyPricingComparisonPriceTypeEnum["Base"] = "BASE";
})(UpdatePriceRequestBodyPricingComparisonPriceTypeEnum || (UpdatePriceRequestBodyPricingComparisonPriceTypeEnum = {}));
export var UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum;
(function (UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum) {
    UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum["Usd"] = "USD";
    UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum["Cad"] = "CAD";
})(UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum || (UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum = {}));
var UpdatePriceRequestBodyPricingCurrentPrice = /** @class */ (function (_super) {
    __extends(UpdatePriceRequestBodyPricingCurrentPrice, _super);
    function UpdatePriceRequestBodyPricingCurrentPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], UpdatePriceRequestBodyPricingCurrentPrice.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], UpdatePriceRequestBodyPricingCurrentPrice.prototype, "currency", void 0);
    return UpdatePriceRequestBodyPricingCurrentPrice;
}(SpeakeasyBase));
export { UpdatePriceRequestBodyPricingCurrentPrice };
export var UpdatePriceRequestBodyPricingCurrentPriceTypeEnum;
(function (UpdatePriceRequestBodyPricingCurrentPriceTypeEnum) {
    UpdatePriceRequestBodyPricingCurrentPriceTypeEnum["Base"] = "BASE";
    UpdatePriceRequestBodyPricingCurrentPriceTypeEnum["Reduced"] = "REDUCED";
    UpdatePriceRequestBodyPricingCurrentPriceTypeEnum["Clearance"] = "CLEARANCE";
})(UpdatePriceRequestBodyPricingCurrentPriceTypeEnum || (UpdatePriceRequestBodyPricingCurrentPriceTypeEnum = {}));
export var UpdatePriceRequestBodyPricingPriceDisplayCodesEnum;
(function (UpdatePriceRequestBodyPricingPriceDisplayCodesEnum) {
    UpdatePriceRequestBodyPricingPriceDisplayCodesEnum["Cart"] = "CART";
    UpdatePriceRequestBodyPricingPriceDisplayCodesEnum["Checkout"] = "CHECKOUT";
})(UpdatePriceRequestBodyPricingPriceDisplayCodesEnum || (UpdatePriceRequestBodyPricingPriceDisplayCodesEnum = {}));
export var UpdatePriceRequestBodyPricingProcessModeEnum;
(function (UpdatePriceRequestBodyPricingProcessModeEnum) {
    UpdatePriceRequestBodyPricingProcessModeEnum["Upsert"] = "UPSERT";
    UpdatePriceRequestBodyPricingProcessModeEnum["Delete"] = "DELETE";
})(UpdatePriceRequestBodyPricingProcessModeEnum || (UpdatePriceRequestBodyPricingProcessModeEnum = {}));
var UpdatePriceRequestBodyPricing = /** @class */ (function (_super) {
    __extends(UpdatePriceRequestBodyPricing, _super);
    function UpdatePriceRequestBodyPricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonPrice" }),
        __metadata("design:type", UpdatePriceRequestBodyPricingComparisonPrice)
    ], UpdatePriceRequestBodyPricing.prototype, "comparisonPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonPriceType" }),
        __metadata("design:type", String)
    ], UpdatePriceRequestBodyPricing.prototype, "comparisonPriceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPrice" }),
        __metadata("design:type", UpdatePriceRequestBodyPricingCurrentPrice)
    ], UpdatePriceRequestBodyPricing.prototype, "currentPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPriceType" }),
        __metadata("design:type", String)
    ], UpdatePriceRequestBodyPricing.prototype, "currentPriceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", Date)
    ], UpdatePriceRequestBodyPricing.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationDate" }),
        __metadata("design:type", Date)
    ], UpdatePriceRequestBodyPricing.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceDisplayCodes" }),
        __metadata("design:type", String)
    ], UpdatePriceRequestBodyPricing.prototype, "priceDisplayCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processMode" }),
        __metadata("design:type", String)
    ], UpdatePriceRequestBodyPricing.prototype, "processMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promoId" }),
        __metadata("design:type", String)
    ], UpdatePriceRequestBodyPricing.prototype, "promoId", void 0);
    return UpdatePriceRequestBodyPricing;
}(SpeakeasyBase));
export { UpdatePriceRequestBodyPricing };
export var UpdatePriceRequestBodyReplaceAllEnum;
(function (UpdatePriceRequestBodyReplaceAllEnum) {
    UpdatePriceRequestBodyReplaceAllEnum["True"] = "true";
    UpdatePriceRequestBodyReplaceAllEnum["False"] = "false";
})(UpdatePriceRequestBodyReplaceAllEnum || (UpdatePriceRequestBodyReplaceAllEnum = {}));
var UpdatePriceRequestBody = /** @class */ (function (_super) {
    __extends(UpdatePriceRequestBody, _super);
    function UpdatePriceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definitions" }),
        __metadata("design:type", Map)
    ], UpdatePriceRequestBody.prototype, "definitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerId" }),
        __metadata("design:type", String)
    ], UpdatePriceRequestBody.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricing", elemType: UpdatePriceRequestBodyPricing }),
        __metadata("design:type", Array)
    ], UpdatePriceRequestBody.prototype, "pricing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceAll" }),
        __metadata("design:type", String)
    ], UpdatePriceRequestBody.prototype, "replaceAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], UpdatePriceRequestBody.prototype, "sku", void 0);
    return UpdatePriceRequestBody;
}(SpeakeasyBase));
export { UpdatePriceRequestBody };
export var UpdatePrice200ApplicationJsonErrorsCategoryEnum;
(function (UpdatePrice200ApplicationJsonErrorsCategoryEnum) {
    UpdatePrice200ApplicationJsonErrorsCategoryEnum["Application"] = "APPLICATION";
    UpdatePrice200ApplicationJsonErrorsCategoryEnum["System"] = "SYSTEM";
    UpdatePrice200ApplicationJsonErrorsCategoryEnum["Request"] = "REQUEST";
    UpdatePrice200ApplicationJsonErrorsCategoryEnum["Data"] = "DATA";
})(UpdatePrice200ApplicationJsonErrorsCategoryEnum || (UpdatePrice200ApplicationJsonErrorsCategoryEnum = {}));
var UpdatePrice200ApplicationJsonErrorsCauses = /** @class */ (function (_super) {
    __extends(UpdatePrice200ApplicationJsonErrorsCauses, _super);
    function UpdatePrice200ApplicationJsonErrorsCauses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrorsCauses.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrorsCauses.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrorsCauses.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrorsCauses.prototype, "type", void 0);
    return UpdatePrice200ApplicationJsonErrorsCauses;
}(SpeakeasyBase));
export { UpdatePrice200ApplicationJsonErrorsCauses };
export var UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum;
(function (UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum) {
    UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum["InternalDataError"] = "INTERNAL_DATA_ERROR";
    UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum["ExternalDataError"] = "EXTERNAL_DATA_ERROR";
    UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum["SystemError"] = "SYSTEM_ERROR";
})(UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum || (UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum = {}));
export var UpdatePrice200ApplicationJsonErrorsSeverityEnum;
(function (UpdatePrice200ApplicationJsonErrorsSeverityEnum) {
    UpdatePrice200ApplicationJsonErrorsSeverityEnum["Info"] = "INFO";
    UpdatePrice200ApplicationJsonErrorsSeverityEnum["Warn"] = "WARN";
    UpdatePrice200ApplicationJsonErrorsSeverityEnum["Error"] = "ERROR";
})(UpdatePrice200ApplicationJsonErrorsSeverityEnum || (UpdatePrice200ApplicationJsonErrorsSeverityEnum = {}));
var UpdatePrice200ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(UpdatePrice200ApplicationJsonErrors, _super);
    function UpdatePrice200ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=causes", elemType: UpdatePrice200ApplicationJsonErrorsCauses }),
        __metadata("design:type", Array)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "causes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=component" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "component", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorIdentifiers" }),
        __metadata("design:type", Map)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "errorIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayErrorCategory" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "gatewayErrorCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJsonErrors.prototype, "type", void 0);
    return UpdatePrice200ApplicationJsonErrors;
}(SpeakeasyBase));
export { UpdatePrice200ApplicationJsonErrors };
var UpdatePrice200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdatePrice200ApplicationJson, _super);
    function UpdatePrice200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: UpdatePrice200ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], UpdatePrice200ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mart" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJson.prototype, "mart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], UpdatePrice200ApplicationJson.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCode" }),
        __metadata("design:type", Number)
    ], UpdatePrice200ApplicationJson.prototype, "statusCode", void 0);
    return UpdatePrice200ApplicationJson;
}(SpeakeasyBase));
export { UpdatePrice200ApplicationJson };
var UpdatePriceRequest = /** @class */ (function (_super) {
    __extends(UpdatePriceRequest, _super);
    function UpdatePriceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePriceHeaders)
    ], UpdatePriceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePriceRequestBody)
    ], UpdatePriceRequest.prototype, "request", void 0);
    return UpdatePriceRequest;
}(SpeakeasyBase));
export { UpdatePriceRequest };
var UpdatePriceResponse = /** @class */ (function (_super) {
    __extends(UpdatePriceResponse, _super);
    function UpdatePriceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdatePriceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePriceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePriceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePrice200ApplicationJson)
    ], UpdatePriceResponse.prototype, "updatePrice200ApplicationJsonObject", void 0);
    return UpdatePriceResponse;
}(SpeakeasyBase));
export { UpdatePriceResponse };
