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
export var CreateMessageInteractionServerList = [
    "https://proxy.twilio.com",
];
var CreateMessageInteractionPathParams = /** @class */ (function (_super) {
    __extends(CreateMessageInteractionPathParams, _super);
    function CreateMessageInteractionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" }),
        __metadata("design:type", String)
    ], CreateMessageInteractionPathParams.prototype, "participantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateMessageInteractionPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" }),
        __metadata("design:type", String)
    ], CreateMessageInteractionPathParams.prototype, "sessionSid", void 0);
    return CreateMessageInteractionPathParams;
}(SpeakeasyBase));
export { CreateMessageInteractionPathParams };
var CreateMessageInteractionCreateMessageInteractionRequest = /** @class */ (function (_super) {
    __extends(CreateMessageInteractionCreateMessageInteractionRequest, _super);
    function CreateMessageInteractionCreateMessageInteractionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Body;" }),
        __metadata("design:type", String)
    ], CreateMessageInteractionCreateMessageInteractionRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MediaUrl;" }),
        __metadata("design:type", Array)
    ], CreateMessageInteractionCreateMessageInteractionRequest.prototype, "mediaUrl", void 0);
    return CreateMessageInteractionCreateMessageInteractionRequest;
}(SpeakeasyBase));
export { CreateMessageInteractionCreateMessageInteractionRequest };
var CreateMessageInteractionSecurity = /** @class */ (function (_super) {
    __extends(CreateMessageInteractionSecurity, _super);
    function CreateMessageInteractionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateMessageInteractionSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateMessageInteractionSecurity;
}(SpeakeasyBase));
export { CreateMessageInteractionSecurity };
var CreateMessageInteractionRequest = /** @class */ (function (_super) {
    __extends(CreateMessageInteractionRequest, _super);
    function CreateMessageInteractionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMessageInteractionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMessageInteractionPathParams)
    ], CreateMessageInteractionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateMessageInteractionCreateMessageInteractionRequest)
    ], CreateMessageInteractionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMessageInteractionSecurity)
    ], CreateMessageInteractionRequest.prototype, "security", void 0);
    return CreateMessageInteractionRequest;
}(SpeakeasyBase));
export { CreateMessageInteractionRequest };
var CreateMessageInteractionResponse = /** @class */ (function (_super) {
    __extends(CreateMessageInteractionResponse, _super);
    function CreateMessageInteractionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMessageInteractionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateMessageInteractionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProxyV1ServiceSessionParticipantMessageInteraction)
    ], CreateMessageInteractionResponse.prototype, "proxyV1ServiceSessionParticipantMessageInteraction", void 0);
    return CreateMessageInteractionResponse;
}(SpeakeasyBase));
export { CreateMessageInteractionResponse };
