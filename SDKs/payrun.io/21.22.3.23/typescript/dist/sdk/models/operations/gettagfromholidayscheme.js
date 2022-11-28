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
var GetTagFromHolidaySchemePathParams = /** @class */ (function (_super) {
    __extends(GetTagFromHolidaySchemePathParams, _super);
    function GetTagFromHolidaySchemePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetTagFromHolidaySchemePathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" }),
        __metadata("design:type", String)
    ], GetTagFromHolidaySchemePathParams.prototype, "holidaySchemeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], GetTagFromHolidaySchemePathParams.prototype, "tagId", void 0);
    return GetTagFromHolidaySchemePathParams;
}(SpeakeasyBase));
export { GetTagFromHolidaySchemePathParams };
var GetTagFromHolidaySchemeHeaders = /** @class */ (function (_super) {
    __extends(GetTagFromHolidaySchemeHeaders, _super);
    function GetTagFromHolidaySchemeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetTagFromHolidaySchemeHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTagFromHolidaySchemeHeaders.prototype, "authorization", void 0);
    return GetTagFromHolidaySchemeHeaders;
}(SpeakeasyBase));
export { GetTagFromHolidaySchemeHeaders };
var GetTagFromHolidaySchemeRequest = /** @class */ (function (_super) {
    __extends(GetTagFromHolidaySchemeRequest, _super);
    function GetTagFromHolidaySchemeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagFromHolidaySchemePathParams)
    ], GetTagFromHolidaySchemeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagFromHolidaySchemeHeaders)
    ], GetTagFromHolidaySchemeRequest.prototype, "headers", void 0);
    return GetTagFromHolidaySchemeRequest;
}(SpeakeasyBase));
export { GetTagFromHolidaySchemeRequest };
var GetTagFromHolidaySchemeResponse = /** @class */ (function (_super) {
    __extends(GetTagFromHolidaySchemeResponse, _super);
    function GetTagFromHolidaySchemeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagFromHolidaySchemeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetTagFromHolidaySchemeResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagFromHolidaySchemeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tag)
    ], GetTagFromHolidaySchemeResponse.prototype, "tag", void 0);
    return GetTagFromHolidaySchemeResponse;
}(SpeakeasyBase));
export { GetTagFromHolidaySchemeResponse };
