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
var GetCustomerPathParams = /** @class */ (function (_super) {
    __extends(GetCustomerPathParams, _super);
    function GetCustomerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", Number)
    ], GetCustomerPathParams.prototype, "account", void 0);
    return GetCustomerPathParams;
}(SpeakeasyBase));
export { GetCustomerPathParams };
var GetCustomer200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCustomer200ApplicationJson, _super);
    function GetCustomer200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], GetCustomer200ApplicationJson.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_website" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "companyWebsite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditlimit" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "creditlimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "firstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "lastname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postcode" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "postcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GetCustomer200ApplicationJson.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", Number)
    ], GetCustomer200ApplicationJson.prototype, "username", void 0);
    return GetCustomer200ApplicationJson;
}(SpeakeasyBase));
export { GetCustomer200ApplicationJson };
var GetCustomerRequest = /** @class */ (function (_super) {
    __extends(GetCustomerRequest, _super);
    function GetCustomerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomerPathParams)
    ], GetCustomerRequest.prototype, "pathParams", void 0);
    return GetCustomerRequest;
}(SpeakeasyBase));
export { GetCustomerRequest };
var GetCustomerResponse = /** @class */ (function (_super) {
    __extends(GetCustomerResponse, _super);
    function GetCustomerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCustomerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCustomerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomer200ApplicationJson)
    ], GetCustomerResponse.prototype, "getCustomer200ApplicationJsonObject", void 0);
    return GetCustomerResponse;
}(SpeakeasyBase));
export { GetCustomerResponse };
