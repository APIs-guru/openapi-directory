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
var PostFactorsResidualizationRequestBodyFactors = /** @class */ (function (_super) {
    __extends(PostFactorsResidualizationRequestBodyFactors, _super);
    function PostFactorsResidualizationRequestBodyFactors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=factorReturns" }),
        __metadata("design:type", Array)
    ], PostFactorsResidualizationRequestBodyFactors.prototype, "factorReturns", void 0);
    return PostFactorsResidualizationRequestBodyFactors;
}(SpeakeasyBase));
export { PostFactorsResidualizationRequestBodyFactors };
var PostFactorsResidualizationRequestBody = /** @class */ (function (_super) {
    __extends(PostFactorsResidualizationRequestBody, _super);
    function PostFactorsResidualizationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=factors", elemType: PostFactorsResidualizationRequestBodyFactors }),
        __metadata("design:type", Array)
    ], PostFactorsResidualizationRequestBody.prototype, "factors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=residualizedFactor" }),
        __metadata("design:type", Number)
    ], PostFactorsResidualizationRequestBody.prototype, "residualizedFactor", void 0);
    return PostFactorsResidualizationRequestBody;
}(SpeakeasyBase));
export { PostFactorsResidualizationRequestBody };
var PostFactorsResidualization200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostFactorsResidualization200ApplicationJson, _super);
    function PostFactorsResidualization200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=residualizedFactorReturns" }),
        __metadata("design:type", Array)
    ], PostFactorsResidualization200ApplicationJson.prototype, "residualizedFactorReturns", void 0);
    return PostFactorsResidualization200ApplicationJson;
}(SpeakeasyBase));
export { PostFactorsResidualization200ApplicationJson };
var PostFactorsResidualizationRequest = /** @class */ (function (_super) {
    __extends(PostFactorsResidualizationRequest, _super);
    function PostFactorsResidualizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostFactorsResidualizationRequestBody)
    ], PostFactorsResidualizationRequest.prototype, "request", void 0);
    return PostFactorsResidualizationRequest;
}(SpeakeasyBase));
export { PostFactorsResidualizationRequest };
var PostFactorsResidualizationResponse = /** @class */ (function (_super) {
    __extends(PostFactorsResidualizationResponse, _super);
    function PostFactorsResidualizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFactorsResidualizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFactorsResidualization200ApplicationJson)
    ], PostFactorsResidualizationResponse.prototype, "postFactorsResidualization200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFactorsResidualizationResponse.prototype, "statusCode", void 0);
    return PostFactorsResidualizationResponse;
}(SpeakeasyBase));
export { PostFactorsResidualizationResponse };
