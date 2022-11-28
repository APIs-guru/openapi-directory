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
export var CreateUnderstandTaskServerList = [
    "https://preview.twilio.com",
];
var CreateUnderstandTaskPathParams = /** @class */ (function (_super) {
    __extends(CreateUnderstandTaskPathParams, _super);
    function CreateUnderstandTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandTaskPathParams.prototype, "assistantSid", void 0);
    return CreateUnderstandTaskPathParams;
}(SpeakeasyBase));
export { CreateUnderstandTaskPathParams };
var CreateUnderstandTaskCreateUnderstandTaskRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandTaskCreateUnderstandTaskRequest, _super);
    function CreateUnderstandTaskCreateUnderstandTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Actions;" }),
        __metadata("design:type", Object)
    ], CreateUnderstandTaskCreateUnderstandTaskRequest.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ActionsUrl;" }),
        __metadata("design:type", String)
    ], CreateUnderstandTaskCreateUnderstandTaskRequest.prototype, "actionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateUnderstandTaskCreateUnderstandTaskRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateUnderstandTaskCreateUnderstandTaskRequest.prototype, "uniqueName", void 0);
    return CreateUnderstandTaskCreateUnderstandTaskRequest;
}(SpeakeasyBase));
export { CreateUnderstandTaskCreateUnderstandTaskRequest };
var CreateUnderstandTaskSecurity = /** @class */ (function (_super) {
    __extends(CreateUnderstandTaskSecurity, _super);
    function CreateUnderstandTaskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUnderstandTaskSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUnderstandTaskSecurity;
}(SpeakeasyBase));
export { CreateUnderstandTaskSecurity };
var CreateUnderstandTaskRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandTaskRequest, _super);
    function CreateUnderstandTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnderstandTaskRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnderstandTaskPathParams)
    ], CreateUnderstandTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUnderstandTaskCreateUnderstandTaskRequest)
    ], CreateUnderstandTaskRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnderstandTaskSecurity)
    ], CreateUnderstandTaskRequest.prototype, "security", void 0);
    return CreateUnderstandTaskRequest;
}(SpeakeasyBase));
export { CreateUnderstandTaskRequest };
var CreateUnderstandTaskResponse = /** @class */ (function (_super) {
    __extends(CreateUnderstandTaskResponse, _super);
    function CreateUnderstandTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnderstandTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateUnderstandTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantTask)
    ], CreateUnderstandTaskResponse.prototype, "previewUnderstandAssistantTask", void 0);
    return CreateUnderstandTaskResponse;
}(SpeakeasyBase));
export { CreateUnderstandTaskResponse };
