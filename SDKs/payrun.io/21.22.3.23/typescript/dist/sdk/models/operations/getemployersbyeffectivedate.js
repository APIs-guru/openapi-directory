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
var GetEmployersByEffectiveDatePathParams = /** @class */ (function (_super) {
    __extends(GetEmployersByEffectiveDatePathParams, _super);
    function GetEmployersByEffectiveDatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], GetEmployersByEffectiveDatePathParams.prototype, "effectiveDate", void 0);
    return GetEmployersByEffectiveDatePathParams;
}(SpeakeasyBase));
export { GetEmployersByEffectiveDatePathParams };
var GetEmployersByEffectiveDateHeaders = /** @class */ (function (_super) {
    __extends(GetEmployersByEffectiveDateHeaders, _super);
    function GetEmployersByEffectiveDateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetEmployersByEffectiveDateHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetEmployersByEffectiveDateHeaders.prototype, "authorization", void 0);
    return GetEmployersByEffectiveDateHeaders;
}(SpeakeasyBase));
export { GetEmployersByEffectiveDateHeaders };
var GetEmployersByEffectiveDateRequest = /** @class */ (function (_super) {
    __extends(GetEmployersByEffectiveDateRequest, _super);
    function GetEmployersByEffectiveDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEmployersByEffectiveDatePathParams)
    ], GetEmployersByEffectiveDateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEmployersByEffectiveDateHeaders)
    ], GetEmployersByEffectiveDateRequest.prototype, "headers", void 0);
    return GetEmployersByEffectiveDateRequest;
}(SpeakeasyBase));
export { GetEmployersByEffectiveDateRequest };
var GetEmployersByEffectiveDateResponse = /** @class */ (function (_super) {
    __extends(GetEmployersByEffectiveDateResponse, _super);
    function GetEmployersByEffectiveDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEmployersByEffectiveDateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetEmployersByEffectiveDateResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetEmployersByEffectiveDateResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEmployersByEffectiveDateResponse.prototype, "statusCode", void 0);
    return GetEmployersByEffectiveDateResponse;
}(SpeakeasyBase));
export { GetEmployersByEffectiveDateResponse };
