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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetTrainedModelLearningCurvePathParams = /** @class */ (function (_super) {
    __extends(GetTrainedModelLearningCurvePathParams, _super);
    function GetTrainedModelLearningCurvePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" }),
        __metadata("design:type", String)
    ], GetTrainedModelLearningCurvePathParams.prototype, "modelId", void 0);
    return GetTrainedModelLearningCurvePathParams;
}(SpeakeasyBase));
export { GetTrainedModelLearningCurvePathParams };
var GetTrainedModelLearningCurveQueryParams = /** @class */ (function (_super) {
    __extends(GetTrainedModelLearningCurveQueryParams, _super);
    function GetTrainedModelLearningCurveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", String)
    ], GetTrainedModelLearningCurveQueryParams.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTrainedModelLearningCurveQueryParams.prototype, "offset", void 0);
    return GetTrainedModelLearningCurveQueryParams;
}(SpeakeasyBase));
export { GetTrainedModelLearningCurveQueryParams };
var GetTrainedModelLearningCurveSecurity = /** @class */ (function (_super) {
    __extends(GetTrainedModelLearningCurveSecurity, _super);
    function GetTrainedModelLearningCurveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetTrainedModelLearningCurveSecurity.prototype, "bearerToken", void 0);
    return GetTrainedModelLearningCurveSecurity;
}(SpeakeasyBase));
export { GetTrainedModelLearningCurveSecurity };
var GetTrainedModelLearningCurveRequest = /** @class */ (function (_super) {
    __extends(GetTrainedModelLearningCurveRequest, _super);
    function GetTrainedModelLearningCurveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTrainedModelLearningCurvePathParams)
    ], GetTrainedModelLearningCurveRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTrainedModelLearningCurveQueryParams)
    ], GetTrainedModelLearningCurveRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTrainedModelLearningCurveSecurity)
    ], GetTrainedModelLearningCurveRequest.prototype, "security", void 0);
    return GetTrainedModelLearningCurveRequest;
}(SpeakeasyBase));
export { GetTrainedModelLearningCurveRequest };
var GetTrainedModelLearningCurveResponse = /** @class */ (function (_super) {
    __extends(GetTrainedModelLearningCurveResponse, _super);
    function GetTrainedModelLearningCurveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTrainedModelLearningCurveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LearningCurveList)
    ], GetTrainedModelLearningCurveResponse.prototype, "learningCurveList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTrainedModelLearningCurveResponse.prototype, "statusCode", void 0);
    return GetTrainedModelLearningCurveResponse;
}(SpeakeasyBase));
export { GetTrainedModelLearningCurveResponse };
