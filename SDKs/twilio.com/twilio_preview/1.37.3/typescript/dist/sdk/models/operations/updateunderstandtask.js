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
export var UpdateUnderstandTaskServerList = [
    "https://preview.twilio.com",
];
var UpdateUnderstandTaskPathParams = /** @class */ (function (_super) {
    __extends(UpdateUnderstandTaskPathParams, _super);
    function UpdateUnderstandTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskPathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskPathParams.prototype, "sid", void 0);
    return UpdateUnderstandTaskPathParams;
}(SpeakeasyBase));
export { UpdateUnderstandTaskPathParams };
var UpdateUnderstandTaskUpdateUnderstandTaskRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandTaskUpdateUnderstandTaskRequest, _super);
    function UpdateUnderstandTaskUpdateUnderstandTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Actions;" }),
        __metadata("design:type", Object)
    ], UpdateUnderstandTaskUpdateUnderstandTaskRequest.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ActionsUrl;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskUpdateUnderstandTaskRequest.prototype, "actionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskUpdateUnderstandTaskRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskUpdateUnderstandTaskRequest.prototype, "uniqueName", void 0);
    return UpdateUnderstandTaskUpdateUnderstandTaskRequest;
}(SpeakeasyBase));
export { UpdateUnderstandTaskUpdateUnderstandTaskRequest };
var UpdateUnderstandTaskSecurity = /** @class */ (function (_super) {
    __extends(UpdateUnderstandTaskSecurity, _super);
    function UpdateUnderstandTaskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUnderstandTaskSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUnderstandTaskSecurity;
}(SpeakeasyBase));
export { UpdateUnderstandTaskSecurity };
var UpdateUnderstandTaskRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandTaskRequest, _super);
    function UpdateUnderstandTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUnderstandTaskPathParams)
    ], UpdateUnderstandTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUnderstandTaskUpdateUnderstandTaskRequest)
    ], UpdateUnderstandTaskRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUnderstandTaskSecurity)
    ], UpdateUnderstandTaskRequest.prototype, "security", void 0);
    return UpdateUnderstandTaskRequest;
}(SpeakeasyBase));
export { UpdateUnderstandTaskRequest };
var UpdateUnderstandTaskResponse = /** @class */ (function (_super) {
    __extends(UpdateUnderstandTaskResponse, _super);
    function UpdateUnderstandTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUnderstandTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantTask)
    ], UpdateUnderstandTaskResponse.prototype, "previewUnderstandAssistantTask", void 0);
    return UpdateUnderstandTaskResponse;
}(SpeakeasyBase));
export { UpdateUnderstandTaskResponse };
