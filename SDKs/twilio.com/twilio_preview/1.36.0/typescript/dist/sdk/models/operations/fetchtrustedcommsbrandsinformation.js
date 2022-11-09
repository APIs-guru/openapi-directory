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
export var FETCHTRUSTEDCOMMSBRANDSINFORMATION_SERVERS = [
    "https://preview.twilio.com",
];
var FetchTrustedCommsBrandsInformationHeaders = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsBrandsInformationHeaders, _super);
    function FetchTrustedCommsBrandsInformationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], FetchTrustedCommsBrandsInformationHeaders.prototype, "ifNoneMatch", void 0);
    return FetchTrustedCommsBrandsInformationHeaders;
}(SpeakeasyBase));
export { FetchTrustedCommsBrandsInformationHeaders };
var FetchTrustedCommsBrandsInformationSecurity = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsBrandsInformationSecurity, _super);
    function FetchTrustedCommsBrandsInformationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTrustedCommsBrandsInformationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTrustedCommsBrandsInformationSecurity;
}(SpeakeasyBase));
export { FetchTrustedCommsBrandsInformationSecurity };
var FetchTrustedCommsBrandsInformationRequest = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsBrandsInformationRequest, _super);
    function FetchTrustedCommsBrandsInformationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchTrustedCommsBrandsInformationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTrustedCommsBrandsInformationHeaders)
    ], FetchTrustedCommsBrandsInformationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTrustedCommsBrandsInformationSecurity)
    ], FetchTrustedCommsBrandsInformationRequest.prototype, "security", void 0);
    return FetchTrustedCommsBrandsInformationRequest;
}(SpeakeasyBase));
export { FetchTrustedCommsBrandsInformationRequest };
var FetchTrustedCommsBrandsInformationResponse = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsBrandsInformationResponse, _super);
    function FetchTrustedCommsBrandsInformationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchTrustedCommsBrandsInformationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchTrustedCommsBrandsInformationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewTrustedCommsBrandsInformation)
    ], FetchTrustedCommsBrandsInformationResponse.prototype, "previewTrustedCommsBrandsInformation", void 0);
    return FetchTrustedCommsBrandsInformationResponse;
}(SpeakeasyBase));
export { FetchTrustedCommsBrandsInformationResponse };
