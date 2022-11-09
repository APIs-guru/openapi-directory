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
export var CREATEUSAGETRIGGER_SERVERS = [
    "https://api.twilio.com",
];
var CreateUsageTriggerPathParams = /** @class */ (function (_super) {
    __extends(CreateUsageTriggerPathParams, _super);
    function CreateUsageTriggerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateUsageTriggerPathParams.prototype, "accountSid", void 0);
    return CreateUsageTriggerPathParams;
}(SpeakeasyBase));
export { CreateUsageTriggerPathParams };
export var CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum;
(function (CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum) {
    CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum["Head"] = "HEAD";
    CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum["Get"] = "GET";
    CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum["Post"] = "POST";
    CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum["Patch"] = "PATCH";
    CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum["Put"] = "PUT";
    CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum["Delete"] = "DELETE";
})(CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum || (CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum = {}));
var CreateUsageTriggerCreateUsageTriggerRequest = /** @class */ (function (_super) {
    __extends(CreateUsageTriggerCreateUsageTriggerRequest, _super);
    function CreateUsageTriggerCreateUsageTriggerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateUsageTriggerCreateUsageTriggerRequest.prototype, "callbackMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateUsageTriggerCreateUsageTriggerRequest.prototype, "callbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateUsageTriggerCreateUsageTriggerRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Recurring;" }),
        __metadata("design:type", String)
    ], CreateUsageTriggerCreateUsageTriggerRequest.prototype, "recurring", void 0);
    __decorate([
        Metadata({ data: "form, name=TriggerBy;" }),
        __metadata("design:type", String)
    ], CreateUsageTriggerCreateUsageTriggerRequest.prototype, "triggerBy", void 0);
    __decorate([
        Metadata({ data: "form, name=TriggerValue;" }),
        __metadata("design:type", String)
    ], CreateUsageTriggerCreateUsageTriggerRequest.prototype, "triggerValue", void 0);
    __decorate([
        Metadata({ data: "form, name=UsageCategory;" }),
        __metadata("design:type", String)
    ], CreateUsageTriggerCreateUsageTriggerRequest.prototype, "usageCategory", void 0);
    return CreateUsageTriggerCreateUsageTriggerRequest;
}(SpeakeasyBase));
export { CreateUsageTriggerCreateUsageTriggerRequest };
var CreateUsageTriggerSecurity = /** @class */ (function (_super) {
    __extends(CreateUsageTriggerSecurity, _super);
    function CreateUsageTriggerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUsageTriggerSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUsageTriggerSecurity;
}(SpeakeasyBase));
export { CreateUsageTriggerSecurity };
var CreateUsageTriggerRequest = /** @class */ (function (_super) {
    __extends(CreateUsageTriggerRequest, _super);
    function CreateUsageTriggerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUsageTriggerRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUsageTriggerPathParams)
    ], CreateUsageTriggerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUsageTriggerCreateUsageTriggerRequest)
    ], CreateUsageTriggerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUsageTriggerSecurity)
    ], CreateUsageTriggerRequest.prototype, "security", void 0);
    return CreateUsageTriggerRequest;
}(SpeakeasyBase));
export { CreateUsageTriggerRequest };
var CreateUsageTriggerResponse = /** @class */ (function (_super) {
    __extends(CreateUsageTriggerResponse, _super);
    function CreateUsageTriggerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUsageTriggerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateUsageTriggerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountUsageUsageTrigger)
    ], CreateUsageTriggerResponse.prototype, "apiV2010AccountUsageUsageTrigger", void 0);
    return CreateUsageTriggerResponse;
}(SpeakeasyBase));
export { CreateUsageTriggerResponse };
