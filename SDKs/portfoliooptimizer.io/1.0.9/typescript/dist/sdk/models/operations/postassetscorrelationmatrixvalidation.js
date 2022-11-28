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
var PostAssetsCorrelationMatrixValidationRequestBody = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixValidationRequestBody, _super);
    function PostAssetsCorrelationMatrixValidationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixValidationRequestBody.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" }),
        __metadata("design:type", Array)
    ], PostAssetsCorrelationMatrixValidationRequestBody.prototype, "assetsCorrelationMatrix", void 0);
    return PostAssetsCorrelationMatrixValidationRequestBody;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixValidationRequestBody };
export var PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum;
(function (PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum) {
    PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum["ValidCorrelationMatrix"] = "valid correlation matrix";
    PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum["InvalidCorrelationMatrixNonSymmetricMatrix"] = "invalid correlation matrix - non symmetric matrix";
    PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum["InvalidCorrelationMatrixNonPositiveDiagonalElements"] = "invalid correlation matrix - non positive diagonal elements";
    PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum["InvalidCorrelationMatrixNonPositiveSemiDefiniteMatrix"] = "invalid correlation matrix - non positive semi-definite matrix";
})(PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum || (PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum = {}));
var PostAssetsCorrelationMatrixValidation200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixValidation200ApplicationJson, _super);
    function PostAssetsCorrelationMatrixValidation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostAssetsCorrelationMatrixValidation200ApplicationJson.prototype, "message", void 0);
    return PostAssetsCorrelationMatrixValidation200ApplicationJson;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixValidation200ApplicationJson };
var PostAssetsCorrelationMatrixValidationRequest = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixValidationRequest, _super);
    function PostAssetsCorrelationMatrixValidationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAssetsCorrelationMatrixValidationRequestBody)
    ], PostAssetsCorrelationMatrixValidationRequest.prototype, "request", void 0);
    return PostAssetsCorrelationMatrixValidationRequest;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixValidationRequest };
var PostAssetsCorrelationMatrixValidationResponse = /** @class */ (function (_super) {
    __extends(PostAssetsCorrelationMatrixValidationResponse, _super);
    function PostAssetsCorrelationMatrixValidationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAssetsCorrelationMatrixValidationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAssetsCorrelationMatrixValidation200ApplicationJson)
    ], PostAssetsCorrelationMatrixValidationResponse.prototype, "postAssetsCorrelationMatrixValidation200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAssetsCorrelationMatrixValidationResponse.prototype, "statusCode", void 0);
    return PostAssetsCorrelationMatrixValidationResponse;
}(SpeakeasyBase));
export { PostAssetsCorrelationMatrixValidationResponse };
