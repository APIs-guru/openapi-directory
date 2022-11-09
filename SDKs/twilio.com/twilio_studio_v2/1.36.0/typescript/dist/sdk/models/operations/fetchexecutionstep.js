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
export var FETCHEXECUTIONSTEP_SERVERS = [
    "https://studio.twilio.com",
];
var FetchExecutionStepPathParams = /** @class */ (function (_super) {
    __extends(FetchExecutionStepPathParams, _super);
    function FetchExecutionStepPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ExecutionSid" }),
        __metadata("design:type", String)
    ], FetchExecutionStepPathParams.prototype, "executionSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], FetchExecutionStepPathParams.prototype, "flowSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchExecutionStepPathParams.prototype, "sid", void 0);
    return FetchExecutionStepPathParams;
}(SpeakeasyBase));
export { FetchExecutionStepPathParams };
var FetchExecutionStepSecurity = /** @class */ (function (_super) {
    __extends(FetchExecutionStepSecurity, _super);
    function FetchExecutionStepSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchExecutionStepSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchExecutionStepSecurity;
}(SpeakeasyBase));
export { FetchExecutionStepSecurity };
var FetchExecutionStepRequest = /** @class */ (function (_super) {
    __extends(FetchExecutionStepRequest, _super);
    function FetchExecutionStepRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchExecutionStepRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchExecutionStepPathParams)
    ], FetchExecutionStepRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchExecutionStepSecurity)
    ], FetchExecutionStepRequest.prototype, "security", void 0);
    return FetchExecutionStepRequest;
}(SpeakeasyBase));
export { FetchExecutionStepRequest };
var FetchExecutionStepResponse = /** @class */ (function (_super) {
    __extends(FetchExecutionStepResponse, _super);
    function FetchExecutionStepResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchExecutionStepResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchExecutionStepResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StudioV2FlowExecutionExecutionStep)
    ], FetchExecutionStepResponse.prototype, "studioV2FlowExecutionExecutionStep", void 0);
    return FetchExecutionStepResponse;
}(SpeakeasyBase));
export { FetchExecutionStepResponse };
