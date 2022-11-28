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
export var UpdateUnderstandSampleServerList = [
    "https://preview.twilio.com",
];
var UpdateUnderstandSamplePathParams = /** @class */ (function (_super) {
    __extends(UpdateUnderstandSamplePathParams, _super);
    function UpdateUnderstandSamplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandSamplePathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandSamplePathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandSamplePathParams.prototype, "taskSid", void 0);
    return UpdateUnderstandSamplePathParams;
}(SpeakeasyBase));
export { UpdateUnderstandSamplePathParams };
var UpdateUnderstandSampleUpdateUnderstandSampleRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandSampleUpdateUnderstandSampleRequest, _super);
    function UpdateUnderstandSampleUpdateUnderstandSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Language;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandSampleUpdateUnderstandSampleRequest.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SourceChannel;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandSampleUpdateUnderstandSampleRequest.prototype, "sourceChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TaggedText;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandSampleUpdateUnderstandSampleRequest.prototype, "taggedText", void 0);
    return UpdateUnderstandSampleUpdateUnderstandSampleRequest;
}(SpeakeasyBase));
export { UpdateUnderstandSampleUpdateUnderstandSampleRequest };
var UpdateUnderstandSampleSecurity = /** @class */ (function (_super) {
    __extends(UpdateUnderstandSampleSecurity, _super);
    function UpdateUnderstandSampleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUnderstandSampleSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUnderstandSampleSecurity;
}(SpeakeasyBase));
export { UpdateUnderstandSampleSecurity };
var UpdateUnderstandSampleRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandSampleRequest, _super);
    function UpdateUnderstandSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandSampleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUnderstandSamplePathParams)
    ], UpdateUnderstandSampleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUnderstandSampleUpdateUnderstandSampleRequest)
    ], UpdateUnderstandSampleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUnderstandSampleSecurity)
    ], UpdateUnderstandSampleRequest.prototype, "security", void 0);
    return UpdateUnderstandSampleRequest;
}(SpeakeasyBase));
export { UpdateUnderstandSampleRequest };
var UpdateUnderstandSampleResponse = /** @class */ (function (_super) {
    __extends(UpdateUnderstandSampleResponse, _super);
    function UpdateUnderstandSampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandSampleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUnderstandSampleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantTaskSample)
    ], UpdateUnderstandSampleResponse.prototype, "previewUnderstandAssistantTaskSample", void 0);
    return UpdateUnderstandSampleResponse;
}(SpeakeasyBase));
export { UpdateUnderstandSampleResponse };
