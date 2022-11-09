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
export var DELETEMARKETPLACEINSTALLEDADDON_SERVERS = [
    "https://preview.twilio.com",
];
var DeleteMarketplaceInstalledAddOnPathParams = /** @class */ (function (_super) {
    __extends(DeleteMarketplaceInstalledAddOnPathParams, _super);
    function DeleteMarketplaceInstalledAddOnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteMarketplaceInstalledAddOnPathParams.prototype, "sid", void 0);
    return DeleteMarketplaceInstalledAddOnPathParams;
}(SpeakeasyBase));
export { DeleteMarketplaceInstalledAddOnPathParams };
var DeleteMarketplaceInstalledAddOnSecurity = /** @class */ (function (_super) {
    __extends(DeleteMarketplaceInstalledAddOnSecurity, _super);
    function DeleteMarketplaceInstalledAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteMarketplaceInstalledAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteMarketplaceInstalledAddOnSecurity;
}(SpeakeasyBase));
export { DeleteMarketplaceInstalledAddOnSecurity };
var DeleteMarketplaceInstalledAddOnRequest = /** @class */ (function (_super) {
    __extends(DeleteMarketplaceInstalledAddOnRequest, _super);
    function DeleteMarketplaceInstalledAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteMarketplaceInstalledAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteMarketplaceInstalledAddOnPathParams)
    ], DeleteMarketplaceInstalledAddOnRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteMarketplaceInstalledAddOnSecurity)
    ], DeleteMarketplaceInstalledAddOnRequest.prototype, "security", void 0);
    return DeleteMarketplaceInstalledAddOnRequest;
}(SpeakeasyBase));
export { DeleteMarketplaceInstalledAddOnRequest };
var DeleteMarketplaceInstalledAddOnResponse = /** @class */ (function (_super) {
    __extends(DeleteMarketplaceInstalledAddOnResponse, _super);
    function DeleteMarketplaceInstalledAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteMarketplaceInstalledAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteMarketplaceInstalledAddOnResponse.prototype, "statusCode", void 0);
    return DeleteMarketplaceInstalledAddOnResponse;
}(SpeakeasyBase));
export { DeleteMarketplaceInstalledAddOnResponse };
