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
var GetTagsFromSubContractorRevisionPathParams = /** @class */ (function (_super) {
    __extends(GetTagsFromSubContractorRevisionPathParams, _super);
    function GetTagsFromSubContractorRevisionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], GetTagsFromSubContractorRevisionPathParams.prototype, "effectiveDate", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetTagsFromSubContractorRevisionPathParams.prototype, "employerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], GetTagsFromSubContractorRevisionPathParams.prototype, "subContractorId", void 0);
    return GetTagsFromSubContractorRevisionPathParams;
}(SpeakeasyBase));
export { GetTagsFromSubContractorRevisionPathParams };
var GetTagsFromSubContractorRevisionHeaders = /** @class */ (function (_super) {
    __extends(GetTagsFromSubContractorRevisionHeaders, _super);
    function GetTagsFromSubContractorRevisionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetTagsFromSubContractorRevisionHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTagsFromSubContractorRevisionHeaders.prototype, "authorization", void 0);
    return GetTagsFromSubContractorRevisionHeaders;
}(SpeakeasyBase));
export { GetTagsFromSubContractorRevisionHeaders };
var GetTagsFromSubContractorRevisionRequest = /** @class */ (function (_super) {
    __extends(GetTagsFromSubContractorRevisionRequest, _super);
    function GetTagsFromSubContractorRevisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagsFromSubContractorRevisionPathParams)
    ], GetTagsFromSubContractorRevisionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTagsFromSubContractorRevisionHeaders)
    ], GetTagsFromSubContractorRevisionRequest.prototype, "headers", void 0);
    return GetTagsFromSubContractorRevisionRequest;
}(SpeakeasyBase));
export { GetTagsFromSubContractorRevisionRequest };
var GetTagsFromSubContractorRevisionResponse = /** @class */ (function (_super) {
    __extends(GetTagsFromSubContractorRevisionResponse, _super);
    function GetTagsFromSubContractorRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTagsFromSubContractorRevisionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetTagsFromSubContractorRevisionResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetTagsFromSubContractorRevisionResponse.prototype, "linkCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTagsFromSubContractorRevisionResponse.prototype, "statusCode", void 0);
    return GetTagsFromSubContractorRevisionResponse;
}(SpeakeasyBase));
export { GetTagsFromSubContractorRevisionResponse };
