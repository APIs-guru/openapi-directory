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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var FETCHCONFIGURATIONADDRESS_SERVERS = [
    "https://conversations.twilio.com",
];
var FetchConfigurationAddressPathParams = /** @class */ (function (_super) {
    __extends(FetchConfigurationAddressPathParams, _super);
    function FetchConfigurationAddressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchConfigurationAddressPathParams.prototype, "sid", void 0);
    return FetchConfigurationAddressPathParams;
}(SpeakeasyBase));
export { FetchConfigurationAddressPathParams };
var FetchConfigurationAddressSecurity = /** @class */ (function (_super) {
    __extends(FetchConfigurationAddressSecurity, _super);
    function FetchConfigurationAddressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchConfigurationAddressSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchConfigurationAddressSecurity;
}(SpeakeasyBase));
export { FetchConfigurationAddressSecurity };
var FetchConfigurationAddressRequest = /** @class */ (function (_super) {
    __extends(FetchConfigurationAddressRequest, _super);
    function FetchConfigurationAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchConfigurationAddressRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchConfigurationAddressPathParams)
    ], FetchConfigurationAddressRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchConfigurationAddressSecurity)
    ], FetchConfigurationAddressRequest.prototype, "security", void 0);
    return FetchConfigurationAddressRequest;
}(SpeakeasyBase));
export { FetchConfigurationAddressRequest };
var FetchConfigurationAddressResponse = /** @class */ (function (_super) {
    __extends(FetchConfigurationAddressResponse, _super);
    function FetchConfigurationAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchConfigurationAddressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchConfigurationAddressResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConversationsV1ConfigurationAddress)
    ], FetchConfigurationAddressResponse.prototype, "conversationsV1ConfigurationAddress", void 0);
    return FetchConfigurationAddressResponse;
}(SpeakeasyBase));
export { FetchConfigurationAddressResponse };
