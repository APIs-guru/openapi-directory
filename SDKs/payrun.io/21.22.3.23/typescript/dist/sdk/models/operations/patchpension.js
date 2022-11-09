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
var PatchPensionPathParams = /** @class */ (function (_super) {
    __extends(PatchPensionPathParams, _super);
    function PatchPensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PatchPensionPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=PensionId" }),
        __metadata("design:type", String)
    ], PatchPensionPathParams.prototype, "pensionId", void 0);
    return PatchPensionPathParams;
}(SpeakeasyBase));
export { PatchPensionPathParams };
var PatchPensionHeaders = /** @class */ (function (_super) {
    __extends(PatchPensionHeaders, _super);
    function PatchPensionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PatchPensionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PatchPensionHeaders.prototype, "authorization", void 0);
    return PatchPensionHeaders;
}(SpeakeasyBase));
export { PatchPensionHeaders };
var PatchPensionRequest = /** @class */ (function (_super) {
    __extends(PatchPensionRequest, _super);
    function PatchPensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PatchPensionPathParams)
    ], PatchPensionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PatchPensionHeaders)
    ], PatchPensionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Pension)
    ], PatchPensionRequest.prototype, "request", void 0);
    return PatchPensionRequest;
}(SpeakeasyBase));
export { PatchPensionRequest };
var PatchPensionResponse = /** @class */ (function (_super) {
    __extends(PatchPensionResponse, _super);
    function PatchPensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PatchPensionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PatchPensionResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Pension)
    ], PatchPensionResponse.prototype, "pension", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PatchPensionResponse.prototype, "statusCode", void 0);
    return PatchPensionResponse;
}(SpeakeasyBase));
export { PatchPensionResponse };
