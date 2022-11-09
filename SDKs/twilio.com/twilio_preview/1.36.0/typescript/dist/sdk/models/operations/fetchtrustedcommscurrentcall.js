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
export var FETCHTRUSTEDCOMMSCURRENTCALL_SERVERS = [
    "https://preview.twilio.com",
];
var FetchTrustedCommsCurrentCallHeaders = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsCurrentCallHeaders, _super);
    function FetchTrustedCommsCurrentCallHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Xcnam-Sensitive-Phone-Number-From" }),
        __metadata("design:type", String)
    ], FetchTrustedCommsCurrentCallHeaders.prototype, "xXcnamSensitivePhoneNumberFrom", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Xcnam-Sensitive-Phone-Number-To" }),
        __metadata("design:type", String)
    ], FetchTrustedCommsCurrentCallHeaders.prototype, "xXcnamSensitivePhoneNumberTo", void 0);
    return FetchTrustedCommsCurrentCallHeaders;
}(SpeakeasyBase));
export { FetchTrustedCommsCurrentCallHeaders };
var FetchTrustedCommsCurrentCallSecurity = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsCurrentCallSecurity, _super);
    function FetchTrustedCommsCurrentCallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTrustedCommsCurrentCallSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTrustedCommsCurrentCallSecurity;
}(SpeakeasyBase));
export { FetchTrustedCommsCurrentCallSecurity };
var FetchTrustedCommsCurrentCallRequest = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsCurrentCallRequest, _super);
    function FetchTrustedCommsCurrentCallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchTrustedCommsCurrentCallRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTrustedCommsCurrentCallHeaders)
    ], FetchTrustedCommsCurrentCallRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchTrustedCommsCurrentCallSecurity)
    ], FetchTrustedCommsCurrentCallRequest.prototype, "security", void 0);
    return FetchTrustedCommsCurrentCallRequest;
}(SpeakeasyBase));
export { FetchTrustedCommsCurrentCallRequest };
var FetchTrustedCommsCurrentCallResponse = /** @class */ (function (_super) {
    __extends(FetchTrustedCommsCurrentCallResponse, _super);
    function FetchTrustedCommsCurrentCallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchTrustedCommsCurrentCallResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchTrustedCommsCurrentCallResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewTrustedCommsCurrentCall)
    ], FetchTrustedCommsCurrentCallResponse.prototype, "previewTrustedCommsCurrentCall", void 0);
    return FetchTrustedCommsCurrentCallResponse;
}(SpeakeasyBase));
export { FetchTrustedCommsCurrentCallResponse };
