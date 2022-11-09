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
var GetPensionRevisionByNumberPathParams = /** @class */ (function (_super) {
    __extends(GetPensionRevisionByNumberPathParams, _super);
    function GetPensionRevisionByNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetPensionRevisionByNumberPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PensionId" }),
        __metadata("design:type", String)
    ], GetPensionRevisionByNumberPathParams.prototype, "pensionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" }),
        __metadata("design:type", String)
    ], GetPensionRevisionByNumberPathParams.prototype, "revisionNumber", void 0);
    return GetPensionRevisionByNumberPathParams;
}(SpeakeasyBase));
export { GetPensionRevisionByNumberPathParams };
var GetPensionRevisionByNumberHeaders = /** @class */ (function (_super) {
    __extends(GetPensionRevisionByNumberHeaders, _super);
    function GetPensionRevisionByNumberHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetPensionRevisionByNumberHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetPensionRevisionByNumberHeaders.prototype, "authorization", void 0);
    return GetPensionRevisionByNumberHeaders;
}(SpeakeasyBase));
export { GetPensionRevisionByNumberHeaders };
var GetPensionRevisionByNumberRequest = /** @class */ (function (_super) {
    __extends(GetPensionRevisionByNumberRequest, _super);
    function GetPensionRevisionByNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPensionRevisionByNumberPathParams)
    ], GetPensionRevisionByNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPensionRevisionByNumberHeaders)
    ], GetPensionRevisionByNumberRequest.prototype, "headers", void 0);
    return GetPensionRevisionByNumberRequest;
}(SpeakeasyBase));
export { GetPensionRevisionByNumberRequest };
var GetPensionRevisionByNumberResponse = /** @class */ (function (_super) {
    __extends(GetPensionRevisionByNumberResponse, _super);
    function GetPensionRevisionByNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPensionRevisionByNumberResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetPensionRevisionByNumberResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Pension)
    ], GetPensionRevisionByNumberResponse.prototype, "pension", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPensionRevisionByNumberResponse.prototype, "statusCode", void 0);
    return GetPensionRevisionByNumberResponse;
}(SpeakeasyBase));
export { GetPensionRevisionByNumberResponse };
