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
var PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints, _super);
    function PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints.prototype, "assetsGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroupsMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints.prototype, "assetsGroupsMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsGroupsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints.prototype, "maximumAssetsGroupsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints.prototype, "maximumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints.prototype, "maximumPortfolioExposure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints.prototype, "minimumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints.prototype, "minimumPortfolioExposure", void 0);
    return PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints;
}(SpeakeasyBase));
export { PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints };
var PostPortfolioOptimizationMinimumVarianceRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMinimumVarianceRequestBody, _super);
    function PostPortfolioOptimizationMinimumVarianceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMinimumVarianceRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMinimumVarianceRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMinimumVarianceRequestBody.prototype, "assetsReturns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraints" }),
        __metadata("design:type", PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints)
    ], PostPortfolioOptimizationMinimumVarianceRequestBody.prototype, "constraints", void 0);
    return PostPortfolioOptimizationMinimumVarianceRequestBody;
}(SpeakeasyBase));
export { PostPortfolioOptimizationMinimumVarianceRequestBody };
var PostPortfolioOptimizationMinimumVariance200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMinimumVariance200ApplicationJson, _super);
    function PostPortfolioOptimizationMinimumVariance200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMinimumVariance200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioOptimizationMinimumVariance200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioOptimizationMinimumVariance200ApplicationJson };
var PostPortfolioOptimizationMinimumVarianceRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMinimumVarianceRequest, _super);
    function PostPortfolioOptimizationMinimumVarianceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioOptimizationMinimumVarianceRequestBody)
    ], PostPortfolioOptimizationMinimumVarianceRequest.prototype, "request", void 0);
    return PostPortfolioOptimizationMinimumVarianceRequest;
}(SpeakeasyBase));
export { PostPortfolioOptimizationMinimumVarianceRequest };
var PostPortfolioOptimizationMinimumVarianceResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMinimumVarianceResponse, _super);
    function PostPortfolioOptimizationMinimumVarianceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioOptimizationMinimumVarianceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioOptimizationMinimumVariance200ApplicationJson)
    ], PostPortfolioOptimizationMinimumVarianceResponse.prototype, "postPortfolioOptimizationMinimumVariance200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMinimumVarianceResponse.prototype, "statusCode", void 0);
    return PostPortfolioOptimizationMinimumVarianceResponse;
}(SpeakeasyBase));
export { PostPortfolioOptimizationMinimumVarianceResponse };
