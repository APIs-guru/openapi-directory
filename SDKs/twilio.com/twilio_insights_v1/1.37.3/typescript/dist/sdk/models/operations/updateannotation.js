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
export var UpdateAnnotationServerList = [
    "https://insights.twilio.com",
];
var UpdateAnnotationPathParams = /** @class */ (function (_super) {
    __extends(UpdateAnnotationPathParams, _super);
    function UpdateAnnotationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], UpdateAnnotationPathParams.prototype, "callSid", void 0);
    return UpdateAnnotationPathParams;
}(SpeakeasyBase));
export { UpdateAnnotationPathParams };
var UpdateAnnotationUpdateAnnotationRequest = /** @class */ (function (_super) {
    __extends(UpdateAnnotationUpdateAnnotationRequest, _super);
    function UpdateAnnotationUpdateAnnotationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AnsweredBy;" }),
        __metadata("design:type", String)
    ], UpdateAnnotationUpdateAnnotationRequest.prototype, "answeredBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallScore;" }),
        __metadata("design:type", Number)
    ], UpdateAnnotationUpdateAnnotationRequest.prototype, "callScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Comment;" }),
        __metadata("design:type", String)
    ], UpdateAnnotationUpdateAnnotationRequest.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConnectivityIssue;" }),
        __metadata("design:type", String)
    ], UpdateAnnotationUpdateAnnotationRequest.prototype, "connectivityIssue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Incident;" }),
        __metadata("design:type", String)
    ], UpdateAnnotationUpdateAnnotationRequest.prototype, "incident", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=QualityIssues;" }),
        __metadata("design:type", String)
    ], UpdateAnnotationUpdateAnnotationRequest.prototype, "qualityIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Spam;" }),
        __metadata("design:type", Boolean)
    ], UpdateAnnotationUpdateAnnotationRequest.prototype, "spam", void 0);
    return UpdateAnnotationUpdateAnnotationRequest;
}(SpeakeasyBase));
export { UpdateAnnotationUpdateAnnotationRequest };
var UpdateAnnotationSecurity = /** @class */ (function (_super) {
    __extends(UpdateAnnotationSecurity, _super);
    function UpdateAnnotationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateAnnotationSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateAnnotationSecurity;
}(SpeakeasyBase));
export { UpdateAnnotationSecurity };
var UpdateAnnotationRequest = /** @class */ (function (_super) {
    __extends(UpdateAnnotationRequest, _super);
    function UpdateAnnotationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAnnotationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAnnotationPathParams)
    ], UpdateAnnotationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateAnnotationUpdateAnnotationRequest)
    ], UpdateAnnotationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAnnotationSecurity)
    ], UpdateAnnotationRequest.prototype, "security", void 0);
    return UpdateAnnotationRequest;
}(SpeakeasyBase));
export { UpdateAnnotationRequest };
var UpdateAnnotationResponse = /** @class */ (function (_super) {
    __extends(UpdateAnnotationResponse, _super);
    function UpdateAnnotationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAnnotationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAnnotationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InsightsV1CallAnnotation)
    ], UpdateAnnotationResponse.prototype, "insightsV1CallAnnotation", void 0);
    return UpdateAnnotationResponse;
}(SpeakeasyBase));
export { UpdateAnnotationResponse };
