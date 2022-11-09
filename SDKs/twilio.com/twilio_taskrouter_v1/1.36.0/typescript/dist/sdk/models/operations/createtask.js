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
export var CREATETASK_SERVERS = [
    "https://taskrouter.twilio.com",
];
var CreateTaskPathParams = /** @class */ (function (_super) {
    __extends(CreateTaskPathParams, _super);
    function CreateTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], CreateTaskPathParams.prototype, "workspaceSid", void 0);
    return CreateTaskPathParams;
}(SpeakeasyBase));
export { CreateTaskPathParams };
var CreateTaskCreateTaskRequest = /** @class */ (function (_super) {
    __extends(CreateTaskCreateTaskRequest, _super);
    function CreateTaskCreateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateTaskCreateTaskRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=Priority;" }),
        __metadata("design:type", Number)
    ], CreateTaskCreateTaskRequest.prototype, "priority", void 0);
    __decorate([
        Metadata({ data: "form, name=TaskChannel;" }),
        __metadata("design:type", String)
    ], CreateTaskCreateTaskRequest.prototype, "taskChannel", void 0);
    __decorate([
        Metadata({ data: "form, name=Timeout;" }),
        __metadata("design:type", Number)
    ], CreateTaskCreateTaskRequest.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "form, name=WorkflowSid;" }),
        __metadata("design:type", String)
    ], CreateTaskCreateTaskRequest.prototype, "workflowSid", void 0);
    return CreateTaskCreateTaskRequest;
}(SpeakeasyBase));
export { CreateTaskCreateTaskRequest };
var CreateTaskSecurity = /** @class */ (function (_super) {
    __extends(CreateTaskSecurity, _super);
    function CreateTaskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTaskSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTaskSecurity;
}(SpeakeasyBase));
export { CreateTaskSecurity };
var CreateTaskRequest = /** @class */ (function (_super) {
    __extends(CreateTaskRequest, _super);
    function CreateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTaskRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTaskPathParams)
    ], CreateTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTaskCreateTaskRequest)
    ], CreateTaskRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTaskSecurity)
    ], CreateTaskRequest.prototype, "security", void 0);
    return CreateTaskRequest;
}(SpeakeasyBase));
export { CreateTaskRequest };
var CreateTaskResponse = /** @class */ (function (_super) {
    __extends(CreateTaskResponse, _super);
    function CreateTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTask)
    ], CreateTaskResponse.prototype, "taskrouterV1WorkspaceTask", void 0);
    return CreateTaskResponse;
}(SpeakeasyBase));
export { CreateTaskResponse };
