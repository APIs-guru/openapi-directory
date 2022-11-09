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
export var CREATETASKQUEUE_SERVERS = [
    "https://taskrouter.twilio.com",
];
var CreateTaskQueuePathParams = /** @class */ (function (_super) {
    __extends(CreateTaskQueuePathParams, _super);
    function CreateTaskQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], CreateTaskQueuePathParams.prototype, "workspaceSid", void 0);
    return CreateTaskQueuePathParams;
}(SpeakeasyBase));
export { CreateTaskQueuePathParams };
var CreateTaskQueueCreateTaskQueueRequest = /** @class */ (function (_super) {
    __extends(CreateTaskQueueCreateTaskQueueRequest, _super);
    function CreateTaskQueueCreateTaskQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AssignmentActivitySid;" }),
        __metadata("design:type", String)
    ], CreateTaskQueueCreateTaskQueueRequest.prototype, "assignmentActivitySid", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateTaskQueueCreateTaskQueueRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=MaxReservedWorkers;" }),
        __metadata("design:type", Number)
    ], CreateTaskQueueCreateTaskQueueRequest.prototype, "maxReservedWorkers", void 0);
    __decorate([
        Metadata({ data: "form, name=ReservationActivitySid;" }),
        __metadata("design:type", String)
    ], CreateTaskQueueCreateTaskQueueRequest.prototype, "reservationActivitySid", void 0);
    __decorate([
        Metadata({ data: "form, name=TargetWorkers;" }),
        __metadata("design:type", String)
    ], CreateTaskQueueCreateTaskQueueRequest.prototype, "targetWorkers", void 0);
    __decorate([
        Metadata({ data: "form, name=TaskOrder;" }),
        __metadata("design:type", String)
    ], CreateTaskQueueCreateTaskQueueRequest.prototype, "taskOrder", void 0);
    return CreateTaskQueueCreateTaskQueueRequest;
}(SpeakeasyBase));
export { CreateTaskQueueCreateTaskQueueRequest };
var CreateTaskQueueSecurity = /** @class */ (function (_super) {
    __extends(CreateTaskQueueSecurity, _super);
    function CreateTaskQueueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTaskQueueSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTaskQueueSecurity;
}(SpeakeasyBase));
export { CreateTaskQueueSecurity };
var CreateTaskQueueRequest = /** @class */ (function (_super) {
    __extends(CreateTaskQueueRequest, _super);
    function CreateTaskQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTaskQueueRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTaskQueuePathParams)
    ], CreateTaskQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTaskQueueCreateTaskQueueRequest)
    ], CreateTaskQueueRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTaskQueueSecurity)
    ], CreateTaskQueueRequest.prototype, "security", void 0);
    return CreateTaskQueueRequest;
}(SpeakeasyBase));
export { CreateTaskQueueRequest };
var CreateTaskQueueResponse = /** @class */ (function (_super) {
    __extends(CreateTaskQueueResponse, _super);
    function CreateTaskQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTaskQueueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateTaskQueueResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTaskQueue)
    ], CreateTaskQueueResponse.prototype, "taskrouterV1WorkspaceTaskQueue", void 0);
    return CreateTaskQueueResponse;
}(SpeakeasyBase));
export { CreateTaskQueueResponse };
