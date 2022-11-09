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
export var DELETESERVICEUSERCONVERSATION_SERVERS = [
    "https://conversations.twilio.com",
];
var DeleteServiceUserConversationPathParams = /** @class */ (function (_super) {
    __extends(DeleteServiceUserConversationPathParams, _super);
    function DeleteServiceUserConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], DeleteServiceUserConversationPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], DeleteServiceUserConversationPathParams.prototype, "conversationSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], DeleteServiceUserConversationPathParams.prototype, "userSid", void 0);
    return DeleteServiceUserConversationPathParams;
}(SpeakeasyBase));
export { DeleteServiceUserConversationPathParams };
var DeleteServiceUserConversationSecurity = /** @class */ (function (_super) {
    __extends(DeleteServiceUserConversationSecurity, _super);
    function DeleteServiceUserConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteServiceUserConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteServiceUserConversationSecurity;
}(SpeakeasyBase));
export { DeleteServiceUserConversationSecurity };
var DeleteServiceUserConversationRequest = /** @class */ (function (_super) {
    __extends(DeleteServiceUserConversationRequest, _super);
    function DeleteServiceUserConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteServiceUserConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteServiceUserConversationPathParams)
    ], DeleteServiceUserConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteServiceUserConversationSecurity)
    ], DeleteServiceUserConversationRequest.prototype, "security", void 0);
    return DeleteServiceUserConversationRequest;
}(SpeakeasyBase));
export { DeleteServiceUserConversationRequest };
var DeleteServiceUserConversationResponse = /** @class */ (function (_super) {
    __extends(DeleteServiceUserConversationResponse, _super);
    function DeleteServiceUserConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteServiceUserConversationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteServiceUserConversationResponse.prototype, "statusCode", void 0);
    return DeleteServiceUserConversationResponse;
}(SpeakeasyBase));
export { DeleteServiceUserConversationResponse };
