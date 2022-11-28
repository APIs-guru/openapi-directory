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
var DeleteCisInstructionTagPathParams = /** @class */ (function (_super) {
    __extends(DeleteCisInstructionTagPathParams, _super);
    function DeleteCisInstructionTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CisInstructionId" }),
        __metadata("design:type", String)
    ], DeleteCisInstructionTagPathParams.prototype, "cisInstructionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeleteCisInstructionTagPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], DeleteCisInstructionTagPathParams.prototype, "subContractorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], DeleteCisInstructionTagPathParams.prototype, "tagId", void 0);
    return DeleteCisInstructionTagPathParams;
}(SpeakeasyBase));
export { DeleteCisInstructionTagPathParams };
var DeleteCisInstructionTagHeaders = /** @class */ (function (_super) {
    __extends(DeleteCisInstructionTagHeaders, _super);
    function DeleteCisInstructionTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeleteCisInstructionTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteCisInstructionTagHeaders.prototype, "authorization", void 0);
    return DeleteCisInstructionTagHeaders;
}(SpeakeasyBase));
export { DeleteCisInstructionTagHeaders };
var DeleteCisInstructionTagRequest = /** @class */ (function (_super) {
    __extends(DeleteCisInstructionTagRequest, _super);
    function DeleteCisInstructionTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCisInstructionTagPathParams)
    ], DeleteCisInstructionTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCisInstructionTagHeaders)
    ], DeleteCisInstructionTagRequest.prototype, "headers", void 0);
    return DeleteCisInstructionTagRequest;
}(SpeakeasyBase));
export { DeleteCisInstructionTagRequest };
var DeleteCisInstructionTagResponse = /** @class */ (function (_super) {
    __extends(DeleteCisInstructionTagResponse, _super);
    function DeleteCisInstructionTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCisInstructionTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeleteCisInstructionTagResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCisInstructionTagResponse.prototype, "statusCode", void 0);
    return DeleteCisInstructionTagResponse;
}(SpeakeasyBase));
export { DeleteCisInstructionTagResponse };
