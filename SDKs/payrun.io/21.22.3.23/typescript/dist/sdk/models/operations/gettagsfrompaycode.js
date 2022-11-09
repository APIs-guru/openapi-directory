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
var GetTagsFromPayCodePathParams = /** @class */ (function (_super) {
    __extends(GetTagsFromPayCodePathParams, _super);
    function GetTagsFromPayCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetTagsFromPayCodePathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PayCodeId" }),
        __metadata("design:type", String)
    ], GetTagsFromPayCodePathParams.prototype, "payCodeId", void 0);
    return GetTagsFromPayCodePathParams;
}(SpeakeasyBase));
export { GetTagsFromPayCodePathParams };
var GetTagsFromPayCodeHeaders = /** @class */ (function (_super) {
    __extends(GetTagsFromPayCodeHeaders, _super);
    function GetTagsFromPayCodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetTagsFromPayCodeHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTagsFromPayCodeHeaders.prototype, "authorization", void 0);
    return GetTagsFromPayCodeHeaders;
}(SpeakeasyBase));
export { GetTagsFromPayCodeHeaders };
var GetTagsFromPayCodeRequest = /** @class */ (function (_super) {
    __extends(GetTagsFromPayCodeRequest, _super);
    function GetTagsFromPayCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagsFromPayCodePathParams)
    ], GetTagsFromPayCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagsFromPayCodeHeaders)
    ], GetTagsFromPayCodeRequest.prototype, "headers", void 0);
    return GetTagsFromPayCodeRequest;
}(SpeakeasyBase));
export { GetTagsFromPayCodeRequest };
var GetTagsFromPayCodeResponse = /** @class */ (function (_super) {
    __extends(GetTagsFromPayCodeResponse, _super);
    function GetTagsFromPayCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTagsFromPayCodeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetTagsFromPayCodeResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetTagsFromPayCodeResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTagsFromPayCodeResponse.prototype, "statusCode", void 0);
    return GetTagsFromPayCodeResponse;
}(SpeakeasyBase));
export { GetTagsFromPayCodeResponse };
