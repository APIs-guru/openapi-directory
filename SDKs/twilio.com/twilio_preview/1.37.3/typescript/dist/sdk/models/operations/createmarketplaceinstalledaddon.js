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
export var CreateMarketplaceInstalledAddOnServerList = [
    "https://preview.twilio.com",
];
var CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest = /** @class */ (function (_super) {
    __extends(CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest, _super);
    function CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AcceptTermsOfService;" }),
        __metadata("design:type", Boolean)
    ], CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest.prototype, "acceptTermsOfService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AvailableAddOnSid;" }),
        __metadata("design:type", String)
    ], CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest.prototype, "availableAddOnSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration;" }),
        __metadata("design:type", Object)
    ], CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest.prototype, "uniqueName", void 0);
    return CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest;
}(SpeakeasyBase));
export { CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest };
var CreateMarketplaceInstalledAddOnSecurity = /** @class */ (function (_super) {
    __extends(CreateMarketplaceInstalledAddOnSecurity, _super);
    function CreateMarketplaceInstalledAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateMarketplaceInstalledAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateMarketplaceInstalledAddOnSecurity;
}(SpeakeasyBase));
export { CreateMarketplaceInstalledAddOnSecurity };
var CreateMarketplaceInstalledAddOnRequest = /** @class */ (function (_super) {
    __extends(CreateMarketplaceInstalledAddOnRequest, _super);
    function CreateMarketplaceInstalledAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMarketplaceInstalledAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest)
    ], CreateMarketplaceInstalledAddOnRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMarketplaceInstalledAddOnSecurity)
    ], CreateMarketplaceInstalledAddOnRequest.prototype, "security", void 0);
    return CreateMarketplaceInstalledAddOnRequest;
}(SpeakeasyBase));
export { CreateMarketplaceInstalledAddOnRequest };
var CreateMarketplaceInstalledAddOnResponse = /** @class */ (function (_super) {
    __extends(CreateMarketplaceInstalledAddOnResponse, _super);
    function CreateMarketplaceInstalledAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMarketplaceInstalledAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateMarketplaceInstalledAddOnResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewMarketplaceInstalledAddOn)
    ], CreateMarketplaceInstalledAddOnResponse.prototype, "previewMarketplaceInstalledAddOn", void 0);
    return CreateMarketplaceInstalledAddOnResponse;
}(SpeakeasyBase));
export { CreateMarketplaceInstalledAddOnResponse };
