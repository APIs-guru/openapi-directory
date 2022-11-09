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
export var UPDATEPHONENUMBER_SERVERS = [
    "https://routes.twilio.com",
];
var UpdatePhoneNumberPathParams = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberPathParams, _super);
    function UpdatePhoneNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PhoneNumber" }),
        __metadata("design:type", String)
    ], UpdatePhoneNumberPathParams.prototype, "phoneNumber", void 0);
    return UpdatePhoneNumberPathParams;
}(SpeakeasyBase));
export { UpdatePhoneNumberPathParams };
var UpdatePhoneNumberUpdatePhoneNumberRequest = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberUpdatePhoneNumberRequest, _super);
    function UpdatePhoneNumberUpdatePhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdatePhoneNumberUpdatePhoneNumberRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=VoiceRegion;" }),
        __metadata("design:type", String)
    ], UpdatePhoneNumberUpdatePhoneNumberRequest.prototype, "voiceRegion", void 0);
    return UpdatePhoneNumberUpdatePhoneNumberRequest;
}(SpeakeasyBase));
export { UpdatePhoneNumberUpdatePhoneNumberRequest };
var UpdatePhoneNumberSecurity = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberSecurity, _super);
    function UpdatePhoneNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdatePhoneNumberSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdatePhoneNumberSecurity;
}(SpeakeasyBase));
export { UpdatePhoneNumberSecurity };
var UpdatePhoneNumberRequest = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberRequest, _super);
    function UpdatePhoneNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdatePhoneNumberRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdatePhoneNumberPathParams)
    ], UpdatePhoneNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdatePhoneNumberUpdatePhoneNumberRequest)
    ], UpdatePhoneNumberRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdatePhoneNumberSecurity)
    ], UpdatePhoneNumberRequest.prototype, "security", void 0);
    return UpdatePhoneNumberRequest;
}(SpeakeasyBase));
export { UpdatePhoneNumberRequest };
var UpdatePhoneNumberResponse = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberResponse, _super);
    function UpdatePhoneNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdatePhoneNumberResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdatePhoneNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RoutesV2PhoneNumber)
    ], UpdatePhoneNumberResponse.prototype, "routesV2PhoneNumber", void 0);
    return UpdatePhoneNumberResponse;
}(SpeakeasyBase));
export { UpdatePhoneNumberResponse };
