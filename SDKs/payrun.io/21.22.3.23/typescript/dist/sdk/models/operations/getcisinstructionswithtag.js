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
var GetCisInstructionsWithTagPathParams = /** @class */ (function (_super) {
    __extends(GetCisInstructionsWithTagPathParams, _super);
    function GetCisInstructionsWithTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetCisInstructionsWithTagPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], GetCisInstructionsWithTagPathParams.prototype, "subContractorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], GetCisInstructionsWithTagPathParams.prototype, "tagId", void 0);
    return GetCisInstructionsWithTagPathParams;
}(SpeakeasyBase));
export { GetCisInstructionsWithTagPathParams };
var GetCisInstructionsWithTagHeaders = /** @class */ (function (_super) {
    __extends(GetCisInstructionsWithTagHeaders, _super);
    function GetCisInstructionsWithTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetCisInstructionsWithTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetCisInstructionsWithTagHeaders.prototype, "authorization", void 0);
    return GetCisInstructionsWithTagHeaders;
}(SpeakeasyBase));
export { GetCisInstructionsWithTagHeaders };
var GetCisInstructionsWithTagRequest = /** @class */ (function (_super) {
    __extends(GetCisInstructionsWithTagRequest, _super);
    function GetCisInstructionsWithTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCisInstructionsWithTagPathParams)
    ], GetCisInstructionsWithTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCisInstructionsWithTagHeaders)
    ], GetCisInstructionsWithTagRequest.prototype, "headers", void 0);
    return GetCisInstructionsWithTagRequest;
}(SpeakeasyBase));
export { GetCisInstructionsWithTagRequest };
var GetCisInstructionsWithTagResponse = /** @class */ (function (_super) {
    __extends(GetCisInstructionsWithTagResponse, _super);
    function GetCisInstructionsWithTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCisInstructionsWithTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetCisInstructionsWithTagResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetCisInstructionsWithTagResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCisInstructionsWithTagResponse.prototype, "statusCode", void 0);
    return GetCisInstructionsWithTagResponse;
}(SpeakeasyBase));
export { GetCisInstructionsWithTagResponse };
