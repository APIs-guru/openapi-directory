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
export var FETCHEXECUTIONSTEPCONTEXT_SERVERS = [
    "https://studio.twilio.com",
];
var FetchExecutionStepContextPathParams = /** @class */ (function (_super) {
    __extends(FetchExecutionStepContextPathParams, _super);
    function FetchExecutionStepContextPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ExecutionSid" }),
        __metadata("design:type", String)
    ], FetchExecutionStepContextPathParams.prototype, "executionSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], FetchExecutionStepContextPathParams.prototype, "flowSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=StepSid" }),
        __metadata("design:type", String)
    ], FetchExecutionStepContextPathParams.prototype, "stepSid", void 0);
    return FetchExecutionStepContextPathParams;
}(SpeakeasyBase));
export { FetchExecutionStepContextPathParams };
var FetchExecutionStepContextSecurity = /** @class */ (function (_super) {
    __extends(FetchExecutionStepContextSecurity, _super);
    function FetchExecutionStepContextSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchExecutionStepContextSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchExecutionStepContextSecurity;
}(SpeakeasyBase));
export { FetchExecutionStepContextSecurity };
var FetchExecutionStepContextRequest = /** @class */ (function (_super) {
    __extends(FetchExecutionStepContextRequest, _super);
    function FetchExecutionStepContextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchExecutionStepContextRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchExecutionStepContextPathParams)
    ], FetchExecutionStepContextRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchExecutionStepContextSecurity)
    ], FetchExecutionStepContextRequest.prototype, "security", void 0);
    return FetchExecutionStepContextRequest;
}(SpeakeasyBase));
export { FetchExecutionStepContextRequest };
var FetchExecutionStepContextResponse = /** @class */ (function (_super) {
    __extends(FetchExecutionStepContextResponse, _super);
    function FetchExecutionStepContextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchExecutionStepContextResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchExecutionStepContextResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StudioV2FlowExecutionExecutionStepExecutionStepContext)
    ], FetchExecutionStepContextResponse.prototype, "studioV2FlowExecutionExecutionStepExecutionStepContext", void 0);
    return FetchExecutionStepContextResponse;
}(SpeakeasyBase));
export { FetchExecutionStepContextResponse };
