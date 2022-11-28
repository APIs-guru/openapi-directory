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
export var UpdatePaymentsServerList = [
    "https://api.twilio.com",
];
var UpdatePaymentsPathParams = /** @class */ (function (_super) {
    __extends(UpdatePaymentsPathParams, _super);
    function UpdatePaymentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdatePaymentsPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], UpdatePaymentsPathParams.prototype, "callSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdatePaymentsPathParams.prototype, "sid", void 0);
    return UpdatePaymentsPathParams;
}(SpeakeasyBase));
export { UpdatePaymentsPathParams };
var UpdatePaymentsUpdatePaymentsRequest = /** @class */ (function (_super) {
    __extends(UpdatePaymentsUpdatePaymentsRequest, _super);
    function UpdatePaymentsUpdatePaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Capture;" }),
        __metadata("design:type", String)
    ], UpdatePaymentsUpdatePaymentsRequest.prototype, "capture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IdempotencyKey;" }),
        __metadata("design:type", String)
    ], UpdatePaymentsUpdatePaymentsRequest.prototype, "idempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdatePaymentsUpdatePaymentsRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], UpdatePaymentsUpdatePaymentsRequest.prototype, "statusCallback", void 0);
    return UpdatePaymentsUpdatePaymentsRequest;
}(SpeakeasyBase));
export { UpdatePaymentsUpdatePaymentsRequest };
var UpdatePaymentsSecurity = /** @class */ (function (_super) {
    __extends(UpdatePaymentsSecurity, _super);
    function UpdatePaymentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdatePaymentsSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdatePaymentsSecurity;
}(SpeakeasyBase));
export { UpdatePaymentsSecurity };
var UpdatePaymentsRequest = /** @class */ (function (_super) {
    __extends(UpdatePaymentsRequest, _super);
    function UpdatePaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePaymentsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentsPathParams)
    ], UpdatePaymentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdatePaymentsUpdatePaymentsRequest)
    ], UpdatePaymentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePaymentsSecurity)
    ], UpdatePaymentsRequest.prototype, "security", void 0);
    return UpdatePaymentsRequest;
}(SpeakeasyBase));
export { UpdatePaymentsRequest };
var UpdatePaymentsResponse = /** @class */ (function (_super) {
    __extends(UpdatePaymentsResponse, _super);
    function UpdatePaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePaymentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCallPayments)
    ], UpdatePaymentsResponse.prototype, "apiV2010AccountCallPayments", void 0);
    return UpdatePaymentsResponse;
}(SpeakeasyBase));
export { UpdatePaymentsResponse };
