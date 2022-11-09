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
var GetAllEarningsPathParams = /** @class */ (function (_super) {
    __extends(GetAllEarningsPathParams, _super);
    function GetAllEarningsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" }),
        __metadata("design:type", String)
    ], GetAllEarningsPathParams.prototype, "companyId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" }),
        __metadata("design:type", String)
    ], GetAllEarningsPathParams.prototype, "employeeId", void 0);
    return GetAllEarningsPathParams;
}(SpeakeasyBase));
export { GetAllEarningsPathParams };
var GetAllEarningsSecurity = /** @class */ (function (_super) {
    __extends(GetAllEarningsSecurity, _super);
    function GetAllEarningsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemePaylocityAuth)
    ], GetAllEarningsSecurity.prototype, "paylocityAuth", void 0);
    return GetAllEarningsSecurity;
}(SpeakeasyBase));
export { GetAllEarningsSecurity };
var GetAllEarningsRequest = /** @class */ (function (_super) {
    __extends(GetAllEarningsRequest, _super);
    function GetAllEarningsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAllEarningsPathParams)
    ], GetAllEarningsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAllEarningsSecurity)
    ], GetAllEarningsRequest.prototype, "security", void 0);
    return GetAllEarningsRequest;
}(SpeakeasyBase));
export { GetAllEarningsRequest };
var GetAllEarningsResponse = /** @class */ (function (_super) {
    __extends(GetAllEarningsResponse, _super);
    function GetAllEarningsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAllEarningsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAllEarningsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.Earning }),
        __metadata("design:type", Array)
    ], GetAllEarningsResponse.prototype, "earnings", void 0);
    __decorate([
        Metadata({ elemType: shared.Error }),
        __metadata("design:type", Array)
    ], GetAllEarningsResponse.prototype, "errors", void 0);
    return GetAllEarningsResponse;
}(SpeakeasyBase));
export { GetAllEarningsResponse };
