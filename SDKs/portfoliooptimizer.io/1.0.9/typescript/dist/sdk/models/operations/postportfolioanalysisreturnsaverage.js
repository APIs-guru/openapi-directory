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
var PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios, _super);
    function PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioValues" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios.prototype, "portfolioValues", void 0);
    return PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios };
var PostPortfolioAnalysisReturnsAverageRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisReturnsAverageRequestBody, _super);
    function PostPortfolioAnalysisReturnsAverageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisReturnsAverageRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisReturnsAverageRequestBody;
}(SpeakeasyBase));
export { PostPortfolioAnalysisReturnsAverageRequestBody };
var PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioAverageReturn" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios.prototype, "portfolioAverageReturn", void 0);
    return PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios };
var PostPortfolioAnalysisReturnsAverage200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisReturnsAverage200ApplicationJson, _super);
    function PostPortfolioAnalysisReturnsAverage200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisReturnsAverage200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisReturnsAverage200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisReturnsAverage200ApplicationJson };
var PostPortfolioAnalysisReturnsAverageRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisReturnsAverageRequest, _super);
    function PostPortfolioAnalysisReturnsAverageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisReturnsAverageRequestBody)
    ], PostPortfolioAnalysisReturnsAverageRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisReturnsAverageRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisReturnsAverageRequest };
var PostPortfolioAnalysisReturnsAverageResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisReturnsAverageResponse, _super);
    function PostPortfolioAnalysisReturnsAverageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisReturnsAverageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisReturnsAverage200ApplicationJson)
    ], PostPortfolioAnalysisReturnsAverageResponse.prototype, "postPortfolioAnalysisReturnsAverage200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisReturnsAverageResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisReturnsAverageResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisReturnsAverageResponse };
