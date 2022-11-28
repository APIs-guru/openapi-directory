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
export var FetchAccountSettingsServerList = [
    "https://insights.twilio.com",
];
var FetchAccountSettingsQueryParams = /** @class */ (function (_super) {
    __extends(FetchAccountSettingsQueryParams, _super);
    function FetchAccountSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubaccountSid" }),
        __metadata("design:type", String)
    ], FetchAccountSettingsQueryParams.prototype, "subaccountSid", void 0);
    return FetchAccountSettingsQueryParams;
}(SpeakeasyBase));
export { FetchAccountSettingsQueryParams };
var FetchAccountSettingsSecurity = /** @class */ (function (_super) {
    __extends(FetchAccountSettingsSecurity, _super);
    function FetchAccountSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchAccountSettingsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchAccountSettingsSecurity;
}(SpeakeasyBase));
export { FetchAccountSettingsSecurity };
var FetchAccountSettingsRequest = /** @class */ (function (_super) {
    __extends(FetchAccountSettingsRequest, _super);
    function FetchAccountSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchAccountSettingsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchAccountSettingsQueryParams)
    ], FetchAccountSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchAccountSettingsSecurity)
    ], FetchAccountSettingsRequest.prototype, "security", void 0);
    return FetchAccountSettingsRequest;
}(SpeakeasyBase));
export { FetchAccountSettingsRequest };
var FetchAccountSettingsResponse = /** @class */ (function (_super) {
    __extends(FetchAccountSettingsResponse, _super);
    function FetchAccountSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchAccountSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchAccountSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InsightsV1AccountSettings)
    ], FetchAccountSettingsResponse.prototype, "insightsV1AccountSettings", void 0);
    return FetchAccountSettingsResponse;
}(SpeakeasyBase));
export { FetchAccountSettingsResponse };
