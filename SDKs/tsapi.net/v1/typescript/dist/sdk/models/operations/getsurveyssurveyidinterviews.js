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
var GetSurveysSurveyIdInterviewsPathParams = /** @class */ (function (_super) {
    __extends(GetSurveysSurveyIdInterviewsPathParams, _super);
    function GetSurveysSurveyIdInterviewsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=surveyId" }),
        __metadata("design:type", String)
    ], GetSurveysSurveyIdInterviewsPathParams.prototype, "surveyId", void 0);
    return GetSurveysSurveyIdInterviewsPathParams;
}(SpeakeasyBase));
export { GetSurveysSurveyIdInterviewsPathParams };
var GetSurveysSurveyIdInterviewsQueryParams = /** @class */ (function (_super) {
    __extends(GetSurveysSurveyIdInterviewsQueryParams, _super);
    function GetSurveysSurveyIdInterviewsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxLength" }),
        __metadata("design:type", Number)
    ], GetSurveysSurveyIdInterviewsQueryParams.prototype, "maxLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetSurveysSurveyIdInterviewsQueryParams.prototype, "start", void 0);
    return GetSurveysSurveyIdInterviewsQueryParams;
}(SpeakeasyBase));
export { GetSurveysSurveyIdInterviewsQueryParams };
var GetSurveysSurveyIdInterviewsRequest = /** @class */ (function (_super) {
    __extends(GetSurveysSurveyIdInterviewsRequest, _super);
    function GetSurveysSurveyIdInterviewsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSurveysSurveyIdInterviewsPathParams)
    ], GetSurveysSurveyIdInterviewsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSurveysSurveyIdInterviewsQueryParams)
    ], GetSurveysSurveyIdInterviewsRequest.prototype, "queryParams", void 0);
    return GetSurveysSurveyIdInterviewsRequest;
}(SpeakeasyBase));
export { GetSurveysSurveyIdInterviewsRequest };
var GetSurveysSurveyIdInterviewsResponse = /** @class */ (function (_super) {
    __extends(GetSurveysSurveyIdInterviewsResponse, _super);
    function GetSurveysSurveyIdInterviewsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSurveysSurveyIdInterviewsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSurveysSurveyIdInterviewsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Interview }),
        __metadata("design:type", Array)
    ], GetSurveysSurveyIdInterviewsResponse.prototype, "interviews", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSurveysSurveyIdInterviewsResponse.prototype, "statusCode", void 0);
    return GetSurveysSurveyIdInterviewsResponse;
}(SpeakeasyBase));
export { GetSurveysSurveyIdInterviewsResponse };
