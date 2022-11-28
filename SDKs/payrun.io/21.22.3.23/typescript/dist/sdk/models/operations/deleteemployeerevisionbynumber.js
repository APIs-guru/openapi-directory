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
var DeleteEmployeeRevisionByNumberPathParams = /** @class */ (function (_super) {
    __extends(DeleteEmployeeRevisionByNumberPathParams, _super);
    function DeleteEmployeeRevisionByNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], DeleteEmployeeRevisionByNumberPathParams.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeleteEmployeeRevisionByNumberPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" }),
        __metadata("design:type", String)
    ], DeleteEmployeeRevisionByNumberPathParams.prototype, "revisionNumber", void 0);
    return DeleteEmployeeRevisionByNumberPathParams;
}(SpeakeasyBase));
export { DeleteEmployeeRevisionByNumberPathParams };
var DeleteEmployeeRevisionByNumberHeaders = /** @class */ (function (_super) {
    __extends(DeleteEmployeeRevisionByNumberHeaders, _super);
    function DeleteEmployeeRevisionByNumberHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeleteEmployeeRevisionByNumberHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteEmployeeRevisionByNumberHeaders.prototype, "authorization", void 0);
    return DeleteEmployeeRevisionByNumberHeaders;
}(SpeakeasyBase));
export { DeleteEmployeeRevisionByNumberHeaders };
var DeleteEmployeeRevisionByNumberRequest = /** @class */ (function (_super) {
    __extends(DeleteEmployeeRevisionByNumberRequest, _super);
    function DeleteEmployeeRevisionByNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteEmployeeRevisionByNumberPathParams)
    ], DeleteEmployeeRevisionByNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteEmployeeRevisionByNumberHeaders)
    ], DeleteEmployeeRevisionByNumberRequest.prototype, "headers", void 0);
    return DeleteEmployeeRevisionByNumberRequest;
}(SpeakeasyBase));
export { DeleteEmployeeRevisionByNumberRequest };
var DeleteEmployeeRevisionByNumberResponse = /** @class */ (function (_super) {
    __extends(DeleteEmployeeRevisionByNumberResponse, _super);
    function DeleteEmployeeRevisionByNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteEmployeeRevisionByNumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeleteEmployeeRevisionByNumberResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteEmployeeRevisionByNumberResponse.prototype, "statusCode", void 0);
    return DeleteEmployeeRevisionByNumberResponse;
}(SpeakeasyBase));
export { DeleteEmployeeRevisionByNumberResponse };
