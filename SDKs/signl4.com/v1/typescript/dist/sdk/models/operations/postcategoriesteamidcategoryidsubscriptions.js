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
var PostCategoriesTeamIdCategoryIdSubscriptionsPathParams = /** @class */ (function (_super) {
    __extends(PostCategoriesTeamIdCategoryIdSubscriptionsPathParams, _super);
    function PostCategoriesTeamIdCategoryIdSubscriptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryId" }),
        __metadata("design:type", String)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsPathParams.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsPathParams.prototype, "teamId", void 0);
    return PostCategoriesTeamIdCategoryIdSubscriptionsPathParams;
}(SpeakeasyBase));
export { PostCategoriesTeamIdCategoryIdSubscriptionsPathParams };
var PostCategoriesTeamIdCategoryIdSubscriptionsRequests = /** @class */ (function (_super) {
    __extends(PostCategoriesTeamIdCategoryIdSubscriptionsRequests, _super);
    function PostCategoriesTeamIdCategoryIdSubscriptionsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.CategorySubscriptionInfo }),
        __metadata("design:type", Array)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsRequests.prototype, "categorySubscriptionInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.CategorySubscriptionInfo }),
        __metadata("design:type", Array)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsRequests.prototype, "categorySubscriptionInfos1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.CategorySubscriptionInfo }),
        __metadata("design:type", Array)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsRequests.prototype, "categorySubscriptionInfos2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.CategorySubscriptionInfo }),
        __metadata("design:type", Array)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsRequests.prototype, "categorySubscriptionInfos3", void 0);
    return PostCategoriesTeamIdCategoryIdSubscriptionsRequests;
}(SpeakeasyBase));
export { PostCategoriesTeamIdCategoryIdSubscriptionsRequests };
var PostCategoriesTeamIdCategoryIdSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(PostCategoriesTeamIdCategoryIdSubscriptionsRequest, _super);
    function PostCategoriesTeamIdCategoryIdSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCategoriesTeamIdCategoryIdSubscriptionsPathParams)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCategoriesTeamIdCategoryIdSubscriptionsRequests)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsRequest.prototype, "request", void 0);
    return PostCategoriesTeamIdCategoryIdSubscriptionsRequest;
}(SpeakeasyBase));
export { PostCategoriesTeamIdCategoryIdSubscriptionsRequest };
var PostCategoriesTeamIdCategoryIdSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(PostCategoriesTeamIdCategoryIdSubscriptionsResponse, _super);
    function PostCategoriesTeamIdCategoryIdSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CategorySubscriptionInfo }),
        __metadata("design:type", Array)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsResponse.prototype, "categorySubscriptionInfos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCategoriesTeamIdCategoryIdSubscriptionsResponse.prototype, "statusCode", void 0);
    return PostCategoriesTeamIdCategoryIdSubscriptionsResponse;
}(SpeakeasyBase));
export { PostCategoriesTeamIdCategoryIdSubscriptionsResponse };
