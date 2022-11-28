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
var UpdatePanoramaFirewallPathParams = /** @class */ (function (_super) {
    __extends(UpdatePanoramaFirewallPathParams, _super);
    function UpdatePanoramaFirewallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdatePanoramaFirewallPathParams.prototype, "id", void 0);
    return UpdatePanoramaFirewallPathParams;
}(SpeakeasyBase));
export { UpdatePanoramaFirewallPathParams };
var UpdatePanoramaFirewallSecurity = /** @class */ (function (_super) {
    __extends(UpdatePanoramaFirewallSecurity, _super);
    function UpdatePanoramaFirewallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], UpdatePanoramaFirewallSecurity.prototype, "apiKeyAuth", void 0);
    return UpdatePanoramaFirewallSecurity;
}(SpeakeasyBase));
export { UpdatePanoramaFirewallSecurity };
var UpdatePanoramaFirewallRequest = /** @class */ (function (_super) {
    __extends(UpdatePanoramaFirewallRequest, _super);
    function UpdatePanoramaFirewallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePanoramaFirewallPathParams)
    ], UpdatePanoramaFirewallRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SwitchDataSource)
    ], UpdatePanoramaFirewallRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePanoramaFirewallSecurity)
    ], UpdatePanoramaFirewallRequest.prototype, "security", void 0);
    return UpdatePanoramaFirewallRequest;
}(SpeakeasyBase));
export { UpdatePanoramaFirewallRequest };
var UpdatePanoramaFirewallResponse = /** @class */ (function (_super) {
    __extends(UpdatePanoramaFirewallResponse, _super);
    function UpdatePanoramaFirewallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], UpdatePanoramaFirewallResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePanoramaFirewallResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePanoramaFirewallResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SwitchDataSource)
    ], UpdatePanoramaFirewallResponse.prototype, "switchDataSource", void 0);
    return UpdatePanoramaFirewallResponse;
}(SpeakeasyBase));
export { UpdatePanoramaFirewallResponse };
