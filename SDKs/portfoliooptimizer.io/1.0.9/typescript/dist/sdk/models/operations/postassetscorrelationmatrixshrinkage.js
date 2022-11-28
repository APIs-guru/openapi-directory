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
export var PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum;
(function (PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum) {
    PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum["MinimumEquicorrelationMatrix"] = "minimumEquicorrelationMatrix";
    PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum["ZeroEquicorrelationMatrix"] = "zeroEquicorrelationMatrix";
    PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum["MaximumEquicorrelationMatrix"] = "maximumEquicorrelationMatrix";
})(PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum || (PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum = {}));
var PostAssetsCorrelationMatrixShrinkageRequestBody1 = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixShrinkageRequestBody1, _super);
    function PostAssetsCorrelationMatrixShrinkageRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixShrinkageRequestBody1.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixShrinkageRequestBody1.prototype, "assetsCorrelationMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shrinkageFactor" }),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixShrinkageRequestBody1.prototype, "shrinkageFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shrinkageTarget" }),
        __metadata("design:type", String)
    ], PostAssetsCorrelationMatrixShrinkageRequestBody1.prototype, "shrinkageTarget", void 0);
    return PostAssetsCorrelationMatrixShrinkageRequestBody1;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixShrinkageRequestBody1 };
var PostAssetsCorrelationMatrixShrinkageRequestBody2 = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixShrinkageRequestBody2, _super);
    function PostAssetsCorrelationMatrixShrinkageRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixShrinkageRequestBody2.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixShrinkageRequestBody2.prototype, "assetsCorrelationMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shrinkageFactor" }),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixShrinkageRequestBody2.prototype, "shrinkageFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shrinkageTargetCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixShrinkageRequestBody2.prototype, "shrinkageTargetCorrelationMatrix", void 0);
    return PostAssetsCorrelationMatrixShrinkageRequestBody2;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixShrinkageRequestBody2 };
var PostAssetsCorrelationMatrixShrinkage200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixShrinkage200ApplicationJson, _super);
    function PostAssetsCorrelationMatrixShrinkage200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixShrinkage200ApplicationJson.prototype, "assetsCorrelationMatrix", void 0);
    return PostAssetsCorrelationMatrixShrinkage200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixShrinkage200ApplicationJson };
var PostAssetsCorrelationMatrixShrinkageRequest = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixShrinkageRequest, _super);
    function PostAssetsCorrelationMatrixShrinkageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostAssetsCorrelationMatrixShrinkageRequest.prototype, "request", void 0);
    return PostAssetsCorrelationMatrixShrinkageRequest;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixShrinkageRequest };
var PostAssetsCorrelationMatrixShrinkageResponse = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixShrinkageResponse, _super);
    function PostAssetsCorrelationMatrixShrinkageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsCorrelationMatrixShrinkageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsCorrelationMatrixShrinkage200ApplicationJson)
    ], PostAssetsCorrelationMatrixShrinkageResponse.prototype, "postAssetsCorrelationMatrixShrinkage200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixShrinkageResponse.prototype, "statusCode", void 0);
    return PostAssetsCorrelationMatrixShrinkageResponse;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixShrinkageResponse };
