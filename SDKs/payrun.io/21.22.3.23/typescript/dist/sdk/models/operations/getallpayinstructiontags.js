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
var GetAllPayInstructionTagsPathParams = /** @class */ (function (_super) {
    __extends(GetAllPayInstructionTagsPathParams, _super);
    function GetAllPayInstructionTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], GetAllPayInstructionTagsPathParams.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetAllPayInstructionTagsPathParams.prototype, "employerId", void 0);
    return GetAllPayInstructionTagsPathParams;
}(SpeakeasyBase));
export { GetAllPayInstructionTagsPathParams };
var GetAllPayInstructionTagsHeaders = /** @class */ (function (_super) {
    __extends(GetAllPayInstructionTagsHeaders, _super);
    function GetAllPayInstructionTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetAllPayInstructionTagsHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAllPayInstructionTagsHeaders.prototype, "authorization", void 0);
    return GetAllPayInstructionTagsHeaders;
}(SpeakeasyBase));
export { GetAllPayInstructionTagsHeaders };
var GetAllPayInstructionTagsRequest = /** @class */ (function (_super) {
    __extends(GetAllPayInstructionTagsRequest, _super);
    function GetAllPayInstructionTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllPayInstructionTagsPathParams)
    ], GetAllPayInstructionTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllPayInstructionTagsHeaders)
    ], GetAllPayInstructionTagsRequest.prototype, "headers", void 0);
    return GetAllPayInstructionTagsRequest;
}(SpeakeasyBase));
export { GetAllPayInstructionTagsRequest };
var GetAllPayInstructionTagsResponse = /** @class */ (function (_super) {
    __extends(GetAllPayInstructionTagsResponse, _super);
    function GetAllPayInstructionTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllPayInstructionTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetAllPayInstructionTagsResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetAllPayInstructionTagsResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllPayInstructionTagsResponse.prototype, "statusCode", void 0);
    return GetAllPayInstructionTagsResponse;
}(SpeakeasyBase));
export { GetAllPayInstructionTagsResponse };
