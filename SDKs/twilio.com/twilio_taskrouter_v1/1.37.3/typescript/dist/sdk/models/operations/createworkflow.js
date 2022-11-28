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
export var CreateWorkflowServerList = [
    "https://taskrouter.twilio.com",
];
var CreateWorkflowPathParams = /** @class */ (function (_super) {
    __extends(CreateWorkflowPathParams, _super);
    function CreateWorkflowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], CreateWorkflowPathParams.prototype, "workspaceSid", void 0);
    return CreateWorkflowPathParams;
}(SpeakeasyBase));
export { CreateWorkflowPathParams };
var CreateWorkflowCreateWorkflowRequest = /** @class */ (function (_super) {
    __extends(CreateWorkflowCreateWorkflowRequest, _super);
    function CreateWorkflowCreateWorkflowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AssignmentCallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateWorkflowCreateWorkflowRequest.prototype, "assignmentCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Configuration;" }),
        __metadata("design:type", String)
    ], CreateWorkflowCreateWorkflowRequest.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FallbackAssignmentCallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateWorkflowCreateWorkflowRequest.prototype, "fallbackAssignmentCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateWorkflowCreateWorkflowRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TaskReservationTimeout;" }),
        __metadata("design:type", Number)
    ], CreateWorkflowCreateWorkflowRequest.prototype, "taskReservationTimeout", void 0);
    return CreateWorkflowCreateWorkflowRequest;
}(SpeakeasyBase));
export { CreateWorkflowCreateWorkflowRequest };
var CreateWorkflowSecurity = /** @class */ (function (_super) {
    __extends(CreateWorkflowSecurity, _super);
    function CreateWorkflowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateWorkflowSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateWorkflowSecurity;
}(SpeakeasyBase));
export { CreateWorkflowSecurity };
var CreateWorkflowRequest = /** @class */ (function (_super) {
    __extends(CreateWorkflowRequest, _super);
    function CreateWorkflowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWorkflowRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWorkflowPathParams)
    ], CreateWorkflowRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateWorkflowCreateWorkflowRequest)
    ], CreateWorkflowRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWorkflowSecurity)
    ], CreateWorkflowRequest.prototype, "security", void 0);
    return CreateWorkflowRequest;
}(SpeakeasyBase));
export { CreateWorkflowRequest };
var CreateWorkflowResponse = /** @class */ (function (_super) {
    __extends(CreateWorkflowResponse, _super);
    function CreateWorkflowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWorkflowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateWorkflowResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkflow)
    ], CreateWorkflowResponse.prototype, "taskrouterV1WorkspaceWorkflow", void 0);
    return CreateWorkflowResponse;
}(SpeakeasyBase));
export { CreateWorkflowResponse };
