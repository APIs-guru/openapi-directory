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
var GetApiTextPasswordQueryParams = /** @class */ (function (_super) {
    __extends(GetApiTextPasswordQueryParams, _super);
    function GetApiTextPasswordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=hasDigits" }),
        __metadata("design:type", Boolean)
    ], GetApiTextPasswordQueryParams.prototype, "hasDigits", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=hasSpecial" }),
        __metadata("design:type", Boolean)
    ], GetApiTextPasswordQueryParams.prototype, "hasSpecial", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=hasUppercase" }),
        __metadata("design:type", Boolean)
    ], GetApiTextPasswordQueryParams.prototype, "hasUppercase", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=length" }),
        __metadata("design:type", Number)
    ], GetApiTextPasswordQueryParams.prototype, "length", void 0);
    return GetApiTextPasswordQueryParams;
}(SpeakeasyBase));
export { GetApiTextPasswordQueryParams };
var GetApiTextPasswordHeaders = /** @class */ (function (_super) {
    __extends(GetApiTextPasswordHeaders, _super);
    function GetApiTextPasswordHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], GetApiTextPasswordHeaders.prototype, "xApiKey", void 0);
    return GetApiTextPasswordHeaders;
}(SpeakeasyBase));
export { GetApiTextPasswordHeaders };
var GetApiTextPasswordRequest = /** @class */ (function (_super) {
    __extends(GetApiTextPasswordRequest, _super);
    function GetApiTextPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiTextPasswordQueryParams)
    ], GetApiTextPasswordRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiTextPasswordHeaders)
    ], GetApiTextPasswordRequest.prototype, "headers", void 0);
    return GetApiTextPasswordRequest;
}(SpeakeasyBase));
export { GetApiTextPasswordRequest };
var GetApiTextPasswordResponse = /** @class */ (function (_super) {
    __extends(GetApiTextPasswordResponse, _super);
    function GetApiTextPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiTextPasswordResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiTextPasswordResponse.prototype, "statusCode", void 0);
    return GetApiTextPasswordResponse;
}(SpeakeasyBase));
export { GetApiTextPasswordResponse };
