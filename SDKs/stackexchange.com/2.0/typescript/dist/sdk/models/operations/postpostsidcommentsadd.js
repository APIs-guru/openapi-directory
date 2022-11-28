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
var PostPostsIdCommentsAddPathParams = /** @class */ (function (_super) {
    __extends(PostPostsIdCommentsAddPathParams, _super);
    function PostPostsIdCommentsAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostPostsIdCommentsAddPathParams.prototype, "id", void 0);
    return PostPostsIdCommentsAddPathParams;
}(SpeakeasyBase));
export { PostPostsIdCommentsAddPathParams };
var PostPostsIdCommentsAddQueryParams = /** @class */ (function (_super) {
    __extends(PostPostsIdCommentsAddQueryParams, _super);
    function PostPostsIdCommentsAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body" }),
        __metadata("design:type", String)
    ], PostPostsIdCommentsAddQueryParams.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PostPostsIdCommentsAddQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], PostPostsIdCommentsAddQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview" }),
        __metadata("design:type", Boolean)
    ], PostPostsIdCommentsAddQueryParams.prototype, "preview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], PostPostsIdCommentsAddQueryParams.prototype, "site", void 0);
    return PostPostsIdCommentsAddQueryParams;
}(SpeakeasyBase));
export { PostPostsIdCommentsAddQueryParams };
var PostPostsIdCommentsAddRequest = /** @class */ (function (_super) {
    __extends(PostPostsIdCommentsAddRequest, _super);
    function PostPostsIdCommentsAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPostsIdCommentsAddPathParams)
    ], PostPostsIdCommentsAddRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPostsIdCommentsAddQueryParams)
    ], PostPostsIdCommentsAddRequest.prototype, "queryParams", void 0);
    return PostPostsIdCommentsAddRequest;
}(SpeakeasyBase));
export { PostPostsIdCommentsAddRequest };
var PostPostsIdCommentsAddResponse = /** @class */ (function (_super) {
    __extends(PostPostsIdCommentsAddResponse, _super);
    function PostPostsIdCommentsAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostPostsIdCommentsAddResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPostsIdCommentsAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPostsIdCommentsAddResponse.prototype, "statusCode", void 0);
    return PostPostsIdCommentsAddResponse;
}(SpeakeasyBase));
export { PostPostsIdCommentsAddResponse };
