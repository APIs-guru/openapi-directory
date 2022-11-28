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
export var CreateWirelessCommandServerList = [
    "https://preview.twilio.com",
];
var CreateWirelessCommandCreateWirelessCommandRequest = /** @class */ (function (_super) {
    __extends(CreateWirelessCommandCreateWirelessCommandRequest, _super);
    function CreateWirelessCommandCreateWirelessCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateWirelessCommandCreateWirelessCommandRequest.prototype, "callbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateWirelessCommandCreateWirelessCommandRequest.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Command;" }),
        __metadata("design:type", String)
    ], CreateWirelessCommandCreateWirelessCommandRequest.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CommandMode;" }),
        __metadata("design:type", String)
    ], CreateWirelessCommandCreateWirelessCommandRequest.prototype, "commandMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Device;" }),
        __metadata("design:type", String)
    ], CreateWirelessCommandCreateWirelessCommandRequest.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IncludeSid;" }),
        __metadata("design:type", String)
    ], CreateWirelessCommandCreateWirelessCommandRequest.prototype, "includeSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Sim;" }),
        __metadata("design:type", String)
    ], CreateWirelessCommandCreateWirelessCommandRequest.prototype, "sim", void 0);
    return CreateWirelessCommandCreateWirelessCommandRequest;
}(SpeakeasyBase));
export { CreateWirelessCommandCreateWirelessCommandRequest };
var CreateWirelessCommandSecurity = /** @class */ (function (_super) {
    __extends(CreateWirelessCommandSecurity, _super);
    function CreateWirelessCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateWirelessCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateWirelessCommandSecurity;
}(SpeakeasyBase));
export { CreateWirelessCommandSecurity };
var CreateWirelessCommandRequest = /** @class */ (function (_super) {
    __extends(CreateWirelessCommandRequest, _super);
    function CreateWirelessCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWirelessCommandRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateWirelessCommandCreateWirelessCommandRequest)
    ], CreateWirelessCommandRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWirelessCommandSecurity)
    ], CreateWirelessCommandRequest.prototype, "security", void 0);
    return CreateWirelessCommandRequest;
}(SpeakeasyBase));
export { CreateWirelessCommandRequest };
var CreateWirelessCommandResponse = /** @class */ (function (_super) {
    __extends(CreateWirelessCommandResponse, _super);
    function CreateWirelessCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWirelessCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateWirelessCommandResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewWirelessCommand)
    ], CreateWirelessCommandResponse.prototype, "previewWirelessCommand", void 0);
    return CreateWirelessCommandResponse;
}(SpeakeasyBase));
export { CreateWirelessCommandResponse };
