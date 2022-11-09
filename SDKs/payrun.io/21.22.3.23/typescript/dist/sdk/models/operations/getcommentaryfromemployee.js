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
var GetCommentaryFromEmployeePathParams = /** @class */ (function (_super) {
    __extends(GetCommentaryFromEmployeePathParams, _super);
    function GetCommentaryFromEmployeePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CommentaryId" }),
        __metadata("design:type", String)
    ], GetCommentaryFromEmployeePathParams.prototype, "commentaryId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" }),
        __metadata("design:type", String)
    ], GetCommentaryFromEmployeePathParams.prototype, "employeeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetCommentaryFromEmployeePathParams.prototype, "employerId", void 0);
    return GetCommentaryFromEmployeePathParams;
}(SpeakeasyBase));
export { GetCommentaryFromEmployeePathParams };
var GetCommentaryFromEmployeeHeaders = /** @class */ (function (_super) {
    __extends(GetCommentaryFromEmployeeHeaders, _super);
    function GetCommentaryFromEmployeeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetCommentaryFromEmployeeHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetCommentaryFromEmployeeHeaders.prototype, "authorization", void 0);
    return GetCommentaryFromEmployeeHeaders;
}(SpeakeasyBase));
export { GetCommentaryFromEmployeeHeaders };
var GetCommentaryFromEmployeeRequest = /** @class */ (function (_super) {
    __extends(GetCommentaryFromEmployeeRequest, _super);
    function GetCommentaryFromEmployeeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCommentaryFromEmployeePathParams)
    ], GetCommentaryFromEmployeeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCommentaryFromEmployeeHeaders)
    ], GetCommentaryFromEmployeeRequest.prototype, "headers", void 0);
    return GetCommentaryFromEmployeeRequest;
}(SpeakeasyBase));
export { GetCommentaryFromEmployeeRequest };
var GetCommentaryFromEmployeeResponse = /** @class */ (function (_super) {
    __extends(GetCommentaryFromEmployeeResponse, _super);
    function GetCommentaryFromEmployeeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Commentary)
    ], GetCommentaryFromEmployeeResponse.prototype, "commentary", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCommentaryFromEmployeeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetCommentaryFromEmployeeResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCommentaryFromEmployeeResponse.prototype, "statusCode", void 0);
    return GetCommentaryFromEmployeeResponse;
}(SpeakeasyBase));
export { GetCommentaryFromEmployeeResponse };
