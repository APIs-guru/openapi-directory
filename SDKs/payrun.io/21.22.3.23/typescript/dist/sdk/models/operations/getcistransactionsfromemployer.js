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
var GetCisTransactionsFromEmployerPathParams = /** @class */ (function (_super) {
    __extends(GetCisTransactionsFromEmployerPathParams, _super);
    function GetCisTransactionsFromEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetCisTransactionsFromEmployerPathParams.prototype, "employerId", void 0);
    return GetCisTransactionsFromEmployerPathParams;
}(SpeakeasyBase));
export { GetCisTransactionsFromEmployerPathParams };
var GetCisTransactionsFromEmployerHeaders = /** @class */ (function (_super) {
    __extends(GetCisTransactionsFromEmployerHeaders, _super);
    function GetCisTransactionsFromEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetCisTransactionsFromEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetCisTransactionsFromEmployerHeaders.prototype, "authorization", void 0);
    return GetCisTransactionsFromEmployerHeaders;
}(SpeakeasyBase));
export { GetCisTransactionsFromEmployerHeaders };
var GetCisTransactionsFromEmployerRequest = /** @class */ (function (_super) {
    __extends(GetCisTransactionsFromEmployerRequest, _super);
    function GetCisTransactionsFromEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCisTransactionsFromEmployerPathParams)
    ], GetCisTransactionsFromEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCisTransactionsFromEmployerHeaders)
    ], GetCisTransactionsFromEmployerRequest.prototype, "headers", void 0);
    return GetCisTransactionsFromEmployerRequest;
}(SpeakeasyBase));
export { GetCisTransactionsFromEmployerRequest };
var GetCisTransactionsFromEmployerResponse = /** @class */ (function (_super) {
    __extends(GetCisTransactionsFromEmployerResponse, _super);
    function GetCisTransactionsFromEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCisTransactionsFromEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetCisTransactionsFromEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetCisTransactionsFromEmployerResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCisTransactionsFromEmployerResponse.prototype, "statusCode", void 0);
    return GetCisTransactionsFromEmployerResponse;
}(SpeakeasyBase));
export { GetCisTransactionsFromEmployerResponse };
