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
var GetApiMiscRandomAddressQueryParams = /** @class */ (function (_super) {
    __extends(GetApiMiscRandomAddressQueryParams, _super);
    function GetApiMiscRandomAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=culture" }),
        __metadata("design:type", String)
    ], GetApiMiscRandomAddressQueryParams.prototype, "culture", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", Number)
    ], GetApiMiscRandomAddressQueryParams.prototype, "number", void 0);
    return GetApiMiscRandomAddressQueryParams;
}(SpeakeasyBase));
export { GetApiMiscRandomAddressQueryParams };
var GetApiMiscRandomAddressHeaders = /** @class */ (function (_super) {
    __extends(GetApiMiscRandomAddressHeaders, _super);
    function GetApiMiscRandomAddressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], GetApiMiscRandomAddressHeaders.prototype, "xApiKey", void 0);
    return GetApiMiscRandomAddressHeaders;
}(SpeakeasyBase));
export { GetApiMiscRandomAddressHeaders };
var GetApiMiscRandomAddressRequest = /** @class */ (function (_super) {
    __extends(GetApiMiscRandomAddressRequest, _super);
    function GetApiMiscRandomAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiMiscRandomAddressQueryParams)
    ], GetApiMiscRandomAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiMiscRandomAddressHeaders)
    ], GetApiMiscRandomAddressRequest.prototype, "headers", void 0);
    return GetApiMiscRandomAddressRequest;
}(SpeakeasyBase));
export { GetApiMiscRandomAddressRequest };
var GetApiMiscRandomAddressResponse = /** @class */ (function (_super) {
    __extends(GetApiMiscRandomAddressResponse, _super);
    function GetApiMiscRandomAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiMiscRandomAddressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiMiscRandomAddressResponse.prototype, "statusCode", void 0);
    return GetApiMiscRandomAddressResponse;
}(SpeakeasyBase));
export { GetApiMiscRandomAddressResponse };
