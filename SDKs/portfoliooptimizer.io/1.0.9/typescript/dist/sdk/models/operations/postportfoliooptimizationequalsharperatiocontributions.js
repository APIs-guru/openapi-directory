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
var PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody, _super);
    function PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody.prototype, "assetsReturns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=riskFreeRate" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody.prototype, "riskFreeRate", void 0);
    return PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody;
}(SpeakeasyBase));
export { PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody };
var PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson, _super);
    function PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson };
var PostPortfolioOptimizationEqualSharpeRatioContributionsRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualSharpeRatioContributionsRequest, _super);
    function PostPortfolioOptimizationEqualSharpeRatioContributionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody)
    ], PostPortfolioOptimizationEqualSharpeRatioContributionsRequest.prototype, "request", void 0);
    return PostPortfolioOptimizationEqualSharpeRatioContributionsRequest;
}(SpeakeasyBase));
export { PostPortfolioOptimizationEqualSharpeRatioContributionsRequest };
var PostPortfolioOptimizationEqualSharpeRatioContributionsResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualSharpeRatioContributionsResponse, _super);
    function PostPortfolioOptimizationEqualSharpeRatioContributionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioOptimizationEqualSharpeRatioContributionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson)
    ], PostPortfolioOptimizationEqualSharpeRatioContributionsResponse.prototype, "postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationEqualSharpeRatioContributionsResponse.prototype, "statusCode", void 0);
    return PostPortfolioOptimizationEqualSharpeRatioContributionsResponse;
}(SpeakeasyBase));
export { PostPortfolioOptimizationEqualSharpeRatioContributionsResponse };
