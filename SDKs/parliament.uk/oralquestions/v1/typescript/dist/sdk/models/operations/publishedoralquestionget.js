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
export var PublishedOralQuestionGetParametersQuestionTypeEnum;
(function (PublishedOralQuestionGetParametersQuestionTypeEnum) {
    PublishedOralQuestionGetParametersQuestionTypeEnum["Substantive"] = "Substantive";
    PublishedOralQuestionGetParametersQuestionTypeEnum["Topical"] = "Topical";
})(PublishedOralQuestionGetParametersQuestionTypeEnum || (PublishedOralQuestionGetParametersQuestionTypeEnum = {}));
var PublishedOralQuestionGetQueryParams = /** @class */ (function (_super) {
    __extends(PublishedOralQuestionGetQueryParams, _super);
    function PublishedOralQuestionGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringBodyIds" }),
        __metadata("design:type", Array)
    ], PublishedOralQuestionGetQueryParams.prototype, "parametersAnsweringBodyIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateEnd" }),
        __metadata("design:type", Date)
    ], PublishedOralQuestionGetQueryParams.prototype, "parametersAnsweringDateEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateStart" }),
        __metadata("design:type", Date)
    ], PublishedOralQuestionGetQueryParams.prototype, "parametersAnsweringDateStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.askingMemberIds" }),
        __metadata("design:type", Array)
    ], PublishedOralQuestionGetQueryParams.prototype, "parametersAskingMemberIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.oralQuestionTimeId" }),
        __metadata("design:type", Number)
    ], PublishedOralQuestionGetQueryParams.prototype, "parametersOralQuestionTimeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.questionType" }),
        __metadata("design:type", String)
    ], PublishedOralQuestionGetQueryParams.prototype, "parametersQuestionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.skip" }),
        __metadata("design:type", Number)
    ], PublishedOralQuestionGetQueryParams.prototype, "parametersSkip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.take" }),
        __metadata("design:type", Number)
    ], PublishedOralQuestionGetQueryParams.prototype, "parametersTake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.uINs" }),
        __metadata("design:type", Array)
    ], PublishedOralQuestionGetQueryParams.prototype, "parametersUINs", void 0);
    return PublishedOralQuestionGetQueryParams;
}(SpeakeasyBase));
export { PublishedOralQuestionGetQueryParams };
var PublishedOralQuestionGetRequest = /** @class */ (function (_super) {
    __extends(PublishedOralQuestionGetRequest, _super);
    function PublishedOralQuestionGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PublishedOralQuestionGetQueryParams)
    ], PublishedOralQuestionGetRequest.prototype, "queryParams", void 0);
    return PublishedOralQuestionGetRequest;
}(SpeakeasyBase));
export { PublishedOralQuestionGetRequest };
var PublishedOralQuestionGetResponse = /** @class */ (function (_super) {
    __extends(PublishedOralQuestionGetResponse, _super);
    function PublishedOralQuestionGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiResponseListPublishedWrittenQuestion)
    ], PublishedOralQuestionGetResponse.prototype, "apiResponseListPublishedWrittenQuestion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiResponseObject)
    ], PublishedOralQuestionGetResponse.prototype, "apiResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PublishedOralQuestionGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PublishedOralQuestionGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PublishedOralQuestionGetResponse.prototype, "statusCode", void 0);
    return PublishedOralQuestionGetResponse;
}(SpeakeasyBase));
export { PublishedOralQuestionGetResponse };
