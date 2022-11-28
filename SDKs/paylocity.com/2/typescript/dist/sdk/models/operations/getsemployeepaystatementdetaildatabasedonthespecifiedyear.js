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
var GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams, _super);
    function GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams.prototype, "year", void 0);
    return GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams;
}(SpeakeasyBase));
export { GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams };
var GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams, _super);
    function GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dettypes" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams.prototype, "dettypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includetotalcount" }),
        __metadata("design:type", Boolean)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams.prototype, "includetotalcount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagenumber" }),
        __metadata("design:type", Number)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams.prototype, "pagenumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams.prototype, "pagesize", void 0);
    return GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams;
}(SpeakeasyBase));
export { GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams };
var GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity, _super);
    function GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity.prototype, "paylocityAuth", void 0);
    return GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity;
}(SpeakeasyBase));
export { GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity };
var GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest, _super);
    function GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest.prototype, "security", void 0);
    return GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest;
}(SpeakeasyBase));
export { GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest };
var GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse, _super);
    function GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PayStatementDetails }),
        __metadata("design:type", Array)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse.prototype, "payStatementDetails", void 0);
    return GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse;
}(SpeakeasyBase));
export { GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse };
