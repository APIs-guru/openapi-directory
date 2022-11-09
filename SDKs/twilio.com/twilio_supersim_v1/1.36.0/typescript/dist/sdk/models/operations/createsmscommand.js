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
export var CREATESMSCOMMAND_SERVERS = [
    "https://supersim.twilio.com",
];
export var CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum;
(function (CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum) {
    CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum["Head"] = "HEAD";
    CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum["Get"] = "GET";
    CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum["Post"] = "POST";
    CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum["Patch"] = "PATCH";
    CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum["Put"] = "PUT";
    CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum["Delete"] = "DELETE";
})(CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum || (CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum = {}));
var CreateSmsCommandCreateSmsCommandRequest = /** @class */ (function (_super) {
    __extends(CreateSmsCommandCreateSmsCommandRequest, _super);
    function CreateSmsCommandCreateSmsCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateSmsCommandCreateSmsCommandRequest.prototype, "callbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateSmsCommandCreateSmsCommandRequest.prototype, "callbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Payload;" }),
        __metadata("design:type", String)
    ], CreateSmsCommandCreateSmsCommandRequest.prototype, "payload", void 0);
    __decorate([
        Metadata({ data: "form, name=Sim;" }),
        __metadata("design:type", String)
    ], CreateSmsCommandCreateSmsCommandRequest.prototype, "sim", void 0);
    return CreateSmsCommandCreateSmsCommandRequest;
}(SpeakeasyBase));
export { CreateSmsCommandCreateSmsCommandRequest };
var CreateSmsCommandSecurity = /** @class */ (function (_super) {
    __extends(CreateSmsCommandSecurity, _super);
    function CreateSmsCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSmsCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSmsCommandSecurity;
}(SpeakeasyBase));
export { CreateSmsCommandSecurity };
var CreateSmsCommandRequest = /** @class */ (function (_super) {
    __extends(CreateSmsCommandRequest, _super);
    function CreateSmsCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSmsCommandRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSmsCommandCreateSmsCommandRequest)
    ], CreateSmsCommandRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSmsCommandSecurity)
    ], CreateSmsCommandRequest.prototype, "security", void 0);
    return CreateSmsCommandRequest;
}(SpeakeasyBase));
export { CreateSmsCommandRequest };
var CreateSmsCommandResponse = /** @class */ (function (_super) {
    __extends(CreateSmsCommandResponse, _super);
    function CreateSmsCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSmsCommandResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSmsCommandResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SupersimV1SmsCommand)
    ], CreateSmsCommandResponse.prototype, "supersimV1SmsCommand", void 0);
    return CreateSmsCommandResponse;
}(SpeakeasyBase));
export { CreateSmsCommandResponse };
