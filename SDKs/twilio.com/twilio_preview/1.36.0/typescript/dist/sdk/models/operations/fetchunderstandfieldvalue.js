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
export var FETCHUNDERSTANDFIELDVALUE_SERVERS = [
    "https://preview.twilio.com",
];
var FetchUnderstandFieldValuePathParams = /** @class */ (function (_super) {
    __extends(FetchUnderstandFieldValuePathParams, _super);
    function FetchUnderstandFieldValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchUnderstandFieldValuePathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" }),
        __metadata("design:type", String)
    ], FetchUnderstandFieldValuePathParams.prototype, "fieldTypeSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchUnderstandFieldValuePathParams.prototype, "sid", void 0);
    return FetchUnderstandFieldValuePathParams;
}(SpeakeasyBase));
export { FetchUnderstandFieldValuePathParams };
var FetchUnderstandFieldValueSecurity = /** @class */ (function (_super) {
    __extends(FetchUnderstandFieldValueSecurity, _super);
    function FetchUnderstandFieldValueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUnderstandFieldValueSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUnderstandFieldValueSecurity;
}(SpeakeasyBase));
export { FetchUnderstandFieldValueSecurity };
var FetchUnderstandFieldValueRequest = /** @class */ (function (_super) {
    __extends(FetchUnderstandFieldValueRequest, _super);
    function FetchUnderstandFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUnderstandFieldValueRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUnderstandFieldValuePathParams)
    ], FetchUnderstandFieldValueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUnderstandFieldValueSecurity)
    ], FetchUnderstandFieldValueRequest.prototype, "security", void 0);
    return FetchUnderstandFieldValueRequest;
}(SpeakeasyBase));
export { FetchUnderstandFieldValueRequest };
var FetchUnderstandFieldValueResponse = /** @class */ (function (_super) {
    __extends(FetchUnderstandFieldValueResponse, _super);
    function FetchUnderstandFieldValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUnderstandFieldValueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchUnderstandFieldValueResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantFieldTypeFieldValue)
    ], FetchUnderstandFieldValueResponse.prototype, "previewUnderstandAssistantFieldTypeFieldValue", void 0);
    return FetchUnderstandFieldValueResponse;
}(SpeakeasyBase));
export { FetchUnderstandFieldValueResponse };
