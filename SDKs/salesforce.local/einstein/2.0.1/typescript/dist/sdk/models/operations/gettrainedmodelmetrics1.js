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
import * as shared from "../shared";
var GetTrainedModelMetrics1PathParams = /** @class */ (function (_super) {
    __extends(GetTrainedModelMetrics1PathParams, _super);
    function GetTrainedModelMetrics1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" }),
        __metadata("design:type", String)
    ], GetTrainedModelMetrics1PathParams.prototype, "modelId", void 0);
    return GetTrainedModelMetrics1PathParams;
}(SpeakeasyBase));
export { GetTrainedModelMetrics1PathParams };
var GetTrainedModelMetrics1Security = /** @class */ (function (_super) {
    __extends(GetTrainedModelMetrics1Security, _super);
    function GetTrainedModelMetrics1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetTrainedModelMetrics1Security.prototype, "bearerToken", void 0);
    return GetTrainedModelMetrics1Security;
}(SpeakeasyBase));
export { GetTrainedModelMetrics1Security };
var GetTrainedModelMetrics1Request = /** @class */ (function (_super) {
    __extends(GetTrainedModelMetrics1Request, _super);
    function GetTrainedModelMetrics1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrainedModelMetrics1PathParams)
    ], GetTrainedModelMetrics1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrainedModelMetrics1Security)
    ], GetTrainedModelMetrics1Request.prototype, "security", void 0);
    return GetTrainedModelMetrics1Request;
}(SpeakeasyBase));
export { GetTrainedModelMetrics1Request };
var GetTrainedModelMetrics1Response = /** @class */ (function (_super) {
    __extends(GetTrainedModelMetrics1Response, _super);
    function GetTrainedModelMetrics1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTrainedModelMetrics1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Metrics)
    ], GetTrainedModelMetrics1Response.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTrainedModelMetrics1Response.prototype, "statusCode", void 0);
    return GetTrainedModelMetrics1Response;
}(SpeakeasyBase));
export { GetTrainedModelMetrics1Response };
