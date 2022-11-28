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
var PostPortfolioConstructionRandomRequestBodyConstraints = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionRandomRequestBodyConstraints, _super);
    function PostPortfolioConstructionRandomRequestBodyConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionRandomRequestBodyConstraints.prototype, "maximumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionRandomRequestBodyConstraints.prototype, "maximumPortfolioExposure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionRandomRequestBodyConstraints.prototype, "minimumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionRandomRequestBodyConstraints.prototype, "minimumPortfolioExposure", void 0);
    return PostPortfolioConstructionRandomRequestBodyConstraints;
}(SpeakeasyBase));
export { PostPortfolioConstructionRandomRequestBodyConstraints };
var PostPortfolioConstructionRandomRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionRandomRequestBody, _super);
    function PostPortfolioConstructionRandomRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionRandomRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraints" }),
        __metadata("design:type", PostPortfolioConstructionRandomRequestBodyConstraints)
    ], PostPortfolioConstructionRandomRequestBody.prototype, "constraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios" }),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionRandomRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioConstructionRandomRequestBody;
}(SpeakeasyBase));
export { PostPortfolioConstructionRandomRequestBody };
var PostPortfolioConstructionRandom200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionRandom200ApplicationJsonPortfolios, _super);
    function PostPortfolioConstructionRandom200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionRandom200ApplicationJsonPortfolios.prototype, "assetsWeights", void 0);
    return PostPortfolioConstructionRandom200ApplicationJsonPortfolios;
}(SpeakeasyBase));
export { PostPortfolioConstructionRandom200ApplicationJsonPortfolios };
var PostPortfolioConstructionRandom200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionRandom200ApplicationJson, _super);
    function PostPortfolioConstructionRandom200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioConstructionRandom200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionRandom200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioConstructionRandom200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioConstructionRandom200ApplicationJson };
var PostPortfolioConstructionRandomRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionRandomRequest, _super);
    function PostPortfolioConstructionRandomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioConstructionRandomRequestBody)
    ], PostPortfolioConstructionRandomRequest.prototype, "request", void 0);
    return PostPortfolioConstructionRandomRequest;
}(SpeakeasyBase));
export { PostPortfolioConstructionRandomRequest };
var PostPortfolioConstructionRandomResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionRandomResponse, _super);
    function PostPortfolioConstructionRandomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioConstructionRandomResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioConstructionRandom200ApplicationJson)
    ], PostPortfolioConstructionRandomResponse.prototype, "postPortfolioConstructionRandom200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionRandomResponse.prototype, "statusCode", void 0);
    return PostPortfolioConstructionRandomResponse;
}(SpeakeasyBase));
export { PostPortfolioConstructionRandomResponse };
