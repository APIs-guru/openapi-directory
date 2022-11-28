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
var PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints, _super);
    function PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints.prototype, "assetsGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroupsMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints.prototype, "assetsGroupsMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsGroupsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints.prototype, "maximumAssetsGroupsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints.prototype, "maximumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints.prototype, "maximumPortfolioExposure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints.prototype, "minimumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints.prototype, "minimumPortfolioExposure", void 0);
    return PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints;
}(SpeakeasyBase));
export { PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints };
var PostPortfolioOptimizationMaximumDecorrelationRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMaximumDecorrelationRequestBody, _super);
    function PostPortfolioOptimizationMaximumDecorrelationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBody.prototype, "assetsCorrelationMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBody.prototype, "assetsReturns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraints" }),
        __metadata("design:type", PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints)
    ], PostPortfolioOptimizationMaximumDecorrelationRequestBody.prototype, "constraints", void 0);
    return PostPortfolioOptimizationMaximumDecorrelationRequestBody;
}(SpeakeasyBase));
export { PostPortfolioOptimizationMaximumDecorrelationRequestBody };
var PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson, _super);
    function PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson };
var PostPortfolioOptimizationMaximumDecorrelationRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMaximumDecorrelationRequest, _super);
    function PostPortfolioOptimizationMaximumDecorrelationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioOptimizationMaximumDecorrelationRequestBody)
    ], PostPortfolioOptimizationMaximumDecorrelationRequest.prototype, "request", void 0);
    return PostPortfolioOptimizationMaximumDecorrelationRequest;
}(SpeakeasyBase));
export { PostPortfolioOptimizationMaximumDecorrelationRequest };
var PostPortfolioOptimizationMaximumDecorrelationResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMaximumDecorrelationResponse, _super);
    function PostPortfolioOptimizationMaximumDecorrelationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioOptimizationMaximumDecorrelationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson)
    ], PostPortfolioOptimizationMaximumDecorrelationResponse.prototype, "postPortfolioOptimizationMaximumDecorrelation200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMaximumDecorrelationResponse.prototype, "statusCode", void 0);
    return PostPortfolioOptimizationMaximumDecorrelationResponse;
}(SpeakeasyBase));
export { PostPortfolioOptimizationMaximumDecorrelationResponse };
