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
var GetEmployeesFromEmployerPathParams = /** @class */ (function (_super) {
    __extends(GetEmployeesFromEmployerPathParams, _super);
    function GetEmployeesFromEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetEmployeesFromEmployerPathParams.prototype, "employerId", void 0);
    return GetEmployeesFromEmployerPathParams;
}(SpeakeasyBase));
export { GetEmployeesFromEmployerPathParams };
var GetEmployeesFromEmployerHeaders = /** @class */ (function (_super) {
    __extends(GetEmployeesFromEmployerHeaders, _super);
    function GetEmployeesFromEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetEmployeesFromEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetEmployeesFromEmployerHeaders.prototype, "authorization", void 0);
    return GetEmployeesFromEmployerHeaders;
}(SpeakeasyBase));
export { GetEmployeesFromEmployerHeaders };
var GetEmployeesFromEmployerRequest = /** @class */ (function (_super) {
    __extends(GetEmployeesFromEmployerRequest, _super);
    function GetEmployeesFromEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmployeesFromEmployerPathParams)
    ], GetEmployeesFromEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmployeesFromEmployerHeaders)
    ], GetEmployeesFromEmployerRequest.prototype, "headers", void 0);
    return GetEmployeesFromEmployerRequest;
}(SpeakeasyBase));
export { GetEmployeesFromEmployerRequest };
var GetEmployeesFromEmployerResponse = /** @class */ (function (_super) {
    __extends(GetEmployeesFromEmployerResponse, _super);
    function GetEmployeesFromEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEmployeesFromEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetEmployeesFromEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetEmployeesFromEmployerResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEmployeesFromEmployerResponse.prototype, "statusCode", void 0);
    return GetEmployeesFromEmployerResponse;
}(SpeakeasyBase));
export { GetEmployeesFromEmployerResponse };
