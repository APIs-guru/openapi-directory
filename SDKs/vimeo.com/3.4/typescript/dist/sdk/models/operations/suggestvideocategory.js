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
var SuggestVideoCategoryPathParams = /** @class */ (function (_super) {
    __extends(SuggestVideoCategoryPathParams, _super);
    function SuggestVideoCategoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], SuggestVideoCategoryPathParams.prototype, "videoId", void 0);
    return SuggestVideoCategoryPathParams;
}(SpeakeasyBase));
export { SuggestVideoCategoryPathParams };
var SuggestVideoCategoryRequestBody = /** @class */ (function (_super) {
    __extends(SuggestVideoCategoryRequestBody, _super);
    function SuggestVideoCategoryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", Array)
    ], SuggestVideoCategoryRequestBody.prototype, "category", void 0);
    return SuggestVideoCategoryRequestBody;
}(SpeakeasyBase));
export { SuggestVideoCategoryRequestBody };
var SuggestVideoCategorySecurity = /** @class */ (function (_super) {
    __extends(SuggestVideoCategorySecurity, _super);
    function SuggestVideoCategorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SuggestVideoCategorySecurity.prototype, "oauth2", void 0);
    return SuggestVideoCategorySecurity;
}(SpeakeasyBase));
export { SuggestVideoCategorySecurity };
var SuggestVideoCategoryRequest = /** @class */ (function (_super) {
    __extends(SuggestVideoCategoryRequest, _super);
    function SuggestVideoCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SuggestVideoCategoryPathParams)
    ], SuggestVideoCategoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.category+json" }),
        __metadata("design:type", SuggestVideoCategoryRequestBody)
    ], SuggestVideoCategoryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SuggestVideoCategorySecurity)
    ], SuggestVideoCategoryRequest.prototype, "security", void 0);
    return SuggestVideoCategoryRequest;
}(SpeakeasyBase));
export { SuggestVideoCategoryRequest };
var SuggestVideoCategoryResponse = /** @class */ (function (_super) {
    __extends(SuggestVideoCategoryResponse, _super);
    function SuggestVideoCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SuggestVideoCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SuggestVideoCategoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Category)
    ], SuggestVideoCategoryResponse.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], SuggestVideoCategoryResponse.prototype, "legacyError", void 0);
    return SuggestVideoCategoryResponse;
}(SpeakeasyBase));
export { SuggestVideoCategoryResponse };
