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
export var DELETEUSERCONVERSATION_SERVERS = [
    "https://conversations.twilio.com",
];
var DeleteUserConversationPathParams = /** @class */ (function (_super) {
    __extends(DeleteUserConversationPathParams, _super);
    function DeleteUserConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" }),
        __metadata("design:type", String)
    ], DeleteUserConversationPathParams.prototype, "conversationSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], DeleteUserConversationPathParams.prototype, "userSid", void 0);
    return DeleteUserConversationPathParams;
}(SpeakeasyBase));
export { DeleteUserConversationPathParams };
var DeleteUserConversationSecurity = /** @class */ (function (_super) {
    __extends(DeleteUserConversationSecurity, _super);
    function DeleteUserConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteUserConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteUserConversationSecurity;
}(SpeakeasyBase));
export { DeleteUserConversationSecurity };
var DeleteUserConversationRequest = /** @class */ (function (_super) {
    __extends(DeleteUserConversationRequest, _super);
    function DeleteUserConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteUserConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteUserConversationPathParams)
    ], DeleteUserConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteUserConversationSecurity)
    ], DeleteUserConversationRequest.prototype, "security", void 0);
    return DeleteUserConversationRequest;
}(SpeakeasyBase));
export { DeleteUserConversationRequest };
var DeleteUserConversationResponse = /** @class */ (function (_super) {
    __extends(DeleteUserConversationResponse, _super);
    function DeleteUserConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteUserConversationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteUserConversationResponse.prototype, "statusCode", void 0);
    return DeleteUserConversationResponse;
}(SpeakeasyBase));
export { DeleteUserConversationResponse };
