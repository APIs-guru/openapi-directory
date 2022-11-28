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
var PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios, _super);
    function PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios.prototype, "assetsWeights", void 0);
    return PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios };
var PostPortfolioAnalysisDiversificationRatioRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDiversificationRatioRequestBody, _super);
    function PostPortfolioAnalysisDiversificationRatioRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisDiversificationRatioRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisDiversificationRatioRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisDiversificationRatioRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisDiversificationRatioRequestBody;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDiversificationRatioRequestBody };
var PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioDiversificationRatio" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios.prototype, "portfolioDiversificationRatio", void 0);
    return PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios };
var PostPortfolioAnalysisDiversificationRatio200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDiversificationRatio200ApplicationJson, _super);
    function PostPortfolioAnalysisDiversificationRatio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisDiversificationRatio200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisDiversificationRatio200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDiversificationRatio200ApplicationJson };
var PostPortfolioAnalysisDiversificationRatioRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDiversificationRatioRequest, _super);
    function PostPortfolioAnalysisDiversificationRatioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisDiversificationRatioRequestBody)
    ], PostPortfolioAnalysisDiversificationRatioRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisDiversificationRatioRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDiversificationRatioRequest };
var PostPortfolioAnalysisDiversificationRatioResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDiversificationRatioResponse, _super);
    function PostPortfolioAnalysisDiversificationRatioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisDiversificationRatioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisDiversificationRatio200ApplicationJson)
    ], PostPortfolioAnalysisDiversificationRatioResponse.prototype, "postPortfolioAnalysisDiversificationRatio200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisDiversificationRatioResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisDiversificationRatioResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDiversificationRatioResponse };
