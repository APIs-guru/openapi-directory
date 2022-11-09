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
var UpdateOrAddEmployeeBenefitSetupPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrAddEmployeeBenefitSetupPathParams, _super);
    function UpdateOrAddEmployeeBenefitSetupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], UpdateOrAddEmployeeBenefitSetupPathParams.prototype, "companyId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], UpdateOrAddEmployeeBenefitSetupPathParams.prototype, "employeeId", void 0);
    return UpdateOrAddEmployeeBenefitSetupPathParams;
}(SpeakeasyBase));
export { UpdateOrAddEmployeeBenefitSetupPathParams };
var UpdateOrAddEmployeeBenefitSetupSecurity = /** @class */ (function (_super) {
    __extends(UpdateOrAddEmployeeBenefitSetupSecurity, _super);
    function UpdateOrAddEmployeeBenefitSetupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], UpdateOrAddEmployeeBenefitSetupSecurity.prototype, "paylocityAuth", void 0);
    return UpdateOrAddEmployeeBenefitSetupSecurity;
}(SpeakeasyBase));
export { UpdateOrAddEmployeeBenefitSetupSecurity };
var UpdateOrAddEmployeeBenefitSetupRequest = /** @class */ (function (_super) {
    __extends(UpdateOrAddEmployeeBenefitSetupRequest, _super);
    function UpdateOrAddEmployeeBenefitSetupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateOrAddEmployeeBenefitSetupPathParams)
    ], UpdateOrAddEmployeeBenefitSetupRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BenefitSetup)
    ], UpdateOrAddEmployeeBenefitSetupRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateOrAddEmployeeBenefitSetupSecurity)
    ], UpdateOrAddEmployeeBenefitSetupRequest.prototype, "security", void 0);
    return UpdateOrAddEmployeeBenefitSetupRequest;
}(SpeakeasyBase));
export { UpdateOrAddEmployeeBenefitSetupRequest };
var UpdateOrAddEmployeeBenefitSetupResponse = /** @class */ (function (_super) {
    __extends(UpdateOrAddEmployeeBenefitSetupResponse, _super);
    function UpdateOrAddEmployeeBenefitSetupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateOrAddEmployeeBenefitSetupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateOrAddEmployeeBenefitSetupResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], UpdateOrAddEmployeeBenefitSetupResponse.prototype, "errors", void 0);
    return UpdateOrAddEmployeeBenefitSetupResponse;
}(SpeakeasyBase));
export { UpdateOrAddEmployeeBenefitSetupResponse };
