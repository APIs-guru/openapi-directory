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
var GetTagsFromHolidaySchemePathParams = /** @class */ (function (_super) {
    __extends(GetTagsFromHolidaySchemePathParams, _super);
    function GetTagsFromHolidaySchemePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetTagsFromHolidaySchemePathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=HolidaySchemeId" }),
        __metadata("design:type", String)
    ], GetTagsFromHolidaySchemePathParams.prototype, "holidaySchemeId", void 0);
    return GetTagsFromHolidaySchemePathParams;
}(SpeakeasyBase));
export { GetTagsFromHolidaySchemePathParams };
var GetTagsFromHolidaySchemeHeaders = /** @class */ (function (_super) {
    __extends(GetTagsFromHolidaySchemeHeaders, _super);
    function GetTagsFromHolidaySchemeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetTagsFromHolidaySchemeHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTagsFromHolidaySchemeHeaders.prototype, "authorization", void 0);
    return GetTagsFromHolidaySchemeHeaders;
}(SpeakeasyBase));
export { GetTagsFromHolidaySchemeHeaders };
var GetTagsFromHolidaySchemeRequest = /** @class */ (function (_super) {
    __extends(GetTagsFromHolidaySchemeRequest, _super);
    function GetTagsFromHolidaySchemeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsFromHolidaySchemePathParams)
    ], GetTagsFromHolidaySchemeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsFromHolidaySchemeHeaders)
    ], GetTagsFromHolidaySchemeRequest.prototype, "headers", void 0);
    return GetTagsFromHolidaySchemeRequest;
}(SpeakeasyBase));
export { GetTagsFromHolidaySchemeRequest };
var GetTagsFromHolidaySchemeResponse = /** @class */ (function (_super) {
    __extends(GetTagsFromHolidaySchemeResponse, _super);
    function GetTagsFromHolidaySchemeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagsFromHolidaySchemeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetTagsFromHolidaySchemeResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetTagsFromHolidaySchemeResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagsFromHolidaySchemeResponse.prototype, "statusCode", void 0);
    return GetTagsFromHolidaySchemeResponse;
}(SpeakeasyBase));
export { GetTagsFromHolidaySchemeResponse };
