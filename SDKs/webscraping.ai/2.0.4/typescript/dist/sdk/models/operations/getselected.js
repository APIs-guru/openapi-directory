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
var GetSelectedQueryParams = /** @class */ (function (_super) {
    __extends(GetSelectedQueryParams, _super);
    function GetSelectedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=headers" }),
        __metadata("design:type", Map)
    ], GetSelectedQueryParams.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=js" }),
        __metadata("design:type", Boolean)
    ], GetSelectedQueryParams.prototype, "js", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=proxy" }),
        __metadata("design:type", String)
    ], GetSelectedQueryParams.prototype, "proxy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=selector" }),
        __metadata("design:type", String)
    ], GetSelectedQueryParams.prototype, "selector", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], GetSelectedQueryParams.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], GetSelectedQueryParams.prototype, "url", void 0);
    return GetSelectedQueryParams;
}(SpeakeasyBase));
export { GetSelectedQueryParams };
var GetSelectedRequest = /** @class */ (function (_super) {
    __extends(GetSelectedRequest, _super);
    function GetSelectedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSelectedQueryParams)
    ], GetSelectedRequest.prototype, "queryParams", void 0);
    return GetSelectedRequest;
}(SpeakeasyBase));
export { GetSelectedRequest };
var GetSelectedResponse = /** @class */ (function (_super) {
    __extends(GetSelectedResponse, _super);
    function GetSelectedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSelectedResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetSelectedResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PageError)
    ], GetSelectedResponse.prototype, "pageError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSelectedResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSelectedResponse.prototype, "getSelected200TextHtmlString", void 0);
    return GetSelectedResponse;
}(SpeakeasyBase));
export { GetSelectedResponse };
