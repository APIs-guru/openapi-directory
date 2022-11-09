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
export var FETCHMARKETPLACEINSTALLEDADDON_SERVERS = [
    "https://preview.twilio.com",
];
var FetchMarketplaceInstalledAddOnPathParams = /** @class */ (function (_super) {
    __extends(FetchMarketplaceInstalledAddOnPathParams, _super);
    function FetchMarketplaceInstalledAddOnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchMarketplaceInstalledAddOnPathParams.prototype, "sid", void 0);
    return FetchMarketplaceInstalledAddOnPathParams;
}(SpeakeasyBase));
export { FetchMarketplaceInstalledAddOnPathParams };
var FetchMarketplaceInstalledAddOnSecurity = /** @class */ (function (_super) {
    __extends(FetchMarketplaceInstalledAddOnSecurity, _super);
    function FetchMarketplaceInstalledAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchMarketplaceInstalledAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchMarketplaceInstalledAddOnSecurity;
}(SpeakeasyBase));
export { FetchMarketplaceInstalledAddOnSecurity };
var FetchMarketplaceInstalledAddOnRequest = /** @class */ (function (_super) {
    __extends(FetchMarketplaceInstalledAddOnRequest, _super);
    function FetchMarketplaceInstalledAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchMarketplaceInstalledAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchMarketplaceInstalledAddOnPathParams)
    ], FetchMarketplaceInstalledAddOnRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchMarketplaceInstalledAddOnSecurity)
    ], FetchMarketplaceInstalledAddOnRequest.prototype, "security", void 0);
    return FetchMarketplaceInstalledAddOnRequest;
}(SpeakeasyBase));
export { FetchMarketplaceInstalledAddOnRequest };
var FetchMarketplaceInstalledAddOnResponse = /** @class */ (function (_super) {
    __extends(FetchMarketplaceInstalledAddOnResponse, _super);
    function FetchMarketplaceInstalledAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchMarketplaceInstalledAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchMarketplaceInstalledAddOnResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewMarketplaceInstalledAddOn)
    ], FetchMarketplaceInstalledAddOnResponse.prototype, "previewMarketplaceInstalledAddOn", void 0);
    return FetchMarketplaceInstalledAddOnResponse;
}(SpeakeasyBase));
export { FetchMarketplaceInstalledAddOnResponse };
