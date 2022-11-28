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
export var FetchTrustedCommsCpsServerList = [
    "https://preview.twilio.com",
];
var FetchTrustedCommsCpsHeaders = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsCpsHeaders, _super);
    function FetchTrustedCommsCpsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Xcnam-Sensitive-Phone-Number" }),
        __metadata("design:type", String)
    ], FetchTrustedCommsCpsHeaders.prototype, "xXcnamSensitivePhoneNumber", void 0);
    return FetchTrustedCommsCpsHeaders;
}(SpeakeasyBase));
export { FetchTrustedCommsCpsHeaders };
var FetchTrustedCommsCpsSecurity = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsCpsSecurity, _super);
    function FetchTrustedCommsCpsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTrustedCommsCpsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTrustedCommsCpsSecurity;
}(SpeakeasyBase));
export { FetchTrustedCommsCpsSecurity };
var FetchTrustedCommsCpsRequest = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsCpsRequest, _super);
    function FetchTrustedCommsCpsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTrustedCommsCpsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTrustedCommsCpsHeaders)
    ], FetchTrustedCommsCpsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTrustedCommsCpsSecurity)
    ], FetchTrustedCommsCpsRequest.prototype, "security", void 0);
    return FetchTrustedCommsCpsRequest;
}(SpeakeasyBase));
export { FetchTrustedCommsCpsRequest };
var FetchTrustedCommsCpsResponse = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsCpsResponse, _super);
    function FetchTrustedCommsCpsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTrustedCommsCpsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchTrustedCommsCpsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewTrustedCommsCps)
    ], FetchTrustedCommsCpsResponse.prototype, "previewTrustedCommsCps", void 0);
    return FetchTrustedCommsCpsResponse;
}(SpeakeasyBase));
export { FetchTrustedCommsCpsResponse };
