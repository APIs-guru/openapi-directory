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
export var UPDATESERVICEUSERCONVERSATION_SERVERS = [
    "https://conversations.twilio.com",
];
var UpdateServiceUserConversationPathParams = /** @class */ (function (_super) {
    __extends(UpdateServiceUserConversationPathParams, _super);
    function UpdateServiceUserConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], UpdateServiceUserConversationPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], UpdateServiceUserConversationPathParams.prototype, "conversationSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], UpdateServiceUserConversationPathParams.prototype, "userSid", void 0);
    return UpdateServiceUserConversationPathParams;
}(SpeakeasyBase));
export { UpdateServiceUserConversationPathParams };
var UpdateServiceUserConversationUpdateServiceUserConversationRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceUserConversationUpdateServiceUserConversationRequest, _super);
    function UpdateServiceUserConversationUpdateServiceUserConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=LastReadMessageIndex;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUserConversationUpdateServiceUserConversationRequest.prototype, "lastReadMessageIndex", void 0);
    __decorate([
        Metadata({ data: "form, name=LastReadTimestamp;" }),
        __metadata("design:type", Date)
    ], UpdateServiceUserConversationUpdateServiceUserConversationRequest.prototype, "lastReadTimestamp", void 0);
    __decorate([
        Metadata({ data: "form, name=NotificationLevel;" }),
        __metadata("design:type", String)
    ], UpdateServiceUserConversationUpdateServiceUserConversationRequest.prototype, "notificationLevel", void 0);
    return UpdateServiceUserConversationUpdateServiceUserConversationRequest;
}(SpeakeasyBase));
export { UpdateServiceUserConversationUpdateServiceUserConversationRequest };
var UpdateServiceUserConversationSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceUserConversationSecurity, _super);
    function UpdateServiceUserConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceUserConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceUserConversationSecurity;
}(SpeakeasyBase));
export { UpdateServiceUserConversationSecurity };
var UpdateServiceUserConversationRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceUserConversationRequest, _super);
    function UpdateServiceUserConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceUserConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceUserConversationPathParams)
    ], UpdateServiceUserConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceUserConversationUpdateServiceUserConversationRequest)
    ], UpdateServiceUserConversationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceUserConversationSecurity)
    ], UpdateServiceUserConversationRequest.prototype, "security", void 0);
    return UpdateServiceUserConversationRequest;
}(SpeakeasyBase));
export { UpdateServiceUserConversationRequest };
var UpdateServiceUserConversationResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceUserConversationResponse, _super);
    function UpdateServiceUserConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceUserConversationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateServiceUserConversationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceUserServiceUserConversation)
    ], UpdateServiceUserConversationResponse.prototype, "conversationsV1ServiceServiceUserServiceUserConversation", void 0);
    return UpdateServiceUserConversationResponse;
}(SpeakeasyBase));
export { UpdateServiceUserConversationResponse };
