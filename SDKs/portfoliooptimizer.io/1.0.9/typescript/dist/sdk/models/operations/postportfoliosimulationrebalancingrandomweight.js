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
var PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets, _super);
    function PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetPrices" }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets.prototype, "assetPrices", void 0);
    return PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets };
var PostPortfolioSimulationRebalancingRandomWeightRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingRandomWeightRequestBody, _super);
    function PostPortfolioSimulationRebalancingRandomWeightRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingRandomWeightRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios" }),
        __metadata("design:type", Number)
    ], PostPortfolioSimulationRebalancingRandomWeightRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioSimulationRebalancingRandomWeightRequestBody;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingRandomWeightRequestBody };
var PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios, _super);
    function PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioValues" }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios.prototype, "portfolioValues", void 0);
    return PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios };
var PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson, _super);
    function PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson };
var PostPortfolioSimulationRebalancingRandomWeightRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingRandomWeightRequest, _super);
    function PostPortfolioSimulationRebalancingRandomWeightRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioSimulationRebalancingRandomWeightRequestBody)
    ], PostPortfolioSimulationRebalancingRandomWeightRequest.prototype, "request", void 0);
    return PostPortfolioSimulationRebalancingRandomWeightRequest;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingRandomWeightRequest };
var PostPortfolioSimulationRebalancingRandomWeightResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingRandomWeightResponse, _super);
    function PostPortfolioSimulationRebalancingRandomWeightResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioSimulationRebalancingRandomWeightResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson)
    ], PostPortfolioSimulationRebalancingRandomWeightResponse.prototype, "postPortfolioSimulationRebalancingRandomWeight200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioSimulationRebalancingRandomWeightResponse.prototype, "statusCode", void 0);
    return PostPortfolioSimulationRebalancingRandomWeightResponse;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingRandomWeightResponse };
