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
export var UpdateWorkspaceServerList = [
    "https://taskrouter.twilio.com",
];
var UpdateWorkspacePathParams = /** @class */ (function (_super) {
    __extends(UpdateWorkspacePathParams, _super);
    function UpdateWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateWorkspacePathParams.prototype, "sid", void 0);
    return UpdateWorkspacePathParams;
}(SpeakeasyBase));
export { UpdateWorkspacePathParams };
var UpdateWorkspaceUpdateWorkspaceRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceUpdateWorkspaceRequest, _super);
    function UpdateWorkspaceUpdateWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DefaultActivitySid;" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceUpdateWorkspaceRequest.prototype, "defaultActivitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EventCallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceUpdateWorkspaceRequest.prototype, "eventCallbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=EventsFilter;" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceUpdateWorkspaceRequest.prototype, "eventsFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceUpdateWorkspaceRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=MultiTaskEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkspaceUpdateWorkspaceRequest.prototype, "multiTaskEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=PrioritizeQueueOrder;" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceUpdateWorkspaceRequest.prototype, "prioritizeQueueOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TimeoutActivitySid;" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceUpdateWorkspaceRequest.prototype, "timeoutActivitySid", void 0);
    return UpdateWorkspaceUpdateWorkspaceRequest;
}(SpeakeasyBase));
export { UpdateWorkspaceUpdateWorkspaceRequest };
var UpdateWorkspaceSecurity = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceSecurity, _super);
    function UpdateWorkspaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateWorkspaceSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateWorkspaceSecurity;
}(SpeakeasyBase));
export { UpdateWorkspaceSecurity };
var UpdateWorkspaceRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceRequest, _super);
    function UpdateWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkspacePathParams)
    ], UpdateWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateWorkspaceUpdateWorkspaceRequest)
    ], UpdateWorkspaceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkspaceSecurity)
    ], UpdateWorkspaceRequest.prototype, "security", void 0);
    return UpdateWorkspaceRequest;
}(SpeakeasyBase));
export { UpdateWorkspaceRequest };
var UpdateWorkspaceResponse = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceResponse, _super);
    function UpdateWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1Workspace)
    ], UpdateWorkspaceResponse.prototype, "taskrouterV1Workspace", void 0);
    return UpdateWorkspaceResponse;
}(SpeakeasyBase));
export { UpdateWorkspaceResponse };
