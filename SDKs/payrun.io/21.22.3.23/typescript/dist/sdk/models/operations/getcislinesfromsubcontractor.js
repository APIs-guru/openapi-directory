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
var GetCisLinesFromSubContractorPathParams = /** @class */ (function (_super) {
    __extends(GetCisLinesFromSubContractorPathParams, _super);
    function GetCisLinesFromSubContractorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetCisLinesFromSubContractorPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], GetCisLinesFromSubContractorPathParams.prototype, "subContractorId", void 0);
    return GetCisLinesFromSubContractorPathParams;
}(SpeakeasyBase));
export { GetCisLinesFromSubContractorPathParams };
var GetCisLinesFromSubContractorHeaders = /** @class */ (function (_super) {
    __extends(GetCisLinesFromSubContractorHeaders, _super);
    function GetCisLinesFromSubContractorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetCisLinesFromSubContractorHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetCisLinesFromSubContractorHeaders.prototype, "authorization", void 0);
    return GetCisLinesFromSubContractorHeaders;
}(SpeakeasyBase));
export { GetCisLinesFromSubContractorHeaders };
var GetCisLinesFromSubContractorRequest = /** @class */ (function (_super) {
    __extends(GetCisLinesFromSubContractorRequest, _super);
    function GetCisLinesFromSubContractorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCisLinesFromSubContractorPathParams)
    ], GetCisLinesFromSubContractorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCisLinesFromSubContractorHeaders)
    ], GetCisLinesFromSubContractorRequest.prototype, "headers", void 0);
    return GetCisLinesFromSubContractorRequest;
}(SpeakeasyBase));
export { GetCisLinesFromSubContractorRequest };
var GetCisLinesFromSubContractorResponse = /** @class */ (function (_super) {
    __extends(GetCisLinesFromSubContractorResponse, _super);
    function GetCisLinesFromSubContractorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCisLinesFromSubContractorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetCisLinesFromSubContractorResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetCisLinesFromSubContractorResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCisLinesFromSubContractorResponse.prototype, "statusCode", void 0);
    return GetCisLinesFromSubContractorResponse;
}(SpeakeasyBase));
export { GetCisLinesFromSubContractorResponse };
