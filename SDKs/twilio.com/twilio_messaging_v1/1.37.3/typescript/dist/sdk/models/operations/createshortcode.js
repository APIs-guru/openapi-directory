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
export var CreateShortCodeServerList = [
    "https://messaging.twilio.com",
];
var CreateShortCodePathParams = /** @class */ (function (_super) {
    __extends(CreateShortCodePathParams, _super);
    function CreateShortCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateShortCodePathParams.prototype, "serviceSid", void 0);
    return CreateShortCodePathParams;
}(SpeakeasyBase));
export { CreateShortCodePathParams };
var CreateShortCodeCreateShortCodeRequest = /** @class */ (function (_super) {
    __extends(CreateShortCodeCreateShortCodeRequest, _super);
    function CreateShortCodeCreateShortCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ShortCodeSid;" }),
        __metadata("design:type", String)
    ], CreateShortCodeCreateShortCodeRequest.prototype, "shortCodeSid", void 0);
    return CreateShortCodeCreateShortCodeRequest;
}(SpeakeasyBase));
export { CreateShortCodeCreateShortCodeRequest };
var CreateShortCodeSecurity = /** @class */ (function (_super) {
    __extends(CreateShortCodeSecurity, _super);
    function CreateShortCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateShortCodeSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateShortCodeSecurity;
}(SpeakeasyBase));
export { CreateShortCodeSecurity };
var CreateShortCodeRequest = /** @class */ (function (_super) {
    __extends(CreateShortCodeRequest, _super);
    function CreateShortCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateShortCodeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateShortCodePathParams)
    ], CreateShortCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateShortCodeCreateShortCodeRequest)
    ], CreateShortCodeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateShortCodeSecurity)
    ], CreateShortCodeRequest.prototype, "security", void 0);
    return CreateShortCodeRequest;
}(SpeakeasyBase));
export { CreateShortCodeRequest };
var CreateShortCodeResponse = /** @class */ (function (_super) {
    __extends(CreateShortCodeResponse, _super);
    function CreateShortCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateShortCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateShortCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessagingV1ServiceShortCode)
    ], CreateShortCodeResponse.prototype, "messagingV1ServiceShortCode", void 0);
    return CreateShortCodeResponse;
}(SpeakeasyBase));
export { CreateShortCodeResponse };
