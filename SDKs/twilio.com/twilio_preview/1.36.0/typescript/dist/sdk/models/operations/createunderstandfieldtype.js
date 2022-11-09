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
export var CREATEUNDERSTANDFIELDTYPE_SERVERS = [
    "https://preview.twilio.com",
];
var CreateUnderstandFieldTypePathParams = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldTypePathParams, _super);
    function CreateUnderstandFieldTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldTypePathParams.prototype, "assistantSid", void 0);
    return CreateUnderstandFieldTypePathParams;
}(SpeakeasyBase));
export { CreateUnderstandFieldTypePathParams };
var CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest, _super);
    function CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest.prototype, "uniqueName", void 0);
    return CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest;
}(SpeakeasyBase));
export { CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest };
var CreateUnderstandFieldTypeSecurity = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldTypeSecurity, _super);
    function CreateUnderstandFieldTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUnderstandFieldTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUnderstandFieldTypeSecurity;
}(SpeakeasyBase));
export { CreateUnderstandFieldTypeSecurity };
var CreateUnderstandFieldTypeRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldTypeRequest, _super);
    function CreateUnderstandFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUnderstandFieldTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUnderstandFieldTypePathParams)
    ], CreateUnderstandFieldTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest)
    ], CreateUnderstandFieldTypeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUnderstandFieldTypeSecurity)
    ], CreateUnderstandFieldTypeRequest.prototype, "security", void 0);
    return CreateUnderstandFieldTypeRequest;
}(SpeakeasyBase));
export { CreateUnderstandFieldTypeRequest };
var CreateUnderstandFieldTypeResponse = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldTypeResponse, _super);
    function CreateUnderstandFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUnderstandFieldTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateUnderstandFieldTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantFieldType)
    ], CreateUnderstandFieldTypeResponse.prototype, "previewUnderstandAssistantFieldType", void 0);
    return CreateUnderstandFieldTypeResponse;
}(SpeakeasyBase));
export { CreateUnderstandFieldTypeResponse };
