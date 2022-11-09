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
export var UPDATEUNDERSTANDTASKACTIONS_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateUnderstandTaskActionsPathParams = /** @class */ (function (_super) {
    __extends(UpdateUnderstandTaskActionsPathParams, _super);
    function UpdateUnderstandTaskActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskActionsPathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskActionsPathParams.prototype, "taskSid", void 0);
    return UpdateUnderstandTaskActionsPathParams;
}(SpeakeasyBase));
export { UpdateUnderstandTaskActionsPathParams };
var UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest, _super);
    function UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Actions;" }),
        __metadata("design:type", Object)
    ], UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest.prototype, "actions", void 0);
    return UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest;
}(SpeakeasyBase));
export { UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest };
var UpdateUnderstandTaskActionsSecurity = /** @class */ (function (_super) {
    __extends(UpdateUnderstandTaskActionsSecurity, _super);
    function UpdateUnderstandTaskActionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUnderstandTaskActionsSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUnderstandTaskActionsSecurity;
}(SpeakeasyBase));
export { UpdateUnderstandTaskActionsSecurity };
var UpdateUnderstandTaskActionsRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandTaskActionsRequest, _super);
    function UpdateUnderstandTaskActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskActionsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUnderstandTaskActionsPathParams)
    ], UpdateUnderstandTaskActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest)
    ], UpdateUnderstandTaskActionsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUnderstandTaskActionsSecurity)
    ], UpdateUnderstandTaskActionsRequest.prototype, "security", void 0);
    return UpdateUnderstandTaskActionsRequest;
}(SpeakeasyBase));
export { UpdateUnderstandTaskActionsRequest };
var UpdateUnderstandTaskActionsResponse = /** @class */ (function (_super) {
    __extends(UpdateUnderstandTaskActionsResponse, _super);
    function UpdateUnderstandTaskActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandTaskActionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateUnderstandTaskActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantTaskTaskActions)
    ], UpdateUnderstandTaskActionsResponse.prototype, "previewUnderstandAssistantTaskTaskActions", void 0);
    return UpdateUnderstandTaskActionsResponse;
}(SpeakeasyBase));
export { UpdateUnderstandTaskActionsResponse };
