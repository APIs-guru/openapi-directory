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
export var UPDATEUNDERSTANDQUERY_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateUnderstandQueryPathParams = /** @class */ (function (_super) {
    __extends(UpdateUnderstandQueryPathParams, _super);
    function UpdateUnderstandQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandQueryPathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandQueryPathParams.prototype, "sid", void 0);
    return UpdateUnderstandQueryPathParams;
}(SpeakeasyBase));
export { UpdateUnderstandQueryPathParams };
var UpdateUnderstandQueryUpdateUnderstandQueryRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandQueryUpdateUnderstandQueryRequest, _super);
    function UpdateUnderstandQueryUpdateUnderstandQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=SampleSid;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandQueryUpdateUnderstandQueryRequest.prototype, "sampleSid", void 0);
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandQueryUpdateUnderstandQueryRequest.prototype, "status", void 0);
    return UpdateUnderstandQueryUpdateUnderstandQueryRequest;
}(SpeakeasyBase));
export { UpdateUnderstandQueryUpdateUnderstandQueryRequest };
var UpdateUnderstandQuerySecurity = /** @class */ (function (_super) {
    __extends(UpdateUnderstandQuerySecurity, _super);
    function UpdateUnderstandQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUnderstandQuerySecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUnderstandQuerySecurity;
}(SpeakeasyBase));
export { UpdateUnderstandQuerySecurity };
var UpdateUnderstandQueryRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandQueryRequest, _super);
    function UpdateUnderstandQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandQueryRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUnderstandQueryPathParams)
    ], UpdateUnderstandQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUnderstandQueryUpdateUnderstandQueryRequest)
    ], UpdateUnderstandQueryRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUnderstandQuerySecurity)
    ], UpdateUnderstandQueryRequest.prototype, "security", void 0);
    return UpdateUnderstandQueryRequest;
}(SpeakeasyBase));
export { UpdateUnderstandQueryRequest };
var UpdateUnderstandQueryResponse = /** @class */ (function (_super) {
    __extends(UpdateUnderstandQueryResponse, _super);
    function UpdateUnderstandQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandQueryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateUnderstandQueryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantQuery)
    ], UpdateUnderstandQueryResponse.prototype, "previewUnderstandAssistantQuery", void 0);
    return UpdateUnderstandQueryResponse;
}(SpeakeasyBase));
export { UpdateUnderstandQueryResponse };
