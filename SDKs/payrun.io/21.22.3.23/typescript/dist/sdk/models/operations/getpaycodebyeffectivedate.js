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
var GetPayCodeByEffectiveDatePathParams = /** @class */ (function (_super) {
    __extends(GetPayCodeByEffectiveDatePathParams, _super);
    function GetPayCodeByEffectiveDatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], GetPayCodeByEffectiveDatePathParams.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetPayCodeByEffectiveDatePathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayCodeId" }),
        __metadata("design:type", String)
    ], GetPayCodeByEffectiveDatePathParams.prototype, "payCodeId", void 0);
    return GetPayCodeByEffectiveDatePathParams;
}(SpeakeasyBase));
export { GetPayCodeByEffectiveDatePathParams };
var GetPayCodeByEffectiveDateHeaders = /** @class */ (function (_super) {
    __extends(GetPayCodeByEffectiveDateHeaders, _super);
    function GetPayCodeByEffectiveDateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetPayCodeByEffectiveDateHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetPayCodeByEffectiveDateHeaders.prototype, "authorization", void 0);
    return GetPayCodeByEffectiveDateHeaders;
}(SpeakeasyBase));
export { GetPayCodeByEffectiveDateHeaders };
var GetPayCodeByEffectiveDateRequest = /** @class */ (function (_super) {
    __extends(GetPayCodeByEffectiveDateRequest, _super);
    function GetPayCodeByEffectiveDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayCodeByEffectiveDatePathParams)
    ], GetPayCodeByEffectiveDateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayCodeByEffectiveDateHeaders)
    ], GetPayCodeByEffectiveDateRequest.prototype, "headers", void 0);
    return GetPayCodeByEffectiveDateRequest;
}(SpeakeasyBase));
export { GetPayCodeByEffectiveDateRequest };
var GetPayCodeByEffectiveDateResponse = /** @class */ (function (_super) {
    __extends(GetPayCodeByEffectiveDateResponse, _super);
    function GetPayCodeByEffectiveDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayCodeByEffectiveDateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetPayCodeByEffectiveDateResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayCode)
    ], GetPayCodeByEffectiveDateResponse.prototype, "payCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayCodeByEffectiveDateResponse.prototype, "statusCode", void 0);
    return GetPayCodeByEffectiveDateResponse;
}(SpeakeasyBase));
export { GetPayCodeByEffectiveDateResponse };
