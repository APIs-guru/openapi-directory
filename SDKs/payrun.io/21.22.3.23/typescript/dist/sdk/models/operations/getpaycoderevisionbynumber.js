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
var GetPayCodeRevisionByNumberPathParams = /** @class */ (function (_super) {
    __extends(GetPayCodeRevisionByNumberPathParams, _super);
    function GetPayCodeRevisionByNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetPayCodeRevisionByNumberPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayCodeId" }),
        __metadata("design:type", String)
    ], GetPayCodeRevisionByNumberPathParams.prototype, "payCodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" }),
        __metadata("design:type", String)
    ], GetPayCodeRevisionByNumberPathParams.prototype, "revisionNumber", void 0);
    return GetPayCodeRevisionByNumberPathParams;
}(SpeakeasyBase));
export { GetPayCodeRevisionByNumberPathParams };
var GetPayCodeRevisionByNumberHeaders = /** @class */ (function (_super) {
    __extends(GetPayCodeRevisionByNumberHeaders, _super);
    function GetPayCodeRevisionByNumberHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetPayCodeRevisionByNumberHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetPayCodeRevisionByNumberHeaders.prototype, "authorization", void 0);
    return GetPayCodeRevisionByNumberHeaders;
}(SpeakeasyBase));
export { GetPayCodeRevisionByNumberHeaders };
var GetPayCodeRevisionByNumberRequest = /** @class */ (function (_super) {
    __extends(GetPayCodeRevisionByNumberRequest, _super);
    function GetPayCodeRevisionByNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayCodeRevisionByNumberPathParams)
    ], GetPayCodeRevisionByNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayCodeRevisionByNumberHeaders)
    ], GetPayCodeRevisionByNumberRequest.prototype, "headers", void 0);
    return GetPayCodeRevisionByNumberRequest;
}(SpeakeasyBase));
export { GetPayCodeRevisionByNumberRequest };
var GetPayCodeRevisionByNumberResponse = /** @class */ (function (_super) {
    __extends(GetPayCodeRevisionByNumberResponse, _super);
    function GetPayCodeRevisionByNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayCodeRevisionByNumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetPayCodeRevisionByNumberResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayCode)
    ], GetPayCodeRevisionByNumberResponse.prototype, "payCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayCodeRevisionByNumberResponse.prototype, "statusCode", void 0);
    return GetPayCodeRevisionByNumberResponse;
}(SpeakeasyBase));
export { GetPayCodeRevisionByNumberResponse };
