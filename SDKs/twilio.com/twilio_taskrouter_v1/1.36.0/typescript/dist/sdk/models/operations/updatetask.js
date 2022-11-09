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
export var UPDATETASK_SERVERS = [
    "https://taskrouter.twilio.com",
];
var UpdateTaskPathParams = /** @class */ (function (_super) {
    __extends(UpdateTaskPathParams, _super);
    function UpdateTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateTaskPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], UpdateTaskPathParams.prototype, "workspaceSid", void 0);
    return UpdateTaskPathParams;
}(SpeakeasyBase));
export { UpdateTaskPathParams };
var UpdateTaskHeaders = /** @class */ (function (_super) {
    __extends(UpdateTaskHeaders, _super);
    function UpdateTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateTaskHeaders.prototype, "ifMatch", void 0);
    return UpdateTaskHeaders;
}(SpeakeasyBase));
export { UpdateTaskHeaders };
var UpdateTaskUpdateTaskRequest = /** @class */ (function (_super) {
    __extends(UpdateTaskUpdateTaskRequest, _super);
    function UpdateTaskUpdateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AssignmentStatus;" }),
        __metadata("design:type", String)
    ], UpdateTaskUpdateTaskRequest.prototype, "assignmentStatus", void 0);
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateTaskUpdateTaskRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=Priority;" }),
        __metadata("design:type", Number)
    ], UpdateTaskUpdateTaskRequest.prototype, "priority", void 0);
    __decorate([
        Metadata({ data: "form, name=Reason;" }),
        __metadata("design:type", String)
    ], UpdateTaskUpdateTaskRequest.prototype, "reason", void 0);
    __decorate([
        Metadata({ data: "form, name=TaskChannel;" }),
        __metadata("design:type", String)
    ], UpdateTaskUpdateTaskRequest.prototype, "taskChannel", void 0);
    return UpdateTaskUpdateTaskRequest;
}(SpeakeasyBase));
export { UpdateTaskUpdateTaskRequest };
var UpdateTaskSecurity = /** @class */ (function (_super) {
    __extends(UpdateTaskSecurity, _super);
    function UpdateTaskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateTaskSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateTaskSecurity;
}(SpeakeasyBase));
export { UpdateTaskSecurity };
var UpdateTaskRequest = /** @class */ (function (_super) {
    __extends(UpdateTaskRequest, _super);
    function UpdateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateTaskRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTaskPathParams)
    ], UpdateTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTaskHeaders)
    ], UpdateTaskRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateTaskUpdateTaskRequest)
    ], UpdateTaskRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTaskSecurity)
    ], UpdateTaskRequest.prototype, "security", void 0);
    return UpdateTaskRequest;
}(SpeakeasyBase));
export { UpdateTaskRequest };
var UpdateTaskResponse = /** @class */ (function (_super) {
    __extends(UpdateTaskResponse, _super);
    function UpdateTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTask)
    ], UpdateTaskResponse.prototype, "taskrouterV1WorkspaceTask", void 0);
    return UpdateTaskResponse;
}(SpeakeasyBase));
export { UpdateTaskResponse };
