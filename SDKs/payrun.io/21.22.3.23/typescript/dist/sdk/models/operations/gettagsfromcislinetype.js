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
var GetTagsFromCisLineTypePathParams = /** @class */ (function (_super) {
    __extends(GetTagsFromCisLineTypePathParams, _super);
    function GetTagsFromCisLineTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CisLineTypeId" }),
        __metadata("design:type", String)
    ], GetTagsFromCisLineTypePathParams.prototype, "cisLineTypeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetTagsFromCisLineTypePathParams.prototype, "employerId", void 0);
    return GetTagsFromCisLineTypePathParams;
}(SpeakeasyBase));
export { GetTagsFromCisLineTypePathParams };
var GetTagsFromCisLineTypeHeaders = /** @class */ (function (_super) {
    __extends(GetTagsFromCisLineTypeHeaders, _super);
    function GetTagsFromCisLineTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetTagsFromCisLineTypeHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTagsFromCisLineTypeHeaders.prototype, "authorization", void 0);
    return GetTagsFromCisLineTypeHeaders;
}(SpeakeasyBase));
export { GetTagsFromCisLineTypeHeaders };
var GetTagsFromCisLineTypeRequest = /** @class */ (function (_super) {
    __extends(GetTagsFromCisLineTypeRequest, _super);
    function GetTagsFromCisLineTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagsFromCisLineTypePathParams)
    ], GetTagsFromCisLineTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagsFromCisLineTypeHeaders)
    ], GetTagsFromCisLineTypeRequest.prototype, "headers", void 0);
    return GetTagsFromCisLineTypeRequest;
}(SpeakeasyBase));
export { GetTagsFromCisLineTypeRequest };
var GetTagsFromCisLineTypeResponse = /** @class */ (function (_super) {
    __extends(GetTagsFromCisLineTypeResponse, _super);
    function GetTagsFromCisLineTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTagsFromCisLineTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetTagsFromCisLineTypeResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetTagsFromCisLineTypeResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTagsFromCisLineTypeResponse.prototype, "statusCode", void 0);
    return GetTagsFromCisLineTypeResponse;
}(SpeakeasyBase));
export { GetTagsFromCisLineTypeResponse };
