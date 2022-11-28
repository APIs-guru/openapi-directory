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
var GetUsersIdBudgetPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdBudgetPathParams, _super);
    function GetUsersIdBudgetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetUsersIdBudgetPathParams.prototype, "id", void 0);
    return GetUsersIdBudgetPathParams;
}(SpeakeasyBase));
export { GetUsersIdBudgetPathParams };
var GetUsersIdBudgetQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdBudgetQueryParams, _super);
    function GetUsersIdBudgetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roll_up" }),
        __metadata("design:type", Boolean)
    ], GetUsersIdBudgetQueryParams.prototype, "rollUp", void 0);
    return GetUsersIdBudgetQueryParams;
}(SpeakeasyBase));
export { GetUsersIdBudgetQueryParams };
var GetUsersIdBudgetRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdBudgetRequest, _super);
    function GetUsersIdBudgetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdBudgetPathParams)
    ], GetUsersIdBudgetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdBudgetQueryParams)
    ], GetUsersIdBudgetRequest.prototype, "queryParams", void 0);
    return GetUsersIdBudgetRequest;
}(SpeakeasyBase));
export { GetUsersIdBudgetRequest };
var GetUsersIdBudgetResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdBudgetResponse, _super);
    function GetUsersIdBudgetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BudgetAnalysisPackage }),
        __metadata("design:type", Array)
    ], GetUsersIdBudgetResponse.prototype, "budgetAnalysisPackages", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdBudgetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdBudgetResponse.prototype, "statusCode", void 0);
    return GetUsersIdBudgetResponse;
}(SpeakeasyBase));
export { GetUsersIdBudgetResponse };
