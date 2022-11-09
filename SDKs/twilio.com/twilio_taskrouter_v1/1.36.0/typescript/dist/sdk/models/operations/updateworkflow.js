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
export var UPDATEWORKFLOW_SERVERS = [
    "https://taskrouter.twilio.com",
];
var UpdateWorkflowPathParams = /** @class */ (function (_super) {
    __extends(UpdateWorkflowPathParams, _super);
    function UpdateWorkflowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateWorkflowPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], UpdateWorkflowPathParams.prototype, "workspaceSid", void 0);
    return UpdateWorkflowPathParams;
}(SpeakeasyBase));
export { UpdateWorkflowPathParams };
var UpdateWorkflowUpdateWorkflowRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkflowUpdateWorkflowRequest, _super);
    function UpdateWorkflowUpdateWorkflowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AssignmentCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateWorkflowUpdateWorkflowRequest.prototype, "assignmentCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Configuration;" }),
        __metadata("design:type", String)
    ], UpdateWorkflowUpdateWorkflowRequest.prototype, "configuration", void 0);
    __decorate([
        Metadata({ data: "form, name=FallbackAssignmentCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateWorkflowUpdateWorkflowRequest.prototype, "fallbackAssignmentCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateWorkflowUpdateWorkflowRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=ReEvaluateTasks;" }),
        __metadata("design:type", String)
    ], UpdateWorkflowUpdateWorkflowRequest.prototype, "reEvaluateTasks", void 0);
    __decorate([
        Metadata({ data: "form, name=TaskReservationTimeout;" }),
        __metadata("design:type", Number)
    ], UpdateWorkflowUpdateWorkflowRequest.prototype, "taskReservationTimeout", void 0);
    return UpdateWorkflowUpdateWorkflowRequest;
}(SpeakeasyBase));
export { UpdateWorkflowUpdateWorkflowRequest };
var UpdateWorkflowSecurity = /** @class */ (function (_super) {
    __extends(UpdateWorkflowSecurity, _super);
    function UpdateWorkflowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateWorkflowSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateWorkflowSecurity;
}(SpeakeasyBase));
export { UpdateWorkflowSecurity };
var UpdateWorkflowRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkflowRequest, _super);
    function UpdateWorkflowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateWorkflowRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateWorkflowPathParams)
    ], UpdateWorkflowRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateWorkflowUpdateWorkflowRequest)
    ], UpdateWorkflowRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateWorkflowSecurity)
    ], UpdateWorkflowRequest.prototype, "security", void 0);
    return UpdateWorkflowRequest;
}(SpeakeasyBase));
export { UpdateWorkflowRequest };
var UpdateWorkflowResponse = /** @class */ (function (_super) {
    __extends(UpdateWorkflowResponse, _super);
    function UpdateWorkflowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateWorkflowResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateWorkflowResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorkflow)
    ], UpdateWorkflowResponse.prototype, "taskrouterV1WorkspaceWorkflow", void 0);
    return UpdateWorkflowResponse;
}(SpeakeasyBase));
export { UpdateWorkflowResponse };
