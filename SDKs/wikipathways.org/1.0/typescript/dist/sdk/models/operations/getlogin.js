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
export var GetLoginFormatEnum;
(function (GetLoginFormatEnum) {
    GetLoginFormatEnum["Json"] = "json";
    GetLoginFormatEnum["Xml"] = "xml";
    GetLoginFormatEnum["Html"] = "html";
    GetLoginFormatEnum["Dump"] = "dump";
    GetLoginFormatEnum["Jpg"] = "jpg";
    GetLoginFormatEnum["Pdf"] = "pdf";
})(GetLoginFormatEnum || (GetLoginFormatEnum = {}));
var GetLoginQueryParams = /** @class */ (function (_super) {
    __extends(GetLoginQueryParams, _super);
    function GetLoginQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetLoginQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetLoginQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pass" }),
        __metadata("design:type", String)
    ], GetLoginQueryParams.prototype, "pass", void 0);
    return GetLoginQueryParams;
}(SpeakeasyBase));
export { GetLoginQueryParams };
var GetLoginRequest = /** @class */ (function (_super) {
    __extends(GetLoginRequest, _super);
    function GetLoginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetLoginQueryParams)
    ], GetLoginRequest.prototype, "queryParams", void 0);
    return GetLoginRequest;
}(SpeakeasyBase));
export { GetLoginRequest };
var GetLoginResponse = /** @class */ (function (_super) {
    __extends(GetLoginResponse, _super);
    function GetLoginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetLoginResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetLoginResponse.prototype, "statusCode", void 0);
    return GetLoginResponse;
}(SpeakeasyBase));
export { GetLoginResponse };
