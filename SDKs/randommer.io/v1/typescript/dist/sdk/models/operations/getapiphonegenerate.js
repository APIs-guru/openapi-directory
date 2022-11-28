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
var GetApiPhoneGenerateQueryParams = /** @class */ (function (_super) {
    __extends(GetApiPhoneGenerateQueryParams, _super);
    function GetApiPhoneGenerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CountryCode" }),
        __metadata("design:type", String)
    ], GetApiPhoneGenerateQueryParams.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Quantity" }),
        __metadata("design:type", Number)
    ], GetApiPhoneGenerateQueryParams.prototype, "quantity", void 0);
    return GetApiPhoneGenerateQueryParams;
}(SpeakeasyBase));
export { GetApiPhoneGenerateQueryParams };
var GetApiPhoneGenerateHeaders = /** @class */ (function (_super) {
    __extends(GetApiPhoneGenerateHeaders, _super);
    function GetApiPhoneGenerateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], GetApiPhoneGenerateHeaders.prototype, "xApiKey", void 0);
    return GetApiPhoneGenerateHeaders;
}(SpeakeasyBase));
export { GetApiPhoneGenerateHeaders };
var GetApiPhoneGenerateRequest = /** @class */ (function (_super) {
    __extends(GetApiPhoneGenerateRequest, _super);
    function GetApiPhoneGenerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiPhoneGenerateQueryParams)
    ], GetApiPhoneGenerateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiPhoneGenerateHeaders)
    ], GetApiPhoneGenerateRequest.prototype, "headers", void 0);
    return GetApiPhoneGenerateRequest;
}(SpeakeasyBase));
export { GetApiPhoneGenerateRequest };
var GetApiPhoneGenerateResponse = /** @class */ (function (_super) {
    __extends(GetApiPhoneGenerateResponse, _super);
    function GetApiPhoneGenerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiPhoneGenerateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiPhoneGenerateResponse.prototype, "statusCode", void 0);
    return GetApiPhoneGenerateResponse;
}(SpeakeasyBase));
export { GetApiPhoneGenerateResponse };
