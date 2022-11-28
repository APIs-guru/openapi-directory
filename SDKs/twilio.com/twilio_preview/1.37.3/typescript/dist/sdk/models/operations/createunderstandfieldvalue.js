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
export var CreateUnderstandFieldValueServerList = [
    "https://preview.twilio.com",
];
var CreateUnderstandFieldValuePathParams = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldValuePathParams, _super);
    function CreateUnderstandFieldValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldValuePathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldValuePathParams.prototype, "fieldTypeSid", void 0);
    return CreateUnderstandFieldValuePathParams;
}(SpeakeasyBase));
export { CreateUnderstandFieldValuePathParams };
var CreateUnderstandFieldValueCreateUnderstandFieldValueRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldValueCreateUnderstandFieldValueRequest, _super);
    function CreateUnderstandFieldValueCreateUnderstandFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Language;" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldValueCreateUnderstandFieldValueRequest.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SynonymOf;" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldValueCreateUnderstandFieldValueRequest.prototype, "synonymOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Value;" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldValueCreateUnderstandFieldValueRequest.prototype, "value", void 0);
    return CreateUnderstandFieldValueCreateUnderstandFieldValueRequest;
}(SpeakeasyBase));
export { CreateUnderstandFieldValueCreateUnderstandFieldValueRequest };
var CreateUnderstandFieldValueSecurity = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldValueSecurity, _super);
    function CreateUnderstandFieldValueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUnderstandFieldValueSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUnderstandFieldValueSecurity;
}(SpeakeasyBase));
export { CreateUnderstandFieldValueSecurity };
var CreateUnderstandFieldValueRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldValueRequest, _super);
    function CreateUnderstandFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnderstandFieldValueRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnderstandFieldValuePathParams)
    ], CreateUnderstandFieldValueRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUnderstandFieldValueCreateUnderstandFieldValueRequest)
    ], CreateUnderstandFieldValueRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnderstandFieldValueSecurity)
    ], CreateUnderstandFieldValueRequest.prototype, "security", void 0);
    return CreateUnderstandFieldValueRequest;
}(SpeakeasyBase));
export { CreateUnderstandFieldValueRequest };
var CreateUnderstandFieldValueResponse = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldValueResponse, _super);
    function CreateUnderstandFieldValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnderstandFieldValueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateUnderstandFieldValueResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantFieldTypeFieldValue)
    ], CreateUnderstandFieldValueResponse.prototype, "previewUnderstandAssistantFieldTypeFieldValue", void 0);
    return CreateUnderstandFieldValueResponse;
}(SpeakeasyBase));
export { CreateUnderstandFieldValueResponse };
