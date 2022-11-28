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
export var FetchServiceConversationParticipantServerList = [
    "https://conversations.twilio.com",
];
var FetchServiceConversationParticipantPathParams = /** @class */ (function (_super) {
    __extends(FetchServiceConversationParticipantPathParams, _super);
    function FetchServiceConversationParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], FetchServiceConversationParticipantPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], FetchServiceConversationParticipantPathParams.prototype, "conversationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchServiceConversationParticipantPathParams.prototype, "sid", void 0);
    return FetchServiceConversationParticipantPathParams;
}(SpeakeasyBase));
export { FetchServiceConversationParticipantPathParams };
var FetchServiceConversationParticipantSecurity = /** @class */ (function (_super) {
    __extends(FetchServiceConversationParticipantSecurity, _super);
    function FetchServiceConversationParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchServiceConversationParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchServiceConversationParticipantSecurity;
}(SpeakeasyBase));
export { FetchServiceConversationParticipantSecurity };
var FetchServiceConversationParticipantRequest = /** @class */ (function (_super) {
    __extends(FetchServiceConversationParticipantRequest, _super);
    function FetchServiceConversationParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchServiceConversationParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchServiceConversationParticipantPathParams)
    ], FetchServiceConversationParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchServiceConversationParticipantSecurity)
    ], FetchServiceConversationParticipantRequest.prototype, "security", void 0);
    return FetchServiceConversationParticipantRequest;
}(SpeakeasyBase));
export { FetchServiceConversationParticipantRequest };
var FetchServiceConversationParticipantResponse = /** @class */ (function (_super) {
    __extends(FetchServiceConversationParticipantResponse, _super);
    function FetchServiceConversationParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchServiceConversationParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchServiceConversationParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant)
    ], FetchServiceConversationParticipantResponse.prototype, "conversationsV1ServiceServiceConversationServiceConversationParticipant", void 0);
    return FetchServiceConversationParticipantResponse;
}(SpeakeasyBase));
export { FetchServiceConversationParticipantResponse };
