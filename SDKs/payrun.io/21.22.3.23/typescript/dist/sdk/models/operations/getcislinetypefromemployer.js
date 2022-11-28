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
var GetCisLineTypeFromEmployerPathParams = /** @class */ (function (_super) {
    __extends(GetCisLineTypeFromEmployerPathParams, _super);
    function GetCisLineTypeFromEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CisLineTypeId" }),
        __metadata("design:type", String)
    ], GetCisLineTypeFromEmployerPathParams.prototype, "cisLineTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetCisLineTypeFromEmployerPathParams.prototype, "employerId", void 0);
    return GetCisLineTypeFromEmployerPathParams;
}(SpeakeasyBase));
export { GetCisLineTypeFromEmployerPathParams };
var GetCisLineTypeFromEmployerHeaders = /** @class */ (function (_super) {
    __extends(GetCisLineTypeFromEmployerHeaders, _super);
    function GetCisLineTypeFromEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetCisLineTypeFromEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetCisLineTypeFromEmployerHeaders.prototype, "authorization", void 0);
    return GetCisLineTypeFromEmployerHeaders;
}(SpeakeasyBase));
export { GetCisLineTypeFromEmployerHeaders };
var GetCisLineTypeFromEmployerRequest = /** @class */ (function (_super) {
    __extends(GetCisLineTypeFromEmployerRequest, _super);
    function GetCisLineTypeFromEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCisLineTypeFromEmployerPathParams)
    ], GetCisLineTypeFromEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCisLineTypeFromEmployerHeaders)
    ], GetCisLineTypeFromEmployerRequest.prototype, "headers", void 0);
    return GetCisLineTypeFromEmployerRequest;
}(SpeakeasyBase));
export { GetCisLineTypeFromEmployerRequest };
var GetCisLineTypeFromEmployerResponse = /** @class */ (function (_super) {
    __extends(GetCisLineTypeFromEmployerResponse, _super);
    function GetCisLineTypeFromEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CisLineType)
    ], GetCisLineTypeFromEmployerResponse.prototype, "cisLineType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCisLineTypeFromEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetCisLineTypeFromEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCisLineTypeFromEmployerResponse.prototype, "statusCode", void 0);
    return GetCisLineTypeFromEmployerResponse;
}(SpeakeasyBase));
export { GetCisLineTypeFromEmployerResponse };
