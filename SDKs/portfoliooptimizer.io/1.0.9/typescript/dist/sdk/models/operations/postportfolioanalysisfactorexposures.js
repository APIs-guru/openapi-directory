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
var PostPortfolioAnalysisFactorExposuresRequestBodyFactors = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposuresRequestBodyFactors, _super);
    function PostPortfolioAnalysisFactorExposuresRequestBodyFactors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=factorReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposuresRequestBodyFactors.prototype, "factorReturns", void 0);
    return PostPortfolioAnalysisFactorExposuresRequestBodyFactors;
}(SpeakeasyBase));
export { PostPortfolioAnalysisFactorExposuresRequestBodyFactors };
var PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios, _super);
    function PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios.prototype, "portfolioReturns", void 0);
    return PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios };
var PostPortfolioAnalysisFactorExposuresRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposuresRequestBody, _super);
    function PostPortfolioAnalysisFactorExposuresRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=factors", elemType: PostPortfolioAnalysisFactorExposuresRequestBodyFactors }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposuresRequestBody.prototype, "factors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposuresRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisFactorExposuresRequestBody;
}(SpeakeasyBase));
export { PostPortfolioAnalysisFactorExposuresRequestBody };
var PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioAlpha" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios.prototype, "portfolioAlpha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioBetas" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios.prototype, "portfolioBetas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioRSquared" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios.prototype, "portfolioRSquared", void 0);
    return PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios };
var PostPortfolioAnalysisFactorExposures200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposures200ApplicationJson, _super);
    function PostPortfolioAnalysisFactorExposures200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisFactorExposures200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisFactorExposures200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisFactorExposures200ApplicationJson };
var PostPortfolioAnalysisFactorExposuresRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposuresRequest, _super);
    function PostPortfolioAnalysisFactorExposuresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisFactorExposuresRequestBody)
    ], PostPortfolioAnalysisFactorExposuresRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisFactorExposuresRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisFactorExposuresRequest };
var PostPortfolioAnalysisFactorExposuresResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisFactorExposuresResponse, _super);
    function PostPortfolioAnalysisFactorExposuresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisFactorExposuresResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisFactorExposures200ApplicationJson)
    ], PostPortfolioAnalysisFactorExposuresResponse.prototype, "postPortfolioAnalysisFactorExposures200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisFactorExposuresResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisFactorExposuresResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisFactorExposuresResponse };
