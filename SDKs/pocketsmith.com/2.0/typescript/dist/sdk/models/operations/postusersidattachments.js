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
var PostUsersIdAttachmentsPathParams = /** @class */ (function (_super) {
    __extends(PostUsersIdAttachmentsPathParams, _super);
    function PostUsersIdAttachmentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostUsersIdAttachmentsPathParams.prototype, "id", void 0);
    return PostUsersIdAttachmentsPathParams;
}(SpeakeasyBase));
export { PostUsersIdAttachmentsPathParams };
var PostUsersIdAttachmentsRequestBody = /** @class */ (function (_super) {
    __extends(PostUsersIdAttachmentsRequestBody, _super);
    function PostUsersIdAttachmentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_data" }),
        __metadata("design:type", String)
    ], PostUsersIdAttachmentsRequestBody.prototype, "fileData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_name" }),
        __metadata("design:type", String)
    ], PostUsersIdAttachmentsRequestBody.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostUsersIdAttachmentsRequestBody.prototype, "title", void 0);
    return PostUsersIdAttachmentsRequestBody;
}(SpeakeasyBase));
export { PostUsersIdAttachmentsRequestBody };
var PostUsersIdAttachmentsRequest = /** @class */ (function (_super) {
    __extends(PostUsersIdAttachmentsRequest, _super);
    function PostUsersIdAttachmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersIdAttachmentsPathParams)
    ], PostUsersIdAttachmentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostUsersIdAttachmentsRequestBody)
    ], PostUsersIdAttachmentsRequest.prototype, "request", void 0);
    return PostUsersIdAttachmentsRequest;
}(SpeakeasyBase));
export { PostUsersIdAttachmentsRequest };
var PostUsersIdAttachmentsResponse = /** @class */ (function (_super) {
    __extends(PostUsersIdAttachmentsResponse, _super);
    function PostUsersIdAttachmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Attachment)
    ], PostUsersIdAttachmentsResponse.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersIdAttachmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostUsersIdAttachmentsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersIdAttachmentsResponse.prototype, "statusCode", void 0);
    return PostUsersIdAttachmentsResponse;
}(SpeakeasyBase));
export { PostUsersIdAttachmentsResponse };
