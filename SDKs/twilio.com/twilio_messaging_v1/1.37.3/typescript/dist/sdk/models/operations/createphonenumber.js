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
export var CreatePhoneNumberServerList = [
    "https://messaging.twilio.com",
];
var CreatePhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(CreatePhoneNumberPathParams, _super);
    function CreatePhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreatePhoneNumberPathParams.prototype, "serviceSid", void 0);
    return CreatePhoneNumberPathParams;
}(SpeakeasyBase));
export { CreatePhoneNumberPathParams };
var CreatePhoneNumberCreatePhoneNumberRequest = /** @class */ (function (_super) {
    __extends(CreatePhoneNumberCreatePhoneNumberRequest, _super);
    function CreatePhoneNumberCreatePhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PhoneNumberSid;" }),
        __metadata("design:type", String)
    ], CreatePhoneNumberCreatePhoneNumberRequest.prototype, "phoneNumberSid", void 0);
    return CreatePhoneNumberCreatePhoneNumberRequest;
}(SpeakeasyBase));
export { CreatePhoneNumberCreatePhoneNumberRequest };
var CreatePhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(CreatePhoneNumberSecurity, _super);
    function CreatePhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreatePhoneNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return CreatePhoneNumberSecurity;
}(SpeakeasyBase));
export { CreatePhoneNumberSecurity };
var CreatePhoneNumberRequest = /** @class */ (function (_super) {
    __extends(CreatePhoneNumberRequest, _super);
    function CreatePhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePhoneNumberRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePhoneNumberPathParams)
    ], CreatePhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreatePhoneNumberCreatePhoneNumberRequest)
    ], CreatePhoneNumberRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePhoneNumberSecurity)
    ], CreatePhoneNumberRequest.prototype, "security", void 0);
    return CreatePhoneNumberRequest;
}(SpeakeasyBase));
export { CreatePhoneNumberRequest };
var CreatePhoneNumberResponse = /** @class */ (function (_super) {
    __extends(CreatePhoneNumberResponse, _super);
    function CreatePhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePhoneNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessagingV1ServicePhoneNumber)
    ], CreatePhoneNumberResponse.prototype, "messagingV1ServicePhoneNumber", void 0);
    return CreatePhoneNumberResponse;
}(SpeakeasyBase));
export { CreatePhoneNumberResponse };
