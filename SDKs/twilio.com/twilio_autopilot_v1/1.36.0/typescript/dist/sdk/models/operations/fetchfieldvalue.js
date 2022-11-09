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
export var FETCHFIELDVALUE_SERVERS = [
    "https://autopilot.twilio.com",
];
var FetchFieldValuePathParams = /** @class */ (function (_super) {
    __extends(FetchFieldValuePathParams, _super);
    function FetchFieldValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchFieldValuePathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" }),
        __metadata("design:type", String)
    ], FetchFieldValuePathParams.prototype, "fieldTypeSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchFieldValuePathParams.prototype, "sid", void 0);
    return FetchFieldValuePathParams;
}(SpeakeasyBase));
export { FetchFieldValuePathParams };
var FetchFieldValueSecurity = /** @class */ (function (_super) {
    __extends(FetchFieldValueSecurity, _super);
    function FetchFieldValueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchFieldValueSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchFieldValueSecurity;
}(SpeakeasyBase));
export { FetchFieldValueSecurity };
var FetchFieldValueRequest = /** @class */ (function (_super) {
    __extends(FetchFieldValueRequest, _super);
    function FetchFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchFieldValueRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchFieldValuePathParams)
    ], FetchFieldValueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchFieldValueSecurity)
    ], FetchFieldValueRequest.prototype, "security", void 0);
    return FetchFieldValueRequest;
}(SpeakeasyBase));
export { FetchFieldValueRequest };
var FetchFieldValueResponse = /** @class */ (function (_super) {
    __extends(FetchFieldValueResponse, _super);
    function FetchFieldValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchFieldValueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchFieldValueResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AutopilotV1AssistantFieldTypeFieldValue)
    ], FetchFieldValueResponse.prototype, "autopilotV1AssistantFieldTypeFieldValue", void 0);
    return FetchFieldValueResponse;
}(SpeakeasyBase));
export { FetchFieldValueResponse };
