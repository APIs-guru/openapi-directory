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
export var UPDATEMARKETPLACEINSTALLEDADDON_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateMarketplaceInstalledAddOnPathParams = /** @class */ (function (_super) {
    __extends(UpdateMarketplaceInstalledAddOnPathParams, _super);
    function UpdateMarketplaceInstalledAddOnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateMarketplaceInstalledAddOnPathParams.prototype, "sid", void 0);
    return UpdateMarketplaceInstalledAddOnPathParams;
}(SpeakeasyBase));
export { UpdateMarketplaceInstalledAddOnPathParams };
var UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest = /** @class */ (function (_super) {
    __extends(UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest, _super);
    function UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Configuration;" }),
        __metadata("design:type", Object)
    ], UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest.prototype, "configuration", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest.prototype, "uniqueName", void 0);
    return UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest;
}(SpeakeasyBase));
export { UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest };
var UpdateMarketplaceInstalledAddOnSecurity = /** @class */ (function (_super) {
    __extends(UpdateMarketplaceInstalledAddOnSecurity, _super);
    function UpdateMarketplaceInstalledAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateMarketplaceInstalledAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateMarketplaceInstalledAddOnSecurity;
}(SpeakeasyBase));
export { UpdateMarketplaceInstalledAddOnSecurity };
var UpdateMarketplaceInstalledAddOnRequest = /** @class */ (function (_super) {
    __extends(UpdateMarketplaceInstalledAddOnRequest, _super);
    function UpdateMarketplaceInstalledAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateMarketplaceInstalledAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateMarketplaceInstalledAddOnPathParams)
    ], UpdateMarketplaceInstalledAddOnRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest)
    ], UpdateMarketplaceInstalledAddOnRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateMarketplaceInstalledAddOnSecurity)
    ], UpdateMarketplaceInstalledAddOnRequest.prototype, "security", void 0);
    return UpdateMarketplaceInstalledAddOnRequest;
}(SpeakeasyBase));
export { UpdateMarketplaceInstalledAddOnRequest };
var UpdateMarketplaceInstalledAddOnResponse = /** @class */ (function (_super) {
    __extends(UpdateMarketplaceInstalledAddOnResponse, _super);
    function UpdateMarketplaceInstalledAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateMarketplaceInstalledAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateMarketplaceInstalledAddOnResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewMarketplaceInstalledAddOn)
    ], UpdateMarketplaceInstalledAddOnResponse.prototype, "previewMarketplaceInstalledAddOn", void 0);
    return UpdateMarketplaceInstalledAddOnResponse;
}(SpeakeasyBase));
export { UpdateMarketplaceInstalledAddOnResponse };
