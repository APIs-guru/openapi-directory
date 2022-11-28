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
var GetTrainedModelLearningCurve1PathParams = /** @class */ (function (_super) {
    __extends(GetTrainedModelLearningCurve1PathParams, _super);
    function GetTrainedModelLearningCurve1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" }),
        __metadata("design:type", String)
    ], GetTrainedModelLearningCurve1PathParams.prototype, "modelId", void 0);
    return GetTrainedModelLearningCurve1PathParams;
}(SpeakeasyBase));
export { GetTrainedModelLearningCurve1PathParams };
var GetTrainedModelLearningCurve1QueryParams = /** @class */ (function (_super) {
    __extends(GetTrainedModelLearningCurve1QueryParams, _super);
    function GetTrainedModelLearningCurve1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", String)
    ], GetTrainedModelLearningCurve1QueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTrainedModelLearningCurve1QueryParams.prototype, "offset", void 0);
    return GetTrainedModelLearningCurve1QueryParams;
}(SpeakeasyBase));
export { GetTrainedModelLearningCurve1QueryParams };
var GetTrainedModelLearningCurve1Security = /** @class */ (function (_super) {
    __extends(GetTrainedModelLearningCurve1Security, _super);
    function GetTrainedModelLearningCurve1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetTrainedModelLearningCurve1Security.prototype, "bearerToken", void 0);
    return GetTrainedModelLearningCurve1Security;
}(SpeakeasyBase));
export { GetTrainedModelLearningCurve1Security };
var GetTrainedModelLearningCurve1Request = /** @class */ (function (_super) {
    __extends(GetTrainedModelLearningCurve1Request, _super);
    function GetTrainedModelLearningCurve1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrainedModelLearningCurve1PathParams)
    ], GetTrainedModelLearningCurve1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrainedModelLearningCurve1QueryParams)
    ], GetTrainedModelLearningCurve1Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrainedModelLearningCurve1Security)
    ], GetTrainedModelLearningCurve1Request.prototype, "security", void 0);
    return GetTrainedModelLearningCurve1Request;
}(SpeakeasyBase));
export { GetTrainedModelLearningCurve1Request };
var GetTrainedModelLearningCurve1Response = /** @class */ (function (_super) {
    __extends(GetTrainedModelLearningCurve1Response, _super);
    function GetTrainedModelLearningCurve1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTrainedModelLearningCurve1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LearningCurveList)
    ], GetTrainedModelLearningCurve1Response.prototype, "learningCurveList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTrainedModelLearningCurve1Response.prototype, "statusCode", void 0);
    return GetTrainedModelLearningCurve1Response;
}(SpeakeasyBase));
export { GetTrainedModelLearningCurve1Response };
