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
export var FETCHEXECUTIONCONTEXT_SERVERS = [
    "https://studio.twilio.com",
];
var FetchExecutionContextPathParams = /** @class */ (function (_super) {
    __extends(FetchExecutionContextPathParams, _super);
    function FetchExecutionContextPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ExecutionSid" }),
        __metadata("design:type", String)
    ], FetchExecutionContextPathParams.prototype, "executionSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], FetchExecutionContextPathParams.prototype, "flowSid", void 0);
    return FetchExecutionContextPathParams;
}(SpeakeasyBase));
export { FetchExecutionContextPathParams };
var FetchExecutionContextSecurity = /** @class */ (function (_super) {
    __extends(FetchExecutionContextSecurity, _super);
    function FetchExecutionContextSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchExecutionContextSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchExecutionContextSecurity;
}(SpeakeasyBase));
export { FetchExecutionContextSecurity };
var FetchExecutionContextRequest = /** @class */ (function (_super) {
    __extends(FetchExecutionContextRequest, _super);
    function FetchExecutionContextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchExecutionContextRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchExecutionContextPathParams)
    ], FetchExecutionContextRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchExecutionContextSecurity)
    ], FetchExecutionContextRequest.prototype, "security", void 0);
    return FetchExecutionContextRequest;
}(SpeakeasyBase));
export { FetchExecutionContextRequest };
var FetchExecutionContextResponse = /** @class */ (function (_super) {
    __extends(FetchExecutionContextResponse, _super);
    function FetchExecutionContextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchExecutionContextResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchExecutionContextResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StudioV2FlowExecutionExecutionContext)
    ], FetchExecutionContextResponse.prototype, "studioV2FlowExecutionExecutionContext", void 0);
    return FetchExecutionContextResponse;
}(SpeakeasyBase));
export { FetchExecutionContextResponse };
