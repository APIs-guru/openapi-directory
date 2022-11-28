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
var GetAllHolidaySchemeTagsPathParams = /** @class */ (function (_super) {
    __extends(GetAllHolidaySchemeTagsPathParams, _super);
    function GetAllHolidaySchemeTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetAllHolidaySchemeTagsPathParams.prototype, "employerId", void 0);
    return GetAllHolidaySchemeTagsPathParams;
}(SpeakeasyBase));
export { GetAllHolidaySchemeTagsPathParams };
var GetAllHolidaySchemeTagsHeaders = /** @class */ (function (_super) {
    __extends(GetAllHolidaySchemeTagsHeaders, _super);
    function GetAllHolidaySchemeTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetAllHolidaySchemeTagsHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAllHolidaySchemeTagsHeaders.prototype, "authorization", void 0);
    return GetAllHolidaySchemeTagsHeaders;
}(SpeakeasyBase));
export { GetAllHolidaySchemeTagsHeaders };
var GetAllHolidaySchemeTagsRequest = /** @class */ (function (_super) {
    __extends(GetAllHolidaySchemeTagsRequest, _super);
    function GetAllHolidaySchemeTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllHolidaySchemeTagsPathParams)
    ], GetAllHolidaySchemeTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllHolidaySchemeTagsHeaders)
    ], GetAllHolidaySchemeTagsRequest.prototype, "headers", void 0);
    return GetAllHolidaySchemeTagsRequest;
}(SpeakeasyBase));
export { GetAllHolidaySchemeTagsRequest };
var GetAllHolidaySchemeTagsResponse = /** @class */ (function (_super) {
    __extends(GetAllHolidaySchemeTagsResponse, _super);
    function GetAllHolidaySchemeTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllHolidaySchemeTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetAllHolidaySchemeTagsResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetAllHolidaySchemeTagsResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllHolidaySchemeTagsResponse.prototype, "statusCode", void 0);
    return GetAllHolidaySchemeTagsResponse;
}(SpeakeasyBase));
export { GetAllHolidaySchemeTagsResponse };
