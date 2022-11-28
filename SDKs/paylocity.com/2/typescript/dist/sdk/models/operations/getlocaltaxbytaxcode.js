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
var GetLocalTaxByTaxCodePathParams = /** @class */ (function (_super) {
    __extends(GetLocalTaxByTaxCodePathParams, _super);
    function GetLocalTaxByTaxCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], GetLocalTaxByTaxCodePathParams.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], GetLocalTaxByTaxCodePathParams.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxCode" }),
        __metadata("design:type", String)
    ], GetLocalTaxByTaxCodePathParams.prototype, "taxCode", void 0);
    return GetLocalTaxByTaxCodePathParams;
}(SpeakeasyBase));
export { GetLocalTaxByTaxCodePathParams };
var GetLocalTaxByTaxCodeSecurity = /** @class */ (function (_super) {
    __extends(GetLocalTaxByTaxCodeSecurity, _super);
    function GetLocalTaxByTaxCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], GetLocalTaxByTaxCodeSecurity.prototype, "paylocityAuth", void 0);
    return GetLocalTaxByTaxCodeSecurity;
}(SpeakeasyBase));
export { GetLocalTaxByTaxCodeSecurity };
var GetLocalTaxByTaxCodeRequest = /** @class */ (function (_super) {
    __extends(GetLocalTaxByTaxCodeRequest, _super);
    function GetLocalTaxByTaxCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLocalTaxByTaxCodePathParams)
    ], GetLocalTaxByTaxCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLocalTaxByTaxCodeSecurity)
    ], GetLocalTaxByTaxCodeRequest.prototype, "security", void 0);
    return GetLocalTaxByTaxCodeRequest;
}(SpeakeasyBase));
export { GetLocalTaxByTaxCodeRequest };
var GetLocalTaxByTaxCodeResponse = /** @class */ (function (_super) {
    __extends(GetLocalTaxByTaxCodeResponse, _super);
    function GetLocalTaxByTaxCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLocalTaxByTaxCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLocalTaxByTaxCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], GetLocalTaxByTaxCodeResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.LocalTax }),
        __metadata("design:type", Array)
    ], GetLocalTaxByTaxCodeResponse.prototype, "localTaxes", void 0);
    return GetLocalTaxByTaxCodeResponse;
}(SpeakeasyBase));
export { GetLocalTaxByTaxCodeResponse };
