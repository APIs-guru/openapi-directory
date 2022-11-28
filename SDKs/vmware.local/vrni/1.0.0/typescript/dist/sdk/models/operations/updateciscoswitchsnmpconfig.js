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
var UpdateCiscoSwitchSnmpConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateCiscoSwitchSnmpConfigPathParams, _super);
    function UpdateCiscoSwitchSnmpConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateCiscoSwitchSnmpConfigPathParams.prototype, "id", void 0);
    return UpdateCiscoSwitchSnmpConfigPathParams;
}(SpeakeasyBase));
export { UpdateCiscoSwitchSnmpConfigPathParams };
var UpdateCiscoSwitchSnmpConfigSecurity = /** @class */ (function (_super) {
    __extends(UpdateCiscoSwitchSnmpConfigSecurity, _super);
    function UpdateCiscoSwitchSnmpConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], UpdateCiscoSwitchSnmpConfigSecurity.prototype, "apiKeyAuth", void 0);
    return UpdateCiscoSwitchSnmpConfigSecurity;
}(SpeakeasyBase));
export { UpdateCiscoSwitchSnmpConfigSecurity };
var UpdateCiscoSwitchSnmpConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateCiscoSwitchSnmpConfigRequest, _super);
    function UpdateCiscoSwitchSnmpConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCiscoSwitchSnmpConfigPathParams)
    ], UpdateCiscoSwitchSnmpConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SnmpConfig)
    ], UpdateCiscoSwitchSnmpConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCiscoSwitchSnmpConfigSecurity)
    ], UpdateCiscoSwitchSnmpConfigRequest.prototype, "security", void 0);
    return UpdateCiscoSwitchSnmpConfigRequest;
}(SpeakeasyBase));
export { UpdateCiscoSwitchSnmpConfigRequest };
var UpdateCiscoSwitchSnmpConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateCiscoSwitchSnmpConfigResponse, _super);
    function UpdateCiscoSwitchSnmpConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], UpdateCiscoSwitchSnmpConfigResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCiscoSwitchSnmpConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SnmpConfig)
    ], UpdateCiscoSwitchSnmpConfigResponse.prototype, "snmpConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCiscoSwitchSnmpConfigResponse.prototype, "statusCode", void 0);
    return UpdateCiscoSwitchSnmpConfigResponse;
}(SpeakeasyBase));
export { UpdateCiscoSwitchSnmpConfigResponse };
