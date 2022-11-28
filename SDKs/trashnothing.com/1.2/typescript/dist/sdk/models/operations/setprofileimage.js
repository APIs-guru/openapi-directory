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
var SetProfileImageRequestBodyPhoto = /** @class */ (function (_super) {
    __extends(SetProfileImageRequestBodyPhoto, _super);
    function SetProfileImageRequestBodyPhoto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], SetProfileImageRequestBodyPhoto.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=photo" }),
        __metadata("design:type", String)
    ], SetProfileImageRequestBodyPhoto.prototype, "photo", void 0);
    return SetProfileImageRequestBodyPhoto;
}(SpeakeasyBase));
export { SetProfileImageRequestBodyPhoto };
var SetProfileImageRequestBody = /** @class */ (function (_super) {
    __extends(SetProfileImageRequestBody, _super);
    function SetProfileImageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=crop" }),
        __metadata("design:type", String)
    ], SetProfileImageRequestBody.prototype, "crop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], SetProfileImageRequestBody.prototype, "devicePixelRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", SetProfileImageRequestBodyPhoto)
    ], SetProfileImageRequestBody.prototype, "photo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=photo_id" }),
        __metadata("design:type", String)
    ], SetProfileImageRequestBody.prototype, "photoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=set_default" }),
        __metadata("design:type", Number)
    ], SetProfileImageRequestBody.prototype, "setDefault", void 0);
    return SetProfileImageRequestBody;
}(SpeakeasyBase));
export { SetProfileImageRequestBody };
var SetProfileImage200ApplicationJson = /** @class */ (function (_super) {
    __extends(SetProfileImage200ApplicationJson, _super);
    function SetProfileImage200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photo" }),
        __metadata("design:type", shared.PhotoResult)
    ], SetProfileImage200ApplicationJson.prototype, "photo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", shared.CurrentUser)
    ], SetProfileImage200ApplicationJson.prototype, "user", void 0);
    return SetProfileImage200ApplicationJson;
}(SpeakeasyBase));
export { SetProfileImage200ApplicationJson };
var SetProfileImageRequest = /** @class */ (function (_super) {
    __extends(SetProfileImageRequest, _super);
    function SetProfileImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SetProfileImageRequestBody)
    ], SetProfileImageRequest.prototype, "request", void 0);
    return SetProfileImageRequest;
}(SpeakeasyBase));
export { SetProfileImageRequest };
var SetProfileImageResponse = /** @class */ (function (_super) {
    __extends(SetProfileImageResponse, _super);
    function SetProfileImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetProfileImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetProfileImageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetProfileImage200ApplicationJson)
    ], SetProfileImageResponse.prototype, "setProfileImage200ApplicationJsonObject", void 0);
    return SetProfileImageResponse;
}(SpeakeasyBase));
export { SetProfileImageResponse };
