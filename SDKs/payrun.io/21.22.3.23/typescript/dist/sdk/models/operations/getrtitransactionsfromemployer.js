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
var GetRtiTransactionsFromEmployerPathParams = /** @class */ (function (_super) {
    __extends(GetRtiTransactionsFromEmployerPathParams, _super);
    function GetRtiTransactionsFromEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetRtiTransactionsFromEmployerPathParams.prototype, "employerId", void 0);
    return GetRtiTransactionsFromEmployerPathParams;
}(SpeakeasyBase));
export { GetRtiTransactionsFromEmployerPathParams };
var GetRtiTransactionsFromEmployerHeaders = /** @class */ (function (_super) {
    __extends(GetRtiTransactionsFromEmployerHeaders, _super);
    function GetRtiTransactionsFromEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetRtiTransactionsFromEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetRtiTransactionsFromEmployerHeaders.prototype, "authorization", void 0);
    return GetRtiTransactionsFromEmployerHeaders;
}(SpeakeasyBase));
export { GetRtiTransactionsFromEmployerHeaders };
var GetRtiTransactionsFromEmployerRequest = /** @class */ (function (_super) {
    __extends(GetRtiTransactionsFromEmployerRequest, _super);
    function GetRtiTransactionsFromEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRtiTransactionsFromEmployerPathParams)
    ], GetRtiTransactionsFromEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRtiTransactionsFromEmployerHeaders)
    ], GetRtiTransactionsFromEmployerRequest.prototype, "headers", void 0);
    return GetRtiTransactionsFromEmployerRequest;
}(SpeakeasyBase));
export { GetRtiTransactionsFromEmployerRequest };
var GetRtiTransactionsFromEmployerResponse = /** @class */ (function (_super) {
    __extends(GetRtiTransactionsFromEmployerResponse, _super);
    function GetRtiTransactionsFromEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRtiTransactionsFromEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetRtiTransactionsFromEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetRtiTransactionsFromEmployerResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRtiTransactionsFromEmployerResponse.prototype, "statusCode", void 0);
    return GetRtiTransactionsFromEmployerResponse;
}(SpeakeasyBase));
export { GetRtiTransactionsFromEmployerResponse };
