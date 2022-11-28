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
var GetInvoiceJsonPathParams = /** @class */ (function (_super) {
    __extends(GetInvoiceJsonPathParams, _super);
    function GetInvoiceJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guid" }),
        __metadata("design:type", String)
    ], GetInvoiceJsonPathParams.prototype, "guid", void 0);
    return GetInvoiceJsonPathParams;
}(SpeakeasyBase));
export { GetInvoiceJsonPathParams };
var GetInvoiceJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetInvoiceJsonQueryParams, _super);
    function GetInvoiceJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pmv" }),
        __metadata("design:type", String)
    ], GetInvoiceJsonQueryParams.prototype, "pmv", void 0);
    return GetInvoiceJsonQueryParams;
}(SpeakeasyBase));
export { GetInvoiceJsonQueryParams };
var GetInvoiceJsonRequest = /** @class */ (function (_super) {
    __extends(GetInvoiceJsonRequest, _super);
    function GetInvoiceJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInvoiceJsonPathParams)
    ], GetInvoiceJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInvoiceJsonQueryParams)
    ], GetInvoiceJsonRequest.prototype, "queryParams", void 0);
    return GetInvoiceJsonRequest;
}(SpeakeasyBase));
export { GetInvoiceJsonRequest };
var GetInvoiceJsonResponse = /** @class */ (function (_super) {
    __extends(GetInvoiceJsonResponse, _super);
    function GetInvoiceJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInvoiceJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetInvoiceJsonResponse.prototype, "purchaseInvoice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInvoiceJsonResponse.prototype, "statusCode", void 0);
    return GetInvoiceJsonResponse;
}(SpeakeasyBase));
export { GetInvoiceJsonResponse };
