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
var DeleteVideoThumbnailPathParams = /** @class */ (function (_super) {
    __extends(DeleteVideoThumbnailPathParams, _super);
    function DeleteVideoThumbnailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=picture_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoThumbnailPathParams.prototype, "pictureId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoThumbnailPathParams.prototype, "videoId", void 0);
    return DeleteVideoThumbnailPathParams;
}(SpeakeasyBase));
export { DeleteVideoThumbnailPathParams };
var DeleteVideoThumbnailSecurity = /** @class */ (function (_super) {
    __extends(DeleteVideoThumbnailSecurity, _super);
    function DeleteVideoThumbnailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteVideoThumbnailSecurity.prototype, "oauth2", void 0);
    return DeleteVideoThumbnailSecurity;
}(SpeakeasyBase));
export { DeleteVideoThumbnailSecurity };
var DeleteVideoThumbnailRequest = /** @class */ (function (_super) {
    __extends(DeleteVideoThumbnailRequest, _super);
    function DeleteVideoThumbnailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoThumbnailPathParams)
    ], DeleteVideoThumbnailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoThumbnailSecurity)
    ], DeleteVideoThumbnailRequest.prototype, "security", void 0);
    return DeleteVideoThumbnailRequest;
}(SpeakeasyBase));
export { DeleteVideoThumbnailRequest };
var DeleteVideoThumbnailResponse = /** @class */ (function (_super) {
    __extends(DeleteVideoThumbnailResponse, _super);
    function DeleteVideoThumbnailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVideoThumbnailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVideoThumbnailResponse.prototype, "statusCode", void 0);
    return DeleteVideoThumbnailResponse;
}(SpeakeasyBase));
export { DeleteVideoThumbnailResponse };
