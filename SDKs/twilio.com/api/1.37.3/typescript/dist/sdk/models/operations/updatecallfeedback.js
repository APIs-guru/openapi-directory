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
export var UpdateCallFeedbackServerList = [
    "https://api.twilio.com",
];
var UpdateCallFeedbackPathParams = /** @class */ (function (_super) {
    __extends(UpdateCallFeedbackPathParams, _super);
    function UpdateCallFeedbackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateCallFeedbackPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], UpdateCallFeedbackPathParams.prototype, "callSid", void 0);
    return UpdateCallFeedbackPathParams;
}(SpeakeasyBase));
export { UpdateCallFeedbackPathParams };
var UpdateCallFeedbackUpdateCallFeedbackRequest = /** @class */ (function (_super) {
    __extends(UpdateCallFeedbackUpdateCallFeedbackRequest, _super);
    function UpdateCallFeedbackUpdateCallFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Issue;" }),
        __metadata("design:type", Array)
    ], UpdateCallFeedbackUpdateCallFeedbackRequest.prototype, "issue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=QualityScore;" }),
        __metadata("design:type", Number)
    ], UpdateCallFeedbackUpdateCallFeedbackRequest.prototype, "qualityScore", void 0);
    return UpdateCallFeedbackUpdateCallFeedbackRequest;
}(SpeakeasyBase));
export { UpdateCallFeedbackUpdateCallFeedbackRequest };
var UpdateCallFeedbackSecurity = /** @class */ (function (_super) {
    __extends(UpdateCallFeedbackSecurity, _super);
    function UpdateCallFeedbackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateCallFeedbackSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateCallFeedbackSecurity;
}(SpeakeasyBase));
export { UpdateCallFeedbackSecurity };
var UpdateCallFeedbackRequest = /** @class */ (function (_super) {
    __extends(UpdateCallFeedbackRequest, _super);
    function UpdateCallFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCallFeedbackRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCallFeedbackPathParams)
    ], UpdateCallFeedbackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateCallFeedbackUpdateCallFeedbackRequest)
    ], UpdateCallFeedbackRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCallFeedbackSecurity)
    ], UpdateCallFeedbackRequest.prototype, "security", void 0);
    return UpdateCallFeedbackRequest;
}(SpeakeasyBase));
export { UpdateCallFeedbackRequest };
var UpdateCallFeedbackResponse = /** @class */ (function (_super) {
    __extends(UpdateCallFeedbackResponse, _super);
    function UpdateCallFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCallFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCallFeedbackResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCallCallFeedback)
    ], UpdateCallFeedbackResponse.prototype, "apiV2010AccountCallCallFeedback", void 0);
    return UpdateCallFeedbackResponse;
}(SpeakeasyBase));
export { UpdateCallFeedbackResponse };
