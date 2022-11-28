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
export var CreateWorkerServerList = [
    "https://taskrouter.twilio.com",
];
var CreateWorkerPathParams = /** @class */ (function (_super) {
    __extends(CreateWorkerPathParams, _super);
    function CreateWorkerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], CreateWorkerPathParams.prototype, "workspaceSid", void 0);
    return CreateWorkerPathParams;
}(SpeakeasyBase));
export { CreateWorkerPathParams };
var CreateWorkerCreateWorkerRequest = /** @class */ (function (_super) {
    __extends(CreateWorkerCreateWorkerRequest, _super);
    function CreateWorkerCreateWorkerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ActivitySid;" }),
        __metadata("design:type", String)
    ], CreateWorkerCreateWorkerRequest.prototype, "activitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], CreateWorkerCreateWorkerRequest.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateWorkerCreateWorkerRequest.prototype, "friendlyName", void 0);
    return CreateWorkerCreateWorkerRequest;
}(SpeakeasyBase));
export { CreateWorkerCreateWorkerRequest };
var CreateWorkerSecurity = /** @class */ (function (_super) {
    __extends(CreateWorkerSecurity, _super);
    function CreateWorkerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateWorkerSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateWorkerSecurity;
}(SpeakeasyBase));
export { CreateWorkerSecurity };
var CreateWorkerRequest = /** @class */ (function (_super) {
    __extends(CreateWorkerRequest, _super);
    function CreateWorkerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWorkerRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWorkerPathParams)
    ], CreateWorkerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateWorkerCreateWorkerRequest)
    ], CreateWorkerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWorkerSecurity)
    ], CreateWorkerRequest.prototype, "security", void 0);
    return CreateWorkerRequest;
}(SpeakeasyBase));
export { CreateWorkerRequest };
var CreateWorkerResponse = /** @class */ (function (_super) {
    __extends(CreateWorkerResponse, _super);
    function CreateWorkerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWorkerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateWorkerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorker)
    ], CreateWorkerResponse.prototype, "taskrouterV1WorkspaceWorker", void 0);
    return CreateWorkerResponse;
}(SpeakeasyBase));
export { CreateWorkerResponse };
