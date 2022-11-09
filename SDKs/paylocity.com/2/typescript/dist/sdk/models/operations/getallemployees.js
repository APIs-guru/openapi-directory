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
var GetAllEmployeesPathParams = /** @class */ (function (_super) {
    __extends(GetAllEmployeesPathParams, _super);
    function GetAllEmployeesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], GetAllEmployeesPathParams.prototype, "companyId", void 0);
    return GetAllEmployeesPathParams;
}(SpeakeasyBase));
export { GetAllEmployeesPathParams };
var GetAllEmployeesQueryParams = /** @class */ (function (_super) {
    __extends(GetAllEmployeesQueryParams, _super);
    function GetAllEmployeesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=includetotalcount" }),
        __metadata("design:type", Boolean)
    ], GetAllEmployeesQueryParams.prototype, "includetotalcount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pagenumber" }),
        __metadata("design:type", Number)
    ], GetAllEmployeesQueryParams.prototype, "pagenumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetAllEmployeesQueryParams.prototype, "pagesize", void 0);
    return GetAllEmployeesQueryParams;
}(SpeakeasyBase));
export { GetAllEmployeesQueryParams };
var GetAllEmployeesSecurity = /** @class */ (function (_super) {
    __extends(GetAllEmployeesSecurity, _super);
    function GetAllEmployeesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], GetAllEmployeesSecurity.prototype, "paylocityAuth", void 0);
    return GetAllEmployeesSecurity;
}(SpeakeasyBase));
export { GetAllEmployeesSecurity };
var GetAllEmployeesRequest = /** @class */ (function (_super) {
    __extends(GetAllEmployeesRequest, _super);
    function GetAllEmployeesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAllEmployeesPathParams)
    ], GetAllEmployeesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAllEmployeesQueryParams)
    ], GetAllEmployeesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAllEmployeesSecurity)
    ], GetAllEmployeesRequest.prototype, "security", void 0);
    return GetAllEmployeesRequest;
}(SpeakeasyBase));
export { GetAllEmployeesRequest };
var GetAllEmployeesResponse = /** @class */ (function (_super) {
    __extends(GetAllEmployeesResponse, _super);
    function GetAllEmployeesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAllEmployeesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAllEmployeesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.EmployeeInfo }),
        __metadata("design:type", Array)
    ], GetAllEmployeesResponse.prototype, "employeeInfos", void 0);
    __decorate([
        Metadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], GetAllEmployeesResponse.prototype, "errors", void 0);
    return GetAllEmployeesResponse;
}(SpeakeasyBase));
export { GetAllEmployeesResponse };
