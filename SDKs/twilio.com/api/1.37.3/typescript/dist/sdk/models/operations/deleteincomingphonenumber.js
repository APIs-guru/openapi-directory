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
export var DeleteIncomingPhoneNumberServerList = [
    "https://api.twilio.com",
];
var DeleteIncomingPhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(DeleteIncomingPhoneNumberPathParams, _super);
    function DeleteIncomingPhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], DeleteIncomingPhoneNumberPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteIncomingPhoneNumberPathParams.prototype, "sid", void 0);
    return DeleteIncomingPhoneNumberPathParams;
}(SpeakeasyBase));
export { DeleteIncomingPhoneNumberPathParams };
var DeleteIncomingPhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(DeleteIncomingPhoneNumberSecurity, _super);
    function DeleteIncomingPhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteIncomingPhoneNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteIncomingPhoneNumberSecurity;
}(SpeakeasyBase));
export { DeleteIncomingPhoneNumberSecurity };
var DeleteIncomingPhoneNumberRequest = /** @class */ (function (_super) {
    __extends(DeleteIncomingPhoneNumberRequest, _super);
    function DeleteIncomingPhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteIncomingPhoneNumberRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteIncomingPhoneNumberPathParams)
    ], DeleteIncomingPhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteIncomingPhoneNumberSecurity)
    ], DeleteIncomingPhoneNumberRequest.prototype, "security", void 0);
    return DeleteIncomingPhoneNumberRequest;
}(SpeakeasyBase));
export { DeleteIncomingPhoneNumberRequest };
var DeleteIncomingPhoneNumberResponse = /** @class */ (function (_super) {
    __extends(DeleteIncomingPhoneNumberResponse, _super);
    function DeleteIncomingPhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteIncomingPhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteIncomingPhoneNumberResponse.prototype, "statusCode", void 0);
    return DeleteIncomingPhoneNumberResponse;
}(SpeakeasyBase));
export { DeleteIncomingPhoneNumberResponse };
