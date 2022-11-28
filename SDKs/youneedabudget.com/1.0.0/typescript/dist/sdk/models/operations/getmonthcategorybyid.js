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
var GetMonthCategoryByIdPathParams = /** @class */ (function (_super) {
    __extends(GetMonthCategoryByIdPathParams, _super);
    function GetMonthCategoryByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" }),
        __metadata("design:type", String)
    ], GetMonthCategoryByIdPathParams.prototype, "budgetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" }),
        __metadata("design:type", String)
    ], GetMonthCategoryByIdPathParams.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" }),
        __metadata("design:type", Date)
    ], GetMonthCategoryByIdPathParams.prototype, "month", void 0);
    return GetMonthCategoryByIdPathParams;
}(SpeakeasyBase));
export { GetMonthCategoryByIdPathParams };
var GetMonthCategoryByIdRequest = /** @class */ (function (_super) {
    __extends(GetMonthCategoryByIdRequest, _super);
    function GetMonthCategoryByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMonthCategoryByIdPathParams)
    ], GetMonthCategoryByIdRequest.prototype, "pathParams", void 0);
    return GetMonthCategoryByIdRequest;
}(SpeakeasyBase));
export { GetMonthCategoryByIdRequest };
var GetMonthCategoryByIdResponse = /** @class */ (function (_super) {
    __extends(GetMonthCategoryByIdResponse, _super);
    function GetMonthCategoryByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CategoryResponse)
    ], GetMonthCategoryByIdResponse.prototype, "categoryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMonthCategoryByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetMonthCategoryByIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMonthCategoryByIdResponse.prototype, "statusCode", void 0);
    return GetMonthCategoryByIdResponse;
}(SpeakeasyBase));
export { GetMonthCategoryByIdResponse };
