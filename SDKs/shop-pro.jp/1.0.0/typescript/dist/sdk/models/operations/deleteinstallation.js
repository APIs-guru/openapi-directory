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
var DeleteInstallationSecurity = /** @class */ (function (_super) {
    __extends(DeleteInstallationSecurity, _super);
    function DeleteInstallationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteInstallationSecurity.prototype, "oAuth2", void 0);
    return DeleteInstallationSecurity;
}(SpeakeasyBase));
export { DeleteInstallationSecurity };
// DeleteInstallation200ApplicationJsonUsageCharge
/**
 * （従量課金の場合）従量課金アンインストール情報
**/
var DeleteInstallation200ApplicationJsonUsageCharge = /** @class */ (function (_super) {
    __extends(DeleteInstallation200ApplicationJsonUsageCharge, _super);
    function DeleteInstallation200ApplicationJsonUsageCharge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_token" }),
        __metadata("design:type", String)
    ], DeleteInstallation200ApplicationJsonUsageCharge.prototype, "apiToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closing_on" }),
        __metadata("design:type", Number)
    ], DeleteInstallation200ApplicationJsonUsageCharge.prototype, "closingOn", void 0);
    return DeleteInstallation200ApplicationJsonUsageCharge;
}(SpeakeasyBase));
export { DeleteInstallation200ApplicationJsonUsageCharge };
var DeleteInstallation200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteInstallation200ApplicationJson, _super);
    function DeleteInstallation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], DeleteInstallation200ApplicationJson.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application_charge_source_id" }),
        __metadata("design:type", String)
    ], DeleteInstallation200ApplicationJson.prototype, "applicationChargeSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recurring_application_charge_id" }),
        __metadata("design:type", String)
    ], DeleteInstallation200ApplicationJson.prototype, "recurringApplicationChargeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uninstalled_at" }),
        __metadata("design:type", Number)
    ], DeleteInstallation200ApplicationJson.prototype, "uninstalledAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage_charge" }),
        __metadata("design:type", DeleteInstallation200ApplicationJsonUsageCharge)
    ], DeleteInstallation200ApplicationJson.prototype, "usageCharge", void 0);
    return DeleteInstallation200ApplicationJson;
}(SpeakeasyBase));
export { DeleteInstallation200ApplicationJson };
var DeleteInstallationRequest = /** @class */ (function (_super) {
    __extends(DeleteInstallationRequest, _super);
    function DeleteInstallationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteInstallationSecurity)
    ], DeleteInstallationRequest.prototype, "security", void 0);
    return DeleteInstallationRequest;
}(SpeakeasyBase));
export { DeleteInstallationRequest };
var DeleteInstallationResponse = /** @class */ (function (_super) {
    __extends(DeleteInstallationResponse, _super);
    function DeleteInstallationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteInstallationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteInstallationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteInstallation200ApplicationJson)
    ], DeleteInstallationResponse.prototype, "deleteInstallation200ApplicationJsonObject", void 0);
    return DeleteInstallationResponse;
}(SpeakeasyBase));
export { DeleteInstallationResponse };
