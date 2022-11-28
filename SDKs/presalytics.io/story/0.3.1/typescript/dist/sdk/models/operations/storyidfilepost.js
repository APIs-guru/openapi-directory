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
var StoryIdFilePostPathParams = /** @class */ (function (_super) {
    __extends(StoryIdFilePostPathParams, _super);
    function StoryIdFilePostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], StoryIdFilePostPathParams.prototype, "id", void 0);
    return StoryIdFilePostPathParams;
}(SpeakeasyBase));
export { StoryIdFilePostPathParams };
var StoryIdFilePostQueryParams = /** @class */ (function (_super) {
    __extends(StoryIdFilePostQueryParams, _super);
    function StoryIdFilePostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_outline" }),
        __metadata("design:type", Boolean)
    ], StoryIdFilePostQueryParams.prototype, "includeOutline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=obsolete_id" }),
        __metadata("design:type", String)
    ], StoryIdFilePostQueryParams.prototype, "obsoleteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replace_existing" }),
        __metadata("design:type", Boolean)
    ], StoryIdFilePostQueryParams.prototype, "replaceExisting", void 0);
    return StoryIdFilePostQueryParams;
}(SpeakeasyBase));
export { StoryIdFilePostQueryParams };
var StoryIdFilePostRequest = /** @class */ (function (_super) {
    __extends(StoryIdFilePostRequest, _super);
    function StoryIdFilePostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoryIdFilePostPathParams)
    ], StoryIdFilePostRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoryIdFilePostQueryParams)
    ], StoryIdFilePostRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], StoryIdFilePostRequest.prototype, "request", void 0);
    return StoryIdFilePostRequest;
}(SpeakeasyBase));
export { StoryIdFilePostRequest };
var StoryIdFilePostResponse = /** @class */ (function (_super) {
    __extends(StoryIdFilePostResponse, _super);
    function StoryIdFilePostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoryIdFilePostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoryIdFilePostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StoryIdFilePostResponse.prototype, "problemDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Story)
    ], StoryIdFilePostResponse.prototype, "story", void 0);
    return StoryIdFilePostResponse;
}(SpeakeasyBase));
export { StoryIdFilePostResponse };
