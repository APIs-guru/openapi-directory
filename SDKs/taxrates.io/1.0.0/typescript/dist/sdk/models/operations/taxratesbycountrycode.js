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
var TaxRatesByCountryCodeQueryParams = /** @class */ (function (_super) {
    __extends(TaxRatesByCountryCodeQueryParams, _super);
    function TaxRatesByCountryCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_code" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCodeQueryParams.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCodeQueryParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCodeQueryParams.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCodeQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_codes[]" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCodeQueryParams.prototype, "productCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=province " }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCodeQueryParams.prototype, "province", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCodeQueryParams.prototype, "zip", void 0);
    return TaxRatesByCountryCodeQueryParams;
}(SpeakeasyBase));
export { TaxRatesByCountryCodeQueryParams };
var TaxRatesByCountryCode200ApplicationJsonTaxes = /** @class */ (function (_super) {
    __extends(TaxRatesByCountryCode200ApplicationJsonTaxes, _super);
    function TaxRatesByCountryCode200ApplicationJsonTaxes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCode200ApplicationJsonTaxes.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCode200ApplicationJsonTaxes.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_name" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCode200ApplicationJsonTaxes.prototype, "dataName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_value" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCode200ApplicationJsonTaxes.prototype, "dataValue", void 0);
    return TaxRatesByCountryCode200ApplicationJsonTaxes;
}(SpeakeasyBase));
export { TaxRatesByCountryCode200ApplicationJsonTaxes };
var TaxRatesByCountryCode200ApplicationJson = /** @class */ (function (_super) {
    __extends(TaxRatesByCountryCode200ApplicationJson, _super);
    function TaxRatesByCountryCode200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCode200ApplicationJson.prototype, "countryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxes", elemType: TaxRatesByCountryCode200ApplicationJsonTaxes }),
        __metadata("design:type", Array)
    ], TaxRatesByCountryCode200ApplicationJson.prototype, "taxes", void 0);
    return TaxRatesByCountryCode200ApplicationJson;
}(SpeakeasyBase));
export { TaxRatesByCountryCode200ApplicationJson };
var TaxRatesByCountryCode500ApplicationJson = /** @class */ (function (_super) {
    __extends(TaxRatesByCountryCode500ApplicationJson, _super);
    function TaxRatesByCountryCode500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCode500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCode500ApplicationJson.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TaxRatesByCountryCode500ApplicationJson.prototype, "message", void 0);
    return TaxRatesByCountryCode500ApplicationJson;
}(SpeakeasyBase));
export { TaxRatesByCountryCode500ApplicationJson };
var TaxRatesByCountryCodeRequest = /** @class */ (function (_super) {
    __extends(TaxRatesByCountryCodeRequest, _super);
    function TaxRatesByCountryCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxRatesByCountryCodeQueryParams)
    ], TaxRatesByCountryCodeRequest.prototype, "queryParams", void 0);
    return TaxRatesByCountryCodeRequest;
}(SpeakeasyBase));
export { TaxRatesByCountryCodeRequest };
var TaxRatesByCountryCodeResponse = /** @class */ (function (_super) {
    __extends(TaxRatesByCountryCodeResponse, _super);
    function TaxRatesByCountryCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TaxRatesByCountryCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TaxRatesByCountryCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxRatesByCountryCode200ApplicationJson)
    ], TaxRatesByCountryCodeResponse.prototype, "taxRatesByCountryCode200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxRatesByCountryCode500ApplicationJson)
    ], TaxRatesByCountryCodeResponse.prototype, "taxRatesByCountryCode500ApplicationJsonObject", void 0);
    return TaxRatesByCountryCodeResponse;
}(SpeakeasyBase));
export { TaxRatesByCountryCodeResponse };
