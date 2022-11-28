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
var PutEmployeeSecretPathParams = /** @class */ (function (_super) {
    __extends(PutEmployeeSecretPathParams, _super);
    function PutEmployeeSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], PutEmployeeSecretPathParams.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutEmployeeSecretPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SecretId" }),
        __metadata("design:type", String)
    ], PutEmployeeSecretPathParams.prototype, "secretId", void 0);
    return PutEmployeeSecretPathParams;
}(SpeakeasyBase));
export { PutEmployeeSecretPathParams };
var PutEmployeeSecretHeaders = /** @class */ (function (_super) {
    __extends(PutEmployeeSecretHeaders, _super);
    function PutEmployeeSecretHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutEmployeeSecretHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutEmployeeSecretHeaders.prototype, "authorization", void 0);
    return PutEmployeeSecretHeaders;
}(SpeakeasyBase));
export { PutEmployeeSecretHeaders };
var PutEmployeeSecretRequest = /** @class */ (function (_super) {
    __extends(PutEmployeeSecretRequest, _super);
    function PutEmployeeSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutEmployeeSecretPathParams)
    ], PutEmployeeSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutEmployeeSecretHeaders)
    ], PutEmployeeSecretRequest.prototype, "headers", void 0);
    return PutEmployeeSecretRequest;
}(SpeakeasyBase));
export { PutEmployeeSecretRequest };
var PutEmployeeSecretResponse = /** @class */ (function (_super) {
    __extends(PutEmployeeSecretResponse, _super);
    function PutEmployeeSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutEmployeeSecretResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EmployeeSecret)
    ], PutEmployeeSecretResponse.prototype, "employeeSecret", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutEmployeeSecretResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutEmployeeSecretResponse.prototype, "statusCode", void 0);
    return PutEmployeeSecretResponse;
}(SpeakeasyBase));
export { PutEmployeeSecretResponse };
