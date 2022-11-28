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
var PostUsersIdCategoriesPathParams = /** @class */ (function (_super) {
    __extends(PostUsersIdCategoriesPathParams, _super);
    function PostUsersIdCategoriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostUsersIdCategoriesPathParams.prototype, "id", void 0);
    return PostUsersIdCategoriesPathParams;
}(SpeakeasyBase));
export { PostUsersIdCategoriesPathParams };
var PostUsersIdCategoriesRequestBody = /** @class */ (function (_super) {
    __extends(PostUsersIdCategoriesRequestBody, _super);
    function PostUsersIdCategoriesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colour" }),
        __metadata("design:type", String)
    ], PostUsersIdCategoriesRequestBody.prototype, "colour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_id" }),
        __metadata("design:type", Number)
    ], PostUsersIdCategoriesRequestBody.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PostUsersIdCategoriesRequestBody.prototype, "title", void 0);
    return PostUsersIdCategoriesRequestBody;
}(SpeakeasyBase));
export { PostUsersIdCategoriesRequestBody };
var PostUsersIdCategoriesRequest = /** @class */ (function (_super) {
    __extends(PostUsersIdCategoriesRequest, _super);
    function PostUsersIdCategoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersIdCategoriesPathParams)
    ], PostUsersIdCategoriesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostUsersIdCategoriesRequestBody)
    ], PostUsersIdCategoriesRequest.prototype, "request", void 0);
    return PostUsersIdCategoriesRequest;
}(SpeakeasyBase));
export { PostUsersIdCategoriesRequest };
var PostUsersIdCategoriesResponse = /** @class */ (function (_super) {
    __extends(PostUsersIdCategoriesResponse, _super);
    function PostUsersIdCategoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Category)
    ], PostUsersIdCategoriesResponse.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersIdCategoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostUsersIdCategoriesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersIdCategoriesResponse.prototype, "statusCode", void 0);
    return PostUsersIdCategoriesResponse;
}(SpeakeasyBase));
export { PostUsersIdCategoriesResponse };
