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
var AddEmployeePathParams = /** @class */ (function (_super) {
    __extends(AddEmployeePathParams, _super);
    function AddEmployeePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], AddEmployeePathParams.prototype, "companyId", void 0);
    return AddEmployeePathParams;
}(SpeakeasyBase));
export { AddEmployeePathParams };
var AddEmployeeSecurity = /** @class */ (function (_super) {
    __extends(AddEmployeeSecurity, _super);
    function AddEmployeeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], AddEmployeeSecurity.prototype, "paylocityAuth", void 0);
    return AddEmployeeSecurity;
}(SpeakeasyBase));
export { AddEmployeeSecurity };
var AddEmployeeRequest = /** @class */ (function (_super) {
    __extends(AddEmployeeRequest, _super);
    function AddEmployeeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AddEmployeePathParams)
    ], AddEmployeeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Employee)
    ], AddEmployeeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AddEmployeeSecurity)
    ], AddEmployeeRequest.prototype, "security", void 0);
    return AddEmployeeRequest;
}(SpeakeasyBase));
export { AddEmployeeRequest };
var AddEmployeeResponse = /** @class */ (function (_super) {
    __extends(AddEmployeeResponse, _super);
    function AddEmployeeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AddEmployeeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AddEmployeeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.EmployeeIdResponse }),
        __metadata("design:type", Array)
    ], AddEmployeeResponse.prototype, "employeeIdResponses", void 0);
    __decorate([
        Metadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], AddEmployeeResponse.prototype, "errors", void 0);
    return AddEmployeeResponse;
}(SpeakeasyBase));
export { AddEmployeeResponse };
