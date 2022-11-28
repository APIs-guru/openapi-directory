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
export var CreateIpCommandServerList = [
    "https://supersim.twilio.com",
];
export var CreateIpCommandCreateIpCommandRequestCallbackMethodEnum;
(function (CreateIpCommandCreateIpCommandRequestCallbackMethodEnum) {
    CreateIpCommandCreateIpCommandRequestCallbackMethodEnum["Head"] = "HEAD";
    CreateIpCommandCreateIpCommandRequestCallbackMethodEnum["Get"] = "GET";
    CreateIpCommandCreateIpCommandRequestCallbackMethodEnum["Post"] = "POST";
    CreateIpCommandCreateIpCommandRequestCallbackMethodEnum["Patch"] = "PATCH";
    CreateIpCommandCreateIpCommandRequestCallbackMethodEnum["Put"] = "PUT";
    CreateIpCommandCreateIpCommandRequestCallbackMethodEnum["Delete"] = "DELETE";
})(CreateIpCommandCreateIpCommandRequestCallbackMethodEnum || (CreateIpCommandCreateIpCommandRequestCallbackMethodEnum = {}));
var CreateIpCommandCreateIpCommandRequest = /** @class */ (function (_super) {
    __extends(CreateIpCommandCreateIpCommandRequest, _super);
    function CreateIpCommandCreateIpCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateIpCommandCreateIpCommandRequest.prototype, "callbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateIpCommandCreateIpCommandRequest.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DevicePort;" }),
        __metadata("design:type", Number)
    ], CreateIpCommandCreateIpCommandRequest.prototype, "devicePort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Payload;" }),
        __metadata("design:type", String)
    ], CreateIpCommandCreateIpCommandRequest.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PayloadType;" }),
        __metadata("design:type", String)
    ], CreateIpCommandCreateIpCommandRequest.prototype, "payloadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Sim;" }),
        __metadata("design:type", String)
    ], CreateIpCommandCreateIpCommandRequest.prototype, "sim", void 0);
    return CreateIpCommandCreateIpCommandRequest;
}(SpeakeasyBase));
export { CreateIpCommandCreateIpCommandRequest };
var CreateIpCommandSecurity = /** @class */ (function (_super) {
    __extends(CreateIpCommandSecurity, _super);
    function CreateIpCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateIpCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateIpCommandSecurity;
}(SpeakeasyBase));
export { CreateIpCommandSecurity };
var CreateIpCommandRequest = /** @class */ (function (_super) {
    __extends(CreateIpCommandRequest, _super);
    function CreateIpCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateIpCommandRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateIpCommandCreateIpCommandRequest)
    ], CreateIpCommandRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateIpCommandSecurity)
    ], CreateIpCommandRequest.prototype, "security", void 0);
    return CreateIpCommandRequest;
}(SpeakeasyBase));
export { CreateIpCommandRequest };
var CreateIpCommandResponse = /** @class */ (function (_super) {
    __extends(CreateIpCommandResponse, _super);
    function CreateIpCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateIpCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateIpCommandResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupersimV1IpCommand)
    ], CreateIpCommandResponse.prototype, "supersimV1IpCommand", void 0);
    return CreateIpCommandResponse;
}(SpeakeasyBase));
export { CreateIpCommandResponse };
