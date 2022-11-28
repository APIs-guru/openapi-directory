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
var UnlikeStoryPathParams = /** @class */ (function (_super) {
    __extends(UnlikeStoryPathParams, _super);
    function UnlikeStoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_id" }),
        __metadata("design:type", String)
    ], UnlikeStoryPathParams.prototype, "storyId", void 0);
    return UnlikeStoryPathParams;
}(SpeakeasyBase));
export { UnlikeStoryPathParams };
var UnlikeStoryQueryParams = /** @class */ (function (_super) {
    __extends(UnlikeStoryQueryParams, _super);
    function UnlikeStoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], UnlikeStoryQueryParams.prototype, "devicePixelRatio", void 0);
    return UnlikeStoryQueryParams;
}(SpeakeasyBase));
export { UnlikeStoryQueryParams };
var UnlikeStoryRequest = /** @class */ (function (_super) {
    __extends(UnlikeStoryRequest, _super);
    function UnlikeStoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnlikeStoryPathParams)
    ], UnlikeStoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnlikeStoryQueryParams)
    ], UnlikeStoryRequest.prototype, "queryParams", void 0);
    return UnlikeStoryRequest;
}(SpeakeasyBase));
export { UnlikeStoryRequest };
var UnlikeStoryResponse = /** @class */ (function (_super) {
    __extends(UnlikeStoryResponse, _super);
    function UnlikeStoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UnlikeStoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UnlikeStoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Story)
    ], UnlikeStoryResponse.prototype, "story", void 0);
    return UnlikeStoryResponse;
}(SpeakeasyBase));
export { UnlikeStoryResponse };
