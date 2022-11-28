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
var GetApiNameQueryParams = /** @class */ (function (_super) {
    __extends(GetApiNameQueryParams, _super);
    function GetApiNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameType" }),
        __metadata("design:type", String)
    ], GetApiNameQueryParams.prototype, "nameType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quantity" }),
        __metadata("design:type", Number)
    ], GetApiNameQueryParams.prototype, "quantity", void 0);
    return GetApiNameQueryParams;
}(SpeakeasyBase));
export { GetApiNameQueryParams };
var GetApiNameHeaders = /** @class */ (function (_super) {
    __extends(GetApiNameHeaders, _super);
    function GetApiNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], GetApiNameHeaders.prototype, "xApiKey", void 0);
    return GetApiNameHeaders;
}(SpeakeasyBase));
export { GetApiNameHeaders };
var GetApiNameRequest = /** @class */ (function (_super) {
    __extends(GetApiNameRequest, _super);
    function GetApiNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiNameQueryParams)
    ], GetApiNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiNameHeaders)
    ], GetApiNameRequest.prototype, "headers", void 0);
    return GetApiNameRequest;
}(SpeakeasyBase));
export { GetApiNameRequest };
var GetApiNameResponse = /** @class */ (function (_super) {
    __extends(GetApiNameResponse, _super);
    function GetApiNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiNameResponse.prototype, "statusCode", void 0);
    return GetApiNameResponse;
}(SpeakeasyBase));
export { GetApiNameResponse };
