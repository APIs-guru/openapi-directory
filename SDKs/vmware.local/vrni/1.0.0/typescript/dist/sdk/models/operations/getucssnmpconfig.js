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
var GetUcsSnmpConfigPathParams = /** @class */ (function (_super) {
    __extends(GetUcsSnmpConfigPathParams, _super);
    function GetUcsSnmpConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetUcsSnmpConfigPathParams.prototype, "id", void 0);
    return GetUcsSnmpConfigPathParams;
}(SpeakeasyBase));
export { GetUcsSnmpConfigPathParams };
var GetUcsSnmpConfigSecurity = /** @class */ (function (_super) {
    __extends(GetUcsSnmpConfigSecurity, _super);
    function GetUcsSnmpConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetUcsSnmpConfigSecurity.prototype, "apiKeyAuth", void 0);
    return GetUcsSnmpConfigSecurity;
}(SpeakeasyBase));
export { GetUcsSnmpConfigSecurity };
var GetUcsSnmpConfigRequest = /** @class */ (function (_super) {
    __extends(GetUcsSnmpConfigRequest, _super);
    function GetUcsSnmpConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUcsSnmpConfigPathParams)
    ], GetUcsSnmpConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUcsSnmpConfigSecurity)
    ], GetUcsSnmpConfigRequest.prototype, "security", void 0);
    return GetUcsSnmpConfigRequest;
}(SpeakeasyBase));
export { GetUcsSnmpConfigRequest };
var GetUcsSnmpConfigResponse = /** @class */ (function (_super) {
    __extends(GetUcsSnmpConfigResponse, _super);
    function GetUcsSnmpConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUcsSnmpConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SnmpConfig)
    ], GetUcsSnmpConfigResponse.prototype, "snmpConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUcsSnmpConfigResponse.prototype, "statusCode", void 0);
    return GetUcsSnmpConfigResponse;
}(SpeakeasyBase));
export { GetUcsSnmpConfigResponse };
