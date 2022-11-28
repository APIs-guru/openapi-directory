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
var GetUsersIdTrendAnalysisPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdTrendAnalysisPathParams, _super);
    function GetUsersIdTrendAnalysisPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetUsersIdTrendAnalysisPathParams.prototype, "id", void 0);
    return GetUsersIdTrendAnalysisPathParams;
}(SpeakeasyBase));
export { GetUsersIdTrendAnalysisPathParams };
export var GetUsersIdTrendAnalysisPeriodEnum;
(function (GetUsersIdTrendAnalysisPeriodEnum) {
    GetUsersIdTrendAnalysisPeriodEnum["Weeks"] = "weeks";
    GetUsersIdTrendAnalysisPeriodEnum["Months"] = "months";
    GetUsersIdTrendAnalysisPeriodEnum["Years"] = "years";
    GetUsersIdTrendAnalysisPeriodEnum["Event"] = "event";
})(GetUsersIdTrendAnalysisPeriodEnum || (GetUsersIdTrendAnalysisPeriodEnum = {}));
var GetUsersIdTrendAnalysisQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdTrendAnalysisQueryParams, _super);
    function GetUsersIdTrendAnalysisQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categories" }),
        __metadata("design:type", String)
    ], GetUsersIdTrendAnalysisQueryParams.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], GetUsersIdTrendAnalysisQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" }),
        __metadata("design:type", Number)
    ], GetUsersIdTrendAnalysisQueryParams.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" }),
        __metadata("design:type", String)
    ], GetUsersIdTrendAnalysisQueryParams.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scenarios" }),
        __metadata("design:type", String)
    ], GetUsersIdTrendAnalysisQueryParams.prototype, "scenarios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], GetUsersIdTrendAnalysisQueryParams.prototype, "startDate", void 0);
    return GetUsersIdTrendAnalysisQueryParams;
}(SpeakeasyBase));
export { GetUsersIdTrendAnalysisQueryParams };
var GetUsersIdTrendAnalysisRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdTrendAnalysisRequest, _super);
    function GetUsersIdTrendAnalysisRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdTrendAnalysisPathParams)
    ], GetUsersIdTrendAnalysisRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdTrendAnalysisQueryParams)
    ], GetUsersIdTrendAnalysisRequest.prototype, "queryParams", void 0);
    return GetUsersIdTrendAnalysisRequest;
}(SpeakeasyBase));
export { GetUsersIdTrendAnalysisRequest };
var GetUsersIdTrendAnalysisResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdTrendAnalysisResponse, _super);
    function GetUsersIdTrendAnalysisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BudgetAnalysisPackage }),
        __metadata("design:type", Array)
    ], GetUsersIdTrendAnalysisResponse.prototype, "budgetAnalysisPackages", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdTrendAnalysisResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdTrendAnalysisResponse.prototype, "statusCode", void 0);
    return GetUsersIdTrendAnalysisResponse;
}(SpeakeasyBase));
export { GetUsersIdTrendAnalysisResponse };
