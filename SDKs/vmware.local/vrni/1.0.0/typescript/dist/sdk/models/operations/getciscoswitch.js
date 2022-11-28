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
var GetCiscoSwitchPathParams = /** @class */ (function (_super) {
    __extends(GetCiscoSwitchPathParams, _super);
    function GetCiscoSwitchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetCiscoSwitchPathParams.prototype, "id", void 0);
    return GetCiscoSwitchPathParams;
}(SpeakeasyBase));
export { GetCiscoSwitchPathParams };
var GetCiscoSwitchSecurity = /** @class */ (function (_super) {
    __extends(GetCiscoSwitchSecurity, _super);
    function GetCiscoSwitchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetCiscoSwitchSecurity.prototype, "apiKeyAuth", void 0);
    return GetCiscoSwitchSecurity;
}(SpeakeasyBase));
export { GetCiscoSwitchSecurity };
var GetCiscoSwitchRequest = /** @class */ (function (_super) {
    __extends(GetCiscoSwitchRequest, _super);
    function GetCiscoSwitchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCiscoSwitchPathParams)
    ], GetCiscoSwitchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCiscoSwitchSecurity)
    ], GetCiscoSwitchRequest.prototype, "security", void 0);
    return GetCiscoSwitchRequest;
}(SpeakeasyBase));
export { GetCiscoSwitchRequest };
var GetCiscoSwitchResponse = /** @class */ (function (_super) {
    __extends(GetCiscoSwitchResponse, _super);
    function GetCiscoSwitchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CiscoSwitchDataSource)
    ], GetCiscoSwitchResponse.prototype, "ciscoSwitchDataSource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCiscoSwitchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCiscoSwitchResponse.prototype, "statusCode", void 0);
    return GetCiscoSwitchResponse;
}(SpeakeasyBase));
export { GetCiscoSwitchResponse };
