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
export var FetchUserConversationServerList = [
    "https://conversations.twilio.com",
];
var FetchUserConversationPathParams = /** @class */ (function (_super) {
    __extends(FetchUserConversationPathParams, _super);
    function FetchUserConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], FetchUserConversationPathParams.prototype, "conversationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], FetchUserConversationPathParams.prototype, "userSid", void 0);
    return FetchUserConversationPathParams;
}(SpeakeasyBase));
export { FetchUserConversationPathParams };
var FetchUserConversationSecurity = /** @class */ (function (_super) {
    __extends(FetchUserConversationSecurity, _super);
    function FetchUserConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUserConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUserConversationSecurity;
}(SpeakeasyBase));
export { FetchUserConversationSecurity };
var FetchUserConversationRequest = /** @class */ (function (_super) {
    __extends(FetchUserConversationRequest, _super);
    function FetchUserConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUserConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUserConversationPathParams)
    ], FetchUserConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUserConversationSecurity)
    ], FetchUserConversationRequest.prototype, "security", void 0);
    return FetchUserConversationRequest;
}(SpeakeasyBase));
export { FetchUserConversationRequest };
var FetchUserConversationResponse = /** @class */ (function (_super) {
    __extends(FetchUserConversationResponse, _super);
    function FetchUserConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUserConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchUserConversationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1UserUserConversation)
    ], FetchUserConversationResponse.prototype, "conversationsV1UserUserConversation", void 0);
    return FetchUserConversationResponse;
}(SpeakeasyBase));
export { FetchUserConversationResponse };
