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
export var TrainResponseStatusEnum;
(function (TrainResponseStatusEnum) {
    TrainResponseStatusEnum["Queued"] = "QUEUED";
    TrainResponseStatusEnum["Running"] = "RUNNING";
    TrainResponseStatusEnum["Succeeded"] = "SUCCEEDED";
    TrainResponseStatusEnum["Failed"] = "FAILED";
    TrainResponseStatusEnum["Killed"] = "KILLED";
    TrainResponseStatusEnum["FailedWithRetries"] = "FAILED_WITH_RETRIES";
})(TrainResponseStatusEnum || (TrainResponseStatusEnum = {}));
var TrainResponse = /** @class */ (function (_super) {
    __extends(TrainResponse, _super);
    function TrainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], TrainResponse.prototype, "algorithm", void 0);
    __decorate([
        Metadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], TrainResponse.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=datasetId" }),
        __metadata("design:type", Number)
    ], TrainResponse.prototype, "datasetId", void 0);
    __decorate([
        Metadata({ data: "json, name=datasetVersionId" }),
        __metadata("design:type", Number)
    ], TrainResponse.prototype, "datasetVersionId", void 0);
    __decorate([
        Metadata({ data: "json, name=epochs" }),
        __metadata("design:type", Number)
    ], TrainResponse.prototype, "epochs", void 0);
    __decorate([
        Metadata({ data: "json, name=failureMsg" }),
        __metadata("design:type", String)
    ], TrainResponse.prototype, "failureMsg", void 0);
    __decorate([
        Metadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], TrainResponse.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "json, name=learningRate" }),
        __metadata("design:type", Number)
    ], TrainResponse.prototype, "learningRate", void 0);
    __decorate([
        Metadata({ data: "json, name=modelId" }),
        __metadata("design:type", String)
    ], TrainResponse.prototype, "modelId", void 0);
    __decorate([
        Metadata({ data: "json, name=modelType" }),
        __metadata("design:type", String)
    ], TrainResponse.prototype, "modelType", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TrainResponse.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], TrainResponse.prototype, "object", void 0);
    __decorate([
        Metadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], TrainResponse.prototype, "progress", void 0);
    __decorate([
        Metadata({ data: "json, name=queuePosition" }),
        __metadata("design:type", Number)
    ], TrainResponse.prototype, "queuePosition", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TrainResponse.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=trainParams" }),
        __metadata("design:type", String)
    ], TrainResponse.prototype, "trainParams", void 0);
    __decorate([
        Metadata({ data: "json, name=trainStats" }),
        __metadata("design:type", String)
    ], TrainResponse.prototype, "trainStats", void 0);
    __decorate([
        Metadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], TrainResponse.prototype, "updatedAt", void 0);
    return TrainResponse;
}(SpeakeasyBase));
export { TrainResponse };
