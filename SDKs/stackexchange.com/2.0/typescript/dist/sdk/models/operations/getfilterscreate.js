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
var GetFiltersCreateQueryParams = /** @class */ (function (_super) {
    __extends(GetFiltersCreateQueryParams, _super);
    function GetFiltersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base" }),
        __metadata("design:type", String)
    ], GetFiltersCreateQueryParams.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude" }),
        __metadata("design:type", String)
    ], GetFiltersCreateQueryParams.prototype, "exclude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", String)
    ], GetFiltersCreateQueryParams.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unsafe" }),
        __metadata("design:type", Boolean)
    ], GetFiltersCreateQueryParams.prototype, "unsafe", void 0);
    return GetFiltersCreateQueryParams;
}(SpeakeasyBase));
export { GetFiltersCreateQueryParams };
var GetFiltersCreateRequest = /** @class */ (function (_super) {
    __extends(GetFiltersCreateRequest, _super);
    function GetFiltersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFiltersCreateQueryParams)
    ], GetFiltersCreateRequest.prototype, "queryParams", void 0);
    return GetFiltersCreateRequest;
}(SpeakeasyBase));
export { GetFiltersCreateRequest };
var GetFiltersCreateResponse = /** @class */ (function (_super) {
    __extends(GetFiltersCreateResponse, _super);
    function GetFiltersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetFiltersCreateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFiltersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFiltersCreateResponse.prototype, "statusCode", void 0);
    return GetFiltersCreateResponse;
}(SpeakeasyBase));
export { GetFiltersCreateResponse };
