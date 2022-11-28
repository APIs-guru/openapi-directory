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
var PostPortfolioAnalysisReturn200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisReturn200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisReturn200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioReturn" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisReturn200ApplicationJsonPortfolios.prototype, "portfolioReturn", void 0);
    return PostPortfolioAnalysisReturn200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioAnalysisReturn200ApplicationJsonPortfolios };
var PostPortfolioAnalysisReturn200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisReturn200ApplicationJson, _super);
    function PostPortfolioAnalysisReturn200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisReturn200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisReturn200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisReturn200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioAnalysisReturn200ApplicationJson };
var PostPortfolioAnalysisReturnRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisReturnRequest, _super);
    function PostPortfolioAnalysisReturnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PostPortfolioAnalysisReturnRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisReturnRequest;
}(SpeakeasyBase));
export { PostPortfolioAnalysisReturnRequest };
var PostPortfolioAnalysisReturnResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisReturnResponse, _super);
    function PostPortfolioAnalysisReturnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisReturnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioAnalysisReturn200ApplicationJson)
    ], PostPortfolioAnalysisReturnResponse.prototype, "postPortfolioAnalysisReturn200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisReturnResponse.prototype, "statusCode", void 0);
    return PostPortfolioAnalysisReturnResponse;
}(SpeakeasyBase));
export { PostPortfolioAnalysisReturnResponse };
