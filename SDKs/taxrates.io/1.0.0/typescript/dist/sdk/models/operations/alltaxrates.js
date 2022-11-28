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
var AllTaxRatesQueryParams = /** @class */ (function (_super) {
    __extends(AllTaxRatesQueryParams, _super);
    function AllTaxRatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Product_code" }),
        __metadata("design:type", String)
    ], AllTaxRatesQueryParams.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], AllTaxRatesQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], AllTaxRatesQueryParams.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AllTaxRatesQueryParams.prototype, "filter", void 0);
    return AllTaxRatesQueryParams;
}(SpeakeasyBase));
export { AllTaxRatesQueryParams };
var AllTaxRates200ApplicationJsonRates = /** @class */ (function (_super) {
    __extends(AllTaxRates200ApplicationJsonRates, _super);
    function AllTaxRates200ApplicationJsonRates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_name" }),
        __metadata("design:type", String)
    ], AllTaxRates200ApplicationJsonRates.prototype, "dataName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_value" }),
        __metadata("design:type", String)
    ], AllTaxRates200ApplicationJsonRates.prototype, "dataValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product_code" }),
        __metadata("design:type", String)
    ], AllTaxRates200ApplicationJsonRates.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AllTaxRates200ApplicationJsonRates.prototype, "type", void 0);
    return AllTaxRates200ApplicationJsonRates;
}(SpeakeasyBase));
export { AllTaxRates200ApplicationJsonRates };
var AllTaxRates200ApplicationJson = /** @class */ (function (_super) {
    __extends(AllTaxRates200ApplicationJson, _super);
    function AllTaxRates200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AllTaxRates200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AllTaxRates200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rates", elemType: AllTaxRates200ApplicationJsonRates }),
        __metadata("design:type", Array)
    ], AllTaxRates200ApplicationJson.prototype, "rates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AllTaxRates200ApplicationJson.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], AllTaxRates200ApplicationJson.prototype, "zip", void 0);
    return AllTaxRates200ApplicationJson;
}(SpeakeasyBase));
export { AllTaxRates200ApplicationJson };
var AllTaxRates500ApplicationJson = /** @class */ (function (_super) {
    __extends(AllTaxRates500ApplicationJson, _super);
    function AllTaxRates500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], AllTaxRates500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", String)
    ], AllTaxRates500ApplicationJson.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AllTaxRates500ApplicationJson.prototype, "message", void 0);
    return AllTaxRates500ApplicationJson;
}(SpeakeasyBase));
export { AllTaxRates500ApplicationJson };
var AllTaxRatesRequest = /** @class */ (function (_super) {
    __extends(AllTaxRatesRequest, _super);
    function AllTaxRatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AllTaxRatesQueryParams)
    ], AllTaxRatesRequest.prototype, "queryParams", void 0);
    return AllTaxRatesRequest;
}(SpeakeasyBase));
export { AllTaxRatesRequest };
var AllTaxRatesResponse = /** @class */ (function (_super) {
    __extends(AllTaxRatesResponse, _super);
    function AllTaxRatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AllTaxRatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AllTaxRatesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: AllTaxRates200ApplicationJson }),
        __metadata("design:type", Array)
    ], AllTaxRatesResponse.prototype, "allTaxRates200ApplicationJsonObjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AllTaxRates500ApplicationJson)
    ], AllTaxRatesResponse.prototype, "allTaxRates500ApplicationJsonObject", void 0);
    return AllTaxRatesResponse;
}(SpeakeasyBase));
export { AllTaxRatesResponse };
