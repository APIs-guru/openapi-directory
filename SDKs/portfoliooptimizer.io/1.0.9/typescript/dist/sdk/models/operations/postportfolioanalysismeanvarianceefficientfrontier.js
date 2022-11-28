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
var PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints, _super);
    function PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints.prototype, "assetsGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroupsMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints.prototype, "assetsGroupsMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsGroupsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints.prototype, "maximumAssetsGroupsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints.prototype, "maximumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints.prototype, "maximumPortfolioExposure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints.prototype, "minimumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints.prototype, "minimumPortfolioExposure", void 0);
    return PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints };
var PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody, _super);
    function PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody.prototype, "assetsReturns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraints" }),
        __metadata("design:type", PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody.prototype, "constraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody };
var PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios.prototype, "assetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioReturn" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios.prototype, "portfolioReturn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioVolatility" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios.prototype, "portfolioVolatility", void 0);
    return PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios };
var PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson, _super);
    function PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson };
var PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest, _super);
    function PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest };
var PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse, _super);
    function PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse.prototype, "postPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse };
