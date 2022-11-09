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
var GetAllEmployeeTagsPathParams = /** @class */ (function (_super) {
    __extends(GetAllEmployeeTagsPathParams, _super);
    function GetAllEmployeeTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetAllEmployeeTagsPathParams.prototype, "employerId", void 0);
    return GetAllEmployeeTagsPathParams;
}(SpeakeasyBase));
export { GetAllEmployeeTagsPathParams };
var GetAllEmployeeTagsHeaders = /** @class */ (function (_super) {
    __extends(GetAllEmployeeTagsHeaders, _super);
    function GetAllEmployeeTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetAllEmployeeTagsHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAllEmployeeTagsHeaders.prototype, "authorization", void 0);
    return GetAllEmployeeTagsHeaders;
}(SpeakeasyBase));
export { GetAllEmployeeTagsHeaders };
var GetAllEmployeeTagsRequest = /** @class */ (function (_super) {
    __extends(GetAllEmployeeTagsRequest, _super);
    function GetAllEmployeeTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAllEmployeeTagsPathParams)
    ], GetAllEmployeeTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAllEmployeeTagsHeaders)
    ], GetAllEmployeeTagsRequest.prototype, "headers", void 0);
    return GetAllEmployeeTagsRequest;
}(SpeakeasyBase));
export { GetAllEmployeeTagsRequest };
var GetAllEmployeeTagsResponse = /** @class */ (function (_super) {
    __extends(GetAllEmployeeTagsResponse, _super);
    function GetAllEmployeeTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAllEmployeeTagsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetAllEmployeeTagsResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetAllEmployeeTagsResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAllEmployeeTagsResponse.prototype, "statusCode", void 0);
    return GetAllEmployeeTagsResponse;
}(SpeakeasyBase));
export { GetAllEmployeeTagsResponse };
