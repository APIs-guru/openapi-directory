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
var GetCategoryDocsPathParams = /** @class */ (function (_super) {
    __extends(GetCategoryDocsPathParams, _super);
    function GetCategoryDocsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], GetCategoryDocsPathParams.prototype, "slug", void 0);
    return GetCategoryDocsPathParams;
}(SpeakeasyBase));
export { GetCategoryDocsPathParams };
var GetCategoryDocsHeaders = /** @class */ (function (_super) {
    __extends(GetCategoryDocsHeaders, _super);
    function GetCategoryDocsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-readme-version" }),
        __metadata("design:type", String)
    ], GetCategoryDocsHeaders.prototype, "xReadmeVersion", void 0);
    return GetCategoryDocsHeaders;
}(SpeakeasyBase));
export { GetCategoryDocsHeaders };
var GetCategoryDocsSecurity = /** @class */ (function (_super) {
    __extends(GetCategoryDocsSecurity, _super);
    function GetCategoryDocsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetCategoryDocsSecurity.prototype, "apiKey", void 0);
    return GetCategoryDocsSecurity;
}(SpeakeasyBase));
export { GetCategoryDocsSecurity };
var GetCategoryDocsRequest = /** @class */ (function (_super) {
    __extends(GetCategoryDocsRequest, _super);
    function GetCategoryDocsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCategoryDocsPathParams)
    ], GetCategoryDocsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCategoryDocsHeaders)
    ], GetCategoryDocsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCategoryDocsSecurity)
    ], GetCategoryDocsRequest.prototype, "security", void 0);
    return GetCategoryDocsRequest;
}(SpeakeasyBase));
export { GetCategoryDocsRequest };
var GetCategoryDocsResponse = /** @class */ (function (_super) {
    __extends(GetCategoryDocsResponse, _super);
    function GetCategoryDocsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCategoryDocsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCategoryDocsResponse.prototype, "statusCode", void 0);
    return GetCategoryDocsResponse;
}(SpeakeasyBase));
export { GetCategoryDocsResponse };
