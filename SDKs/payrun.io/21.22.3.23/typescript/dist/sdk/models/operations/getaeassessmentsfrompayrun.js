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
var GetAeAssessmentsFromPayRunPathParams = /** @class */ (function (_super) {
    __extends(GetAeAssessmentsFromPayRunPathParams, _super);
    function GetAeAssessmentsFromPayRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetAeAssessmentsFromPayRunPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PayRunId" }),
        __metadata("design:type", String)
    ], GetAeAssessmentsFromPayRunPathParams.prototype, "payRunId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" }),
        __metadata("design:type", String)
    ], GetAeAssessmentsFromPayRunPathParams.prototype, "payScheduleId", void 0);
    return GetAeAssessmentsFromPayRunPathParams;
}(SpeakeasyBase));
export { GetAeAssessmentsFromPayRunPathParams };
var GetAeAssessmentsFromPayRunHeaders = /** @class */ (function (_super) {
    __extends(GetAeAssessmentsFromPayRunHeaders, _super);
    function GetAeAssessmentsFromPayRunHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetAeAssessmentsFromPayRunHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAeAssessmentsFromPayRunHeaders.prototype, "authorization", void 0);
    return GetAeAssessmentsFromPayRunHeaders;
}(SpeakeasyBase));
export { GetAeAssessmentsFromPayRunHeaders };
var GetAeAssessmentsFromPayRunRequest = /** @class */ (function (_super) {
    __extends(GetAeAssessmentsFromPayRunRequest, _super);
    function GetAeAssessmentsFromPayRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAeAssessmentsFromPayRunPathParams)
    ], GetAeAssessmentsFromPayRunRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAeAssessmentsFromPayRunHeaders)
    ], GetAeAssessmentsFromPayRunRequest.prototype, "headers", void 0);
    return GetAeAssessmentsFromPayRunRequest;
}(SpeakeasyBase));
export { GetAeAssessmentsFromPayRunRequest };
var GetAeAssessmentsFromPayRunResponse = /** @class */ (function (_super) {
    __extends(GetAeAssessmentsFromPayRunResponse, _super);
    function GetAeAssessmentsFromPayRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAeAssessmentsFromPayRunResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetAeAssessmentsFromPayRunResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetAeAssessmentsFromPayRunResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAeAssessmentsFromPayRunResponse.prototype, "statusCode", void 0);
    return GetAeAssessmentsFromPayRunResponse;
}(SpeakeasyBase));
export { GetAeAssessmentsFromPayRunResponse };
