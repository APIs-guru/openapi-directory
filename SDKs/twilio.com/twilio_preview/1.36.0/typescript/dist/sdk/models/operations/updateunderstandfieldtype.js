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
export var UPDATEUNDERSTANDFIELDTYPE_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateUnderstandFieldTypePathParams = /** @class */ (function (_super) {
    __extends(UpdateUnderstandFieldTypePathParams, _super);
    function UpdateUnderstandFieldTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypePathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypePathParams.prototype, "sid", void 0);
    return UpdateUnderstandFieldTypePathParams;
}(SpeakeasyBase));
export { UpdateUnderstandFieldTypePathParams };
var UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest, _super);
    function UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest.prototype, "uniqueName", void 0);
    return UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest;
}(SpeakeasyBase));
export { UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest };
var UpdateUnderstandFieldTypeSecurity = /** @class */ (function (_super) {
    __extends(UpdateUnderstandFieldTypeSecurity, _super);
    function UpdateUnderstandFieldTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUnderstandFieldTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUnderstandFieldTypeSecurity;
}(SpeakeasyBase));
export { UpdateUnderstandFieldTypeSecurity };
var UpdateUnderstandFieldTypeRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandFieldTypeRequest, _super);
    function UpdateUnderstandFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUnderstandFieldTypePathParams)
    ], UpdateUnderstandFieldTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest)
    ], UpdateUnderstandFieldTypeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUnderstandFieldTypeSecurity)
    ], UpdateUnderstandFieldTypeRequest.prototype, "security", void 0);
    return UpdateUnderstandFieldTypeRequest;
}(SpeakeasyBase));
export { UpdateUnderstandFieldTypeRequest };
var UpdateUnderstandFieldTypeResponse = /** @class */ (function (_super) {
    __extends(UpdateUnderstandFieldTypeResponse, _super);
    function UpdateUnderstandFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateUnderstandFieldTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantFieldType)
    ], UpdateUnderstandFieldTypeResponse.prototype, "previewUnderstandAssistantFieldType", void 0);
    return UpdateUnderstandFieldTypeResponse;
}(SpeakeasyBase));
export { UpdateUnderstandFieldTypeResponse };
