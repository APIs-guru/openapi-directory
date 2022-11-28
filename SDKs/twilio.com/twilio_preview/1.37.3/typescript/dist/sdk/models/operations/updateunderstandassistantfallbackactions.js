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
export var UpdateUnderstandAssistantFallbackActionsServerList = [
    "https://preview.twilio.com",
];
var UpdateUnderstandAssistantFallbackActionsPathParams = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantFallbackActionsPathParams, _super);
    function UpdateUnderstandAssistantFallbackActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantFallbackActionsPathParams.prototype, "assistantSid", void 0);
    return UpdateUnderstandAssistantFallbackActionsPathParams;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantFallbackActionsPathParams };
var UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest, _super);
    function UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FallbackActions;" }),
        __metadata("design:type", Object)
    ], UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest.prototype, "fallbackActions", void 0);
    return UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest };
var UpdateUnderstandAssistantFallbackActionsSecurity = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantFallbackActionsSecurity, _super);
    function UpdateUnderstandAssistantFallbackActionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUnderstandAssistantFallbackActionsSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUnderstandAssistantFallbackActionsSecurity;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantFallbackActionsSecurity };
var UpdateUnderstandAssistantFallbackActionsRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantFallbackActionsRequest, _super);
    function UpdateUnderstandAssistantFallbackActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantFallbackActionsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUnderstandAssistantFallbackActionsPathParams)
    ], UpdateUnderstandAssistantFallbackActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest)
    ], UpdateUnderstandAssistantFallbackActionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUnderstandAssistantFallbackActionsSecurity)
    ], UpdateUnderstandAssistantFallbackActionsRequest.prototype, "security", void 0);
    return UpdateUnderstandAssistantFallbackActionsRequest;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantFallbackActionsRequest };
var UpdateUnderstandAssistantFallbackActionsResponse = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantFallbackActionsResponse, _super);
    function UpdateUnderstandAssistantFallbackActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantFallbackActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUnderstandAssistantFallbackActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantAssistantFallbackActions)
    ], UpdateUnderstandAssistantFallbackActionsResponse.prototype, "previewUnderstandAssistantAssistantFallbackActions", void 0);
    return UpdateUnderstandAssistantFallbackActionsResponse;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantFallbackActionsResponse };
