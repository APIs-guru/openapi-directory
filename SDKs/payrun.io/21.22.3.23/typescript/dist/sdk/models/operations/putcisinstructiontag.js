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
var PutCisInstructionTagPathParams = /** @class */ (function (_super) {
    __extends(PutCisInstructionTagPathParams, _super);
    function PutCisInstructionTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CisInstructionId" }),
        __metadata("design:type", String)
    ], PutCisInstructionTagPathParams.prototype, "cisInstructionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutCisInstructionTagPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], PutCisInstructionTagPathParams.prototype, "subContractorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], PutCisInstructionTagPathParams.prototype, "tagId", void 0);
    return PutCisInstructionTagPathParams;
}(SpeakeasyBase));
export { PutCisInstructionTagPathParams };
var PutCisInstructionTagHeaders = /** @class */ (function (_super) {
    __extends(PutCisInstructionTagHeaders, _super);
    function PutCisInstructionTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutCisInstructionTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutCisInstructionTagHeaders.prototype, "authorization", void 0);
    return PutCisInstructionTagHeaders;
}(SpeakeasyBase));
export { PutCisInstructionTagHeaders };
var PutCisInstructionTagRequest = /** @class */ (function (_super) {
    __extends(PutCisInstructionTagRequest, _super);
    function PutCisInstructionTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCisInstructionTagPathParams)
    ], PutCisInstructionTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCisInstructionTagHeaders)
    ], PutCisInstructionTagRequest.prototype, "headers", void 0);
    return PutCisInstructionTagRequest;
}(SpeakeasyBase));
export { PutCisInstructionTagRequest };
var PutCisInstructionTagResponse = /** @class */ (function (_super) {
    __extends(PutCisInstructionTagResponse, _super);
    function PutCisInstructionTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutCisInstructionTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutCisInstructionTagResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutCisInstructionTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tag)
    ], PutCisInstructionTagResponse.prototype, "tag", void 0);
    return PutCisInstructionTagResponse;
}(SpeakeasyBase));
export { PutCisInstructionTagResponse };
