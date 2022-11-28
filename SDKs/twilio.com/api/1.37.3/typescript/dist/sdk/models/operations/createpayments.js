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
export var CreatePaymentsServerList = [
    "https://api.twilio.com",
];
var CreatePaymentsPathParams = /** @class */ (function (_super) {
    __extends(CreatePaymentsPathParams, _super);
    function CreatePaymentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreatePaymentsPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], CreatePaymentsPathParams.prototype, "callSid", void 0);
    return CreatePaymentsPathParams;
}(SpeakeasyBase));
export { CreatePaymentsPathParams };
var CreatePaymentsCreatePaymentsRequest = /** @class */ (function (_super) {
    __extends(CreatePaymentsCreatePaymentsRequest, _super);
    function CreatePaymentsCreatePaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=BankAccountType;" }),
        __metadata("design:type", String)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "bankAccountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ChargeAmount;" }),
        __metadata("design:type", Number)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "chargeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Currency;" }),
        __metadata("design:type", String)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Description;" }),
        __metadata("design:type", String)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IdempotencyKey;" }),
        __metadata("design:type", String)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "idempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Input;" }),
        __metadata("design:type", String)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MinPostalCodeLength;" }),
        __metadata("design:type", Number)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "minPostalCodeLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter;" }),
        __metadata("design:type", Object)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "parameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PaymentConnector;" }),
        __metadata("design:type", String)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "paymentConnector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PaymentMethod;" }),
        __metadata("design:type", String)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "paymentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PostalCode;" }),
        __metadata("design:type", Boolean)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SecurityCode;" }),
        __metadata("design:type", Boolean)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "securityCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Timeout;" }),
        __metadata("design:type", Number)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TokenType;" }),
        __metadata("design:type", String)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "tokenType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ValidCardTypes;" }),
        __metadata("design:type", String)
    ], CreatePaymentsCreatePaymentsRequest.prototype, "validCardTypes", void 0);
    return CreatePaymentsCreatePaymentsRequest;
}(SpeakeasyBase));
export { CreatePaymentsCreatePaymentsRequest };
var CreatePaymentsSecurity = /** @class */ (function (_super) {
    __extends(CreatePaymentsSecurity, _super);
    function CreatePaymentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreatePaymentsSecurity.prototype, "accountSidAuthToken", void 0);
    return CreatePaymentsSecurity;
}(SpeakeasyBase));
export { CreatePaymentsSecurity };
var CreatePaymentsRequest = /** @class */ (function (_super) {
    __extends(CreatePaymentsRequest, _super);
    function CreatePaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePaymentsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePaymentsPathParams)
    ], CreatePaymentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreatePaymentsCreatePaymentsRequest)
    ], CreatePaymentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePaymentsSecurity)
    ], CreatePaymentsRequest.prototype, "security", void 0);
    return CreatePaymentsRequest;
}(SpeakeasyBase));
export { CreatePaymentsRequest };
var CreatePaymentsResponse = /** @class */ (function (_super) {
    __extends(CreatePaymentsResponse, _super);
    function CreatePaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePaymentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCallPayments)
    ], CreatePaymentsResponse.prototype, "apiV2010AccountCallPayments", void 0);
    return CreatePaymentsResponse;
}(SpeakeasyBase));
export { CreatePaymentsResponse };
