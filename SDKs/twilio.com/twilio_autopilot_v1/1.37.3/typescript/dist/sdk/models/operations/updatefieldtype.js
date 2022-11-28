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
export var UpdateFieldTypeServerList = [
    "https://autopilot.twilio.com",
];
var UpdateFieldTypePathParams = /** @class */ (function (_super) {
    __extends(UpdateFieldTypePathParams, _super);
    function UpdateFieldTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateFieldTypePathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateFieldTypePathParams.prototype, "sid", void 0);
    return UpdateFieldTypePathParams;
}(SpeakeasyBase));
export { UpdateFieldTypePathParams };
var UpdateFieldTypeUpdateFieldTypeRequest = /** @class */ (function (_super) {
    __extends(UpdateFieldTypeUpdateFieldTypeRequest, _super);
    function UpdateFieldTypeUpdateFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateFieldTypeUpdateFieldTypeRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateFieldTypeUpdateFieldTypeRequest.prototype, "uniqueName", void 0);
    return UpdateFieldTypeUpdateFieldTypeRequest;
}(SpeakeasyBase));
export { UpdateFieldTypeUpdateFieldTypeRequest };
var UpdateFieldTypeSecurity = /** @class */ (function (_super) {
    __extends(UpdateFieldTypeSecurity, _super);
    function UpdateFieldTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateFieldTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateFieldTypeSecurity;
}(SpeakeasyBase));
export { UpdateFieldTypeSecurity };
var UpdateFieldTypeRequest = /** @class */ (function (_super) {
    __extends(UpdateFieldTypeRequest, _super);
    function UpdateFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFieldTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFieldTypePathParams)
    ], UpdateFieldTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateFieldTypeUpdateFieldTypeRequest)
    ], UpdateFieldTypeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFieldTypeSecurity)
    ], UpdateFieldTypeRequest.prototype, "security", void 0);
    return UpdateFieldTypeRequest;
}(SpeakeasyBase));
export { UpdateFieldTypeRequest };
var UpdateFieldTypeResponse = /** @class */ (function (_super) {
    __extends(UpdateFieldTypeResponse, _super);
    function UpdateFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFieldTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFieldTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantFieldType)
    ], UpdateFieldTypeResponse.prototype, "autopilotV1AssistantFieldType", void 0);
    return UpdateFieldTypeResponse;
}(SpeakeasyBase));
export { UpdateFieldTypeResponse };
