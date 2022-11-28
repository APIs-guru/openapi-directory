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
export var CreateFieldValueServerList = [
    "https://autopilot.twilio.com",
];
var CreateFieldValuePathParams = /** @class */ (function (_super) {
    __extends(CreateFieldValuePathParams, _super);
    function CreateFieldValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateFieldValuePathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" }),
        __metadata("design:type", String)
    ], CreateFieldValuePathParams.prototype, "fieldTypeSid", void 0);
    return CreateFieldValuePathParams;
}(SpeakeasyBase));
export { CreateFieldValuePathParams };
var CreateFieldValueCreateFieldValueRequest = /** @class */ (function (_super) {
    __extends(CreateFieldValueCreateFieldValueRequest, _super);
    function CreateFieldValueCreateFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Language;" }),
        __metadata("design:type", String)
    ], CreateFieldValueCreateFieldValueRequest.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SynonymOf;" }),
        __metadata("design:type", String)
    ], CreateFieldValueCreateFieldValueRequest.prototype, "synonymOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Value;" }),
        __metadata("design:type", String)
    ], CreateFieldValueCreateFieldValueRequest.prototype, "value", void 0);
    return CreateFieldValueCreateFieldValueRequest;
}(SpeakeasyBase));
export { CreateFieldValueCreateFieldValueRequest };
var CreateFieldValueSecurity = /** @class */ (function (_super) {
    __extends(CreateFieldValueSecurity, _super);
    function CreateFieldValueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateFieldValueSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateFieldValueSecurity;
}(SpeakeasyBase));
export { CreateFieldValueSecurity };
var CreateFieldValueRequest = /** @class */ (function (_super) {
    __extends(CreateFieldValueRequest, _super);
    function CreateFieldValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFieldValueRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFieldValuePathParams)
    ], CreateFieldValueRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateFieldValueCreateFieldValueRequest)
    ], CreateFieldValueRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFieldValueSecurity)
    ], CreateFieldValueRequest.prototype, "security", void 0);
    return CreateFieldValueRequest;
}(SpeakeasyBase));
export { CreateFieldValueRequest };
var CreateFieldValueResponse = /** @class */ (function (_super) {
    __extends(CreateFieldValueResponse, _super);
    function CreateFieldValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFieldValueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFieldValueResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantFieldTypeFieldValue)
    ], CreateFieldValueResponse.prototype, "autopilotV1AssistantFieldTypeFieldValue", void 0);
    return CreateFieldValueResponse;
}(SpeakeasyBase));
export { CreateFieldValueResponse };
