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
export var FETCHUNDERSTANDASSISTANTFALLBACKACTIONS_SERVERS = [
    "https://preview.twilio.com",
];
var FetchUnderstandAssistantFallbackActionsPathParams = /** @class */ (function (_super) {
    __extends(FetchUnderstandAssistantFallbackActionsPathParams, _super);
    function FetchUnderstandAssistantFallbackActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchUnderstandAssistantFallbackActionsPathParams.prototype, "assistantSid", void 0);
    return FetchUnderstandAssistantFallbackActionsPathParams;
}(SpeakeasyBase));
export { FetchUnderstandAssistantFallbackActionsPathParams };
var FetchUnderstandAssistantFallbackActionsSecurity = /** @class */ (function (_super) {
    __extends(FetchUnderstandAssistantFallbackActionsSecurity, _super);
    function FetchUnderstandAssistantFallbackActionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUnderstandAssistantFallbackActionsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUnderstandAssistantFallbackActionsSecurity;
}(SpeakeasyBase));
export { FetchUnderstandAssistantFallbackActionsSecurity };
var FetchUnderstandAssistantFallbackActionsRequest = /** @class */ (function (_super) {
    __extends(FetchUnderstandAssistantFallbackActionsRequest, _super);
    function FetchUnderstandAssistantFallbackActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUnderstandAssistantFallbackActionsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUnderstandAssistantFallbackActionsPathParams)
    ], FetchUnderstandAssistantFallbackActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUnderstandAssistantFallbackActionsSecurity)
    ], FetchUnderstandAssistantFallbackActionsRequest.prototype, "security", void 0);
    return FetchUnderstandAssistantFallbackActionsRequest;
}(SpeakeasyBase));
export { FetchUnderstandAssistantFallbackActionsRequest };
var FetchUnderstandAssistantFallbackActionsResponse = /** @class */ (function (_super) {
    __extends(FetchUnderstandAssistantFallbackActionsResponse, _super);
    function FetchUnderstandAssistantFallbackActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUnderstandAssistantFallbackActionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchUnderstandAssistantFallbackActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantAssistantFallbackActions)
    ], FetchUnderstandAssistantFallbackActionsResponse.prototype, "previewUnderstandAssistantAssistantFallbackActions", void 0);
    return FetchUnderstandAssistantFallbackActionsResponse;
}(SpeakeasyBase));
export { FetchUnderstandAssistantFallbackActionsResponse };
