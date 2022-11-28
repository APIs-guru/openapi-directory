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
var GetPaymentDetailsV4PathParams = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsV4PathParams, _super);
    function GetPaymentDetailsV4PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsV4PathParams.prototype, "paymentId", void 0);
    return GetPaymentDetailsV4PathParams;
}(SpeakeasyBase));
export { GetPaymentDetailsV4PathParams };
var GetPaymentDetailsV4QueryParams = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsV4QueryParams, _super);
    function GetPaymentDetailsV4QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" }),
        __metadata("design:type", Boolean)
    ], GetPaymentDetailsV4QueryParams.prototype, "sensitive", void 0);
    return GetPaymentDetailsV4QueryParams;
}(SpeakeasyBase));
export { GetPaymentDetailsV4QueryParams };
var GetPaymentDetailsV4Request = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsV4Request, _super);
    function GetPaymentDetailsV4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentDetailsV4PathParams)
    ], GetPaymentDetailsV4Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentDetailsV4QueryParams)
    ], GetPaymentDetailsV4Request.prototype, "queryParams", void 0);
    return GetPaymentDetailsV4Request;
}(SpeakeasyBase));
export { GetPaymentDetailsV4Request };
var GetPaymentDetailsV4Response = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsV4Response, _super);
    function GetPaymentDetailsV4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentDetailsV4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentResponseV4)
    ], GetPaymentDetailsV4Response.prototype, "paymentResponseV4", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentDetailsV4Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPaymentDetailsV4Response.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPaymentDetailsV4Response.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPaymentDetailsV4Response.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPaymentDetailsV4Response.prototype, "inlineResponse404", void 0);
    return GetPaymentDetailsV4Response;
}(SpeakeasyBase));
export { GetPaymentDetailsV4Response };
