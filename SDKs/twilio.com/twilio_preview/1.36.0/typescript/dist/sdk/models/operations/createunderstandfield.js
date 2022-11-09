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
export var CREATEUNDERSTANDFIELD_SERVERS = [
    "https://preview.twilio.com",
];
var CreateUnderstandFieldPathParams = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldPathParams, _super);
    function CreateUnderstandFieldPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldPathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldPathParams.prototype, "taskSid", void 0);
    return CreateUnderstandFieldPathParams;
}(SpeakeasyBase));
export { CreateUnderstandFieldPathParams };
var CreateUnderstandFieldCreateUnderstandFieldRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldCreateUnderstandFieldRequest, _super);
    function CreateUnderstandFieldCreateUnderstandFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FieldType;" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldCreateUnderstandFieldRequest.prototype, "fieldType", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldCreateUnderstandFieldRequest.prototype, "uniqueName", void 0);
    return CreateUnderstandFieldCreateUnderstandFieldRequest;
}(SpeakeasyBase));
export { CreateUnderstandFieldCreateUnderstandFieldRequest };
var CreateUnderstandFieldSecurity = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldSecurity, _super);
    function CreateUnderstandFieldSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUnderstandFieldSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUnderstandFieldSecurity;
}(SpeakeasyBase));
export { CreateUnderstandFieldSecurity };
var CreateUnderstandFieldRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldRequest, _super);
    function CreateUnderstandFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUnderstandFieldRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUnderstandFieldPathParams)
    ], CreateUnderstandFieldRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUnderstandFieldCreateUnderstandFieldRequest)
    ], CreateUnderstandFieldRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateUnderstandFieldSecurity)
    ], CreateUnderstandFieldRequest.prototype, "security", void 0);
    return CreateUnderstandFieldRequest;
}(SpeakeasyBase));
export { CreateUnderstandFieldRequest };
var CreateUnderstandFieldResponse = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldResponse, _super);
    function CreateUnderstandFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateUnderstandFieldResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateUnderstandFieldResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantTaskField)
    ], CreateUnderstandFieldResponse.prototype, "previewUnderstandAssistantTaskField", void 0);
    return CreateUnderstandFieldResponse;
}(SpeakeasyBase));
export { CreateUnderstandFieldResponse };
