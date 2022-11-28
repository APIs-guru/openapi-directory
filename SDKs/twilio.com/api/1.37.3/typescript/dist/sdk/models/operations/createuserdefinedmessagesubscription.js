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
export var CreateUserDefinedMessageSubscriptionServerList = [
    "https://api.twilio.com",
];
var CreateUserDefinedMessageSubscriptionPathParams = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSubscriptionPathParams, _super);
    function CreateUserDefinedMessageSubscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionPathParams.prototype, "callSid", void 0);
    return CreateUserDefinedMessageSubscriptionPathParams;
}(SpeakeasyBase));
export { CreateUserDefinedMessageSubscriptionPathParams };
export var CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum;
(function (CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum) {
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Head"] = "HEAD";
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Get"] = "GET";
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Post"] = "POST";
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Patch"] = "PATCH";
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Put"] = "PUT";
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Delete"] = "DELETE";
})(CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum || (CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = {}));
var CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest, _super);
    function CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Callback;" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IdempotencyKey;" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest.prototype, "idempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Method;" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest.prototype, "method", void 0);
    return CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest;
}(SpeakeasyBase));
export { CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest };
var CreateUserDefinedMessageSubscriptionSecurity = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSubscriptionSecurity, _super);
    function CreateUserDefinedMessageSubscriptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUserDefinedMessageSubscriptionSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUserDefinedMessageSubscriptionSecurity;
}(SpeakeasyBase));
export { CreateUserDefinedMessageSubscriptionSecurity };
var CreateUserDefinedMessageSubscriptionRequest = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSubscriptionRequest, _super);
    function CreateUserDefinedMessageSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUserDefinedMessageSubscriptionPathParams)
    ], CreateUserDefinedMessageSubscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest)
    ], CreateUserDefinedMessageSubscriptionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUserDefinedMessageSubscriptionSecurity)
    ], CreateUserDefinedMessageSubscriptionRequest.prototype, "security", void 0);
    return CreateUserDefinedMessageSubscriptionRequest;
}(SpeakeasyBase));
export { CreateUserDefinedMessageSubscriptionRequest };
var CreateUserDefinedMessageSubscriptionResponse = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSubscriptionResponse, _super);
    function CreateUserDefinedMessageSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateUserDefinedMessageSubscriptionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCallUserDefinedMessageSubscription)
    ], CreateUserDefinedMessageSubscriptionResponse.prototype, "apiV2010AccountCallUserDefinedMessageSubscription", void 0);
    return CreateUserDefinedMessageSubscriptionResponse;
}(SpeakeasyBase));
export { CreateUserDefinedMessageSubscriptionResponse };
