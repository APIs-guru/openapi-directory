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
var GetAllDirectDepositPathParams = /** @class */ (function (_super) {
    __extends(GetAllDirectDepositPathParams, _super);
    function GetAllDirectDepositPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], GetAllDirectDepositPathParams.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], GetAllDirectDepositPathParams.prototype, "employeeId", void 0);
    return GetAllDirectDepositPathParams;
}(SpeakeasyBase));
export { GetAllDirectDepositPathParams };
var GetAllDirectDepositSecurity = /** @class */ (function (_super) {
    __extends(GetAllDirectDepositSecurity, _super);
    function GetAllDirectDepositSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], GetAllDirectDepositSecurity.prototype, "paylocityAuth", void 0);
    return GetAllDirectDepositSecurity;
}(SpeakeasyBase));
export { GetAllDirectDepositSecurity };
var GetAllDirectDepositRequest = /** @class */ (function (_super) {
    __extends(GetAllDirectDepositRequest, _super);
    function GetAllDirectDepositRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllDirectDepositPathParams)
    ], GetAllDirectDepositRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllDirectDepositSecurity)
    ], GetAllDirectDepositRequest.prototype, "security", void 0);
    return GetAllDirectDepositRequest;
}(SpeakeasyBase));
export { GetAllDirectDepositRequest };
var GetAllDirectDepositResponse = /** @class */ (function (_super) {
    __extends(GetAllDirectDepositResponse, _super);
    function GetAllDirectDepositResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllDirectDepositResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllDirectDepositResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.DirectDeposit }),
        __metadata("design:type", Array)
    ], GetAllDirectDepositResponse.prototype, "directDeposits", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], GetAllDirectDepositResponse.prototype, "errors", void 0);
    return GetAllDirectDepositResponse;
}(SpeakeasyBase));
export { GetAllDirectDepositResponse };
