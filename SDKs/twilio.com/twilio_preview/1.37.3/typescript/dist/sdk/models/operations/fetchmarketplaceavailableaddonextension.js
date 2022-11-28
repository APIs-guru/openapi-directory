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
export var FetchMarketplaceAvailableAddOnExtensionServerList = [
    "https://preview.twilio.com",
];
var FetchMarketplaceAvailableAddOnExtensionPathParams = /** @class */ (function (_super) {
    __extends(FetchMarketplaceAvailableAddOnExtensionPathParams, _super);
    function FetchMarketplaceAvailableAddOnExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AvailableAddOnSid" }),
        __metadata("design:type", String)
    ], FetchMarketplaceAvailableAddOnExtensionPathParams.prototype, "availableAddOnSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchMarketplaceAvailableAddOnExtensionPathParams.prototype, "sid", void 0);
    return FetchMarketplaceAvailableAddOnExtensionPathParams;
}(SpeakeasyBase));
export { FetchMarketplaceAvailableAddOnExtensionPathParams };
var FetchMarketplaceAvailableAddOnExtensionSecurity = /** @class */ (function (_super) {
    __extends(FetchMarketplaceAvailableAddOnExtensionSecurity, _super);
    function FetchMarketplaceAvailableAddOnExtensionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchMarketplaceAvailableAddOnExtensionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchMarketplaceAvailableAddOnExtensionSecurity;
}(SpeakeasyBase));
export { FetchMarketplaceAvailableAddOnExtensionSecurity };
var FetchMarketplaceAvailableAddOnExtensionRequest = /** @class */ (function (_super) {
    __extends(FetchMarketplaceAvailableAddOnExtensionRequest, _super);
    function FetchMarketplaceAvailableAddOnExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchMarketplaceAvailableAddOnExtensionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchMarketplaceAvailableAddOnExtensionPathParams)
    ], FetchMarketplaceAvailableAddOnExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchMarketplaceAvailableAddOnExtensionSecurity)
    ], FetchMarketplaceAvailableAddOnExtensionRequest.prototype, "security", void 0);
    return FetchMarketplaceAvailableAddOnExtensionRequest;
}(SpeakeasyBase));
export { FetchMarketplaceAvailableAddOnExtensionRequest };
var FetchMarketplaceAvailableAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(FetchMarketplaceAvailableAddOnExtensionResponse, _super);
    function FetchMarketplaceAvailableAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchMarketplaceAvailableAddOnExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchMarketplaceAvailableAddOnExtensionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension)
    ], FetchMarketplaceAvailableAddOnExtensionResponse.prototype, "previewMarketplaceAvailableAddOnAvailableAddOnExtension", void 0);
    return FetchMarketplaceAvailableAddOnExtensionResponse;
}(SpeakeasyBase));
export { FetchMarketplaceAvailableAddOnExtensionResponse };
