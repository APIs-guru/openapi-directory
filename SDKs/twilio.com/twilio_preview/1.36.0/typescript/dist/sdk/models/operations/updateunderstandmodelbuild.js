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
export var UPDATEUNDERSTANDMODELBUILD_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateUnderstandModelBuildPathParams = /** @class */ (function (_super) {
    __extends(UpdateUnderstandModelBuildPathParams, _super);
    function UpdateUnderstandModelBuildPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandModelBuildPathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandModelBuildPathParams.prototype, "sid", void 0);
    return UpdateUnderstandModelBuildPathParams;
}(SpeakeasyBase));
export { UpdateUnderstandModelBuildPathParams };
var UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest, _super);
    function UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest.prototype, "uniqueName", void 0);
    return UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest;
}(SpeakeasyBase));
export { UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest };
var UpdateUnderstandModelBuildSecurity = /** @class */ (function (_super) {
    __extends(UpdateUnderstandModelBuildSecurity, _super);
    function UpdateUnderstandModelBuildSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUnderstandModelBuildSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUnderstandModelBuildSecurity;
}(SpeakeasyBase));
export { UpdateUnderstandModelBuildSecurity };
var UpdateUnderstandModelBuildRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandModelBuildRequest, _super);
    function UpdateUnderstandModelBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandModelBuildRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUnderstandModelBuildPathParams)
    ], UpdateUnderstandModelBuildRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest)
    ], UpdateUnderstandModelBuildRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateUnderstandModelBuildSecurity)
    ], UpdateUnderstandModelBuildRequest.prototype, "security", void 0);
    return UpdateUnderstandModelBuildRequest;
}(SpeakeasyBase));
export { UpdateUnderstandModelBuildRequest };
var UpdateUnderstandModelBuildResponse = /** @class */ (function (_super) {
    __extends(UpdateUnderstandModelBuildResponse, _super);
    function UpdateUnderstandModelBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandModelBuildResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateUnderstandModelBuildResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantModelBuild)
    ], UpdateUnderstandModelBuildResponse.prototype, "previewUnderstandAssistantModelBuild", void 0);
    return UpdateUnderstandModelBuildResponse;
}(SpeakeasyBase));
export { UpdateUnderstandModelBuildResponse };
