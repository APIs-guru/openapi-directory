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
var PublishedOralQuestionTimeGetQueryParams = /** @class */ (function (_super) {
    __extends(PublishedOralQuestionTimeGetQueryParams, _super);
    function PublishedOralQuestionTimeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringBodyIds" }),
        __metadata("design:type", Array)
    ], PublishedOralQuestionTimeGetQueryParams.prototype, "parametersAnsweringBodyIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateEnd" }),
        __metadata("design:type", Date)
    ], PublishedOralQuestionTimeGetQueryParams.prototype, "parametersAnsweringDateEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateStart" }),
        __metadata("design:type", Date)
    ], PublishedOralQuestionTimeGetQueryParams.prototype, "parametersAnsweringDateStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.deadlineDateEnd" }),
        __metadata("design:type", Date)
    ], PublishedOralQuestionTimeGetQueryParams.prototype, "parametersDeadlineDateEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.deadlineDateStart" }),
        __metadata("design:type", Date)
    ], PublishedOralQuestionTimeGetQueryParams.prototype, "parametersDeadlineDateStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.oralQuestionTimeId" }),
        __metadata("design:type", Number)
    ], PublishedOralQuestionTimeGetQueryParams.prototype, "parametersOralQuestionTimeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.skip" }),
        __metadata("design:type", Number)
    ], PublishedOralQuestionTimeGetQueryParams.prototype, "parametersSkip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.take" }),
        __metadata("design:type", Number)
    ], PublishedOralQuestionTimeGetQueryParams.prototype, "parametersTake", void 0);
    return PublishedOralQuestionTimeGetQueryParams;
}(SpeakeasyBase));
export { PublishedOralQuestionTimeGetQueryParams };
var PublishedOralQuestionTimeGetRequest = /** @class */ (function (_super) {
    __extends(PublishedOralQuestionTimeGetRequest, _super);
    function PublishedOralQuestionTimeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PublishedOralQuestionTimeGetQueryParams)
    ], PublishedOralQuestionTimeGetRequest.prototype, "queryParams", void 0);
    return PublishedOralQuestionTimeGetRequest;
}(SpeakeasyBase));
export { PublishedOralQuestionTimeGetRequest };
var PublishedOralQuestionTimeGetResponse = /** @class */ (function (_super) {
    __extends(PublishedOralQuestionTimeGetResponse, _super);
    function PublishedOralQuestionTimeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiResponseListPublishedWrittenQuestion)
    ], PublishedOralQuestionTimeGetResponse.prototype, "apiResponseListPublishedWrittenQuestion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiResponseObject)
    ], PublishedOralQuestionTimeGetResponse.prototype, "apiResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PublishedOralQuestionTimeGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PublishedOralQuestionTimeGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PublishedOralQuestionTimeGetResponse.prototype, "statusCode", void 0);
    return PublishedOralQuestionTimeGetResponse;
}(SpeakeasyBase));
export { PublishedOralQuestionTimeGetResponse };
