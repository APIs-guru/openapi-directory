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
export var FetchUnderstandTaskActionsServerList = [
    "https://preview.twilio.com",
];
var FetchUnderstandTaskActionsPathParams = /** @class */ (function (_super) {
    __extends(FetchUnderstandTaskActionsPathParams, _super);
    function FetchUnderstandTaskActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchUnderstandTaskActionsPathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], FetchUnderstandTaskActionsPathParams.prototype, "taskSid", void 0);
    return FetchUnderstandTaskActionsPathParams;
}(SpeakeasyBase));
export { FetchUnderstandTaskActionsPathParams };
var FetchUnderstandTaskActionsSecurity = /** @class */ (function (_super) {
    __extends(FetchUnderstandTaskActionsSecurity, _super);
    function FetchUnderstandTaskActionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUnderstandTaskActionsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUnderstandTaskActionsSecurity;
}(SpeakeasyBase));
export { FetchUnderstandTaskActionsSecurity };
var FetchUnderstandTaskActionsRequest = /** @class */ (function (_super) {
    __extends(FetchUnderstandTaskActionsRequest, _super);
    function FetchUnderstandTaskActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUnderstandTaskActionsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUnderstandTaskActionsPathParams)
    ], FetchUnderstandTaskActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUnderstandTaskActionsSecurity)
    ], FetchUnderstandTaskActionsRequest.prototype, "security", void 0);
    return FetchUnderstandTaskActionsRequest;
}(SpeakeasyBase));
export { FetchUnderstandTaskActionsRequest };
var FetchUnderstandTaskActionsResponse = /** @class */ (function (_super) {
    __extends(FetchUnderstandTaskActionsResponse, _super);
    function FetchUnderstandTaskActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUnderstandTaskActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchUnderstandTaskActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantTaskTaskActions)
    ], FetchUnderstandTaskActionsResponse.prototype, "previewUnderstandAssistantTaskTaskActions", void 0);
    return FetchUnderstandTaskActionsResponse;
}(SpeakeasyBase));
export { FetchUnderstandTaskActionsResponse };
