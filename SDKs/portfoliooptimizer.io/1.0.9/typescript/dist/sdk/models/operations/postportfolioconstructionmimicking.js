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
var PostPortfolioConstructionMimickingRequestBodyAssets = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionMimickingRequestBodyAssets, _super);
    function PostPortfolioConstructionMimickingRequestBodyAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionMimickingRequestBodyAssets.prototype, "assetReturns", void 0);
    return PostPortfolioConstructionMimickingRequestBodyAssets;
}(SpeakeasyBase));
export { PostPortfolioConstructionMimickingRequestBodyAssets };
var PostPortfolioConstructionMimickingRequestBodyConstraints = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionMimickingRequestBodyConstraints, _super);
    function PostPortfolioConstructionMimickingRequestBodyConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionMimickingRequestBodyConstraints.prototype, "assetsGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsGroupsMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionMimickingRequestBodyConstraints.prototype, "assetsGroupsMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsGroupsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionMimickingRequestBodyConstraints.prototype, "maximumAssetsGroupsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionMimickingRequestBodyConstraints.prototype, "maximumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionMimickingRequestBodyConstraints.prototype, "maximumPortfolioExposure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionMimickingRequestBodyConstraints.prototype, "minimumAssetsWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionMimickingRequestBodyConstraints.prototype, "minimumPortfolioExposure", void 0);
    return PostPortfolioConstructionMimickingRequestBodyConstraints;
}(SpeakeasyBase));
export { PostPortfolioConstructionMimickingRequestBodyConstraints };
var PostPortfolioConstructionMimickingRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionMimickingRequestBody, _super);
    function PostPortfolioConstructionMimickingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostPortfolioConstructionMimickingRequestBodyAssets }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionMimickingRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benchmarkReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionMimickingRequestBody.prototype, "benchmarkReturns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraints" }),
        __metadata("design:type", PostPortfolioConstructionMimickingRequestBodyConstraints)
    ], PostPortfolioConstructionMimickingRequestBody.prototype, "constraints", void 0);
    return PostPortfolioConstructionMimickingRequestBody;
}(SpeakeasyBase));
export { PostPortfolioConstructionMimickingRequestBody };
var PostPortfolioConstructionMimicking200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionMimicking200ApplicationJson, _super);
    function PostPortfolioConstructionMimicking200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioConstructionMimicking200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioConstructionMimicking200ApplicationJson;
}(SpeakeasyBase));
export { PostPortfolioConstructionMimicking200ApplicationJson };
var PostPortfolioConstructionMimickingRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionMimickingRequest, _super);
    function PostPortfolioConstructionMimickingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioConstructionMimickingRequestBody)
    ], PostPortfolioConstructionMimickingRequest.prototype, "request", void 0);
    return PostPortfolioConstructionMimickingRequest;
}(SpeakeasyBase));
export { PostPortfolioConstructionMimickingRequest };
var PostPortfolioConstructionMimickingResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioConstructionMimickingResponse, _super);
    function PostPortfolioConstructionMimickingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioConstructionMimickingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioConstructionMimicking200ApplicationJson)
    ], PostPortfolioConstructionMimickingResponse.prototype, "postPortfolioConstructionMimicking200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioConstructionMimickingResponse.prototype, "statusCode", void 0);
    return PostPortfolioConstructionMimickingResponse;
}(SpeakeasyBase));
export { PostPortfolioConstructionMimickingResponse };
