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
var GetApiTextLoremIpsumQueryParams = /** @class */ (function (_super) {
    __extends(GetApiTextLoremIpsumQueryParams, _super);
    function GetApiTextLoremIpsumQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=loremType" }),
        __metadata("design:type", String)
    ], GetApiTextLoremIpsumQueryParams.prototype, "loremType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", Number)
    ], GetApiTextLoremIpsumQueryParams.prototype, "number", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetApiTextLoremIpsumQueryParams.prototype, "type", void 0);
    return GetApiTextLoremIpsumQueryParams;
}(SpeakeasyBase));
export { GetApiTextLoremIpsumQueryParams };
var GetApiTextLoremIpsumHeaders = /** @class */ (function (_super) {
    __extends(GetApiTextLoremIpsumHeaders, _super);
    function GetApiTextLoremIpsumHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], GetApiTextLoremIpsumHeaders.prototype, "xApiKey", void 0);
    return GetApiTextLoremIpsumHeaders;
}(SpeakeasyBase));
export { GetApiTextLoremIpsumHeaders };
var GetApiTextLoremIpsumRequest = /** @class */ (function (_super) {
    __extends(GetApiTextLoremIpsumRequest, _super);
    function GetApiTextLoremIpsumRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiTextLoremIpsumQueryParams)
    ], GetApiTextLoremIpsumRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiTextLoremIpsumHeaders)
    ], GetApiTextLoremIpsumRequest.prototype, "headers", void 0);
    return GetApiTextLoremIpsumRequest;
}(SpeakeasyBase));
export { GetApiTextLoremIpsumRequest };
var GetApiTextLoremIpsumResponse = /** @class */ (function (_super) {
    __extends(GetApiTextLoremIpsumResponse, _super);
    function GetApiTextLoremIpsumResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiTextLoremIpsumResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiTextLoremIpsumResponse.prototype, "statusCode", void 0);
    return GetApiTextLoremIpsumResponse;
}(SpeakeasyBase));
export { GetApiTextLoremIpsumResponse };
