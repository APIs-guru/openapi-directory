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
export var CreateUnderstandSampleServerList = [
    "https://preview.twilio.com",
];
var CreateUnderstandSamplePathParams = /** @class */ (function (_super) {
    __extends(CreateUnderstandSamplePathParams, _super);
    function CreateUnderstandSamplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandSamplePathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandSamplePathParams.prototype, "taskSid", void 0);
    return CreateUnderstandSamplePathParams;
}(SpeakeasyBase));
export { CreateUnderstandSamplePathParams };
var CreateUnderstandSampleCreateUnderstandSampleRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandSampleCreateUnderstandSampleRequest, _super);
    function CreateUnderstandSampleCreateUnderstandSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Language;" }),
        __metadata("design:type", String)
    ], CreateUnderstandSampleCreateUnderstandSampleRequest.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SourceChannel;" }),
        __metadata("design:type", String)
    ], CreateUnderstandSampleCreateUnderstandSampleRequest.prototype, "sourceChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=TaggedText;" }),
        __metadata("design:type", String)
    ], CreateUnderstandSampleCreateUnderstandSampleRequest.prototype, "taggedText", void 0);
    return CreateUnderstandSampleCreateUnderstandSampleRequest;
}(SpeakeasyBase));
export { CreateUnderstandSampleCreateUnderstandSampleRequest };
var CreateUnderstandSampleSecurity = /** @class */ (function (_super) {
    __extends(CreateUnderstandSampleSecurity, _super);
    function CreateUnderstandSampleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUnderstandSampleSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUnderstandSampleSecurity;
}(SpeakeasyBase));
export { CreateUnderstandSampleSecurity };
var CreateUnderstandSampleRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandSampleRequest, _super);
    function CreateUnderstandSampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnderstandSampleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnderstandSamplePathParams)
    ], CreateUnderstandSampleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUnderstandSampleCreateUnderstandSampleRequest)
    ], CreateUnderstandSampleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnderstandSampleSecurity)
    ], CreateUnderstandSampleRequest.prototype, "security", void 0);
    return CreateUnderstandSampleRequest;
}(SpeakeasyBase));
export { CreateUnderstandSampleRequest };
var CreateUnderstandSampleResponse = /** @class */ (function (_super) {
    __extends(CreateUnderstandSampleResponse, _super);
    function CreateUnderstandSampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnderstandSampleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateUnderstandSampleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantTaskSample)
    ], CreateUnderstandSampleResponse.prototype, "previewUnderstandAssistantTaskSample", void 0);
    return CreateUnderstandSampleResponse;
}(SpeakeasyBase));
export { CreateUnderstandSampleResponse };
