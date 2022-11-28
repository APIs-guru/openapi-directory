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
var GetAristaSwitchSnmpConfigPathParams = /** @class */ (function (_super) {
    __extends(GetAristaSwitchSnmpConfigPathParams, _super);
    function GetAristaSwitchSnmpConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetAristaSwitchSnmpConfigPathParams.prototype, "id", void 0);
    return GetAristaSwitchSnmpConfigPathParams;
}(SpeakeasyBase));
export { GetAristaSwitchSnmpConfigPathParams };
var GetAristaSwitchSnmpConfigSecurity = /** @class */ (function (_super) {
    __extends(GetAristaSwitchSnmpConfigSecurity, _super);
    function GetAristaSwitchSnmpConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetAristaSwitchSnmpConfigSecurity.prototype, "apiKeyAuth", void 0);
    return GetAristaSwitchSnmpConfigSecurity;
}(SpeakeasyBase));
export { GetAristaSwitchSnmpConfigSecurity };
var GetAristaSwitchSnmpConfigRequest = /** @class */ (function (_super) {
    __extends(GetAristaSwitchSnmpConfigRequest, _super);
    function GetAristaSwitchSnmpConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAristaSwitchSnmpConfigPathParams)
    ], GetAristaSwitchSnmpConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAristaSwitchSnmpConfigSecurity)
    ], GetAristaSwitchSnmpConfigRequest.prototype, "security", void 0);
    return GetAristaSwitchSnmpConfigRequest;
}(SpeakeasyBase));
export { GetAristaSwitchSnmpConfigRequest };
var GetAristaSwitchSnmpConfigResponse = /** @class */ (function (_super) {
    __extends(GetAristaSwitchSnmpConfigResponse, _super);
    function GetAristaSwitchSnmpConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAristaSwitchSnmpConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SnmpConfig)
    ], GetAristaSwitchSnmpConfigResponse.prototype, "snmpConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAristaSwitchSnmpConfigResponse.prototype, "statusCode", void 0);
    return GetAristaSwitchSnmpConfigResponse;
}(SpeakeasyBase));
export { GetAristaSwitchSnmpConfigResponse };
