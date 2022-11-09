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
export var CREATEASSISTANT_SERVERS = [
    "https://autopilot.twilio.com",
];
var CreateAssistantCreateAssistantRequest = /** @class */ (function (_super) {
    __extends(CreateAssistantCreateAssistantRequest, _super);
    function CreateAssistantCreateAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CallbackEvents;" }),
        __metadata("design:type", String)
    ], CreateAssistantCreateAssistantRequest.prototype, "callbackEvents", void 0);
    __decorate([
        Metadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateAssistantCreateAssistantRequest.prototype, "callbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Defaults;" }),
        __metadata("design:type", Object)
    ], CreateAssistantCreateAssistantRequest.prototype, "defaults", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateAssistantCreateAssistantRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=LogQueries;" }),
        __metadata("design:type", Boolean)
    ], CreateAssistantCreateAssistantRequest.prototype, "logQueries", void 0);
    __decorate([
        Metadata({ data: "form, name=StyleSheet;" }),
        __metadata("design:type", Object)
    ], CreateAssistantCreateAssistantRequest.prototype, "styleSheet", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateAssistantCreateAssistantRequest.prototype, "uniqueName", void 0);
    return CreateAssistantCreateAssistantRequest;
}(SpeakeasyBase));
export { CreateAssistantCreateAssistantRequest };
var CreateAssistantSecurity = /** @class */ (function (_super) {
    __extends(CreateAssistantSecurity, _super);
    function CreateAssistantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateAssistantSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateAssistantSecurity;
}(SpeakeasyBase));
export { CreateAssistantSecurity };
var CreateAssistantRequest = /** @class */ (function (_super) {
    __extends(CreateAssistantRequest, _super);
    function CreateAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateAssistantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateAssistantCreateAssistantRequest)
    ], CreateAssistantRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateAssistantSecurity)
    ], CreateAssistantRequest.prototype, "security", void 0);
    return CreateAssistantRequest;
}(SpeakeasyBase));
export { CreateAssistantRequest };
var CreateAssistantResponse = /** @class */ (function (_super) {
    __extends(CreateAssistantResponse, _super);
    function CreateAssistantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateAssistantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateAssistantResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AutopilotV1Assistant)
    ], CreateAssistantResponse.prototype, "autopilotV1Assistant", void 0);
    return CreateAssistantResponse;
}(SpeakeasyBase));
export { CreateAssistantResponse };
