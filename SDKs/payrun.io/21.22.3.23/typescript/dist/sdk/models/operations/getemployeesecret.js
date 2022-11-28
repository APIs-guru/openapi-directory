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
var GetEmployeeSecretPathParams = /** @class */ (function (_super) {
    __extends(GetEmployeeSecretPathParams, _super);
    function GetEmployeeSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], GetEmployeeSecretPathParams.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetEmployeeSecretPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SecretId" }),
        __metadata("design:type", String)
    ], GetEmployeeSecretPathParams.prototype, "secretId", void 0);
    return GetEmployeeSecretPathParams;
}(SpeakeasyBase));
export { GetEmployeeSecretPathParams };
var GetEmployeeSecretHeaders = /** @class */ (function (_super) {
    __extends(GetEmployeeSecretHeaders, _super);
    function GetEmployeeSecretHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetEmployeeSecretHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetEmployeeSecretHeaders.prototype, "authorization", void 0);
    return GetEmployeeSecretHeaders;
}(SpeakeasyBase));
export { GetEmployeeSecretHeaders };
var GetEmployeeSecretRequest = /** @class */ (function (_super) {
    __extends(GetEmployeeSecretRequest, _super);
    function GetEmployeeSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmployeeSecretPathParams)
    ], GetEmployeeSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmployeeSecretHeaders)
    ], GetEmployeeSecretRequest.prototype, "headers", void 0);
    return GetEmployeeSecretRequest;
}(SpeakeasyBase));
export { GetEmployeeSecretRequest };
var GetEmployeeSecretResponse = /** @class */ (function (_super) {
    __extends(GetEmployeeSecretResponse, _super);
    function GetEmployeeSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEmployeeSecretResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EmployeeSecret)
    ], GetEmployeeSecretResponse.prototype, "employeeSecret", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetEmployeeSecretResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEmployeeSecretResponse.prototype, "statusCode", void 0);
    return GetEmployeeSecretResponse;
}(SpeakeasyBase));
export { GetEmployeeSecretResponse };
