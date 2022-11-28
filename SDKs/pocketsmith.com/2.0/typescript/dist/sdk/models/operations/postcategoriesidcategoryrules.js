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
var PostCategoriesIdCategoryRulesPathParams = /** @class */ (function (_super) {
    __extends(PostCategoriesIdCategoryRulesPathParams, _super);
    function PostCategoriesIdCategoryRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostCategoriesIdCategoryRulesPathParams.prototype, "id", void 0);
    return PostCategoriesIdCategoryRulesPathParams;
}(SpeakeasyBase));
export { PostCategoriesIdCategoryRulesPathParams };
var PostCategoriesIdCategoryRulesRequestBody = /** @class */ (function (_super) {
    __extends(PostCategoriesIdCategoryRulesRequestBody, _super);
    function PostCategoriesIdCategoryRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apply_to_all" }),
        __metadata("design:type", Boolean)
    ], PostCategoriesIdCategoryRulesRequestBody.prototype, "applyToAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apply_to_uncategorised" }),
        __metadata("design:type", Boolean)
    ], PostCategoriesIdCategoryRulesRequestBody.prototype, "applyToUncategorised", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_matches" }),
        __metadata("design:type", String)
    ], PostCategoriesIdCategoryRulesRequestBody.prototype, "payeeMatches", void 0);
    return PostCategoriesIdCategoryRulesRequestBody;
}(SpeakeasyBase));
export { PostCategoriesIdCategoryRulesRequestBody };
var PostCategoriesIdCategoryRulesRequest = /** @class */ (function (_super) {
    __extends(PostCategoriesIdCategoryRulesRequest, _super);
    function PostCategoriesIdCategoryRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCategoriesIdCategoryRulesPathParams)
    ], PostCategoriesIdCategoryRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostCategoriesIdCategoryRulesRequestBody)
    ], PostCategoriesIdCategoryRulesRequest.prototype, "request", void 0);
    return PostCategoriesIdCategoryRulesRequest;
}(SpeakeasyBase));
export { PostCategoriesIdCategoryRulesRequest };
var PostCategoriesIdCategoryRulesResponse = /** @class */ (function (_super) {
    __extends(PostCategoriesIdCategoryRulesResponse, _super);
    function PostCategoriesIdCategoryRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CategoryRule)
    ], PostCategoriesIdCategoryRulesResponse.prototype, "categoryRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCategoriesIdCategoryRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostCategoriesIdCategoryRulesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCategoriesIdCategoryRulesResponse.prototype, "statusCode", void 0);
    return PostCategoriesIdCategoryRulesResponse;
}(SpeakeasyBase));
export { PostCategoriesIdCategoryRulesResponse };
