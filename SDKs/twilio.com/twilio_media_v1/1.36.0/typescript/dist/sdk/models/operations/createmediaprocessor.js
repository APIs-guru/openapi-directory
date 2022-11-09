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
export var CREATEMEDIAPROCESSOR_SERVERS = [
    "https://media.twilio.com",
];
export var CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
(function (CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum) {
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum || (CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum = {}));
var CreateMediaProcessorCreateMediaProcessorRequest = /** @class */ (function (_super) {
    __extends(CreateMediaProcessorCreateMediaProcessorRequest, _super);
    function CreateMediaProcessorCreateMediaProcessorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Extension;" }),
        __metadata("design:type", String)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "extension", void 0);
    __decorate([
        Metadata({ data: "form, name=ExtensionContext;" }),
        __metadata("design:type", String)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "extensionContext", void 0);
    __decorate([
        Metadata({ data: "form, name=ExtensionEnvironment;" }),
        __metadata("design:type", Object)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "extensionEnvironment", void 0);
    __decorate([
        Metadata({ data: "form, name=MaxDuration;" }),
        __metadata("design:type", Number)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "maxDuration", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateMediaProcessorCreateMediaProcessorRequest.prototype, "statusCallbackMethod", void 0);
    return CreateMediaProcessorCreateMediaProcessorRequest;
}(SpeakeasyBase));
export { CreateMediaProcessorCreateMediaProcessorRequest };
var CreateMediaProcessorSecurity = /** @class */ (function (_super) {
    __extends(CreateMediaProcessorSecurity, _super);
    function CreateMediaProcessorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateMediaProcessorSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateMediaProcessorSecurity;
}(SpeakeasyBase));
export { CreateMediaProcessorSecurity };
var CreateMediaProcessorRequest = /** @class */ (function (_super) {
    __extends(CreateMediaProcessorRequest, _super);
    function CreateMediaProcessorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateMediaProcessorRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateMediaProcessorCreateMediaProcessorRequest)
    ], CreateMediaProcessorRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateMediaProcessorSecurity)
    ], CreateMediaProcessorRequest.prototype, "security", void 0);
    return CreateMediaProcessorRequest;
}(SpeakeasyBase));
export { CreateMediaProcessorRequest };
var CreateMediaProcessorResponse = /** @class */ (function (_super) {
    __extends(CreateMediaProcessorResponse, _super);
    function CreateMediaProcessorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateMediaProcessorResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateMediaProcessorResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MediaV1MediaProcessor)
    ], CreateMediaProcessorResponse.prototype, "mediaV1MediaProcessor", void 0);
    return CreateMediaProcessorResponse;
}(SpeakeasyBase));
export { CreateMediaProcessorResponse };
