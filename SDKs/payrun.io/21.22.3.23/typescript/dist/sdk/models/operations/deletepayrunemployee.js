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
var DeletePayRunEmployeePathParams = /** @class */ (function (_super) {
    __extends(DeletePayRunEmployeePathParams, _super);
    function DeletePayRunEmployeePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], DeletePayRunEmployeePathParams.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeletePayRunEmployeePathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayRunId" }),
        __metadata("design:type", String)
    ], DeletePayRunEmployeePathParams.prototype, "payRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" }),
        __metadata("design:type", String)
    ], DeletePayRunEmployeePathParams.prototype, "payScheduleId", void 0);
    return DeletePayRunEmployeePathParams;
}(SpeakeasyBase));
export { DeletePayRunEmployeePathParams };
var DeletePayRunEmployeeHeaders = /** @class */ (function (_super) {
    __extends(DeletePayRunEmployeeHeaders, _super);
    function DeletePayRunEmployeeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeletePayRunEmployeeHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeletePayRunEmployeeHeaders.prototype, "authorization", void 0);
    return DeletePayRunEmployeeHeaders;
}(SpeakeasyBase));
export { DeletePayRunEmployeeHeaders };
var DeletePayRunEmployeeRequest = /** @class */ (function (_super) {
    __extends(DeletePayRunEmployeeRequest, _super);
    function DeletePayRunEmployeeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePayRunEmployeePathParams)
    ], DeletePayRunEmployeeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePayRunEmployeeHeaders)
    ], DeletePayRunEmployeeRequest.prototype, "headers", void 0);
    return DeletePayRunEmployeeRequest;
}(SpeakeasyBase));
export { DeletePayRunEmployeeRequest };
var DeletePayRunEmployeeResponse = /** @class */ (function (_super) {
    __extends(DeletePayRunEmployeeResponse, _super);
    function DeletePayRunEmployeeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePayRunEmployeeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeletePayRunEmployeeResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePayRunEmployeeResponse.prototype, "statusCode", void 0);
    return DeletePayRunEmployeeResponse;
}(SpeakeasyBase));
export { DeletePayRunEmployeeResponse };
