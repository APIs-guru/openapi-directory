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
var GetHolidaySchemeFromEmployerPathParams = /** @class */ (function (_super) {
    __extends(GetHolidaySchemeFromEmployerPathParams, _super);
    function GetHolidaySchemeFromEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetHolidaySchemeFromEmployerPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" }),
        __metadata("design:type", String)
    ], GetHolidaySchemeFromEmployerPathParams.prototype, "holidaySchemeId", void 0);
    return GetHolidaySchemeFromEmployerPathParams;
}(SpeakeasyBase));
export { GetHolidaySchemeFromEmployerPathParams };
var GetHolidaySchemeFromEmployerHeaders = /** @class */ (function (_super) {
    __extends(GetHolidaySchemeFromEmployerHeaders, _super);
    function GetHolidaySchemeFromEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetHolidaySchemeFromEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetHolidaySchemeFromEmployerHeaders.prototype, "authorization", void 0);
    return GetHolidaySchemeFromEmployerHeaders;
}(SpeakeasyBase));
export { GetHolidaySchemeFromEmployerHeaders };
var GetHolidaySchemeFromEmployerRequest = /** @class */ (function (_super) {
    __extends(GetHolidaySchemeFromEmployerRequest, _super);
    function GetHolidaySchemeFromEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetHolidaySchemeFromEmployerPathParams)
    ], GetHolidaySchemeFromEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetHolidaySchemeFromEmployerHeaders)
    ], GetHolidaySchemeFromEmployerRequest.prototype, "headers", void 0);
    return GetHolidaySchemeFromEmployerRequest;
}(SpeakeasyBase));
export { GetHolidaySchemeFromEmployerRequest };
var GetHolidaySchemeFromEmployerResponse = /** @class */ (function (_super) {
    __extends(GetHolidaySchemeFromEmployerResponse, _super);
    function GetHolidaySchemeFromEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetHolidaySchemeFromEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetHolidaySchemeFromEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HolidayScheme)
    ], GetHolidaySchemeFromEmployerResponse.prototype, "holidayScheme", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetHolidaySchemeFromEmployerResponse.prototype, "statusCode", void 0);
    return GetHolidaySchemeFromEmployerResponse;
}(SpeakeasyBase));
export { GetHolidaySchemeFromEmployerResponse };
