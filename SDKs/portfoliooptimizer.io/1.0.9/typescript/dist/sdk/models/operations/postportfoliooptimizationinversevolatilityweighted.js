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
var PostPortfolioOptimizationInverseVolatilityWeightedRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationInverseVolatilityWeightedRequestBody, _super);
    function PostPortfolioOptimizationInverseVolatilityWeightedRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationInverseVolatilityWeightedRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsVolatilities" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationInverseVolatilityWeightedRequestBody.prototype, "assetsVolatilities", void 0);
    return PostPortfolioOptimizationInverseVolatilityWeightedRequestBody;
}(SpeakeasyBase));
export { PostPortfolioOptimizationInverseVolatilityWeightedRequestBody };
var PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson, _super);
    function PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson };
var PostPortfolioOptimizationInverseVolatilityWeightedRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationInverseVolatilityWeightedRequest, _super);
    function PostPortfolioOptimizationInverseVolatilityWeightedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioOptimizationInverseVolatilityWeightedRequestBody)
    ], PostPortfolioOptimizationInverseVolatilityWeightedRequest.prototype, "request", void 0);
    return PostPortfolioOptimizationInverseVolatilityWeightedRequest;
}(SpeakeasyBase));
export { PostPortfolioOptimizationInverseVolatilityWeightedRequest };
var PostPortfolioOptimizationInverseVolatilityWeightedResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationInverseVolatilityWeightedResponse, _super);
    function PostPortfolioOptimizationInverseVolatilityWeightedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioOptimizationInverseVolatilityWeightedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson)
    ], PostPortfolioOptimizationInverseVolatilityWeightedResponse.prototype, "postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationInverseVolatilityWeightedResponse.prototype, "statusCode", void 0);
    return PostPortfolioOptimizationInverseVolatilityWeightedResponse;
}(SpeakeasyBase));
export { PostPortfolioOptimizationInverseVolatilityWeightedResponse };
