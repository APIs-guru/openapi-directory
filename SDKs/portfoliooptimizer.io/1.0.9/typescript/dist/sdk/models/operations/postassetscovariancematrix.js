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
var PostAssetsCovarianceMatrixRequestBody1Assets = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrixRequestBody1Assets, _super);
    function PostAssetsCovarianceMatrixRequestBody1Assets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetReturns" }),
        __metadata("design:type", Array)
    ], PostAssetsCovarianceMatrixRequestBody1Assets.prototype, "assetReturns", void 0);
    return PostAssetsCovarianceMatrixRequestBody1Assets;
}(SpeakeasyBase));
export { PostAssetsCovarianceMatrixRequestBody1Assets };
var PostAssetsCovarianceMatrixRequestBody1 = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrixRequestBody1, _super);
    function PostAssetsCovarianceMatrixRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsCovarianceMatrixRequestBody1Assets }),
        __metadata("design:type", Array)
    ], PostAssetsCovarianceMatrixRequestBody1.prototype, "assets", void 0);
    return PostAssetsCovarianceMatrixRequestBody1;
}(SpeakeasyBase));
export { PostAssetsCovarianceMatrixRequestBody1 };
var PostAssetsCovarianceMatrixRequestBody2 = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrixRequestBody2, _super);
    function PostAssetsCovarianceMatrixRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostAssetsCovarianceMatrixRequestBody2.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCovarianceMatrixRequestBody2.prototype, "assetsCorrelationMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsVariances" }),
        __metadata("design:type", Array)
    ], PostAssetsCovarianceMatrixRequestBody2.prototype, "assetsVariances", void 0);
    return PostAssetsCovarianceMatrixRequestBody2;
}(SpeakeasyBase));
export { PostAssetsCovarianceMatrixRequestBody2 };
var PostAssetsCovarianceMatrixRequestBody3 = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrixRequestBody3, _super);
    function PostAssetsCovarianceMatrixRequestBody3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostAssetsCovarianceMatrixRequestBody3.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCovarianceMatrixRequestBody3.prototype, "assetsCorrelationMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsVolatilities" }),
        __metadata("design:type", Array)
    ], PostAssetsCovarianceMatrixRequestBody3.prototype, "assetsVolatilities", void 0);
    return PostAssetsCovarianceMatrixRequestBody3;
}(SpeakeasyBase));
export { PostAssetsCovarianceMatrixRequestBody3 };
var PostAssetsCovarianceMatrix200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrix200ApplicationJson, _super);
    function PostAssetsCovarianceMatrix200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCovarianceMatrix200ApplicationJson.prototype, "assetsCovarianceMatrix", void 0);
    return PostAssetsCovarianceMatrix200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsCovarianceMatrix200ApplicationJson };
var PostAssetsCovarianceMatrixRequest = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrixRequest, _super);
    function PostAssetsCovarianceMatrixRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAssetsCovarianceMatrixRequest.prototype, "request", void 0);
    return PostAssetsCovarianceMatrixRequest;
}(SpeakeasyBase));
export { PostAssetsCovarianceMatrixRequest };
var PostAssetsCovarianceMatrixResponse = /** @class */ (function (_super) {
    __extends(PostAssetsCovarianceMatrixResponse, _super);
    function PostAssetsCovarianceMatrixResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsCovarianceMatrixResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsCovarianceMatrix200ApplicationJson)
    ], PostAssetsCovarianceMatrixResponse.prototype, "postAssetsCovarianceMatrix200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsCovarianceMatrixResponse.prototype, "statusCode", void 0);
    return PostAssetsCovarianceMatrixResponse;
}(SpeakeasyBase));
export { PostAssetsCovarianceMatrixResponse };
