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
var UpdateEmployeePathParams = /** @class */ (function (_super) {
    __extends(UpdateEmployeePathParams, _super);
    function UpdateEmployeePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], UpdateEmployeePathParams.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], UpdateEmployeePathParams.prototype, "employeeId", void 0);
    return UpdateEmployeePathParams;
}(SpeakeasyBase));
export { UpdateEmployeePathParams };
var UpdateEmployeeSecurity = /** @class */ (function (_super) {
    __extends(UpdateEmployeeSecurity, _super);
    function UpdateEmployeeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], UpdateEmployeeSecurity.prototype, "paylocityAuth", void 0);
    return UpdateEmployeeSecurity;
}(SpeakeasyBase));
export { UpdateEmployeeSecurity };
var UpdateEmployeeRequest = /** @class */ (function (_super) {
    __extends(UpdateEmployeeRequest, _super);
    function UpdateEmployeeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEmployeePathParams)
    ], UpdateEmployeeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Employee)
    ], UpdateEmployeeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateEmployeeSecurity)
    ], UpdateEmployeeRequest.prototype, "security", void 0);
    return UpdateEmployeeRequest;
}(SpeakeasyBase));
export { UpdateEmployeeRequest };
var UpdateEmployeeResponse = /** @class */ (function (_super) {
    __extends(UpdateEmployeeResponse, _super);
    function UpdateEmployeeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateEmployeeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateEmployeeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], UpdateEmployeeResponse.prototype, "errors", void 0);
    return UpdateEmployeeResponse;
}(SpeakeasyBase));
export { UpdateEmployeeResponse };
