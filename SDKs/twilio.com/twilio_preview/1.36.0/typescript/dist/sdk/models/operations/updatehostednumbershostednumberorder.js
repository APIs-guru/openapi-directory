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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var UPDATEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateHostedNumbersHostedNumberOrderPathParams = /** @class */ (function (_super) {
    __extends(UpdateHostedNumbersHostedNumberOrderPathParams, _super);
    function UpdateHostedNumbersHostedNumberOrderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderPathParams.prototype, "sid", void 0);
    return UpdateHostedNumbersHostedNumberOrderPathParams;
}(SpeakeasyBase));
export { UpdateHostedNumbersHostedNumberOrderPathParams };
var UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest = /** @class */ (function (_super) {
    __extends(UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest, _super);
    function UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CallDelay;" }),
        __metadata("design:type", Number)
    ], UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest.prototype, "callDelay", void 0);
    __decorate([
        Metadata({ data: "form, name=CcEmails;" }),
        __metadata("design:type", Array)
    ], UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest.prototype, "ccEmails", void 0);
    __decorate([
        Metadata({ data: "form, name=Email;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "form, name=Extension;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest.prototype, "extension", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest.prototype, "uniqueName", void 0);
    __decorate([
        Metadata({ data: "form, name=VerificationCode;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest.prototype, "verificationCode", void 0);
    __decorate([
        Metadata({ data: "form, name=VerificationDocumentSid;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest.prototype, "verificationDocumentSid", void 0);
    __decorate([
        Metadata({ data: "form, name=VerificationType;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest.prototype, "verificationType", void 0);
    return UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest;
}(SpeakeasyBase));
export { UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest };
var UpdateHostedNumbersHostedNumberOrderSecurity = /** @class */ (function (_super) {
    __extends(UpdateHostedNumbersHostedNumberOrderSecurity, _super);
    function UpdateHostedNumbersHostedNumberOrderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateHostedNumbersHostedNumberOrderSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateHostedNumbersHostedNumberOrderSecurity;
}(SpeakeasyBase));
export { UpdateHostedNumbersHostedNumberOrderSecurity };
var UpdateHostedNumbersHostedNumberOrderRequest = /** @class */ (function (_super) {
    __extends(UpdateHostedNumbersHostedNumberOrderRequest, _super);
    function UpdateHostedNumbersHostedNumberOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateHostedNumbersHostedNumberOrderPathParams)
    ], UpdateHostedNumbersHostedNumberOrderRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest)
    ], UpdateHostedNumbersHostedNumberOrderRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateHostedNumbersHostedNumberOrderSecurity)
    ], UpdateHostedNumbersHostedNumberOrderRequest.prototype, "security", void 0);
    return UpdateHostedNumbersHostedNumberOrderRequest;
}(SpeakeasyBase));
export { UpdateHostedNumbersHostedNumberOrderRequest };
var UpdateHostedNumbersHostedNumberOrderResponse = /** @class */ (function (_super) {
    __extends(UpdateHostedNumbersHostedNumberOrderResponse, _super);
    function UpdateHostedNumbersHostedNumberOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateHostedNumbersHostedNumberOrderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateHostedNumbersHostedNumberOrderResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewHostedNumbersHostedNumberOrder)
    ], UpdateHostedNumbersHostedNumberOrderResponse.prototype, "previewHostedNumbersHostedNumberOrder", void 0);
    return UpdateHostedNumbersHostedNumberOrderResponse;
}(SpeakeasyBase));
export { UpdateHostedNumbersHostedNumberOrderResponse };
