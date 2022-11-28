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
var PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios, _super);
    function PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios.prototype, "assetsWeights", void 0);
    return PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios };
var PostPortfolioAnalysisContributionsReturnRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturnRequestBody, _super);
    function PostPortfolioAnalysisContributionsReturnRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisContributionsReturnRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturnRequestBody.prototype, "assetsGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturnRequestBody.prototype, "assetsReturns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturnRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisContributionsReturnRequestBody;
}(SpeakeasyBase));
export { PostPortfolioAnalysisContributionsReturnRequestBody };
var PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroupsReturnContributions" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios.prototype, "assetsGroupsReturnContributions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsReturnContributions" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios.prototype, "assetsReturnContributions", void 0);
    return PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios };
var PostPortfolioAnalysisContributionsReturn200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturn200ApplicationJson, _super);
    function PostPortfolioAnalysisContributionsReturn200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturn200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisContributionsReturn200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisContributionsReturn200ApplicationJson };
var PostPortfolioAnalysisContributionsReturnRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturnRequest, _super);
    function PostPortfolioAnalysisContributionsReturnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisContributionsReturnRequestBody)
    ], PostPortfolioAnalysisContributionsReturnRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisContributionsReturnRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisContributionsReturnRequest };
var PostPortfolioAnalysisContributionsReturnResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturnResponse, _super);
    function PostPortfolioAnalysisContributionsReturnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisContributionsReturnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisContributionsReturn200ApplicationJson)
    ], PostPortfolioAnalysisContributionsReturnResponse.prototype, "postPortfolioAnalysisContributionsReturn200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisContributionsReturnResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisContributionsReturnResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisContributionsReturnResponse };
