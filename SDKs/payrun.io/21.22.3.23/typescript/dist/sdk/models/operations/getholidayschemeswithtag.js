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
var GetHolidaySchemesWithTagPathParams = /** @class */ (function (_super) {
    __extends(GetHolidaySchemesWithTagPathParams, _super);
    function GetHolidaySchemesWithTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetHolidaySchemesWithTagPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], GetHolidaySchemesWithTagPathParams.prototype, "tagId", void 0);
    return GetHolidaySchemesWithTagPathParams;
}(SpeakeasyBase));
export { GetHolidaySchemesWithTagPathParams };
var GetHolidaySchemesWithTagHeaders = /** @class */ (function (_super) {
    __extends(GetHolidaySchemesWithTagHeaders, _super);
    function GetHolidaySchemesWithTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetHolidaySchemesWithTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetHolidaySchemesWithTagHeaders.prototype, "authorization", void 0);
    return GetHolidaySchemesWithTagHeaders;
}(SpeakeasyBase));
export { GetHolidaySchemesWithTagHeaders };
var GetHolidaySchemesWithTagRequest = /** @class */ (function (_super) {
    __extends(GetHolidaySchemesWithTagRequest, _super);
    function GetHolidaySchemesWithTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetHolidaySchemesWithTagPathParams)
    ], GetHolidaySchemesWithTagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetHolidaySchemesWithTagHeaders)
    ], GetHolidaySchemesWithTagRequest.prototype, "headers", void 0);
    return GetHolidaySchemesWithTagRequest;
}(SpeakeasyBase));
export { GetHolidaySchemesWithTagRequest };
var GetHolidaySchemesWithTagResponse = /** @class */ (function (_super) {
    __extends(GetHolidaySchemesWithTagResponse, _super);
    function GetHolidaySchemesWithTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetHolidaySchemesWithTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetHolidaySchemesWithTagResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetHolidaySchemesWithTagResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetHolidaySchemesWithTagResponse.prototype, "statusCode", void 0);
    return GetHolidaySchemesWithTagResponse;
}(SpeakeasyBase));
export { GetHolidaySchemesWithTagResponse };
