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
export var UPDATESERVICE_SERVERS = [
    "https://messaging.twilio.com",
];
var UpdateServicePathParams = /** @class */ (function (_super) {
    __extends(UpdateServicePathParams, _super);
    function UpdateServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateServicePathParams.prototype, "sid", void 0);
    return UpdateServicePathParams;
}(SpeakeasyBase));
export { UpdateServicePathParams };
export var UpdateServiceUpdateServiceRequestFallbackMethodEnum;
(function (UpdateServiceUpdateServiceRequestFallbackMethodEnum) {
    UpdateServiceUpdateServiceRequestFallbackMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestFallbackMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestFallbackMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestFallbackMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestFallbackMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestFallbackMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestFallbackMethodEnum || (UpdateServiceUpdateServiceRequestFallbackMethodEnum = {}));
export var UpdateServiceUpdateServiceRequestInboundMethodEnum;
(function (UpdateServiceUpdateServiceRequestInboundMethodEnum) {
    UpdateServiceUpdateServiceRequestInboundMethodEnum["Head"] = "HEAD";
    UpdateServiceUpdateServiceRequestInboundMethodEnum["Get"] = "GET";
    UpdateServiceUpdateServiceRequestInboundMethodEnum["Post"] = "POST";
    UpdateServiceUpdateServiceRequestInboundMethodEnum["Patch"] = "PATCH";
    UpdateServiceUpdateServiceRequestInboundMethodEnum["Put"] = "PUT";
    UpdateServiceUpdateServiceRequestInboundMethodEnum["Delete"] = "DELETE";
})(UpdateServiceUpdateServiceRequestInboundMethodEnum || (UpdateServiceUpdateServiceRequestInboundMethodEnum = {}));
var UpdateServiceUpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceUpdateServiceRequest, _super);
    function UpdateServiceUpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AreaCodeGeomatch;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "areaCodeGeomatch", void 0);
    __decorate([
        Metadata({ data: "form, name=FallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "fallbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=FallbackToLongCode;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "fallbackToLongCode", void 0);
    __decorate([
        Metadata({ data: "form, name=FallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "fallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=InboundMethod;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "inboundMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=InboundRequestUrl;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "inboundRequestUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=MmsConverter;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "mmsConverter", void 0);
    __decorate([
        Metadata({ data: "form, name=ScanMessageContent;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "scanMessageContent", void 0);
    __decorate([
        Metadata({ data: "form, name=SmartEncoding;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "smartEncoding", void 0);
    __decorate([
        Metadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "form, name=StickySender;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "stickySender", void 0);
    __decorate([
        Metadata({ data: "form, name=SynchronousValidation;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "synchronousValidation", void 0);
    __decorate([
        Metadata({ data: "form, name=UseInboundWebhookOnNumber;" }),
        __metadata("design:type", Boolean)
    ], UpdateServiceUpdateServiceRequest.prototype, "useInboundWebhookOnNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=Usecase;" }),
        __metadata("design:type", String)
    ], UpdateServiceUpdateServiceRequest.prototype, "usecase", void 0);
    __decorate([
        Metadata({ data: "form, name=ValidityPeriod;" }),
        __metadata("design:type", Number)
    ], UpdateServiceUpdateServiceRequest.prototype, "validityPeriod", void 0);
    return UpdateServiceUpdateServiceRequest;
}(SpeakeasyBase));
export { UpdateServiceUpdateServiceRequest };
var UpdateServiceSecurity = /** @class */ (function (_super) {
    __extends(UpdateServiceSecurity, _super);
    function UpdateServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateServiceSecurity;
}(SpeakeasyBase));
export { UpdateServiceSecurity };
var UpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceRequest, _super);
    function UpdateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServicePathParams)
    ], UpdateServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateServiceUpdateServiceRequest)
    ], UpdateServiceRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateServiceSecurity)
    ], UpdateServiceRequest.prototype, "security", void 0);
    return UpdateServiceRequest;
}(SpeakeasyBase));
export { UpdateServiceRequest };
var UpdateServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceResponse, _super);
    function UpdateServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateServiceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MessagingV1Service)
    ], UpdateServiceResponse.prototype, "messagingV1Service", void 0);
    return UpdateServiceResponse;
}(SpeakeasyBase));
export { UpdateServiceResponse };
