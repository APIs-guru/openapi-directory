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
export var FetchTaskActionsServerList = [
    "https://autopilot.twilio.com",
];
var FetchTaskActionsPathParams = /** @class */ (function (_super) {
    __extends(FetchTaskActionsPathParams, _super);
    function FetchTaskActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchTaskActionsPathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], FetchTaskActionsPathParams.prototype, "taskSid", void 0);
    return FetchTaskActionsPathParams;
}(SpeakeasyBase));
export { FetchTaskActionsPathParams };
var FetchTaskActionsSecurity = /** @class */ (function (_super) {
    __extends(FetchTaskActionsSecurity, _super);
    function FetchTaskActionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTaskActionsSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTaskActionsSecurity;
}(SpeakeasyBase));
export { FetchTaskActionsSecurity };
var FetchTaskActionsRequest = /** @class */ (function (_super) {
    __extends(FetchTaskActionsRequest, _super);
    function FetchTaskActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTaskActionsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTaskActionsPathParams)
    ], FetchTaskActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTaskActionsSecurity)
    ], FetchTaskActionsRequest.prototype, "security", void 0);
    return FetchTaskActionsRequest;
}(SpeakeasyBase));
export { FetchTaskActionsRequest };
var FetchTaskActionsResponse = /** @class */ (function (_super) {
    __extends(FetchTaskActionsResponse, _super);
    function FetchTaskActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTaskActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchTaskActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantTaskTaskActions)
    ], FetchTaskActionsResponse.prototype, "autopilotV1AssistantTaskTaskActions", void 0);
    return FetchTaskActionsResponse;
}(SpeakeasyBase));
export { FetchTaskActionsResponse };
