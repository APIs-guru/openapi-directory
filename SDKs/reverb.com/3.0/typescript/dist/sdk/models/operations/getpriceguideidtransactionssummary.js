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
var GetPriceguideIdTransactionsSummaryPathParams = /** @class */ (function (_super) {
    __extends(GetPriceguideIdTransactionsSummaryPathParams, _super);
    function GetPriceguideIdTransactionsSummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPriceguideIdTransactionsSummaryPathParams.prototype, "id", void 0);
    return GetPriceguideIdTransactionsSummaryPathParams;
}(SpeakeasyBase));
export { GetPriceguideIdTransactionsSummaryPathParams };
var GetPriceguideIdTransactionsSummaryQueryParams = /** @class */ (function (_super) {
    __extends(GetPriceguideIdTransactionsSummaryQueryParams, _super);
    function GetPriceguideIdTransactionsSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=condition" }),
        __metadata("design:type", String)
    ], GetPriceguideIdTransactionsSummaryQueryParams.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number_of_months" }),
        __metadata("design:type", Number)
    ], GetPriceguideIdTransactionsSummaryQueryParams.prototype, "numberOfMonths", void 0);
    return GetPriceguideIdTransactionsSummaryQueryParams;
}(SpeakeasyBase));
export { GetPriceguideIdTransactionsSummaryQueryParams };
var GetPriceguideIdTransactionsSummaryRequest = /** @class */ (function (_super) {
    __extends(GetPriceguideIdTransactionsSummaryRequest, _super);
    function GetPriceguideIdTransactionsSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPriceguideIdTransactionsSummaryPathParams)
    ], GetPriceguideIdTransactionsSummaryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPriceguideIdTransactionsSummaryQueryParams)
    ], GetPriceguideIdTransactionsSummaryRequest.prototype, "queryParams", void 0);
    return GetPriceguideIdTransactionsSummaryRequest;
}(SpeakeasyBase));
export { GetPriceguideIdTransactionsSummaryRequest };
var GetPriceguideIdTransactionsSummaryResponse = /** @class */ (function (_super) {
    __extends(GetPriceguideIdTransactionsSummaryResponse, _super);
    function GetPriceguideIdTransactionsSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPriceguideIdTransactionsSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPriceguideIdTransactionsSummaryResponse.prototype, "statusCode", void 0);
    return GetPriceguideIdTransactionsSummaryResponse;
}(SpeakeasyBase));
export { GetPriceguideIdTransactionsSummaryResponse };
