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
export var CREATEWEBCHANNEL_SERVERS = [
    "https://flex-api.twilio.com",
];
var CreateWebChannelCreateWebChannelRequest = /** @class */ (function (_super) {
    __extends(CreateWebChannelCreateWebChannelRequest, _super);
    function CreateWebChannelCreateWebChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ChatFriendlyName;" }),
        __metadata("design:type", String)
    ], CreateWebChannelCreateWebChannelRequest.prototype, "chatFriendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=ChatUniqueName;" }),
        __metadata("design:type", String)
    ], CreateWebChannelCreateWebChannelRequest.prototype, "chatUniqueName", void 0);
    __decorate([
        Metadata({ data: "form, name=CustomerFriendlyName;" }),
        __metadata("design:type", String)
    ], CreateWebChannelCreateWebChannelRequest.prototype, "customerFriendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=FlexFlowSid;" }),
        __metadata("design:type", String)
    ], CreateWebChannelCreateWebChannelRequest.prototype, "flexFlowSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateWebChannelCreateWebChannelRequest.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "form, name=PreEngagementData;" }),
        __metadata("design:type", String)
    ], CreateWebChannelCreateWebChannelRequest.prototype, "preEngagementData", void 0);
    return CreateWebChannelCreateWebChannelRequest;
}(SpeakeasyBase));
export { CreateWebChannelCreateWebChannelRequest };
var CreateWebChannelSecurity = /** @class */ (function (_super) {
    __extends(CreateWebChannelSecurity, _super);
    function CreateWebChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateWebChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateWebChannelSecurity;
}(SpeakeasyBase));
export { CreateWebChannelSecurity };
var CreateWebChannelRequest = /** @class */ (function (_super) {
    __extends(CreateWebChannelRequest, _super);
    function CreateWebChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWebChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateWebChannelCreateWebChannelRequest)
    ], CreateWebChannelRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateWebChannelSecurity)
    ], CreateWebChannelRequest.prototype, "security", void 0);
    return CreateWebChannelRequest;
}(SpeakeasyBase));
export { CreateWebChannelRequest };
var CreateWebChannelResponse = /** @class */ (function (_super) {
    __extends(CreateWebChannelResponse, _super);
    function CreateWebChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWebChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateWebChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FlexV1WebChannel)
    ], CreateWebChannelResponse.prototype, "flexV1WebChannel", void 0);
    return CreateWebChannelResponse;
}(SpeakeasyBase));
export { CreateWebChannelResponse };
