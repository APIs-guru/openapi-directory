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
var PostPortfolioConstructionInvestableRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionInvestableRequestBody, _super);
    function PostPortfolioConstructionInvestableRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionInvestableRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionInvestableRequestBody.prototype, "assetsGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroupsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionInvestableRequestBody.prototype, "assetsGroupsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsMinimumNotionalValues" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionInvestableRequestBody.prototype, "assetsMinimumNotionalValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsMinimumPositions" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionInvestableRequestBody.prototype, "assetsMinimumPositions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsPrices" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionInvestableRequestBody.prototype, "assetsPrices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsSizeLots" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionInvestableRequestBody.prototype, "assetsSizeLots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionInvestableRequestBody.prototype, "assetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsGroupsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionInvestableRequestBody.prototype, "maximumAssetsGroupsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolioValue" }),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionInvestableRequestBody.prototype, "portfolioValue", void 0);
    return PostPortfolioConstructionInvestableRequestBody;
}(SpeakeasyBase));
export { PostPortfolioConstructionInvestableRequestBody };
var PostPortfolioConstructionInvestable200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionInvestable200ApplicationJson, _super);
    function PostPortfolioConstructionInvestable200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsPositions" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionInvestable200ApplicationJson.prototype, "assetsPositions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionInvestable200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioConstructionInvestable200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioConstructionInvestable200ApplicationJson };
var PostPortfolioConstructionInvestableRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionInvestableRequest, _super);
    function PostPortfolioConstructionInvestableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioConstructionInvestableRequestBody)
    ], PostPortfolioConstructionInvestableRequest.prototype, "request", void 0);
    return PostPortfolioConstructionInvestableRequest;
}(SpeakeasyBase));
export { PostPortfolioConstructionInvestableRequest };
var PostPortfolioConstructionInvestableResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionInvestableResponse, _super);
    function PostPortfolioConstructionInvestableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioConstructionInvestableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioConstructionInvestable200ApplicationJson)
    ], PostPortfolioConstructionInvestableResponse.prototype, "postPortfolioConstructionInvestable200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionInvestableResponse.prototype, "statusCode", void 0);
    return PostPortfolioConstructionInvestableResponse;
}(SpeakeasyBase));
export { PostPortfolioConstructionInvestableResponse };
