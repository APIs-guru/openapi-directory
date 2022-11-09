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
export var CREATETRUSTEDCOMMSCHANNEL_SERVERS = [
    "https://preview.twilio.com",
];
var CreateTrustedCommsChannelPathParams = /** @class */ (function (_super) {
    __extends(CreateTrustedCommsChannelPathParams, _super);
    function CreateTrustedCommsChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=BrandedChannelSid" }),
        __metadata("design:type", String)
    ], CreateTrustedCommsChannelPathParams.prototype, "brandedChannelSid", void 0);
    return CreateTrustedCommsChannelPathParams;
}(SpeakeasyBase));
export { CreateTrustedCommsChannelPathParams };
var CreateTrustedCommsChannelCreateTrustedCommsChannelRequest = /** @class */ (function (_super) {
    __extends(CreateTrustedCommsChannelCreateTrustedCommsChannelRequest, _super);
    function CreateTrustedCommsChannelCreateTrustedCommsChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=PhoneNumberSid;" }),
        __metadata("design:type", String)
    ], CreateTrustedCommsChannelCreateTrustedCommsChannelRequest.prototype, "phoneNumberSid", void 0);
    return CreateTrustedCommsChannelCreateTrustedCommsChannelRequest;
}(SpeakeasyBase));
export { CreateTrustedCommsChannelCreateTrustedCommsChannelRequest };
var CreateTrustedCommsChannelSecurity = /** @class */ (function (_super) {
    __extends(CreateTrustedCommsChannelSecurity, _super);
    function CreateTrustedCommsChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTrustedCommsChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTrustedCommsChannelSecurity;
}(SpeakeasyBase));
export { CreateTrustedCommsChannelSecurity };
var CreateTrustedCommsChannelRequest = /** @class */ (function (_super) {
    __extends(CreateTrustedCommsChannelRequest, _super);
    function CreateTrustedCommsChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTrustedCommsChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTrustedCommsChannelPathParams)
    ], CreateTrustedCommsChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTrustedCommsChannelCreateTrustedCommsChannelRequest)
    ], CreateTrustedCommsChannelRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTrustedCommsChannelSecurity)
    ], CreateTrustedCommsChannelRequest.prototype, "security", void 0);
    return CreateTrustedCommsChannelRequest;
}(SpeakeasyBase));
export { CreateTrustedCommsChannelRequest };
var CreateTrustedCommsChannelResponse = /** @class */ (function (_super) {
    __extends(CreateTrustedCommsChannelResponse, _super);
    function CreateTrustedCommsChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTrustedCommsChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateTrustedCommsChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewTrustedCommsBrandedChannelChannel)
    ], CreateTrustedCommsChannelResponse.prototype, "previewTrustedCommsBrandedChannelChannel", void 0);
    return CreateTrustedCommsChannelResponse;
}(SpeakeasyBase));
export { CreateTrustedCommsChannelResponse };
