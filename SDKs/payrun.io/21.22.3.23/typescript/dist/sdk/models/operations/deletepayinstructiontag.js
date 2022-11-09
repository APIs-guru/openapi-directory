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
var DeletePayInstructionTagPathParams = /** @class */ (function (_super) {
    __extends(DeletePayInstructionTagPathParams, _super);
    function DeletePayInstructionTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], DeletePayInstructionTagPathParams.prototype, "employeeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeletePayInstructionTagPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PayInstructionId" }),
        __metadata("design:type", String)
    ], DeletePayInstructionTagPathParams.prototype, "payInstructionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], DeletePayInstructionTagPathParams.prototype, "tagId", void 0);
    return DeletePayInstructionTagPathParams;
}(SpeakeasyBase));
export { DeletePayInstructionTagPathParams };
var DeletePayInstructionTagHeaders = /** @class */ (function (_super) {
    __extends(DeletePayInstructionTagHeaders, _super);
    function DeletePayInstructionTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeletePayInstructionTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeletePayInstructionTagHeaders.prototype, "authorization", void 0);
    return DeletePayInstructionTagHeaders;
}(SpeakeasyBase));
export { DeletePayInstructionTagHeaders };
var DeletePayInstructionTagRequest = /** @class */ (function (_super) {
    __extends(DeletePayInstructionTagRequest, _super);
    function DeletePayInstructionTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeletePayInstructionTagPathParams)
    ], DeletePayInstructionTagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeletePayInstructionTagHeaders)
    ], DeletePayInstructionTagRequest.prototype, "headers", void 0);
    return DeletePayInstructionTagRequest;
}(SpeakeasyBase));
export { DeletePayInstructionTagRequest };
var DeletePayInstructionTagResponse = /** @class */ (function (_super) {
    __extends(DeletePayInstructionTagResponse, _super);
    function DeletePayInstructionTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeletePayInstructionTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeletePayInstructionTagResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeletePayInstructionTagResponse.prototype, "statusCode", void 0);
    return DeletePayInstructionTagResponse;
}(SpeakeasyBase));
export { DeletePayInstructionTagResponse };
