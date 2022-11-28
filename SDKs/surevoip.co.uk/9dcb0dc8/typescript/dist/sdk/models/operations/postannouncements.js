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
var PostAnnouncementsRequestBody = /** @class */ (function (_super) {
    __extends(PostAnnouncementsRequestBody, _super);
    function PostAnnouncementsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], PostAnnouncementsRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], PostAnnouncementsRequestBody.prototype, "file", void 0);
    return PostAnnouncementsRequestBody;
}(SpeakeasyBase));
export { PostAnnouncementsRequestBody };
var PostAnnouncements201ApplicationJsonAnnouncementUrl = /** @class */ (function (_super) {
    __extends(PostAnnouncements201ApplicationJsonAnnouncementUrl, _super);
    function PostAnnouncements201ApplicationJsonAnnouncementUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncementUrl.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncementUrl.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncementUrl.prototype, "title", void 0);
    return PostAnnouncements201ApplicationJsonAnnouncementUrl;
}(SpeakeasyBase));
export { PostAnnouncements201ApplicationJsonAnnouncementUrl };
var PostAnnouncements201ApplicationJsonAnnouncement = /** @class */ (function (_super) {
    __extends(PostAnnouncements201ApplicationJsonAnnouncement, _super);
    function PostAnnouncements201ApplicationJsonAnnouncement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creation_date" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_internal" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "fileInternal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src_ip_address" }),
        __metadata("design:type", String)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "srcIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", PostAnnouncements201ApplicationJsonAnnouncementUrl)
    ], PostAnnouncements201ApplicationJsonAnnouncement.prototype, "url", void 0);
    return PostAnnouncements201ApplicationJsonAnnouncement;
}(SpeakeasyBase));
export { PostAnnouncements201ApplicationJsonAnnouncement };
var PostAnnouncements201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnouncements201ApplicationJson, _super);
    function PostAnnouncements201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=announcement" }),
        __metadata("design:type", PostAnnouncements201ApplicationJsonAnnouncement)
    ], PostAnnouncements201ApplicationJson.prototype, "announcement", void 0);
    return PostAnnouncements201ApplicationJson;
}(SpeakeasyBase));
export { PostAnnouncements201ApplicationJson };
var PostAnnouncements400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(PostAnnouncements400ApplicationJsonErrors, _super);
    function PostAnnouncements400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], PostAnnouncements400ApplicationJsonErrors.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", Array)
    ], PostAnnouncements400ApplicationJsonErrors.prototype, "message", void 0);
    return PostAnnouncements400ApplicationJsonErrors;
}(SpeakeasyBase));
export { PostAnnouncements400ApplicationJsonErrors };
var PostAnnouncements400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnouncements400ApplicationJson, _super);
    function PostAnnouncements400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: PostAnnouncements400ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], PostAnnouncements400ApplicationJson.prototype, "errors", void 0);
    return PostAnnouncements400ApplicationJson;
}(SpeakeasyBase));
export { PostAnnouncements400ApplicationJson };
var PostAnnouncements403ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAnnouncements403ApplicationJson, _super);
    function PostAnnouncements403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAnnouncements403ApplicationJson.prototype, "message", void 0);
    return PostAnnouncements403ApplicationJson;
}(SpeakeasyBase));
export { PostAnnouncements403ApplicationJson };
var PostAnnouncementsRequest = /** @class */ (function (_super) {
    __extends(PostAnnouncementsRequest, _super);
    function PostAnnouncementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostAnnouncementsRequestBody)
    ], PostAnnouncementsRequest.prototype, "request", void 0);
    return PostAnnouncementsRequest;
}(SpeakeasyBase));
export { PostAnnouncementsRequest };
var PostAnnouncementsResponse = /** @class */ (function (_super) {
    __extends(PostAnnouncementsResponse, _super);
    function PostAnnouncementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAnnouncementsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnouncements201ApplicationJson)
    ], PostAnnouncementsResponse.prototype, "postAnnouncements201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnouncements400ApplicationJson)
    ], PostAnnouncementsResponse.prototype, "postAnnouncements400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAnnouncements403ApplicationJson)
    ], PostAnnouncementsResponse.prototype, "postAnnouncements403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAnnouncementsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OneannouncementsPostResponses403ContentApplication1jsonSchema)
    ], PostAnnouncementsResponse.prototype, "oneannouncementsPostResponses403ContentApplication1jsonSchema", void 0);
    return PostAnnouncementsResponse;
}(SpeakeasyBase));
export { PostAnnouncementsResponse };
