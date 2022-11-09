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
var GetCommentariesFromPayRunPathParams = /** @class */ (function (_super) {
    __extends(GetCommentariesFromPayRunPathParams, _super);
    function GetCommentariesFromPayRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetCommentariesFromPayRunPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PayRunId" }),
        __metadata("design:type", String)
    ], GetCommentariesFromPayRunPathParams.prototype, "payRunId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" }),
        __metadata("design:type", String)
    ], GetCommentariesFromPayRunPathParams.prototype, "payScheduleId", void 0);
    return GetCommentariesFromPayRunPathParams;
}(SpeakeasyBase));
export { GetCommentariesFromPayRunPathParams };
var GetCommentariesFromPayRunHeaders = /** @class */ (function (_super) {
    __extends(GetCommentariesFromPayRunHeaders, _super);
    function GetCommentariesFromPayRunHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetCommentariesFromPayRunHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetCommentariesFromPayRunHeaders.prototype, "authorization", void 0);
    return GetCommentariesFromPayRunHeaders;
}(SpeakeasyBase));
export { GetCommentariesFromPayRunHeaders };
var GetCommentariesFromPayRunRequest = /** @class */ (function (_super) {
    __extends(GetCommentariesFromPayRunRequest, _super);
    function GetCommentariesFromPayRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCommentariesFromPayRunPathParams)
    ], GetCommentariesFromPayRunRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCommentariesFromPayRunHeaders)
    ], GetCommentariesFromPayRunRequest.prototype, "headers", void 0);
    return GetCommentariesFromPayRunRequest;
}(SpeakeasyBase));
export { GetCommentariesFromPayRunRequest };
var GetCommentariesFromPayRunResponse = /** @class */ (function (_super) {
    __extends(GetCommentariesFromPayRunResponse, _super);
    function GetCommentariesFromPayRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCommentariesFromPayRunResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetCommentariesFromPayRunResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetCommentariesFromPayRunResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCommentariesFromPayRunResponse.prototype, "statusCode", void 0);
    return GetCommentariesFromPayRunResponse;
}(SpeakeasyBase));
export { GetCommentariesFromPayRunResponse };
