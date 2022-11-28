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
var GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams, _super);
    function GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=checkDate" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams.prototype, "checkDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams.prototype, "year", void 0);
    return GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams;
}(SpeakeasyBase));
export { GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams };
var GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams, _super);
    function GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dettypes" }),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams.prototype, "dettypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includetotalcount" }),
        __metadata("design:type", Boolean)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams.prototype, "includetotalcount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagenumber" }),
        __metadata("design:type", Number)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams.prototype, "pagenumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams.prototype, "pagesize", void 0);
    return GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams;
}(SpeakeasyBase));
export { GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams };
var GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity, _super);
    function GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity.prototype, "paylocityAuth", void 0);
    return GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity;
}(SpeakeasyBase));
export { GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity };
var GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest, _super);
    function GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest.prototype, "security", void 0);
    return GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest;
}(SpeakeasyBase));
export { GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest };
var GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse = /** @class */ (function (_super) {
    __extends(GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse, _super);
    function GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PayStatementDetails }),
        __metadata("design:type", Array)
    ], GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse.prototype, "payStatementDetails", void 0);
    return GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse;
}(SpeakeasyBase));
export { GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse };
