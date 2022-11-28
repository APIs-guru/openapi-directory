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
var DeleteCisLinePathParams = /** @class */ (function (_super) {
    __extends(DeleteCisLinePathParams, _super);
    function DeleteCisLinePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CisLineId" }),
        __metadata("design:type", String)
    ], DeleteCisLinePathParams.prototype, "cisLineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeleteCisLinePathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], DeleteCisLinePathParams.prototype, "subContractorId", void 0);
    return DeleteCisLinePathParams;
}(SpeakeasyBase));
export { DeleteCisLinePathParams };
var DeleteCisLineHeaders = /** @class */ (function (_super) {
    __extends(DeleteCisLineHeaders, _super);
    function DeleteCisLineHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeleteCisLineHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeleteCisLineHeaders.prototype, "authorization", void 0);
    return DeleteCisLineHeaders;
}(SpeakeasyBase));
export { DeleteCisLineHeaders };
var DeleteCisLineRequest = /** @class */ (function (_super) {
    __extends(DeleteCisLineRequest, _super);
    function DeleteCisLineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCisLinePathParams)
    ], DeleteCisLineRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCisLineHeaders)
    ], DeleteCisLineRequest.prototype, "headers", void 0);
    return DeleteCisLineRequest;
}(SpeakeasyBase));
export { DeleteCisLineRequest };
var DeleteCisLineResponse = /** @class */ (function (_super) {
    __extends(DeleteCisLineResponse, _super);
    function DeleteCisLineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCisLineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], DeleteCisLineResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCisLineResponse.prototype, "statusCode", void 0);
    return DeleteCisLineResponse;
}(SpeakeasyBase));
export { DeleteCisLineResponse };
