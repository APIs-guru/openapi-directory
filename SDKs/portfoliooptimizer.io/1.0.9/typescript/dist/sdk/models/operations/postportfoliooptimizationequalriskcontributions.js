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
var PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints, _super);
    function PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints.prototype, "maximumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints.prototype, "minimumAssetsWeights", void 0);
    return PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints;
}(SpeakeasyBase));
export { PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints };
var PostPortfolioOptimizationEqualRiskContributionsRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualRiskContributionsRequestBody, _super);
    function PostPortfolioOptimizationEqualRiskContributionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationEqualRiskContributionsRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationEqualRiskContributionsRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraints" }),
        __metadata("design:type", PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints)
    ], PostPortfolioOptimizationEqualRiskContributionsRequestBody.prototype, "constraints", void 0);
    return PostPortfolioOptimizationEqualRiskContributionsRequestBody;
}(SpeakeasyBase));
export { PostPortfolioOptimizationEqualRiskContributionsRequestBody };
var PostPortfolioOptimizationEqualRiskContributions200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualRiskContributions200ApplicationJson, _super);
    function PostPortfolioOptimizationEqualRiskContributions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationEqualRiskContributions200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioOptimizationEqualRiskContributions200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioOptimizationEqualRiskContributions200ApplicationJson };
var PostPortfolioOptimizationEqualRiskContributionsRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualRiskContributionsRequest, _super);
    function PostPortfolioOptimizationEqualRiskContributionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioOptimizationEqualRiskContributionsRequestBody)
    ], PostPortfolioOptimizationEqualRiskContributionsRequest.prototype, "request", void 0);
    return PostPortfolioOptimizationEqualRiskContributionsRequest;
}(SpeakeasyBase));
export { PostPortfolioOptimizationEqualRiskContributionsRequest };
var PostPortfolioOptimizationEqualRiskContributionsResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualRiskContributionsResponse, _super);
    function PostPortfolioOptimizationEqualRiskContributionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioOptimizationEqualRiskContributionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioOptimizationEqualRiskContributions200ApplicationJson)
    ], PostPortfolioOptimizationEqualRiskContributionsResponse.prototype, "postPortfolioOptimizationEqualRiskContributions200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationEqualRiskContributionsResponse.prototype, "statusCode", void 0);
    return PostPortfolioOptimizationEqualRiskContributionsResponse;
}(SpeakeasyBase));
export { PostPortfolioOptimizationEqualRiskContributionsResponse };
