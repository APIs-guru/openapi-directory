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
var GetPanoramaFirewallPathParams = /** @class */ (function (_super) {
    __extends(GetPanoramaFirewallPathParams, _super);
    function GetPanoramaFirewallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPanoramaFirewallPathParams.prototype, "id", void 0);
    return GetPanoramaFirewallPathParams;
}(SpeakeasyBase));
export { GetPanoramaFirewallPathParams };
var GetPanoramaFirewallSecurity = /** @class */ (function (_super) {
    __extends(GetPanoramaFirewallSecurity, _super);
    function GetPanoramaFirewallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetPanoramaFirewallSecurity.prototype, "apiKeyAuth", void 0);
    return GetPanoramaFirewallSecurity;
}(SpeakeasyBase));
export { GetPanoramaFirewallSecurity };
var GetPanoramaFirewallRequest = /** @class */ (function (_super) {
    __extends(GetPanoramaFirewallRequest, _super);
    function GetPanoramaFirewallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPanoramaFirewallPathParams)
    ], GetPanoramaFirewallRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPanoramaFirewallSecurity)
    ], GetPanoramaFirewallRequest.prototype, "security", void 0);
    return GetPanoramaFirewallRequest;
}(SpeakeasyBase));
export { GetPanoramaFirewallRequest };
var GetPanoramaFirewallResponse = /** @class */ (function (_super) {
    __extends(GetPanoramaFirewallResponse, _super);
    function GetPanoramaFirewallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPanoramaFirewallResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPanoramaFirewallResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SwitchDataSource)
    ], GetPanoramaFirewallResponse.prototype, "switchDataSource", void 0);
    return GetPanoramaFirewallResponse;
}(SpeakeasyBase));
export { GetPanoramaFirewallResponse };
