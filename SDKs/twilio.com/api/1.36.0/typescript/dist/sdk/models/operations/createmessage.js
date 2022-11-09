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
export var CREATEMESSAGE_SERVERS = [
    "https://api.twilio.com",
];
var CreateMessagePathParams = /** @class */ (function (_super) {
    __extends(CreateMessagePathParams, _super);
    function CreateMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateMessagePathParams.prototype, "accountSid", void 0);
    return CreateMessagePathParams;
}(SpeakeasyBase));
export { CreateMessagePathParams };
var CreateMessageCreateMessageRequest = /** @class */ (function (_super) {
    __extends(CreateMessageCreateMessageRequest, _super);
    function CreateMessageCreateMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AddressRetention;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "addressRetention", void 0);
    __decorate([
        Metadata({ data: "form, name=ApplicationSid;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "applicationSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Attempt;" }),
        __metadata("design:type", Number)
    ], CreateMessageCreateMessageRequest.prototype, "attempt", void 0);
    __decorate([
        Metadata({ data: "form, name=Body;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "body", void 0);
    __decorate([
        Metadata({ data: "form, name=ContentRetention;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "contentRetention", void 0);
    __decorate([
        Metadata({ data: "form, name=ForceDelivery;" }),
        __metadata("design:type", Boolean)
    ], CreateMessageCreateMessageRequest.prototype, "forceDelivery", void 0);
    __decorate([
        Metadata({ data: "form, name=From;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "form, name=MaxPrice;" }),
        __metadata("design:type", Number)
    ], CreateMessageCreateMessageRequest.prototype, "maxPrice", void 0);
    __decorate([
        Metadata({ data: "form, name=MediaUrl;" }),
        __metadata("design:type", Array)
    ], CreateMessageCreateMessageRequest.prototype, "mediaUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=MessagingServiceSid;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "messagingServiceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=PersistentAction;" }),
        __metadata("design:type", Array)
    ], CreateMessageCreateMessageRequest.prototype, "persistentAction", void 0);
    __decorate([
        Metadata({ data: "form, name=ProvideFeedback;" }),
        __metadata("design:type", Boolean)
    ], CreateMessageCreateMessageRequest.prototype, "provideFeedback", void 0);
    __decorate([
        Metadata({ data: "form, name=ScheduleType;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "scheduleType", void 0);
    __decorate([
        Metadata({ data: "form, name=SendAsMms;" }),
        __metadata("design:type", Boolean)
    ], CreateMessageCreateMessageRequest.prototype, "sendAsMms", void 0);
    __decorate([
        Metadata({ data: "form, name=SendAt;" }),
        __metadata("design:type", Date)
    ], CreateMessageCreateMessageRequest.prototype, "sendAt", void 0);
    __decorate([
        Metadata({ data: "form, name=SmartEncoded;" }),
        __metadata("design:type", Boolean)
    ], CreateMessageCreateMessageRequest.prototype, "smartEncoded", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=To;" }),
        __metadata("design:type", String)
    ], CreateMessageCreateMessageRequest.prototype, "to", void 0);
    __decorate([
        Metadata({ data: "form, name=ValidityPeriod;" }),
        __metadata("design:type", Number)
    ], CreateMessageCreateMessageRequest.prototype, "validityPeriod", void 0);
    return CreateMessageCreateMessageRequest;
}(SpeakeasyBase));
export { CreateMessageCreateMessageRequest };
var CreateMessageSecurity = /** @class */ (function (_super) {
    __extends(CreateMessageSecurity, _super);
    function CreateMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateMessageSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateMessageSecurity;
}(SpeakeasyBase));
export { CreateMessageSecurity };
var CreateMessageRequest = /** @class */ (function (_super) {
    __extends(CreateMessageRequest, _super);
    function CreateMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateMessageRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateMessagePathParams)
    ], CreateMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateMessageCreateMessageRequest)
    ], CreateMessageRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateMessageSecurity)
    ], CreateMessageRequest.prototype, "security", void 0);
    return CreateMessageRequest;
}(SpeakeasyBase));
export { CreateMessageRequest };
var CreateMessageResponse = /** @class */ (function (_super) {
    __extends(CreateMessageResponse, _super);
    function CreateMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateMessageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountMessage)
    ], CreateMessageResponse.prototype, "apiV2010AccountMessage", void 0);
    return CreateMessageResponse;
}(SpeakeasyBase));
export { CreateMessageResponse };
