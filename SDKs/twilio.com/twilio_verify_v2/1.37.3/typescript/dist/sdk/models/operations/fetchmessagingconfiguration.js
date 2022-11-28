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
export var FetchMessagingConfigurationServerList = [
    "https://verify.twilio.com",
];
var FetchMessagingConfigurationPathParams = /** @class */ (function (_super) {
    __extends(FetchMessagingConfigurationPathParams, _super);
    function FetchMessagingConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Country" }),
        __metadata("design:type", String)
    ], FetchMessagingConfigurationPathParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchMessagingConfigurationPathParams.prototype, "serviceSid", void 0);
    return FetchMessagingConfigurationPathParams;
}(SpeakeasyBase));
export { FetchMessagingConfigurationPathParams };
var FetchMessagingConfigurationSecurity = /** @class */ (function (_super) {
    __extends(FetchMessagingConfigurationSecurity, _super);
    function FetchMessagingConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchMessagingConfigurationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchMessagingConfigurationSecurity;
}(SpeakeasyBase));
export { FetchMessagingConfigurationSecurity };
var FetchMessagingConfigurationRequest = /** @class */ (function (_super) {
    __extends(FetchMessagingConfigurationRequest, _super);
    function FetchMessagingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchMessagingConfigurationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchMessagingConfigurationPathParams)
    ], FetchMessagingConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchMessagingConfigurationSecurity)
    ], FetchMessagingConfigurationRequest.prototype, "security", void 0);
    return FetchMessagingConfigurationRequest;
}(SpeakeasyBase));
export { FetchMessagingConfigurationRequest };
var FetchMessagingConfigurationResponse = /** @class */ (function (_super) {
    __extends(FetchMessagingConfigurationResponse, _super);
    function FetchMessagingConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchMessagingConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchMessagingConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VerifyV2ServiceMessagingConfiguration)
    ], FetchMessagingConfigurationResponse.prototype, "verifyV2ServiceMessagingConfiguration", void 0);
    return FetchMessagingConfigurationResponse;
}(SpeakeasyBase));
export { FetchMessagingConfigurationResponse };
