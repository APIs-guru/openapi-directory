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
export var DELETECONVERSATION_SERVERS = [
    "https://conversations.twilio.com",
];
var DeleteConversationPathParams = /** @class */ (function (_super) {
    __extends(DeleteConversationPathParams, _super);
    function DeleteConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteConversationPathParams.prototype, "sid", void 0);
    return DeleteConversationPathParams;
}(SpeakeasyBase));
export { DeleteConversationPathParams };
var DeleteConversationHeaders = /** @class */ (function (_super) {
    __extends(DeleteConversationHeaders, _super);
    function DeleteConversationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" }),
        __metadata("design:type", String)
    ], DeleteConversationHeaders.prototype, "xTwilioWebhookEnabled", void 0);
    return DeleteConversationHeaders;
}(SpeakeasyBase));
export { DeleteConversationHeaders };
var DeleteConversationSecurity = /** @class */ (function (_super) {
    __extends(DeleteConversationSecurity, _super);
    function DeleteConversationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteConversationSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteConversationSecurity;
}(SpeakeasyBase));
export { DeleteConversationSecurity };
var DeleteConversationRequest = /** @class */ (function (_super) {
    __extends(DeleteConversationRequest, _super);
    function DeleteConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteConversationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteConversationPathParams)
    ], DeleteConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteConversationHeaders)
    ], DeleteConversationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteConversationSecurity)
    ], DeleteConversationRequest.prototype, "security", void 0);
    return DeleteConversationRequest;
}(SpeakeasyBase));
export { DeleteConversationRequest };
var DeleteConversationResponse = /** @class */ (function (_super) {
    __extends(DeleteConversationResponse, _super);
    function DeleteConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteConversationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteConversationResponse.prototype, "statusCode", void 0);
    return DeleteConversationResponse;
}(SpeakeasyBase));
export { DeleteConversationResponse };
