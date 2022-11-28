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
var DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams, _super);
    function DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams.prototype, "environmentId", void 0);
    return DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams;
}(SpeakeasyBase));
export { DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams };
var DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams = /** @class */ (function (_super) {
    __extends(DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams, _super);
    function DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deletionType" }),
        __metadata("design:type", String)
    ], DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams.prototype, "deletionType", void 0);
    return DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams;
}(SpeakeasyBase));
export { DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams };
var DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest = /** @class */ (function (_super) {
    __extends(DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest, _super);
    function DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams)
    ], DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdQueryParams)
    ], DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest.prototype, "queryParams", void 0);
    return DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest;
}(SpeakeasyBase));
export { DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdRequest };
var DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse = /** @class */ (function (_super) {
    __extends(DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse, _super);
    function DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse.prototype, "statusCode", void 0);
    return DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse;
}(SpeakeasyBase));
export { DeleteApiV1GenevaActionsEnvironmentsEnvironmentIdResponse };
