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
var PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios, _super);
    function PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios.prototype, "portfolioReturns", void 0);
    return PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios };
var PostPortfolioAnalysisTrackingErrorRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisTrackingErrorRequestBody, _super);
    function PostPortfolioAnalysisTrackingErrorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benchmarkReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisTrackingErrorRequestBody.prototype, "benchmarkReturns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisTrackingErrorRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisTrackingErrorRequestBody;
}(SpeakeasyBase));
export { PostPortfolioAnalysisTrackingErrorRequestBody };
var PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioTrackingError" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios.prototype, "portfolioTrackingError", void 0);
    return PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios };
var PostPortfolioAnalysisTrackingError200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisTrackingError200ApplicationJson, _super);
    function PostPortfolioAnalysisTrackingError200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisTrackingError200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisTrackingError200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisTrackingError200ApplicationJson };
var PostPortfolioAnalysisTrackingErrorRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisTrackingErrorRequest, _super);
    function PostPortfolioAnalysisTrackingErrorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisTrackingErrorRequestBody)
    ], PostPortfolioAnalysisTrackingErrorRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisTrackingErrorRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisTrackingErrorRequest };
var PostPortfolioAnalysisTrackingErrorResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisTrackingErrorResponse, _super);
    function PostPortfolioAnalysisTrackingErrorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisTrackingErrorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisTrackingError200ApplicationJson)
    ], PostPortfolioAnalysisTrackingErrorResponse.prototype, "postPortfolioAnalysisTrackingError200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisTrackingErrorResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisTrackingErrorResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisTrackingErrorResponse };
