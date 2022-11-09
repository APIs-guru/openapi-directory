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
export var CREATEFLEXFLOW_SERVERS = [
    "https://flex-api.twilio.com",
];
var CreateFlexFlowCreateFlexFlowRequest = /** @class */ (function (_super) {
    __extends(CreateFlexFlowCreateFlexFlowRequest, _super);
    function CreateFlexFlowCreateFlexFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ChannelType;" }),
        __metadata("design:type", String)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "channelType", void 0);
    __decorate([
        Metadata({ data: "form, name=ChatServiceSid;" }),
        __metadata("design:type", String)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "chatServiceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=ContactIdentity;" }),
        __metadata("design:type", String)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "contactIdentity", void 0);
    __decorate([
        Metadata({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Integration.Channel;" }),
        __metadata("design:type", String)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "integrationChannel", void 0);
    __decorate([
        Metadata({ data: "form, name=Integration.CreationOnMessage;" }),
        __metadata("design:type", Boolean)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "integrationCreationOnMessage", void 0);
    __decorate([
        Metadata({ data: "form, name=Integration.FlowSid;" }),
        __metadata("design:type", String)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "integrationFlowSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Integration.Priority;" }),
        __metadata("design:type", Number)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "integrationPriority", void 0);
    __decorate([
        Metadata({ data: "form, name=Integration.RetryCount;" }),
        __metadata("design:type", Number)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "integrationRetryCount", void 0);
    __decorate([
        Metadata({ data: "form, name=Integration.Timeout;" }),
        __metadata("design:type", Number)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "integrationTimeout", void 0);
    __decorate([
        Metadata({ data: "form, name=Integration.Url;" }),
        __metadata("design:type", String)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "integrationUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Integration.WorkflowSid;" }),
        __metadata("design:type", String)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "integrationWorkflowSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Integration.WorkspaceSid;" }),
        __metadata("design:type", String)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "integrationWorkspaceSid", void 0);
    __decorate([
        Metadata({ data: "form, name=IntegrationType;" }),
        __metadata("design:type", String)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "integrationType", void 0);
    __decorate([
        Metadata({ data: "form, name=JanitorEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "janitorEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=LongLived;" }),
        __metadata("design:type", Boolean)
    ], CreateFlexFlowCreateFlexFlowRequest.prototype, "longLived", void 0);
    return CreateFlexFlowCreateFlexFlowRequest;
}(SpeakeasyBase));
export { CreateFlexFlowCreateFlexFlowRequest };
var CreateFlexFlowSecurity = /** @class */ (function (_super) {
    __extends(CreateFlexFlowSecurity, _super);
    function CreateFlexFlowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateFlexFlowSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateFlexFlowSecurity;
}(SpeakeasyBase));
export { CreateFlexFlowSecurity };
var CreateFlexFlowRequest = /** @class */ (function (_super) {
    __extends(CreateFlexFlowRequest, _super);
    function CreateFlexFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateFlexFlowRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateFlexFlowCreateFlexFlowRequest)
    ], CreateFlexFlowRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateFlexFlowSecurity)
    ], CreateFlexFlowRequest.prototype, "security", void 0);
    return CreateFlexFlowRequest;
}(SpeakeasyBase));
export { CreateFlexFlowRequest };
var CreateFlexFlowResponse = /** @class */ (function (_super) {
    __extends(CreateFlexFlowResponse, _super);
    function CreateFlexFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateFlexFlowResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateFlexFlowResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FlexV1FlexFlow)
    ], CreateFlexFlowResponse.prototype, "flexV1FlexFlow", void 0);
    return CreateFlexFlowResponse;
}(SpeakeasyBase));
export { CreateFlexFlowResponse };
