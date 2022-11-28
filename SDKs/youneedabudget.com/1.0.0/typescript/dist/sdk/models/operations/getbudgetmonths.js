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
var GetBudgetMonthsPathParams = /** @class */ (function (_super) {
    __extends(GetBudgetMonthsPathParams, _super);
    function GetBudgetMonthsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" }),
        __metadata("design:type", String)
    ], GetBudgetMonthsPathParams.prototype, "budgetId", void 0);
    return GetBudgetMonthsPathParams;
}(SpeakeasyBase));
export { GetBudgetMonthsPathParams };
var GetBudgetMonthsQueryParams = /** @class */ (function (_super) {
    __extends(GetBudgetMonthsQueryParams, _super);
    function GetBudgetMonthsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_knowledge_of_server" }),
        __metadata("design:type", Number)
    ], GetBudgetMonthsQueryParams.prototype, "lastKnowledgeOfServer", void 0);
    return GetBudgetMonthsQueryParams;
}(SpeakeasyBase));
export { GetBudgetMonthsQueryParams };
var GetBudgetMonthsRequest = /** @class */ (function (_super) {
    __extends(GetBudgetMonthsRequest, _super);
    function GetBudgetMonthsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBudgetMonthsPathParams)
    ], GetBudgetMonthsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBudgetMonthsQueryParams)
    ], GetBudgetMonthsRequest.prototype, "queryParams", void 0);
    return GetBudgetMonthsRequest;
}(SpeakeasyBase));
export { GetBudgetMonthsRequest };
var GetBudgetMonthsResponse = /** @class */ (function (_super) {
    __extends(GetBudgetMonthsResponse, _super);
    function GetBudgetMonthsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBudgetMonthsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetBudgetMonthsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MonthSummariesResponse)
    ], GetBudgetMonthsResponse.prototype, "monthSummariesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBudgetMonthsResponse.prototype, "statusCode", void 0);
    return GetBudgetMonthsResponse;
}(SpeakeasyBase));
export { GetBudgetMonthsResponse };
