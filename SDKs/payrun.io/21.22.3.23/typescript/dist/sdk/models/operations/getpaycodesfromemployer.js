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
var GetPayCodesFromEmployerPathParams = /** @class */ (function (_super) {
    __extends(GetPayCodesFromEmployerPathParams, _super);
    function GetPayCodesFromEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetPayCodesFromEmployerPathParams.prototype, "employerId", void 0);
    return GetPayCodesFromEmployerPathParams;
}(SpeakeasyBase));
export { GetPayCodesFromEmployerPathParams };
var GetPayCodesFromEmployerHeaders = /** @class */ (function (_super) {
    __extends(GetPayCodesFromEmployerHeaders, _super);
    function GetPayCodesFromEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetPayCodesFromEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetPayCodesFromEmployerHeaders.prototype, "authorization", void 0);
    return GetPayCodesFromEmployerHeaders;
}(SpeakeasyBase));
export { GetPayCodesFromEmployerHeaders };
var GetPayCodesFromEmployerRequest = /** @class */ (function (_super) {
    __extends(GetPayCodesFromEmployerRequest, _super);
    function GetPayCodesFromEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayCodesFromEmployerPathParams)
    ], GetPayCodesFromEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayCodesFromEmployerHeaders)
    ], GetPayCodesFromEmployerRequest.prototype, "headers", void 0);
    return GetPayCodesFromEmployerRequest;
}(SpeakeasyBase));
export { GetPayCodesFromEmployerRequest };
var GetPayCodesFromEmployerResponse = /** @class */ (function (_super) {
    __extends(GetPayCodesFromEmployerResponse, _super);
    function GetPayCodesFromEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayCodesFromEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetPayCodesFromEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetPayCodesFromEmployerResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayCodesFromEmployerResponse.prototype, "statusCode", void 0);
    return GetPayCodesFromEmployerResponse;
}(SpeakeasyBase));
export { GetPayCodesFromEmployerResponse };
