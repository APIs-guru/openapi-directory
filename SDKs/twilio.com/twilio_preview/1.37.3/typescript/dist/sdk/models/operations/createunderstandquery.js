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
export var CreateUnderstandQueryServerList = [
    "https://preview.twilio.com",
];
var CreateUnderstandQueryPathParams = /** @class */ (function (_super) {
    __extends(CreateUnderstandQueryPathParams, _super);
    function CreateUnderstandQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandQueryPathParams.prototype, "assistantSid", void 0);
    return CreateUnderstandQueryPathParams;
}(SpeakeasyBase));
export { CreateUnderstandQueryPathParams };
var CreateUnderstandQueryCreateUnderstandQueryRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandQueryCreateUnderstandQueryRequest, _super);
    function CreateUnderstandQueryCreateUnderstandQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Field;" }),
        __metadata("design:type", String)
    ], CreateUnderstandQueryCreateUnderstandQueryRequest.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Language;" }),
        __metadata("design:type", String)
    ], CreateUnderstandQueryCreateUnderstandQueryRequest.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ModelBuild;" }),
        __metadata("design:type", String)
    ], CreateUnderstandQueryCreateUnderstandQueryRequest.prototype, "modelBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Query;" }),
        __metadata("design:type", String)
    ], CreateUnderstandQueryCreateUnderstandQueryRequest.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Tasks;" }),
        __metadata("design:type", String)
    ], CreateUnderstandQueryCreateUnderstandQueryRequest.prototype, "tasks", void 0);
    return CreateUnderstandQueryCreateUnderstandQueryRequest;
}(SpeakeasyBase));
export { CreateUnderstandQueryCreateUnderstandQueryRequest };
var CreateUnderstandQuerySecurity = /** @class */ (function (_super) {
    __extends(CreateUnderstandQuerySecurity, _super);
    function CreateUnderstandQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUnderstandQuerySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUnderstandQuerySecurity;
}(SpeakeasyBase));
export { CreateUnderstandQuerySecurity };
var CreateUnderstandQueryRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandQueryRequest, _super);
    function CreateUnderstandQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnderstandQueryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnderstandQueryPathParams)
    ], CreateUnderstandQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUnderstandQueryCreateUnderstandQueryRequest)
    ], CreateUnderstandQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnderstandQuerySecurity)
    ], CreateUnderstandQueryRequest.prototype, "security", void 0);
    return CreateUnderstandQueryRequest;
}(SpeakeasyBase));
export { CreateUnderstandQueryRequest };
var CreateUnderstandQueryResponse = /** @class */ (function (_super) {
    __extends(CreateUnderstandQueryResponse, _super);
    function CreateUnderstandQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnderstandQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateUnderstandQueryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantQuery)
    ], CreateUnderstandQueryResponse.prototype, "previewUnderstandAssistantQuery", void 0);
    return CreateUnderstandQueryResponse;
}(SpeakeasyBase));
export { CreateUnderstandQueryResponse };
