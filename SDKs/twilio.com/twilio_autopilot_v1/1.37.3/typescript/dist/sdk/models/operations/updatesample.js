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
export var UpdateSampleServerList = [
    "https://autopilot.twilio.com",
];
var UpdateSamplePathParams = /** @class */ (function (_super) {
    __extends(UpdateSamplePathParams, _super);
    function UpdateSamplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateSamplePathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSamplePathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], UpdateSamplePathParams.prototype, "taskSid", void 0);
    return UpdateSamplePathParams;
}(SpeakeasyBase));
export { UpdateSamplePathParams };
var UpdateSampleUpdateSampleRequest = /** @class */ (function (_super) {
    __extends(UpdateSampleUpdateSampleRequest, _super);
    function UpdateSampleUpdateSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Language;" }),
        __metadata("design:type", String)
    ], UpdateSampleUpdateSampleRequest.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SourceChannel;" }),
        __metadata("design:type", String)
    ], UpdateSampleUpdateSampleRequest.prototype, "sourceChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TaggedText;" }),
        __metadata("design:type", String)
    ], UpdateSampleUpdateSampleRequest.prototype, "taggedText", void 0);
    return UpdateSampleUpdateSampleRequest;
}(SpeakeasyBase));
export { UpdateSampleUpdateSampleRequest };
var UpdateSampleSecurity = /** @class */ (function (_super) {
    __extends(UpdateSampleSecurity, _super);
    function UpdateSampleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSampleSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSampleSecurity;
}(SpeakeasyBase));
export { UpdateSampleSecurity };
var UpdateSampleRequest = /** @class */ (function (_super) {
    __extends(UpdateSampleRequest, _super);
    function UpdateSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSampleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSamplePathParams)
    ], UpdateSampleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSampleUpdateSampleRequest)
    ], UpdateSampleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSampleSecurity)
    ], UpdateSampleRequest.prototype, "security", void 0);
    return UpdateSampleRequest;
}(SpeakeasyBase));
export { UpdateSampleRequest };
var UpdateSampleResponse = /** @class */ (function (_super) {
    __extends(UpdateSampleResponse, _super);
    function UpdateSampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSampleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSampleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantTaskSample)
    ], UpdateSampleResponse.prototype, "autopilotV1AssistantTaskSample", void 0);
    return UpdateSampleResponse;
}(SpeakeasyBase));
export { UpdateSampleResponse };
