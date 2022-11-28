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
var MarkConversationReadPathParams = /** @class */ (function (_super) {
    __extends(MarkConversationReadPathParams, _super);
    function MarkConversationReadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" }),
        __metadata("design:type", String)
    ], MarkConversationReadPathParams.prototype, "conversationId", void 0);
    return MarkConversationReadPathParams;
}(SpeakeasyBase));
export { MarkConversationReadPathParams };
var MarkConversationReadRequestBody = /** @class */ (function (_super) {
    __extends(MarkConversationReadRequestBody, _super);
    function MarkConversationReadRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=message_id" }),
        __metadata("design:type", String)
    ], MarkConversationReadRequestBody.prototype, "messageId", void 0);
    return MarkConversationReadRequestBody;
}(SpeakeasyBase));
export { MarkConversationReadRequestBody };
var MarkConversationReadRequest = /** @class */ (function (_super) {
    __extends(MarkConversationReadRequest, _super);
    function MarkConversationReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MarkConversationReadPathParams)
    ], MarkConversationReadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MarkConversationReadRequestBody)
    ], MarkConversationReadRequest.prototype, "request", void 0);
    return MarkConversationReadRequest;
}(SpeakeasyBase));
export { MarkConversationReadRequest };
var MarkConversationReadResponse = /** @class */ (function (_super) {
    __extends(MarkConversationReadResponse, _super);
    function MarkConversationReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MarkConversationReadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MarkConversationReadResponse.prototype, "statusCode", void 0);
    return MarkConversationReadResponse;
}(SpeakeasyBase));
export { MarkConversationReadResponse };
