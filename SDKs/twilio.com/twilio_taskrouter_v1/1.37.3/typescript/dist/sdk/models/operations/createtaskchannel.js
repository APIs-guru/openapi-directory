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
export var CreateTaskChannelServerList = [
    "https://taskrouter.twilio.com",
];
var CreateTaskChannelPathParams = /** @class */ (function (_super) {
    __extends(CreateTaskChannelPathParams, _super);
    function CreateTaskChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], CreateTaskChannelPathParams.prototype, "workspaceSid", void 0);
    return CreateTaskChannelPathParams;
}(SpeakeasyBase));
export { CreateTaskChannelPathParams };
var CreateTaskChannelCreateTaskChannelRequest = /** @class */ (function (_super) {
    __extends(CreateTaskChannelCreateTaskChannelRequest, _super);
    function CreateTaskChannelCreateTaskChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ChannelOptimizedRouting;" }),
        __metadata("design:type", Boolean)
    ], CreateTaskChannelCreateTaskChannelRequest.prototype, "channelOptimizedRouting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateTaskChannelCreateTaskChannelRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateTaskChannelCreateTaskChannelRequest.prototype, "uniqueName", void 0);
    return CreateTaskChannelCreateTaskChannelRequest;
}(SpeakeasyBase));
export { CreateTaskChannelCreateTaskChannelRequest };
var CreateTaskChannelSecurity = /** @class */ (function (_super) {
    __extends(CreateTaskChannelSecurity, _super);
    function CreateTaskChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTaskChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTaskChannelSecurity;
}(SpeakeasyBase));
export { CreateTaskChannelSecurity };
var CreateTaskChannelRequest = /** @class */ (function (_super) {
    __extends(CreateTaskChannelRequest, _super);
    function CreateTaskChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTaskChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTaskChannelPathParams)
    ], CreateTaskChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTaskChannelCreateTaskChannelRequest)
    ], CreateTaskChannelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTaskChannelSecurity)
    ], CreateTaskChannelRequest.prototype, "security", void 0);
    return CreateTaskChannelRequest;
}(SpeakeasyBase));
export { CreateTaskChannelRequest };
var CreateTaskChannelResponse = /** @class */ (function (_super) {
    __extends(CreateTaskChannelResponse, _super);
    function CreateTaskChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTaskChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTaskChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTaskChannel)
    ], CreateTaskChannelResponse.prototype, "taskrouterV1WorkspaceTaskChannel", void 0);
    return CreateTaskChannelResponse;
}(SpeakeasyBase));
export { CreateTaskChannelResponse };
