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
var GetCiscoSwitchSnmpConfigPathParams = /** @class */ (function (_super) {
    __extends(GetCiscoSwitchSnmpConfigPathParams, _super);
    function GetCiscoSwitchSnmpConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetCiscoSwitchSnmpConfigPathParams.prototype, "id", void 0);
    return GetCiscoSwitchSnmpConfigPathParams;
}(SpeakeasyBase));
export { GetCiscoSwitchSnmpConfigPathParams };
var GetCiscoSwitchSnmpConfigSecurity = /** @class */ (function (_super) {
    __extends(GetCiscoSwitchSnmpConfigSecurity, _super);
    function GetCiscoSwitchSnmpConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetCiscoSwitchSnmpConfigSecurity.prototype, "apiKeyAuth", void 0);
    return GetCiscoSwitchSnmpConfigSecurity;
}(SpeakeasyBase));
export { GetCiscoSwitchSnmpConfigSecurity };
var GetCiscoSwitchSnmpConfigRequest = /** @class */ (function (_super) {
    __extends(GetCiscoSwitchSnmpConfigRequest, _super);
    function GetCiscoSwitchSnmpConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCiscoSwitchSnmpConfigPathParams)
    ], GetCiscoSwitchSnmpConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCiscoSwitchSnmpConfigSecurity)
    ], GetCiscoSwitchSnmpConfigRequest.prototype, "security", void 0);
    return GetCiscoSwitchSnmpConfigRequest;
}(SpeakeasyBase));
export { GetCiscoSwitchSnmpConfigRequest };
var GetCiscoSwitchSnmpConfigResponse = /** @class */ (function (_super) {
    __extends(GetCiscoSwitchSnmpConfigResponse, _super);
    function GetCiscoSwitchSnmpConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCiscoSwitchSnmpConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SnmpConfig)
    ], GetCiscoSwitchSnmpConfigResponse.prototype, "snmpConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCiscoSwitchSnmpConfigResponse.prototype, "statusCode", void 0);
    return GetCiscoSwitchSnmpConfigResponse;
}(SpeakeasyBase));
export { GetCiscoSwitchSnmpConfigResponse };
