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
var PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints, _super);
    function PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints.prototype, "assetsGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroupsMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints.prototype, "assetsGroupsMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsGroupsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints.prototype, "maximumAssetsGroupsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints.prototype, "maximumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints.prototype, "maximumPortfolioExposure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints.prototype, "minimumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints.prototype, "minimumPortfolioExposure", void 0);
    return PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints };
var PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody, _super);
    function PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody.prototype, "assetsReturns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraints" }),
        __metadata("design:type", PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody.prototype, "constraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody };
var PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios.prototype, "assetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioReturn" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios.prototype, "portfolioReturn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioVolatility" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios.prototype, "portfolioVolatility", void 0);
    return PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios };
var PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson, _super);
    function PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson };
var PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest, _super);
    function PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest };
var PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse, _super);
    function PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse.prototype, "postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse };
