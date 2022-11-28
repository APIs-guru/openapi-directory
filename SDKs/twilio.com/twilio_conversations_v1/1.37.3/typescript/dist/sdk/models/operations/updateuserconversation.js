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
export var UpdateUserConversationServerList = [
    "https://conversations.twilio.com",
];
var UpdateUserConversationPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserConversationPathParams, _super);
    function UpdateUserConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], UpdateUserConversationPathParams.prototype, "conversationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], UpdateUserConversationPathParams.prototype, "userSid", void 0);
    return UpdateUserConversationPathParams;
}(SpeakeasyBase));
export { UpdateUserConversationPathParams };
var UpdateUserConversationUpdateUserConversationRequest = /** @class */ (function (_super) {
    __extends(UpdateUserConversationUpdateUserConversationRequest, _super);
    function UpdateUserConversationUpdateUserConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=LastReadMessageIndex;" }),
        __metadata("design:type", Number)
    ], UpdateUserConversationUpdateUserConversationRequest.prototype, "lastReadMessageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=LastReadTimestamp;" }),
        __metadata("design:type", Date)
    ], UpdateUserConversationUpdateUserConversationRequest.prototype, "lastReadTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=NotificationLevel;" }),
        __metadata("design:type", String)
    ], UpdateUserConversationUpdateUserConversationRequest.prototype, "notificationLevel", void 0);
    return UpdateUserConversationUpdateUserConversationRequest;
}(SpeakeasyBase));
export { UpdateUserConversationUpdateUserConversationRequest };
var UpdateUserConversationSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserConversationSecurity, _super);
    function UpdateUserConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUserConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUserConversationSecurity;
}(SpeakeasyBase));
export { UpdateUserConversationSecurity };
var UpdateUserConversationRequest = /** @class */ (function (_super) {
    __extends(UpdateUserConversationRequest, _super);
    function UpdateUserConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUserConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserConversationPathParams)
    ], UpdateUserConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUserConversationUpdateUserConversationRequest)
    ], UpdateUserConversationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserConversationSecurity)
    ], UpdateUserConversationRequest.prototype, "security", void 0);
    return UpdateUserConversationRequest;
}(SpeakeasyBase));
export { UpdateUserConversationRequest };
var UpdateUserConversationResponse = /** @class */ (function (_super) {
    __extends(UpdateUserConversationResponse, _super);
    function UpdateUserConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUserConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUserConversationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1UserUserConversation)
    ], UpdateUserConversationResponse.prototype, "conversationsV1UserUserConversation", void 0);
    return UpdateUserConversationResponse;
}(SpeakeasyBase));
export { UpdateUserConversationResponse };
