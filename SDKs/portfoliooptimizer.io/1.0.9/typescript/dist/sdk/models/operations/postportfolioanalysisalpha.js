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
var PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioAlpha" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios.prototype, "portfolioAlpha", void 0);
    return PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios };
var PostPortfolioAnalysisAlpha200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisAlpha200ApplicationJson, _super);
    function PostPortfolioAnalysisAlpha200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisAlpha200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisAlpha200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisAlpha200ApplicationJson };
var PostPortfolioAnalysisAlphaRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisAlphaRequest, _super);
    function PostPortfolioAnalysisAlphaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PostPortfolioAnalysisAlphaRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisAlphaRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisAlphaRequest };
var PostPortfolioAnalysisAlphaResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisAlphaResponse, _super);
    function PostPortfolioAnalysisAlphaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisAlphaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisAlpha200ApplicationJson)
    ], PostPortfolioAnalysisAlphaResponse.prototype, "postPortfolioAnalysisAlpha200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisAlphaResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisAlphaResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisAlphaResponse };
