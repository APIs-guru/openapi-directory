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
export var CREATEBINDING_SERVERS = [
    "https://notify.twilio.com",
];
var CreateBindingPathParams = /** @class */ (function (_super) {
    __extends(CreateBindingPathParams, _super);
    function CreateBindingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateBindingPathParams.prototype, "serviceSid", void 0);
    return CreateBindingPathParams;
}(SpeakeasyBase));
export { CreateBindingPathParams };
var CreateBindingCreateBindingRequest = /** @class */ (function (_super) {
    __extends(CreateBindingCreateBindingRequest, _super);
    function CreateBindingCreateBindingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Address;" }),
        __metadata("design:type", String)
    ], CreateBindingCreateBindingRequest.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "form, name=BindingType;" }),
        __metadata("design:type", String)
    ], CreateBindingCreateBindingRequest.prototype, "bindingType", void 0);
    __decorate([
        Metadata({ data: "form, name=CredentialSid;" }),
        __metadata("design:type", String)
    ], CreateBindingCreateBindingRequest.prototype, "credentialSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Endpoint;" }),
        __metadata("design:type", String)
    ], CreateBindingCreateBindingRequest.prototype, "endpoint", void 0);
    __decorate([
        Metadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateBindingCreateBindingRequest.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "form, name=NotificationProtocolVersion;" }),
        __metadata("design:type", String)
    ], CreateBindingCreateBindingRequest.prototype, "notificationProtocolVersion", void 0);
    __decorate([
        Metadata({ data: "form, name=Tag;" }),
        __metadata("design:type", Array)
    ], CreateBindingCreateBindingRequest.prototype, "tag", void 0);
    return CreateBindingCreateBindingRequest;
}(SpeakeasyBase));
export { CreateBindingCreateBindingRequest };
var CreateBindingSecurity = /** @class */ (function (_super) {
    __extends(CreateBindingSecurity, _super);
    function CreateBindingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateBindingSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateBindingSecurity;
}(SpeakeasyBase));
export { CreateBindingSecurity };
var CreateBindingRequest = /** @class */ (function (_super) {
    __extends(CreateBindingRequest, _super);
    function CreateBindingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBindingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBindingPathParams)
    ], CreateBindingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateBindingCreateBindingRequest)
    ], CreateBindingRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateBindingSecurity)
    ], CreateBindingRequest.prototype, "security", void 0);
    return CreateBindingRequest;
}(SpeakeasyBase));
export { CreateBindingRequest };
var CreateBindingResponse = /** @class */ (function (_super) {
    __extends(CreateBindingResponse, _super);
    function CreateBindingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBindingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateBindingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotifyV1ServiceBinding)
    ], CreateBindingResponse.prototype, "notifyV1ServiceBinding", void 0);
    return CreateBindingResponse;
}(SpeakeasyBase));
export { CreateBindingResponse };
