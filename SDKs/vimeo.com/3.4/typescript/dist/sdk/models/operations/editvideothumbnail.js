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
var EditVideoThumbnailPathParams = /** @class */ (function (_super) {
    __extends(EditVideoThumbnailPathParams, _super);
    function EditVideoThumbnailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=picture_id" }),
        __metadata("design:type", Number)
    ], EditVideoThumbnailPathParams.prototype, "pictureId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], EditVideoThumbnailPathParams.prototype, "videoId", void 0);
    return EditVideoThumbnailPathParams;
}(SpeakeasyBase));
export { EditVideoThumbnailPathParams };
var EditVideoThumbnailRequestBody = /** @class */ (function (_super) {
    __extends(EditVideoThumbnailRequestBody, _super);
    function EditVideoThumbnailRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], EditVideoThumbnailRequestBody.prototype, "active", void 0);
    return EditVideoThumbnailRequestBody;
}(SpeakeasyBase));
export { EditVideoThumbnailRequestBody };
var EditVideoThumbnailSecurity = /** @class */ (function (_super) {
    __extends(EditVideoThumbnailSecurity, _super);
    function EditVideoThumbnailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EditVideoThumbnailSecurity.prototype, "oauth2", void 0);
    return EditVideoThumbnailSecurity;
}(SpeakeasyBase));
export { EditVideoThumbnailSecurity };
var EditVideoThumbnailRequest = /** @class */ (function (_super) {
    __extends(EditVideoThumbnailRequest, _super);
    function EditVideoThumbnailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVideoThumbnailPathParams)
    ], EditVideoThumbnailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.picture+json" }),
        __metadata("design:type", EditVideoThumbnailRequestBody)
    ], EditVideoThumbnailRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditVideoThumbnailSecurity)
    ], EditVideoThumbnailRequest.prototype, "security", void 0);
    return EditVideoThumbnailRequest;
}(SpeakeasyBase));
export { EditVideoThumbnailRequest };
var EditVideoThumbnailResponse = /** @class */ (function (_super) {
    __extends(EditVideoThumbnailResponse, _super);
    function EditVideoThumbnailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditVideoThumbnailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditVideoThumbnailResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Picture)
    ], EditVideoThumbnailResponse.prototype, "picture", void 0);
    return EditVideoThumbnailResponse;
}(SpeakeasyBase));
export { EditVideoThumbnailResponse };
