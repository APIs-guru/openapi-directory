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
var CompilePathParams = /** @class */ (function (_super) {
    __extends(CompilePathParams, _super);
    function CompilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-token" }),
        __metadata("design:type", String)
    ], CompilePathParams.prototype, "templateToken", void 0);
    return CompilePathParams;
}(SpeakeasyBase));
export { CompilePathParams };
export var CompileLatexCompilerEnum;
(function (CompileLatexCompilerEnum) {
    CompileLatexCompilerEnum["Pdflatex"] = "pdflatex";
    CompileLatexCompilerEnum["Lualatex"] = "lualatex";
})(CompileLatexCompilerEnum || (CompileLatexCompilerEnum = {}));
var CompileQueryParams = /** @class */ (function (_super) {
    __extends(CompileQueryParams, _super);
    function CompileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doc-file-name" }),
        __metadata("design:type", String)
    ], CompileQueryParams.prototype, "docFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doc-url-expires-in" }),
        __metadata("design:type", Number)
    ], CompileQueryParams.prototype, "docUrlExpiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latex-compiler" }),
        __metadata("design:type", String)
    ], CompileQueryParams.prototype, "latexCompiler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latex-runs " }),
        __metadata("design:type", Number)
    ], CompileQueryParams.prototype, "latexRuns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=main-file-name" }),
        __metadata("design:type", String)
    ], CompileQueryParams.prototype, "mainFileName", void 0);
    return CompileQueryParams;
}(SpeakeasyBase));
export { CompileQueryParams };
var CompileHeaders = /** @class */ (function (_super) {
    __extends(CompileHeaders, _super);
    function CompileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], CompileHeaders.prototype, "contentType", void 0);
    return CompileHeaders;
}(SpeakeasyBase));
export { CompileHeaders };
var CompileRequest = /** @class */ (function (_super) {
    __extends(CompileRequest, _super);
    function CompileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompilePathParams)
    ], CompileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompileQueryParams)
    ], CompileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompileHeaders)
    ], CompileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CompileRequest.prototype, "request", void 0);
    return CompileRequest;
}(SpeakeasyBase));
export { CompileRequest };
var CompileResponse = /** @class */ (function (_super) {
    __extends(CompileResponse, _super);
    function CompileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CompileResponse.prototype, "compile200ApplicationJsonObject", void 0);
    return CompileResponse;
}(SpeakeasyBase));
export { CompileResponse };
