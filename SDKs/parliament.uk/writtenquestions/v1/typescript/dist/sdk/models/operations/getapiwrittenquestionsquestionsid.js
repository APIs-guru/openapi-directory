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
var GetApiWrittenquestionsQuestionsIdPathParams = /** @class */ (function (_super) {
    __extends(GetApiWrittenquestionsQuestionsIdPathParams, _super);
    function GetApiWrittenquestionsQuestionsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetApiWrittenquestionsQuestionsIdPathParams.prototype, "id", void 0);
    return GetApiWrittenquestionsQuestionsIdPathParams;
}(SpeakeasyBase));
export { GetApiWrittenquestionsQuestionsIdPathParams };
var GetApiWrittenquestionsQuestionsIdQueryParams = /** @class */ (function (_super) {
    __extends(GetApiWrittenquestionsQuestionsIdQueryParams, _super);
    function GetApiWrittenquestionsQuestionsIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandMember" }),
        __metadata("design:type", Boolean)
    ], GetApiWrittenquestionsQuestionsIdQueryParams.prototype, "expandMember", void 0);
    return GetApiWrittenquestionsQuestionsIdQueryParams;
}(SpeakeasyBase));
export { GetApiWrittenquestionsQuestionsIdQueryParams };
var GetApiWrittenquestionsQuestionsIdRequest = /** @class */ (function (_super) {
    __extends(GetApiWrittenquestionsQuestionsIdRequest, _super);
    function GetApiWrittenquestionsQuestionsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiWrittenquestionsQuestionsIdPathParams)
    ], GetApiWrittenquestionsQuestionsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiWrittenquestionsQuestionsIdQueryParams)
    ], GetApiWrittenquestionsQuestionsIdRequest.prototype, "queryParams", void 0);
    return GetApiWrittenquestionsQuestionsIdRequest;
}(SpeakeasyBase));
export { GetApiWrittenquestionsQuestionsIdRequest };
var GetApiWrittenquestionsQuestionsIdResponse = /** @class */ (function (_super) {
    __extends(GetApiWrittenquestionsQuestionsIdResponse, _super);
    function GetApiWrittenquestionsQuestionsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiWrittenquestionsQuestionsIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiWrittenquestionsQuestionsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiWrittenquestionsQuestionsIdResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.QuestionsViewModelItem)
    ], GetApiWrittenquestionsQuestionsIdResponse.prototype, "questionsViewModelItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiWrittenquestionsQuestionsIdResponse.prototype, "statusCode", void 0);
    return GetApiWrittenquestionsQuestionsIdResponse;
}(SpeakeasyBase));
export { GetApiWrittenquestionsQuestionsIdResponse };
