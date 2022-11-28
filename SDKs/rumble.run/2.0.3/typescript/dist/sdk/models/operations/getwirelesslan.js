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
var GetWirelessLanPathParams = /** @class */ (function (_super) {
    __extends(GetWirelessLanPathParams, _super);
    function GetWirelessLanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=wireless_id" }),
        __metadata("design:type", String)
    ], GetWirelessLanPathParams.prototype, "wirelessId", void 0);
    return GetWirelessLanPathParams;
}(SpeakeasyBase));
export { GetWirelessLanPathParams };
var GetWirelessLanSecurity = /** @class */ (function (_super) {
    __extends(GetWirelessLanSecurity, _super);
    function GetWirelessLanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetWirelessLanSecurity.prototype, "bearerAuth", void 0);
    return GetWirelessLanSecurity;
}(SpeakeasyBase));
export { GetWirelessLanSecurity };
var GetWirelessLanRequest = /** @class */ (function (_super) {
    __extends(GetWirelessLanRequest, _super);
    function GetWirelessLanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWirelessLanPathParams)
    ], GetWirelessLanRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWirelessLanSecurity)
    ], GetWirelessLanRequest.prototype, "security", void 0);
    return GetWirelessLanRequest;
}(SpeakeasyBase));
export { GetWirelessLanRequest };
var GetWirelessLanResponse = /** @class */ (function (_super) {
    __extends(GetWirelessLanResponse, _super);
    function GetWirelessLanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWirelessLanResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWirelessLanResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Wireless)
    ], GetWirelessLanResponse.prototype, "wireless", void 0);
    return GetWirelessLanResponse;
}(SpeakeasyBase));
export { GetWirelessLanResponse };
