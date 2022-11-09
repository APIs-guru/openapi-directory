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
export var FETCHMARKETPLACEAVAILABLEADDON_SERVERS = [
    "https://preview.twilio.com",
];
var FetchMarketplaceAvailableAddOnPathParams = /** @class */ (function (_super) {
    __extends(FetchMarketplaceAvailableAddOnPathParams, _super);
    function FetchMarketplaceAvailableAddOnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchMarketplaceAvailableAddOnPathParams.prototype, "sid", void 0);
    return FetchMarketplaceAvailableAddOnPathParams;
}(SpeakeasyBase));
export { FetchMarketplaceAvailableAddOnPathParams };
var FetchMarketplaceAvailableAddOnSecurity = /** @class */ (function (_super) {
    __extends(FetchMarketplaceAvailableAddOnSecurity, _super);
    function FetchMarketplaceAvailableAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchMarketplaceAvailableAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchMarketplaceAvailableAddOnSecurity;
}(SpeakeasyBase));
export { FetchMarketplaceAvailableAddOnSecurity };
var FetchMarketplaceAvailableAddOnRequest = /** @class */ (function (_super) {
    __extends(FetchMarketplaceAvailableAddOnRequest, _super);
    function FetchMarketplaceAvailableAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchMarketplaceAvailableAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchMarketplaceAvailableAddOnPathParams)
    ], FetchMarketplaceAvailableAddOnRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchMarketplaceAvailableAddOnSecurity)
    ], FetchMarketplaceAvailableAddOnRequest.prototype, "security", void 0);
    return FetchMarketplaceAvailableAddOnRequest;
}(SpeakeasyBase));
export { FetchMarketplaceAvailableAddOnRequest };
var FetchMarketplaceAvailableAddOnResponse = /** @class */ (function (_super) {
    __extends(FetchMarketplaceAvailableAddOnResponse, _super);
    function FetchMarketplaceAvailableAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchMarketplaceAvailableAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchMarketplaceAvailableAddOnResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewMarketplaceAvailableAddOn)
    ], FetchMarketplaceAvailableAddOnResponse.prototype, "previewMarketplaceAvailableAddOn", void 0);
    return FetchMarketplaceAvailableAddOnResponse;
}(SpeakeasyBase));
export { FetchMarketplaceAvailableAddOnResponse };
