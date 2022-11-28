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
var TaxRatesByIpAddressQueryParams = /** @class */ (function (_super) {
    __extends(TaxRatesByIpAddressQueryParams, _super);
    function TaxRatesByIpAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddressQueryParams.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddressQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddressQueryParams.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_code" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddressQueryParams.prototype, "productCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddressQueryParams.prototype, "zip", void 0);
    return TaxRatesByIpAddressQueryParams;
}(SpeakeasyBase));
export { TaxRatesByIpAddressQueryParams };
var TaxRatesByIpAddress200ApplicationJsonTaxes = /** @class */ (function (_super) {
    __extends(TaxRatesByIpAddress200ApplicationJsonTaxes, _super);
    function TaxRatesByIpAddress200ApplicationJsonTaxes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddress200ApplicationJsonTaxes.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddress200ApplicationJsonTaxes.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_name" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddress200ApplicationJsonTaxes.prototype, "dataName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_value" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddress200ApplicationJsonTaxes.prototype, "dataValue", void 0);
    return TaxRatesByIpAddress200ApplicationJsonTaxes;
}(SpeakeasyBase));
export { TaxRatesByIpAddress200ApplicationJsonTaxes };
var TaxRatesByIpAddress200ApplicationJson = /** @class */ (function (_super) {
    __extends(TaxRatesByIpAddress200ApplicationJson, _super);
    function TaxRatesByIpAddress200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddress200ApplicationJson.prototype, "countryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxes", elemType: TaxRatesByIpAddress200ApplicationJsonTaxes }),
        __metadata("design:type", Array)
    ], TaxRatesByIpAddress200ApplicationJson.prototype, "taxes", void 0);
    return TaxRatesByIpAddress200ApplicationJson;
}(SpeakeasyBase));
export { TaxRatesByIpAddress200ApplicationJson };
var TaxRatesByIpAddress500ApplicationJson = /** @class */ (function (_super) {
    __extends(TaxRatesByIpAddress500ApplicationJson, _super);
    function TaxRatesByIpAddress500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddress500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddress500ApplicationJson.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TaxRatesByIpAddress500ApplicationJson.prototype, "message", void 0);
    return TaxRatesByIpAddress500ApplicationJson;
}(SpeakeasyBase));
export { TaxRatesByIpAddress500ApplicationJson };
var TaxRatesByIpAddressRequest = /** @class */ (function (_super) {
    __extends(TaxRatesByIpAddressRequest, _super);
    function TaxRatesByIpAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxRatesByIpAddressQueryParams)
    ], TaxRatesByIpAddressRequest.prototype, "queryParams", void 0);
    return TaxRatesByIpAddressRequest;
}(SpeakeasyBase));
export { TaxRatesByIpAddressRequest };
var TaxRatesByIpAddressResponse = /** @class */ (function (_super) {
    __extends(TaxRatesByIpAddressResponse, _super);
    function TaxRatesByIpAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TaxRatesByIpAddressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TaxRatesByIpAddressResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: TaxRatesByIpAddress200ApplicationJson }),
        __metadata("design:type", Array)
    ], TaxRatesByIpAddressResponse.prototype, "taxRatesByIpAddress200ApplicationJsonObjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxRatesByIpAddress500ApplicationJson)
    ], TaxRatesByIpAddressResponse.prototype, "taxRatesByIpAddress500ApplicationJsonObject", void 0);
    return TaxRatesByIpAddressResponse;
}(SpeakeasyBase));
export { TaxRatesByIpAddressResponse };
