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
export var UpdateInteractionChannelServerList = [
    "https://flex-api.twilio.com",
];
var UpdateInteractionChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateInteractionChannelPathParams, _super);
    function UpdateInteractionChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" }),
        __metadata("design:type", String)
    ], UpdateInteractionChannelPathParams.prototype, "interactionSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateInteractionChannelPathParams.prototype, "sid", void 0);
    return UpdateInteractionChannelPathParams;
}(SpeakeasyBase));
export { UpdateInteractionChannelPathParams };
var UpdateInteractionChannelUpdateInteractionChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateInteractionChannelUpdateInteractionChannelRequest, _super);
    function UpdateInteractionChannelUpdateInteractionChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Routing;" }),
        __metadata("design:type", Object)
    ], UpdateInteractionChannelUpdateInteractionChannelRequest.prototype, "routing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateInteractionChannelUpdateInteractionChannelRequest.prototype, "status", void 0);
    return UpdateInteractionChannelUpdateInteractionChannelRequest;
}(SpeakeasyBase));
export { UpdateInteractionChannelUpdateInteractionChannelRequest };
var UpdateInteractionChannelSecurity = /** @class */ (function (_super) {
    __extends(UpdateInteractionChannelSecurity, _super);
    function UpdateInteractionChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateInteractionChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateInteractionChannelSecurity;
}(SpeakeasyBase));
export { UpdateInteractionChannelSecurity };
var UpdateInteractionChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateInteractionChannelRequest, _super);
    function UpdateInteractionChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateInteractionChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInteractionChannelPathParams)
    ], UpdateInteractionChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateInteractionChannelUpdateInteractionChannelRequest)
    ], UpdateInteractionChannelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInteractionChannelSecurity)
    ], UpdateInteractionChannelRequest.prototype, "security", void 0);
    return UpdateInteractionChannelRequest;
}(SpeakeasyBase));
export { UpdateInteractionChannelRequest };
var UpdateInteractionChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateInteractionChannelResponse, _super);
    function UpdateInteractionChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateInteractionChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateInteractionChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FlexV1InteractionInteractionChannel)
    ], UpdateInteractionChannelResponse.prototype, "flexV1InteractionInteractionChannel", void 0);
    return UpdateInteractionChannelResponse;
}(SpeakeasyBase));
export { UpdateInteractionChannelResponse };
