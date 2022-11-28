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
var PutHolidaySchemeIntoEmployerPathParams = /** @class */ (function (_super) {
    __extends(PutHolidaySchemeIntoEmployerPathParams, _super);
    function PutHolidaySchemeIntoEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutHolidaySchemeIntoEmployerPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" }),
        __metadata("design:type", String)
    ], PutHolidaySchemeIntoEmployerPathParams.prototype, "holidaySchemeId", void 0);
    return PutHolidaySchemeIntoEmployerPathParams;
}(SpeakeasyBase));
export { PutHolidaySchemeIntoEmployerPathParams };
var PutHolidaySchemeIntoEmployerHeaders = /** @class */ (function (_super) {
    __extends(PutHolidaySchemeIntoEmployerHeaders, _super);
    function PutHolidaySchemeIntoEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutHolidaySchemeIntoEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutHolidaySchemeIntoEmployerHeaders.prototype, "authorization", void 0);
    return PutHolidaySchemeIntoEmployerHeaders;
}(SpeakeasyBase));
export { PutHolidaySchemeIntoEmployerHeaders };
var PutHolidaySchemeIntoEmployerRequest = /** @class */ (function (_super) {
    __extends(PutHolidaySchemeIntoEmployerRequest, _super);
    function PutHolidaySchemeIntoEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutHolidaySchemeIntoEmployerPathParams)
    ], PutHolidaySchemeIntoEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutHolidaySchemeIntoEmployerHeaders)
    ], PutHolidaySchemeIntoEmployerRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HolidayScheme)
    ], PutHolidaySchemeIntoEmployerRequest.prototype, "request", void 0);
    return PutHolidaySchemeIntoEmployerRequest;
}(SpeakeasyBase));
export { PutHolidaySchemeIntoEmployerRequest };
var PutHolidaySchemeIntoEmployerResponse = /** @class */ (function (_super) {
    __extends(PutHolidaySchemeIntoEmployerResponse, _super);
    function PutHolidaySchemeIntoEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutHolidaySchemeIntoEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutHolidaySchemeIntoEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HolidayScheme)
    ], PutHolidaySchemeIntoEmployerResponse.prototype, "holidayScheme", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutHolidaySchemeIntoEmployerResponse.prototype, "statusCode", void 0);
    return PutHolidaySchemeIntoEmployerResponse;
}(SpeakeasyBase));
export { PutHolidaySchemeIntoEmployerResponse };
