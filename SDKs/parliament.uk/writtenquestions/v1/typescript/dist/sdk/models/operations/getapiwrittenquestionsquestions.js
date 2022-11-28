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
var GetApiWrittenquestionsQuestionsQueryParams = /** @class */ (function (_super) {
    __extends(GetApiWrittenquestionsQuestionsQueryParams, _super);
    function GetApiWrittenquestionsQuestionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answered" }),
        __metadata("design:type", String)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "answered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answeredWhenFrom" }),
        __metadata("design:type", Date)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "answeredWhenFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answeredWhenTo" }),
        __metadata("design:type", Date)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "answeredWhenTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answeringBodies" }),
        __metadata("design:type", Array)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "answeringBodies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answeringMemberId" }),
        __metadata("design:type", Number)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "answeringMemberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=askingMemberId" }),
        __metadata("design:type", Number)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "askingMemberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctedWhenFrom" }),
        __metadata("design:type", Date)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "correctedWhenFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctedWhenTo" }),
        __metadata("design:type", Date)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "correctedWhenTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandMember" }),
        __metadata("design:type", Boolean)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "expandMember", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=house" }),
        __metadata("design:type", String)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeWithdrawn" }),
        __metadata("design:type", Boolean)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "includeWithdrawn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=members" }),
        __metadata("design:type", Array)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=questionStatus" }),
        __metadata("design:type", String)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "questionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" }),
        __metadata("design:type", String)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tabledWhenFrom" }),
        __metadata("design:type", Date)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "tabledWhenFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tabledWhenTo" }),
        __metadata("design:type", Date)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "tabledWhenTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "take", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uIN" }),
        __metadata("design:type", String)
    ], GetApiWrittenquestionsQuestionsQueryParams.prototype, "uIn", void 0);
    return GetApiWrittenquestionsQuestionsQueryParams;
}(SpeakeasyBase));
export { GetApiWrittenquestionsQuestionsQueryParams };
var GetApiWrittenquestionsQuestionsRequest = /** @class */ (function (_super) {
    __extends(GetApiWrittenquestionsQuestionsRequest, _super);
    function GetApiWrittenquestionsQuestionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiWrittenquestionsQuestionsQueryParams)
    ], GetApiWrittenquestionsQuestionsRequest.prototype, "queryParams", void 0);
    return GetApiWrittenquestionsQuestionsRequest;
}(SpeakeasyBase));
export { GetApiWrittenquestionsQuestionsRequest };
var GetApiWrittenquestionsQuestionsResponse = /** @class */ (function (_super) {
    __extends(GetApiWrittenquestionsQuestionsResponse, _super);
    function GetApiWrittenquestionsQuestionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiWrittenquestionsQuestionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiWrittenquestionsQuestionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiWrittenquestionsQuestionsResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.QuestionsViewModelSearchResult)
    ], GetApiWrittenquestionsQuestionsResponse.prototype, "questionsViewModelSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiWrittenquestionsQuestionsResponse.prototype, "statusCode", void 0);
    return GetApiWrittenquestionsQuestionsResponse;
}(SpeakeasyBase));
export { GetApiWrittenquestionsQuestionsResponse };
