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
export var UPDATEWORKER_SERVERS = [
    "https://taskrouter.twilio.com",
];
var UpdateWorkerPathParams = /** @class */ (function (_super) {
    __extends(UpdateWorkerPathParams, _super);
    function UpdateWorkerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateWorkerPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], UpdateWorkerPathParams.prototype, "workspaceSid", void 0);
    return UpdateWorkerPathParams;
}(SpeakeasyBase));
export { UpdateWorkerPathParams };
var UpdateWorkerHeaders = /** @class */ (function (_super) {
    __extends(UpdateWorkerHeaders, _super);
    function UpdateWorkerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateWorkerHeaders.prototype, "ifMatch", void 0);
    return UpdateWorkerHeaders;
}(SpeakeasyBase));
export { UpdateWorkerHeaders };
var UpdateWorkerUpdateWorkerRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkerUpdateWorkerRequest, _super);
    function UpdateWorkerUpdateWorkerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ActivitySid;" }),
        __metadata("design:type", String)
    ], UpdateWorkerUpdateWorkerRequest.prototype, "activitySid", void 0);
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", String)
    ], UpdateWorkerUpdateWorkerRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateWorkerUpdateWorkerRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=RejectPendingReservations;" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkerUpdateWorkerRequest.prototype, "rejectPendingReservations", void 0);
    return UpdateWorkerUpdateWorkerRequest;
}(SpeakeasyBase));
export { UpdateWorkerUpdateWorkerRequest };
var UpdateWorkerSecurity = /** @class */ (function (_super) {
    __extends(UpdateWorkerSecurity, _super);
    function UpdateWorkerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateWorkerSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateWorkerSecurity;
}(SpeakeasyBase));
export { UpdateWorkerSecurity };
var UpdateWorkerRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkerRequest, _super);
    function UpdateWorkerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateWorkerRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateWorkerPathParams)
    ], UpdateWorkerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateWorkerHeaders)
    ], UpdateWorkerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateWorkerUpdateWorkerRequest)
    ], UpdateWorkerRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateWorkerSecurity)
    ], UpdateWorkerRequest.prototype, "security", void 0);
    return UpdateWorkerRequest;
}(SpeakeasyBase));
export { UpdateWorkerRequest };
var UpdateWorkerResponse = /** @class */ (function (_super) {
    __extends(UpdateWorkerResponse, _super);
    function UpdateWorkerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateWorkerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateWorkerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceWorker)
    ], UpdateWorkerResponse.prototype, "taskrouterV1WorkspaceWorker", void 0);
    return UpdateWorkerResponse;
}(SpeakeasyBase));
export { UpdateWorkerResponse };
