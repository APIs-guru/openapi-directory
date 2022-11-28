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
var UpdateJuniperSwitchSnmpConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateJuniperSwitchSnmpConfigPathParams, _super);
    function UpdateJuniperSwitchSnmpConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateJuniperSwitchSnmpConfigPathParams.prototype, "id", void 0);
    return UpdateJuniperSwitchSnmpConfigPathParams;
}(SpeakeasyBase));
export { UpdateJuniperSwitchSnmpConfigPathParams };
var UpdateJuniperSwitchSnmpConfigSecurity = /** @class */ (function (_super) {
    __extends(UpdateJuniperSwitchSnmpConfigSecurity, _super);
    function UpdateJuniperSwitchSnmpConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], UpdateJuniperSwitchSnmpConfigSecurity.prototype, "apiKeyAuth", void 0);
    return UpdateJuniperSwitchSnmpConfigSecurity;
}(SpeakeasyBase));
export { UpdateJuniperSwitchSnmpConfigSecurity };
var UpdateJuniperSwitchSnmpConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateJuniperSwitchSnmpConfigRequest, _super);
    function UpdateJuniperSwitchSnmpConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateJuniperSwitchSnmpConfigPathParams)
    ], UpdateJuniperSwitchSnmpConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SnmpConfig)
    ], UpdateJuniperSwitchSnmpConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateJuniperSwitchSnmpConfigSecurity)
    ], UpdateJuniperSwitchSnmpConfigRequest.prototype, "security", void 0);
    return UpdateJuniperSwitchSnmpConfigRequest;
}(SpeakeasyBase));
export { UpdateJuniperSwitchSnmpConfigRequest };
var UpdateJuniperSwitchSnmpConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateJuniperSwitchSnmpConfigResponse, _super);
    function UpdateJuniperSwitchSnmpConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], UpdateJuniperSwitchSnmpConfigResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateJuniperSwitchSnmpConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SnmpConfig)
    ], UpdateJuniperSwitchSnmpConfigResponse.prototype, "snmpConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateJuniperSwitchSnmpConfigResponse.prototype, "statusCode", void 0);
    return UpdateJuniperSwitchSnmpConfigResponse;
}(SpeakeasyBase));
export { UpdateJuniperSwitchSnmpConfigResponse };
