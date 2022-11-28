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
var PostMyConversationsConversationIdMessagesPathParams = /** @class */ (function (_super) {
    __extends(PostMyConversationsConversationIdMessagesPathParams, _super);
    function PostMyConversationsConversationIdMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" }),
        __metadata("design:type", String)
    ], PostMyConversationsConversationIdMessagesPathParams.prototype, "conversationId", void 0);
    return PostMyConversationsConversationIdMessagesPathParams;
}(SpeakeasyBase));
export { PostMyConversationsConversationIdMessagesPathParams };
var PostMyConversationsConversationIdMessagesRequestBody = /** @class */ (function (_super) {
    __extends(PostMyConversationsConversationIdMessagesRequestBody, _super);
    function PostMyConversationsConversationIdMessagesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PostMyConversationsConversationIdMessagesRequestBody.prototype, "body", void 0);
    return PostMyConversationsConversationIdMessagesRequestBody;
}(SpeakeasyBase));
export { PostMyConversationsConversationIdMessagesRequestBody };
var PostMyConversationsConversationIdMessagesSecurity = /** @class */ (function (_super) {
    __extends(PostMyConversationsConversationIdMessagesSecurity, _super);
    function PostMyConversationsConversationIdMessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostMyConversationsConversationIdMessagesSecurity.prototype, "oauth2", void 0);
    return PostMyConversationsConversationIdMessagesSecurity;
}(SpeakeasyBase));
export { PostMyConversationsConversationIdMessagesSecurity };
var PostMyConversationsConversationIdMessagesRequest = /** @class */ (function (_super) {
    __extends(PostMyConversationsConversationIdMessagesRequest, _super);
    function PostMyConversationsConversationIdMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyConversationsConversationIdMessagesPathParams)
    ], PostMyConversationsConversationIdMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostMyConversationsConversationIdMessagesRequestBody)
    ], PostMyConversationsConversationIdMessagesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyConversationsConversationIdMessagesSecurity)
    ], PostMyConversationsConversationIdMessagesRequest.prototype, "security", void 0);
    return PostMyConversationsConversationIdMessagesRequest;
}(SpeakeasyBase));
export { PostMyConversationsConversationIdMessagesRequest };
var PostMyConversationsConversationIdMessagesResponse = /** @class */ (function (_super) {
    __extends(PostMyConversationsConversationIdMessagesResponse, _super);
    function PostMyConversationsConversationIdMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMyConversationsConversationIdMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMyConversationsConversationIdMessagesResponse.prototype, "statusCode", void 0);
    return PostMyConversationsConversationIdMessagesResponse;
}(SpeakeasyBase));
export { PostMyConversationsConversationIdMessagesResponse };
