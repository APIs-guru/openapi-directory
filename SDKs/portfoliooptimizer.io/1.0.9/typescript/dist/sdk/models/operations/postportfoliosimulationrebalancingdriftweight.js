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
var PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets, _super);
    function PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetPrices" }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets.prototype, "assetPrices", void 0);
    return PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets };
var PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios, _super);
    function PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios.prototype, "assetsWeights", void 0);
    return PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios };
var PostPortfolioSimulationRebalancingDriftWeightRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingDriftWeightRequestBody, _super);
    function PostPortfolioSimulationRebalancingDriftWeightRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingDriftWeightRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingDriftWeightRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioSimulationRebalancingDriftWeightRequestBody;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingDriftWeightRequestBody };
var PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios, _super);
    function PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioValues" }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios.prototype, "portfolioValues", void 0);
    return PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios };
var PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson, _super);
    function PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson };
var PostPortfolioSimulationRebalancingDriftWeightRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingDriftWeightRequest, _super);
    function PostPortfolioSimulationRebalancingDriftWeightRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioSimulationRebalancingDriftWeightRequestBody)
    ], PostPortfolioSimulationRebalancingDriftWeightRequest.prototype, "request", void 0);
    return PostPortfolioSimulationRebalancingDriftWeightRequest;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingDriftWeightRequest };
var PostPortfolioSimulationRebalancingDriftWeightResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioSimulationRebalancingDriftWeightResponse, _super);
    function PostPortfolioSimulationRebalancingDriftWeightResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioSimulationRebalancingDriftWeightResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson)
    ], PostPortfolioSimulationRebalancingDriftWeightResponse.prototype, "postPortfolioSimulationRebalancingDriftWeight200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioSimulationRebalancingDriftWeightResponse.prototype, "statusCode", void 0);
    return PostPortfolioSimulationRebalancingDriftWeightResponse;
}(SpeakeasyBase));
export { PostPortfolioSimulationRebalancingDriftWeightResponse };
