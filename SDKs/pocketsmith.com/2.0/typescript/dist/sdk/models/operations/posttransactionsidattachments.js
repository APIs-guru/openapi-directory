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
var PostTransactionsIdAttachmentsPathParams = /** @class */ (function (_super) {
    __extends(PostTransactionsIdAttachmentsPathParams, _super);
    function PostTransactionsIdAttachmentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostTransactionsIdAttachmentsPathParams.prototype, "id", void 0);
    return PostTransactionsIdAttachmentsPathParams;
}(SpeakeasyBase));
export { PostTransactionsIdAttachmentsPathParams };
var PostTransactionsIdAttachmentsRequestBody = /** @class */ (function (_super) {
    __extends(PostTransactionsIdAttachmentsRequestBody, _super);
    function PostTransactionsIdAttachmentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachment_id" }),
        __metadata("design:type", Number)
    ], PostTransactionsIdAttachmentsRequestBody.prototype, "attachmentId", void 0);
    return PostTransactionsIdAttachmentsRequestBody;
}(SpeakeasyBase));
export { PostTransactionsIdAttachmentsRequestBody };
var PostTransactionsIdAttachmentsRequest = /** @class */ (function (_super) {
    __extends(PostTransactionsIdAttachmentsRequest, _super);
    function PostTransactionsIdAttachmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTransactionsIdAttachmentsPathParams)
    ], PostTransactionsIdAttachmentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTransactionsIdAttachmentsRequestBody)
    ], PostTransactionsIdAttachmentsRequest.prototype, "request", void 0);
    return PostTransactionsIdAttachmentsRequest;
}(SpeakeasyBase));
export { PostTransactionsIdAttachmentsRequest };
var PostTransactionsIdAttachmentsResponse = /** @class */ (function (_super) {
    __extends(PostTransactionsIdAttachmentsResponse, _super);
    function PostTransactionsIdAttachmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Attachment)
    ], PostTransactionsIdAttachmentsResponse.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTransactionsIdAttachmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostTransactionsIdAttachmentsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTransactionsIdAttachmentsResponse.prototype, "statusCode", void 0);
    return PostTransactionsIdAttachmentsResponse;
}(SpeakeasyBase));
export { PostTransactionsIdAttachmentsResponse };
