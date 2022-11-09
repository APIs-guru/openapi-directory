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
export var UPDATEEXECUTION_SERVERS = [
    "https://studio.twilio.com",
];
var UpdateExecutionPathParams = /** @class */ (function (_super) {
    __extends(UpdateExecutionPathParams, _super);
    function UpdateExecutionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], UpdateExecutionPathParams.prototype, "flowSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateExecutionPathParams.prototype, "sid", void 0);
    return UpdateExecutionPathParams;
}(SpeakeasyBase));
export { UpdateExecutionPathParams };
var UpdateExecutionUpdateExecutionRequest = /** @class */ (function (_super) {
    __extends(UpdateExecutionUpdateExecutionRequest, _super);
    function UpdateExecutionUpdateExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateExecutionUpdateExecutionRequest.prototype, "status", void 0);
    return UpdateExecutionUpdateExecutionRequest;
}(SpeakeasyBase));
export { UpdateExecutionUpdateExecutionRequest };
var UpdateExecutionSecurity = /** @class */ (function (_super) {
    __extends(UpdateExecutionSecurity, _super);
    function UpdateExecutionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateExecutionSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateExecutionSecurity;
}(SpeakeasyBase));
export { UpdateExecutionSecurity };
var UpdateExecutionRequest = /** @class */ (function (_super) {
    __extends(UpdateExecutionRequest, _super);
    function UpdateExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateExecutionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateExecutionPathParams)
    ], UpdateExecutionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateExecutionUpdateExecutionRequest)
    ], UpdateExecutionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateExecutionSecurity)
    ], UpdateExecutionRequest.prototype, "security", void 0);
    return UpdateExecutionRequest;
}(SpeakeasyBase));
export { UpdateExecutionRequest };
var UpdateExecutionResponse = /** @class */ (function (_super) {
    __extends(UpdateExecutionResponse, _super);
    function UpdateExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateExecutionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateExecutionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StudioV1FlowExecution)
    ], UpdateExecutionResponse.prototype, "studioV1FlowExecution", void 0);
    return UpdateExecutionResponse;
}(SpeakeasyBase));
export { UpdateExecutionResponse };
