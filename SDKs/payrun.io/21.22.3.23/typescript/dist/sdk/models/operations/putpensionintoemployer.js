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
var PutPensionIntoEmployerPathParams = /** @class */ (function (_super) {
    __extends(PutPensionIntoEmployerPathParams, _super);
    function PutPensionIntoEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutPensionIntoEmployerPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PensionId" }),
        __metadata("design:type", String)
    ], PutPensionIntoEmployerPathParams.prototype, "pensionId", void 0);
    return PutPensionIntoEmployerPathParams;
}(SpeakeasyBase));
export { PutPensionIntoEmployerPathParams };
var PutPensionIntoEmployerHeaders = /** @class */ (function (_super) {
    __extends(PutPensionIntoEmployerHeaders, _super);
    function PutPensionIntoEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutPensionIntoEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutPensionIntoEmployerHeaders.prototype, "authorization", void 0);
    return PutPensionIntoEmployerHeaders;
}(SpeakeasyBase));
export { PutPensionIntoEmployerHeaders };
var PutPensionIntoEmployerRequest = /** @class */ (function (_super) {
    __extends(PutPensionIntoEmployerRequest, _super);
    function PutPensionIntoEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutPensionIntoEmployerPathParams)
    ], PutPensionIntoEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutPensionIntoEmployerHeaders)
    ], PutPensionIntoEmployerRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Pension)
    ], PutPensionIntoEmployerRequest.prototype, "request", void 0);
    return PutPensionIntoEmployerRequest;
}(SpeakeasyBase));
export { PutPensionIntoEmployerRequest };
var PutPensionIntoEmployerResponse = /** @class */ (function (_super) {
    __extends(PutPensionIntoEmployerResponse, _super);
    function PutPensionIntoEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutPensionIntoEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutPensionIntoEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Pension)
    ], PutPensionIntoEmployerResponse.prototype, "pension", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutPensionIntoEmployerResponse.prototype, "statusCode", void 0);
    return PutPensionIntoEmployerResponse;
}(SpeakeasyBase));
export { PutPensionIntoEmployerResponse };
