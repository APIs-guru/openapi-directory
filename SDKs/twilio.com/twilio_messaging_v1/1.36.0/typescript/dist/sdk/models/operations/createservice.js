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
export var CREATESERVICE_SERVERS = [
    "https://messaging.twilio.com",
];
export var CreateServiceCreateServiceRequestFallbackMethodEnum;
(function (CreateServiceCreateServiceRequestFallbackMethodEnum) {
    CreateServiceCreateServiceRequestFallbackMethodEnum["Head"] = "HEAD";
    CreateServiceCreateServiceRequestFallbackMethodEnum["Get"] = "GET";
    CreateServiceCreateServiceRequestFallbackMethodEnum["Post"] = "POST";
    CreateServiceCreateServiceRequestFallbackMethodEnum["Patch"] = "PATCH";
    CreateServiceCreateServiceRequestFallbackMethodEnum["Put"] = "PUT";
    CreateServiceCreateServiceRequestFallbackMethodEnum["Delete"] = "DELETE";
})(CreateServiceCreateServiceRequestFallbackMethodEnum || (CreateServiceCreateServiceRequestFallbackMethodEnum = {}));
export var CreateServiceCreateServiceRequestInboundMethodEnum;
(function (CreateServiceCreateServiceRequestInboundMethodEnum) {
    CreateServiceCreateServiceRequestInboundMethodEnum["Head"] = "HEAD";
    CreateServiceCreateServiceRequestInboundMethodEnum["Get"] = "GET";
    CreateServiceCreateServiceRequestInboundMethodEnum["Post"] = "POST";
    CreateServiceCreateServiceRequestInboundMethodEnum["Patch"] = "PATCH";
    CreateServiceCreateServiceRequestInboundMethodEnum["Put"] = "PUT";
    CreateServiceCreateServiceRequestInboundMethodEnum["Delete"] = "DELETE";
})(CreateServiceCreateServiceRequestInboundMethodEnum || (CreateServiceCreateServiceRequestInboundMethodEnum = {}));
var CreateServiceCreateServiceRequest = /** @class */ (function (_super) {
    __extends(CreateServiceCreateServiceRequest, _super);
    function CreateServiceCreateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AreaCodeGeomatch;" }),
        __metadata("design:type", Boolean)
    ], CreateServiceCreateServiceRequest.prototype, "areaCodeGeomatch", void 0);
    __decorate([
        Metadata({ data: "form, name=FallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateServiceCreateServiceRequest.prototype, "fallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=FallbackToLongCode;" }),
        __metadata("design:type", Boolean)
    ], CreateServiceCreateServiceRequest.prototype, "fallbackToLongCode", void 0);
    __decorate([
        Metadata({ data: "form, name=FallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateServiceCreateServiceRequest.prototype, "fallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateServiceCreateServiceRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=InboundMethod;" }),
        __metadata("design:type", String)
    ], CreateServiceCreateServiceRequest.prototype, "inboundMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=InboundRequestUrl;" }),
        __metadata("design:type", String)
    ], CreateServiceCreateServiceRequest.prototype, "inboundRequestUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=MmsConverter;" }),
        __metadata("design:type", Boolean)
    ], CreateServiceCreateServiceRequest.prototype, "mmsConverter", void 0);
    __decorate([
        Metadata({ data: "form, name=ScanMessageContent;" }),
        __metadata("design:type", String)
    ], CreateServiceCreateServiceRequest.prototype, "scanMessageContent", void 0);
    __decorate([
        Metadata({ data: "form, name=SmartEncoding;" }),
        __metadata("design:type", Boolean)
    ], CreateServiceCreateServiceRequest.prototype, "smartEncoding", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateServiceCreateServiceRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StickySender;" }),
        __metadata("design:type", Boolean)
    ], CreateServiceCreateServiceRequest.prototype, "stickySender", void 0);
    __decorate([
        Metadata({ data: "form, name=SynchronousValidation;" }),
        __metadata("design:type", Boolean)
    ], CreateServiceCreateServiceRequest.prototype, "synchronousValidation", void 0);
    __decorate([
        Metadata({ data: "form, name=UseInboundWebhookOnNumber;" }),
        __metadata("design:type", Boolean)
    ], CreateServiceCreateServiceRequest.prototype, "useInboundWebhookOnNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=Usecase;" }),
        __metadata("design:type", String)
    ], CreateServiceCreateServiceRequest.prototype, "usecase", void 0);
    __decorate([
        Metadata({ data: "form, name=ValidityPeriod;" }),
        __metadata("design:type", Number)
    ], CreateServiceCreateServiceRequest.prototype, "validityPeriod", void 0);
    return CreateServiceCreateServiceRequest;
}(SpeakeasyBase));
export { CreateServiceCreateServiceRequest };
var CreateServiceSecurity = /** @class */ (function (_super) {
    __extends(CreateServiceSecurity, _super);
    function CreateServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateServiceSecurity;
}(SpeakeasyBase));
export { CreateServiceSecurity };
var CreateServiceRequest = /** @class */ (function (_super) {
    __extends(CreateServiceRequest, _super);
    function CreateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateServiceCreateServiceRequest)
    ], CreateServiceRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateServiceSecurity)
    ], CreateServiceRequest.prototype, "security", void 0);
    return CreateServiceRequest;
}(SpeakeasyBase));
export { CreateServiceRequest };
var CreateServiceResponse = /** @class */ (function (_super) {
    __extends(CreateServiceResponse, _super);
    function CreateServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateServiceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MessagingV1Service)
    ], CreateServiceResponse.prototype, "messagingV1Service", void 0);
    return CreateServiceResponse;
}(SpeakeasyBase));
export { CreateServiceResponse };
