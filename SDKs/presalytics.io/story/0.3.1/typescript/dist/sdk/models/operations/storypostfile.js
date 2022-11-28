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
var StoryPostFileQueryParams = /** @class */ (function (_super) {
    __extends(StoryPostFileQueryParams, _super);
    function StoryPostFileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_outline" }),
        __metadata("design:type", Boolean)
    ], StoryPostFileQueryParams.prototype, "includeOutline", void 0);
    return StoryPostFileQueryParams;
}(SpeakeasyBase));
export { StoryPostFileQueryParams };
var StoryPostFileRequest = /** @class */ (function (_super) {
    __extends(StoryPostFileRequest, _super);
    function StoryPostFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoryPostFileQueryParams)
    ], StoryPostFileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], StoryPostFileRequest.prototype, "request", void 0);
    return StoryPostFileRequest;
}(SpeakeasyBase));
export { StoryPostFileRequest };
var StoryPostFileResponse = /** @class */ (function (_super) {
    __extends(StoryPostFileResponse, _super);
    function StoryPostFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoryPostFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoryPostFileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StoryPostFileResponse.prototype, "problemDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Story)
    ], StoryPostFileResponse.prototype, "story", void 0);
    return StoryPostFileResponse;
}(SpeakeasyBase));
export { StoryPostFileResponse };
