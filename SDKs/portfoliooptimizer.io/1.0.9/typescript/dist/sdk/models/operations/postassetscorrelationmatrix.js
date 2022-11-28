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
var PostAssetsCorrelationMatrixRequestBody1Assets = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixRequestBody1Assets, _super);
    function PostAssetsCorrelationMatrixRequestBody1Assets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetReturns" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixRequestBody1Assets.prototype, "assetReturns", void 0);
    return PostAssetsCorrelationMatrixRequestBody1Assets;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixRequestBody1Assets };
var PostAssetsCorrelationMatrixRequestBody1 = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixRequestBody1, _super);
    function PostAssetsCorrelationMatrixRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsCorrelationMatrixRequestBody1Assets }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixRequestBody1.prototype, "assets", void 0);
    return PostAssetsCorrelationMatrixRequestBody1;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixRequestBody1 };
var PostAssetsCorrelationMatrixRequestBody2 = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixRequestBody2, _super);
    function PostAssetsCorrelationMatrixRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixRequestBody2.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixRequestBody2.prototype, "assetsCovarianceMatrix", void 0);
    return PostAssetsCorrelationMatrixRequestBody2;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixRequestBody2 };
var PostAssetsCorrelationMatrix200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrix200ApplicationJson, _super);
    function PostAssetsCorrelationMatrix200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrix200ApplicationJson.prototype, "assetsCorrelationMatrix", void 0);
    return PostAssetsCorrelationMatrix200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrix200ApplicationJson };
var PostAssetsCorrelationMatrixRequest = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixRequest, _super);
    function PostAssetsCorrelationMatrixRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAssetsCorrelationMatrixRequest.prototype, "request", void 0);
    return PostAssetsCorrelationMatrixRequest;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixRequest };
var PostAssetsCorrelationMatrixResponse = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixResponse, _super);
    function PostAssetsCorrelationMatrixResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsCorrelationMatrixResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsCorrelationMatrix200ApplicationJson)
    ], PostAssetsCorrelationMatrixResponse.prototype, "postAssetsCorrelationMatrix200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixResponse.prototype, "statusCode", void 0);
    return PostAssetsCorrelationMatrixResponse;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixResponse };
