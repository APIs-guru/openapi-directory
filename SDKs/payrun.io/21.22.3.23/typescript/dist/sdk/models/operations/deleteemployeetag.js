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
var DeleteEmployeeTagPathParams = /** @class */ (function (_super) {
    __extends(DeleteEmployeeTagPathParams, _super);
    function DeleteEmployeeTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], DeleteEmployeeTagPathParams.prototype, "employeeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeleteEmployeeTagPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], DeleteEmployeeTagPathParams.prototype, "tagId", void 0);
    return DeleteEmployeeTagPathParams;
}(SpeakeasyBase));
export { DeleteEmployeeTagPathParams };
var DeleteEmployeeTagHeaders = /** @class */ (function (_super) {
    __extends(DeleteEmployeeTagHeaders, _super);
    function DeleteEmployeeTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeleteEmployeeTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteEmployeeTagHeaders.prototype, "authorization", void 0);
    return DeleteEmployeeTagHeaders;
}(SpeakeasyBase));
export { DeleteEmployeeTagHeaders };
var DeleteEmployeeTagRequest = /** @class */ (function (_super) {
    __extends(DeleteEmployeeTagRequest, _super);
    function DeleteEmployeeTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteEmployeeTagPathParams)
    ], DeleteEmployeeTagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteEmployeeTagHeaders)
    ], DeleteEmployeeTagRequest.prototype, "headers", void 0);
    return DeleteEmployeeTagRequest;
}(SpeakeasyBase));
export { DeleteEmployeeTagRequest };
var DeleteEmployeeTagResponse = /** @class */ (function (_super) {
    __extends(DeleteEmployeeTagResponse, _super);
    function DeleteEmployeeTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteEmployeeTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeleteEmployeeTagResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteEmployeeTagResponse.prototype, "statusCode", void 0);
    return DeleteEmployeeTagResponse;
}(SpeakeasyBase));
export { DeleteEmployeeTagResponse };
