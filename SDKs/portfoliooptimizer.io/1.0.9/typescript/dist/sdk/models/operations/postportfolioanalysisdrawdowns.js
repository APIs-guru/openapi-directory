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
var PostPortfolioAnalysisDrawdownsRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDrawdownsRequestBodyPortfolios, _super);
    function PostPortfolioAnalysisDrawdownsRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioValues" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisDrawdownsRequestBodyPortfolios.prototype, "portfolioValues", void 0);
    return PostPortfolioAnalysisDrawdownsRequestBodyPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDrawdownsRequestBodyPortfolios };
var PostPortfolioAnalysisDrawdownsRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDrawdownsRequestBody, _super);
    function PostPortfolioAnalysisDrawdownsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisDrawdownsRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisDrawdownsRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisDrawdownsRequestBody;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDrawdownsRequestBody };
var PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns, _super);
    function PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drawdownBottom" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns.prototype, "drawdownBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drawdownDepth" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns.prototype, "drawdownDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drawdownEnd" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns.prototype, "drawdownEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drawdownStart" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns.prototype, "drawdownStart", void 0);
    return PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns };
var PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioDrawdowns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios.prototype, "portfolioDrawdowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioWorstDrawdowns", elemType: PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios.prototype, "portfolioWorstDrawdowns", void 0);
    return PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios };
var PostPortfolioAnalysisDrawdowns200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDrawdowns200ApplicationJson, _super);
    function PostPortfolioAnalysisDrawdowns200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisDrawdowns200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisDrawdowns200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDrawdowns200ApplicationJson };
var PostPortfolioAnalysisDrawdownsRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDrawdownsRequest, _super);
    function PostPortfolioAnalysisDrawdownsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisDrawdownsRequestBody)
    ], PostPortfolioAnalysisDrawdownsRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisDrawdownsRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDrawdownsRequest };
var PostPortfolioAnalysisDrawdownsResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisDrawdownsResponse, _super);
    function PostPortfolioAnalysisDrawdownsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisDrawdownsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisDrawdowns200ApplicationJson)
    ], PostPortfolioAnalysisDrawdownsResponse.prototype, "postPortfolioAnalysisDrawdowns200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisDrawdownsResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisDrawdownsResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisDrawdownsResponse };
