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
var GetTemplateModelPathParams = /** @class */ (function (_super) {
    __extends(GetTemplateModelPathParams, _super);
    function GetTemplateModelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DtoDataType" }),
        __metadata("design:type", String)
    ], GetTemplateModelPathParams.prototype, "dtoDataType", void 0);
    return GetTemplateModelPathParams;
}(SpeakeasyBase));
export { GetTemplateModelPathParams };
var GetTemplateModelHeaders = /** @class */ (function (_super) {
    __extends(GetTemplateModelHeaders, _super);
    function GetTemplateModelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetTemplateModelHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetTemplateModelHeaders.prototype, "authorization", void 0);
    return GetTemplateModelHeaders;
}(SpeakeasyBase));
export { GetTemplateModelHeaders };
var GetTemplateModelRequest = /** @class */ (function (_super) {
    __extends(GetTemplateModelRequest, _super);
    function GetTemplateModelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplateModelPathParams)
    ], GetTemplateModelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplateModelHeaders)
    ], GetTemplateModelRequest.prototype, "headers", void 0);
    return GetTemplateModelRequest;
}(SpeakeasyBase));
export { GetTemplateModelRequest };
var GetTemplateModelResponse = /** @class */ (function (_super) {
    __extends(GetTemplateModelResponse, _super);
    function GetTemplateModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTemplateModelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetTemplateModelResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTemplateModelResponse.prototype, "getTemplateModel200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTemplateModelResponse.prototype, "statusCode", void 0);
    return GetTemplateModelResponse;
}(SpeakeasyBase));
export { GetTemplateModelResponse };
