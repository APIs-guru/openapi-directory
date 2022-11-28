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
var ReplyToConversationPathParams = /** @class */ (function (_super) {
    __extends(ReplyToConversationPathParams, _super);
    function ReplyToConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" }),
        __metadata("design:type", String)
    ], ReplyToConversationPathParams.prototype, "conversationId", void 0);
    return ReplyToConversationPathParams;
}(SpeakeasyBase));
export { ReplyToConversationPathParams };
var ReplyToConversationRequestBody = /** @class */ (function (_super) {
    __extends(ReplyToConversationRequestBody, _super);
    function ReplyToConversationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=content" }),
        __metadata("design:type", String)
    ], ReplyToConversationRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], ReplyToConversationRequestBody.prototype, "devicePixelRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=photo_ids" }),
        __metadata("design:type", String)
    ], ReplyToConversationRequestBody.prototype, "photoIds", void 0);
    return ReplyToConversationRequestBody;
}(SpeakeasyBase));
export { ReplyToConversationRequestBody };
var ReplyToConversationRequest = /** @class */ (function (_super) {
    __extends(ReplyToConversationRequest, _super);
    function ReplyToConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplyToConversationPathParams)
    ], ReplyToConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ReplyToConversationRequestBody)
    ], ReplyToConversationRequest.prototype, "request", void 0);
    return ReplyToConversationRequest;
}(SpeakeasyBase));
export { ReplyToConversationRequest };
var ReplyToConversationResponse = /** @class */ (function (_super) {
    __extends(ReplyToConversationResponse, _super);
    function ReplyToConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplyToConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], ReplyToConversationResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplyToConversationResponse.prototype, "statusCode", void 0);
    return ReplyToConversationResponse;
}(SpeakeasyBase));
export { ReplyToConversationResponse };
