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
var PatchHolidaySchemePathParams = /** @class */ (function (_super) {
    __extends(PatchHolidaySchemePathParams, _super);
    function PatchHolidaySchemePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PatchHolidaySchemePathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" }),
        __metadata("design:type", String)
    ], PatchHolidaySchemePathParams.prototype, "holidaySchemeId", void 0);
    return PatchHolidaySchemePathParams;
}(SpeakeasyBase));
export { PatchHolidaySchemePathParams };
var PatchHolidaySchemeHeaders = /** @class */ (function (_super) {
    __extends(PatchHolidaySchemeHeaders, _super);
    function PatchHolidaySchemeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PatchHolidaySchemeHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PatchHolidaySchemeHeaders.prototype, "authorization", void 0);
    return PatchHolidaySchemeHeaders;
}(SpeakeasyBase));
export { PatchHolidaySchemeHeaders };
var PatchHolidaySchemeRequest = /** @class */ (function (_super) {
    __extends(PatchHolidaySchemeRequest, _super);
    function PatchHolidaySchemeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchHolidaySchemePathParams)
    ], PatchHolidaySchemeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchHolidaySchemeHeaders)
    ], PatchHolidaySchemeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HolidayScheme)
    ], PatchHolidaySchemeRequest.prototype, "request", void 0);
    return PatchHolidaySchemeRequest;
}(SpeakeasyBase));
export { PatchHolidaySchemeRequest };
var PatchHolidaySchemeResponse = /** @class */ (function (_super) {
    __extends(PatchHolidaySchemeResponse, _super);
    function PatchHolidaySchemeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchHolidaySchemeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PatchHolidaySchemeResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HolidayScheme)
    ], PatchHolidaySchemeResponse.prototype, "holidayScheme", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchHolidaySchemeResponse.prototype, "statusCode", void 0);
    return PatchHolidaySchemeResponse;
}(SpeakeasyBase));
export { PatchHolidaySchemeResponse };
