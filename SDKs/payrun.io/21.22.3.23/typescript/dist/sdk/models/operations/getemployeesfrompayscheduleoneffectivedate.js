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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetEmployeesFromPayScheduleOnEffectiveDatePathParams = /** @class */ (function (_super) {
    __extends(GetEmployeesFromPayScheduleOnEffectiveDatePathParams, _super);
    function GetEmployeesFromPayScheduleOnEffectiveDatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], GetEmployeesFromPayScheduleOnEffectiveDatePathParams.prototype, "effectiveDate", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetEmployeesFromPayScheduleOnEffectiveDatePathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" }),
        __metadata("design:type", String)
    ], GetEmployeesFromPayScheduleOnEffectiveDatePathParams.prototype, "payScheduleId", void 0);
    return GetEmployeesFromPayScheduleOnEffectiveDatePathParams;
}(SpeakeasyBase));
export { GetEmployeesFromPayScheduleOnEffectiveDatePathParams };
var GetEmployeesFromPayScheduleOnEffectiveDateHeaders = /** @class */ (function (_super) {
    __extends(GetEmployeesFromPayScheduleOnEffectiveDateHeaders, _super);
    function GetEmployeesFromPayScheduleOnEffectiveDateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetEmployeesFromPayScheduleOnEffectiveDateHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetEmployeesFromPayScheduleOnEffectiveDateHeaders.prototype, "authorization", void 0);
    return GetEmployeesFromPayScheduleOnEffectiveDateHeaders;
}(SpeakeasyBase));
export { GetEmployeesFromPayScheduleOnEffectiveDateHeaders };
var GetEmployeesFromPayScheduleOnEffectiveDateRequest = /** @class */ (function (_super) {
    __extends(GetEmployeesFromPayScheduleOnEffectiveDateRequest, _super);
    function GetEmployeesFromPayScheduleOnEffectiveDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEmployeesFromPayScheduleOnEffectiveDatePathParams)
    ], GetEmployeesFromPayScheduleOnEffectiveDateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEmployeesFromPayScheduleOnEffectiveDateHeaders)
    ], GetEmployeesFromPayScheduleOnEffectiveDateRequest.prototype, "headers", void 0);
    return GetEmployeesFromPayScheduleOnEffectiveDateRequest;
}(SpeakeasyBase));
export { GetEmployeesFromPayScheduleOnEffectiveDateRequest };
var GetEmployeesFromPayScheduleOnEffectiveDateResponse = /** @class */ (function (_super) {
    __extends(GetEmployeesFromPayScheduleOnEffectiveDateResponse, _super);
    function GetEmployeesFromPayScheduleOnEffectiveDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEmployeesFromPayScheduleOnEffectiveDateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetEmployeesFromPayScheduleOnEffectiveDateResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetEmployeesFromPayScheduleOnEffectiveDateResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEmployeesFromPayScheduleOnEffectiveDateResponse.prototype, "statusCode", void 0);
    return GetEmployeesFromPayScheduleOnEffectiveDateResponse;
}(SpeakeasyBase));
export { GetEmployeesFromPayScheduleOnEffectiveDateResponse };
