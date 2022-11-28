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
export var UpdateUnderstandAssistantInitiationActionsServerList = [
    "https://preview.twilio.com",
];
var UpdateUnderstandAssistantInitiationActionsPathParams = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantInitiationActionsPathParams, _super);
    function UpdateUnderstandAssistantInitiationActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantInitiationActionsPathParams.prototype, "assistantSid", void 0);
    return UpdateUnderstandAssistantInitiationActionsPathParams;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantInitiationActionsPathParams };
var UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest, _super);
    function UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=InitiationActions;" }),
        __metadata("design:type", Object)
    ], UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest.prototype, "initiationActions", void 0);
    return UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest };
var UpdateUnderstandAssistantInitiationActionsSecurity = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantInitiationActionsSecurity, _super);
    function UpdateUnderstandAssistantInitiationActionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUnderstandAssistantInitiationActionsSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUnderstandAssistantInitiationActionsSecurity;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantInitiationActionsSecurity };
var UpdateUnderstandAssistantInitiationActionsRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantInitiationActionsRequest, _super);
    function UpdateUnderstandAssistantInitiationActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantInitiationActionsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUnderstandAssistantInitiationActionsPathParams)
    ], UpdateUnderstandAssistantInitiationActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest)
    ], UpdateUnderstandAssistantInitiationActionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUnderstandAssistantInitiationActionsSecurity)
    ], UpdateUnderstandAssistantInitiationActionsRequest.prototype, "security", void 0);
    return UpdateUnderstandAssistantInitiationActionsRequest;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantInitiationActionsRequest };
var UpdateUnderstandAssistantInitiationActionsResponse = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantInitiationActionsResponse, _super);
    function UpdateUnderstandAssistantInitiationActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantInitiationActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUnderstandAssistantInitiationActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantAssistantInitiationActions)
    ], UpdateUnderstandAssistantInitiationActionsResponse.prototype, "previewUnderstandAssistantAssistantInitiationActions", void 0);
    return UpdateUnderstandAssistantInitiationActionsResponse;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantInitiationActionsResponse };
