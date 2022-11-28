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
var PostMyConversationsRequestBody = /** @class */ (function (_super) {
    __extends(PostMyConversationsRequestBody, _super);
    function PostMyConversationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PostMyConversationsRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudinary_photos" }),
        __metadata("design:type", Array)
    ], PostMyConversationsRequestBody.prototype, "cloudinaryPhotos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listing_id" }),
        __metadata("design:type", Number)
    ], PostMyConversationsRequestBody.prototype, "listingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_id" }),
        __metadata("design:type", Number)
    ], PostMyConversationsRequestBody.prototype, "recipientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient_uuid" }),
        __metadata("design:type", String)
    ], PostMyConversationsRequestBody.prototype, "recipientUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shop_id" }),
        __metadata("design:type", String)
    ], PostMyConversationsRequestBody.prototype, "shopId", void 0);
    return PostMyConversationsRequestBody;
}(SpeakeasyBase));
export { PostMyConversationsRequestBody };
var PostMyConversationsSecurity = /** @class */ (function (_super) {
    __extends(PostMyConversationsSecurity, _super);
    function PostMyConversationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostMyConversationsSecurity.prototype, "oauth2", void 0);
    return PostMyConversationsSecurity;
}(SpeakeasyBase));
export { PostMyConversationsSecurity };
var PostMyConversationsRequest = /** @class */ (function (_super) {
    __extends(PostMyConversationsRequest, _super);
    function PostMyConversationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostMyConversationsRequestBody)
    ], PostMyConversationsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMyConversationsSecurity)
    ], PostMyConversationsRequest.prototype, "security", void 0);
    return PostMyConversationsRequest;
}(SpeakeasyBase));
export { PostMyConversationsRequest };
var PostMyConversationsResponse = /** @class */ (function (_super) {
    __extends(PostMyConversationsResponse, _super);
    function PostMyConversationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMyConversationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMyConversationsResponse.prototype, "statusCode", void 0);
    return PostMyConversationsResponse;
}(SpeakeasyBase));
export { PostMyConversationsResponse };
