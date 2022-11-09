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
var GetHolidaySchemeByEffectiveDatePathParams = /** @class */ (function (_super) {
    __extends(GetHolidaySchemeByEffectiveDatePathParams, _super);
    function GetHolidaySchemeByEffectiveDatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], GetHolidaySchemeByEffectiveDatePathParams.prototype, "effectiveDate", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetHolidaySchemeByEffectiveDatePathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" }),
        __metadata("design:type", String)
    ], GetHolidaySchemeByEffectiveDatePathParams.prototype, "holidaySchemeId", void 0);
    return GetHolidaySchemeByEffectiveDatePathParams;
}(SpeakeasyBase));
export { GetHolidaySchemeByEffectiveDatePathParams };
var GetHolidaySchemeByEffectiveDateHeaders = /** @class */ (function (_super) {
    __extends(GetHolidaySchemeByEffectiveDateHeaders, _super);
    function GetHolidaySchemeByEffectiveDateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetHolidaySchemeByEffectiveDateHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetHolidaySchemeByEffectiveDateHeaders.prototype, "authorization", void 0);
    return GetHolidaySchemeByEffectiveDateHeaders;
}(SpeakeasyBase));
export { GetHolidaySchemeByEffectiveDateHeaders };
var GetHolidaySchemeByEffectiveDateRequest = /** @class */ (function (_super) {
    __extends(GetHolidaySchemeByEffectiveDateRequest, _super);
    function GetHolidaySchemeByEffectiveDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetHolidaySchemeByEffectiveDatePathParams)
    ], GetHolidaySchemeByEffectiveDateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetHolidaySchemeByEffectiveDateHeaders)
    ], GetHolidaySchemeByEffectiveDateRequest.prototype, "headers", void 0);
    return GetHolidaySchemeByEffectiveDateRequest;
}(SpeakeasyBase));
export { GetHolidaySchemeByEffectiveDateRequest };
var GetHolidaySchemeByEffectiveDateResponse = /** @class */ (function (_super) {
    __extends(GetHolidaySchemeByEffectiveDateResponse, _super);
    function GetHolidaySchemeByEffectiveDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetHolidaySchemeByEffectiveDateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetHolidaySchemeByEffectiveDateResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HolidayScheme)
    ], GetHolidaySchemeByEffectiveDateResponse.prototype, "holidayScheme", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetHolidaySchemeByEffectiveDateResponse.prototype, "statusCode", void 0);
    return GetHolidaySchemeByEffectiveDateResponse;
}(SpeakeasyBase));
export { GetHolidaySchemeByEffectiveDateResponse };
