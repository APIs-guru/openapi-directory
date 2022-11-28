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
export var CreateUserDefinedMessageServerList = [
    "https://api.twilio.com",
];
var CreateUserDefinedMessagePathParams = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessagePathParams, _super);
    function CreateUserDefinedMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessagePathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessagePathParams.prototype, "callSid", void 0);
    return CreateUserDefinedMessagePathParams;
}(SpeakeasyBase));
export { CreateUserDefinedMessagePathParams };
var CreateUserDefinedMessageCreateUserDefinedMessageRequest = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageCreateUserDefinedMessageRequest, _super);
    function CreateUserDefinedMessageCreateUserDefinedMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Content;" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageCreateUserDefinedMessageRequest.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IdempotencyKey;" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageCreateUserDefinedMessageRequest.prototype, "idempotencyKey", void 0);
    return CreateUserDefinedMessageCreateUserDefinedMessageRequest;
}(SpeakeasyBase));
export { CreateUserDefinedMessageCreateUserDefinedMessageRequest };
var CreateUserDefinedMessageSecurity = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSecurity, _super);
    function CreateUserDefinedMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUserDefinedMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUserDefinedMessageSecurity;
}(SpeakeasyBase));
export { CreateUserDefinedMessageSecurity };
var CreateUserDefinedMessageRequest = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageRequest, _super);
    function CreateUserDefinedMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUserDefinedMessagePathParams)
    ], CreateUserDefinedMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUserDefinedMessageCreateUserDefinedMessageRequest)
    ], CreateUserDefinedMessageRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUserDefinedMessageSecurity)
    ], CreateUserDefinedMessageRequest.prototype, "security", void 0);
    return CreateUserDefinedMessageRequest;
}(SpeakeasyBase));
export { CreateUserDefinedMessageRequest };
var CreateUserDefinedMessageResponse = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageResponse, _super);
    function CreateUserDefinedMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateUserDefinedMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCallUserDefinedMessage)
    ], CreateUserDefinedMessageResponse.prototype, "apiV2010AccountCallUserDefinedMessage", void 0);
    return CreateUserDefinedMessageResponse;
}(SpeakeasyBase));
export { CreateUserDefinedMessageResponse };
