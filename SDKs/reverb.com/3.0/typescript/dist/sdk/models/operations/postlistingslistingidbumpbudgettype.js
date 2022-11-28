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
var PostListingsListingIdBumpBudgetTypePathParams = /** @class */ (function (_super) {
    __extends(PostListingsListingIdBumpBudgetTypePathParams, _super);
    function PostListingsListingIdBumpBudgetTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_type" }),
        __metadata("design:type", String)
    ], PostListingsListingIdBumpBudgetTypePathParams.prototype, "budgetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listing_id" }),
        __metadata("design:type", String)
    ], PostListingsListingIdBumpBudgetTypePathParams.prototype, "listingId", void 0);
    return PostListingsListingIdBumpBudgetTypePathParams;
}(SpeakeasyBase));
export { PostListingsListingIdBumpBudgetTypePathParams };
var PostListingsListingIdBumpBudgetTypeSecurity = /** @class */ (function (_super) {
    __extends(PostListingsListingIdBumpBudgetTypeSecurity, _super);
    function PostListingsListingIdBumpBudgetTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostListingsListingIdBumpBudgetTypeSecurity.prototype, "oauth2", void 0);
    return PostListingsListingIdBumpBudgetTypeSecurity;
}(SpeakeasyBase));
export { PostListingsListingIdBumpBudgetTypeSecurity };
var PostListingsListingIdBumpBudgetTypeRequest = /** @class */ (function (_super) {
    __extends(PostListingsListingIdBumpBudgetTypeRequest, _super);
    function PostListingsListingIdBumpBudgetTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListingsListingIdBumpBudgetTypePathParams)
    ], PostListingsListingIdBumpBudgetTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListingsListingIdBumpBudgetTypeSecurity)
    ], PostListingsListingIdBumpBudgetTypeRequest.prototype, "security", void 0);
    return PostListingsListingIdBumpBudgetTypeRequest;
}(SpeakeasyBase));
export { PostListingsListingIdBumpBudgetTypeRequest };
var PostListingsListingIdBumpBudgetTypeResponse = /** @class */ (function (_super) {
    __extends(PostListingsListingIdBumpBudgetTypeResponse, _super);
    function PostListingsListingIdBumpBudgetTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListingsListingIdBumpBudgetTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListingsListingIdBumpBudgetTypeResponse.prototype, "statusCode", void 0);
    return PostListingsListingIdBumpBudgetTypeResponse;
}(SpeakeasyBase));
export { PostListingsListingIdBumpBudgetTypeResponse };
