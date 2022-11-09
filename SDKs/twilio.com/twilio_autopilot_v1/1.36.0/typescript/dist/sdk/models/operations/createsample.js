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
export var CREATESAMPLE_SERVERS = [
    "https://autopilot.twilio.com",
];
var CreateSamplePathParams = /** @class */ (function (_super) {
    __extends(CreateSamplePathParams, _super);
    function CreateSamplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateSamplePathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], CreateSamplePathParams.prototype, "taskSid", void 0);
    return CreateSamplePathParams;
}(SpeakeasyBase));
export { CreateSamplePathParams };
var CreateSampleCreateSampleRequest = /** @class */ (function (_super) {
    __extends(CreateSampleCreateSampleRequest, _super);
    function CreateSampleCreateSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Language;" }),
        __metadata("design:type", String)
    ], CreateSampleCreateSampleRequest.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "form, name=SourceChannel;" }),
        __metadata("design:type", String)
    ], CreateSampleCreateSampleRequest.prototype, "sourceChannel", void 0);
    __decorate([
        Metadata({ data: "form, name=TaggedText;" }),
        __metadata("design:type", String)
    ], CreateSampleCreateSampleRequest.prototype, "taggedText", void 0);
    return CreateSampleCreateSampleRequest;
}(SpeakeasyBase));
export { CreateSampleCreateSampleRequest };
var CreateSampleSecurity = /** @class */ (function (_super) {
    __extends(CreateSampleSecurity, _super);
    function CreateSampleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSampleSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSampleSecurity;
}(SpeakeasyBase));
export { CreateSampleSecurity };
var CreateSampleRequest = /** @class */ (function (_super) {
    __extends(CreateSampleRequest, _super);
    function CreateSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSampleRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSamplePathParams)
    ], CreateSampleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSampleCreateSampleRequest)
    ], CreateSampleRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSampleSecurity)
    ], CreateSampleRequest.prototype, "security", void 0);
    return CreateSampleRequest;
}(SpeakeasyBase));
export { CreateSampleRequest };
var CreateSampleResponse = /** @class */ (function (_super) {
    __extends(CreateSampleResponse, _super);
    function CreateSampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSampleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSampleResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AutopilotV1AssistantTaskSample)
    ], CreateSampleResponse.prototype, "autopilotV1AssistantTaskSample", void 0);
    return CreateSampleResponse;
}(SpeakeasyBase));
export { CreateSampleResponse };
