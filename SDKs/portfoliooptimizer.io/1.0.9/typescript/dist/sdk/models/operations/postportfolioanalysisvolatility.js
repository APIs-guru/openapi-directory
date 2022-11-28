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
var PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioVolatility" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios.prototype, "portfolioVolatility", void 0);
    return PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios };
var PostPortfolioAnalysisVolatility200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisVolatility200ApplicationJson, _super);
    function PostPortfolioAnalysisVolatility200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisVolatility200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisVolatility200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisVolatility200ApplicationJson };
var PostPortfolioAnalysisVolatilityRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisVolatilityRequest, _super);
    function PostPortfolioAnalysisVolatilityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PostPortfolioAnalysisVolatilityRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisVolatilityRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisVolatilityRequest };
var PostPortfolioAnalysisVolatilityResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisVolatilityResponse, _super);
    function PostPortfolioAnalysisVolatilityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisVolatilityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisVolatility200ApplicationJson)
    ], PostPortfolioAnalysisVolatilityResponse.prototype, "postPortfolioAnalysisVolatility200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisVolatilityResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisVolatilityResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisVolatilityResponse };
