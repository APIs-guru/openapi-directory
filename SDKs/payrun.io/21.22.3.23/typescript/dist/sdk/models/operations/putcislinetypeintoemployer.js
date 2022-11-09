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
var PutCisLineTypeIntoEmployerPathParams = /** @class */ (function (_super) {
    __extends(PutCisLineTypeIntoEmployerPathParams, _super);
    function PutCisLineTypeIntoEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CisLineTypeId" }),
        __metadata("design:type", String)
    ], PutCisLineTypeIntoEmployerPathParams.prototype, "cisLineTypeId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutCisLineTypeIntoEmployerPathParams.prototype, "employerId", void 0);
    return PutCisLineTypeIntoEmployerPathParams;
}(SpeakeasyBase));
export { PutCisLineTypeIntoEmployerPathParams };
var PutCisLineTypeIntoEmployerHeaders = /** @class */ (function (_super) {
    __extends(PutCisLineTypeIntoEmployerHeaders, _super);
    function PutCisLineTypeIntoEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutCisLineTypeIntoEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutCisLineTypeIntoEmployerHeaders.prototype, "authorization", void 0);
    return PutCisLineTypeIntoEmployerHeaders;
}(SpeakeasyBase));
export { PutCisLineTypeIntoEmployerHeaders };
var PutCisLineTypeIntoEmployerRequest = /** @class */ (function (_super) {
    __extends(PutCisLineTypeIntoEmployerRequest, _super);
    function PutCisLineTypeIntoEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutCisLineTypeIntoEmployerPathParams)
    ], PutCisLineTypeIntoEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutCisLineTypeIntoEmployerHeaders)
    ], PutCisLineTypeIntoEmployerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CisLineType)
    ], PutCisLineTypeIntoEmployerRequest.prototype, "request", void 0);
    return PutCisLineTypeIntoEmployerRequest;
}(SpeakeasyBase));
export { PutCisLineTypeIntoEmployerRequest };
var PutCisLineTypeIntoEmployerResponse = /** @class */ (function (_super) {
    __extends(PutCisLineTypeIntoEmployerResponse, _super);
    function PutCisLineTypeIntoEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CisLineType)
    ], PutCisLineTypeIntoEmployerResponse.prototype, "cisLineType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutCisLineTypeIntoEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutCisLineTypeIntoEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutCisLineTypeIntoEmployerResponse.prototype, "statusCode", void 0);
    return PutCisLineTypeIntoEmployerResponse;
}(SpeakeasyBase));
export { PutCisLineTypeIntoEmployerResponse };
