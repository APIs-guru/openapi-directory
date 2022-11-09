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
export var FETCHUNDERSTANDASSISTANTINITIATIONACTIONS_SERVERS = [
    "https://preview.twilio.com",
];
var FetchUnderstandAssistantInitiationActionsPathParams = /** @class */ (function (_super) {
    __extends(FetchUnderstandAssistantInitiationActionsPathParams, _super);
    function FetchUnderstandAssistantInitiationActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchUnderstandAssistantInitiationActionsPathParams.prototype, "assistantSid", void 0);
    return FetchUnderstandAssistantInitiationActionsPathParams;
}(SpeakeasyBase));
export { FetchUnderstandAssistantInitiationActionsPathParams };
var FetchUnderstandAssistantInitiationActionsSecurity = /** @class */ (function (_super) {
    __extends(FetchUnderstandAssistantInitiationActionsSecurity, _super);
    function FetchUnderstandAssistantInitiationActionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUnderstandAssistantInitiationActionsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUnderstandAssistantInitiationActionsSecurity;
}(SpeakeasyBase));
export { FetchUnderstandAssistantInitiationActionsSecurity };
var FetchUnderstandAssistantInitiationActionsRequest = /** @class */ (function (_super) {
    __extends(FetchUnderstandAssistantInitiationActionsRequest, _super);
    function FetchUnderstandAssistantInitiationActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUnderstandAssistantInitiationActionsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUnderstandAssistantInitiationActionsPathParams)
    ], FetchUnderstandAssistantInitiationActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUnderstandAssistantInitiationActionsSecurity)
    ], FetchUnderstandAssistantInitiationActionsRequest.prototype, "security", void 0);
    return FetchUnderstandAssistantInitiationActionsRequest;
}(SpeakeasyBase));
export { FetchUnderstandAssistantInitiationActionsRequest };
var FetchUnderstandAssistantInitiationActionsResponse = /** @class */ (function (_super) {
    __extends(FetchUnderstandAssistantInitiationActionsResponse, _super);
    function FetchUnderstandAssistantInitiationActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUnderstandAssistantInitiationActionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchUnderstandAssistantInitiationActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantAssistantInitiationActions)
    ], FetchUnderstandAssistantInitiationActionsResponse.prototype, "previewUnderstandAssistantAssistantInitiationActions", void 0);
    return FetchUnderstandAssistantInitiationActionsResponse;
}(SpeakeasyBase));
export { FetchUnderstandAssistantInitiationActionsResponse };
