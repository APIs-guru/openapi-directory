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
export var FETCHMARKETPLACEINSTALLEDADDONEXTENSION_SERVERS = [
    "https://preview.twilio.com",
];
var FetchMarketplaceInstalledAddOnExtensionPathParams = /** @class */ (function (_super) {
    __extends(FetchMarketplaceInstalledAddOnExtensionPathParams, _super);
    function FetchMarketplaceInstalledAddOnExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=InstalledAddOnSid" }),
        __metadata("design:type", String)
    ], FetchMarketplaceInstalledAddOnExtensionPathParams.prototype, "installedAddOnSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchMarketplaceInstalledAddOnExtensionPathParams.prototype, "sid", void 0);
    return FetchMarketplaceInstalledAddOnExtensionPathParams;
}(SpeakeasyBase));
export { FetchMarketplaceInstalledAddOnExtensionPathParams };
var FetchMarketplaceInstalledAddOnExtensionSecurity = /** @class */ (function (_super) {
    __extends(FetchMarketplaceInstalledAddOnExtensionSecurity, _super);
    function FetchMarketplaceInstalledAddOnExtensionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchMarketplaceInstalledAddOnExtensionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchMarketplaceInstalledAddOnExtensionSecurity;
}(SpeakeasyBase));
export { FetchMarketplaceInstalledAddOnExtensionSecurity };
var FetchMarketplaceInstalledAddOnExtensionRequest = /** @class */ (function (_super) {
    __extends(FetchMarketplaceInstalledAddOnExtensionRequest, _super);
    function FetchMarketplaceInstalledAddOnExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchMarketplaceInstalledAddOnExtensionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchMarketplaceInstalledAddOnExtensionPathParams)
    ], FetchMarketplaceInstalledAddOnExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchMarketplaceInstalledAddOnExtensionSecurity)
    ], FetchMarketplaceInstalledAddOnExtensionRequest.prototype, "security", void 0);
    return FetchMarketplaceInstalledAddOnExtensionRequest;
}(SpeakeasyBase));
export { FetchMarketplaceInstalledAddOnExtensionRequest };
var FetchMarketplaceInstalledAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(FetchMarketplaceInstalledAddOnExtensionResponse, _super);
    function FetchMarketplaceInstalledAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchMarketplaceInstalledAddOnExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchMarketplaceInstalledAddOnExtensionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension)
    ], FetchMarketplaceInstalledAddOnExtensionResponse.prototype, "previewMarketplaceInstalledAddOnInstalledAddOnExtension", void 0);
    return FetchMarketplaceInstalledAddOnExtensionResponse;
}(SpeakeasyBase));
export { FetchMarketplaceInstalledAddOnExtensionResponse };
