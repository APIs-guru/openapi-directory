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
export var CREATEWORKSPACE_SERVERS = [
    "https://taskrouter.twilio.com",
];
var CreateWorkspaceCreateWorkspaceRequest = /** @class */ (function (_super) {
    __extends(CreateWorkspaceCreateWorkspaceRequest, _super);
    function CreateWorkspaceCreateWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=EventCallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateWorkspaceCreateWorkspaceRequest.prototype, "eventCallbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=EventsFilter;" }),
        __metadata("design:type", String)
    ], CreateWorkspaceCreateWorkspaceRequest.prototype, "eventsFilter", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateWorkspaceCreateWorkspaceRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=MultiTaskEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateWorkspaceCreateWorkspaceRequest.prototype, "multiTaskEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=PrioritizeQueueOrder;" }),
        __metadata("design:type", String)
    ], CreateWorkspaceCreateWorkspaceRequest.prototype, "prioritizeQueueOrder", void 0);
    __decorate([
        Metadata({ data: "form, name=Template;" }),
        __metadata("design:type", String)
    ], CreateWorkspaceCreateWorkspaceRequest.prototype, "template", void 0);
    return CreateWorkspaceCreateWorkspaceRequest;
}(SpeakeasyBase));
export { CreateWorkspaceCreateWorkspaceRequest };
var CreateWorkspaceSecurity = /** @class */ (function (_super) {
    __extends(CreateWorkspaceSecurity, _super);
    function CreateWorkspaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateWorkspaceSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateWorkspaceSecurity;
}(SpeakeasyBase));
export { CreateWorkspaceSecurity };
var CreateWorkspaceRequest = /** @class */ (function (_super) {
    __extends(CreateWorkspaceRequest, _super);
    function CreateWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWorkspaceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateWorkspaceCreateWorkspaceRequest)
    ], CreateWorkspaceRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateWorkspaceSecurity)
    ], CreateWorkspaceRequest.prototype, "security", void 0);
    return CreateWorkspaceRequest;
}(SpeakeasyBase));
export { CreateWorkspaceRequest };
var CreateWorkspaceResponse = /** @class */ (function (_super) {
    __extends(CreateWorkspaceResponse, _super);
    function CreateWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1Workspace)
    ], CreateWorkspaceResponse.prototype, "taskrouterV1Workspace", void 0);
    return CreateWorkspaceResponse;
}(SpeakeasyBase));
export { CreateWorkspaceResponse };
