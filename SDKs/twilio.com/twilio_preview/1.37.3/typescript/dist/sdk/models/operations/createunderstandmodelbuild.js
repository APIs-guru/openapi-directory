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
export var CreateUnderstandModelBuildServerList = [
    "https://preview.twilio.com",
];
var CreateUnderstandModelBuildPathParams = /** @class */ (function (_super) {
    __extends(CreateUnderstandModelBuildPathParams, _super);
    function CreateUnderstandModelBuildPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandModelBuildPathParams.prototype, "assistantSid", void 0);
    return CreateUnderstandModelBuildPathParams;
}(SpeakeasyBase));
export { CreateUnderstandModelBuildPathParams };
var CreateUnderstandModelBuildCreateUnderstandModelBuildRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandModelBuildCreateUnderstandModelBuildRequest, _super);
    function CreateUnderstandModelBuildCreateUnderstandModelBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateUnderstandModelBuildCreateUnderstandModelBuildRequest.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateUnderstandModelBuildCreateUnderstandModelBuildRequest.prototype, "uniqueName", void 0);
    return CreateUnderstandModelBuildCreateUnderstandModelBuildRequest;
}(SpeakeasyBase));
export { CreateUnderstandModelBuildCreateUnderstandModelBuildRequest };
var CreateUnderstandModelBuildSecurity = /** @class */ (function (_super) {
    __extends(CreateUnderstandModelBuildSecurity, _super);
    function CreateUnderstandModelBuildSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUnderstandModelBuildSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUnderstandModelBuildSecurity;
}(SpeakeasyBase));
export { CreateUnderstandModelBuildSecurity };
var CreateUnderstandModelBuildRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandModelBuildRequest, _super);
    function CreateUnderstandModelBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnderstandModelBuildRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnderstandModelBuildPathParams)
    ], CreateUnderstandModelBuildRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUnderstandModelBuildCreateUnderstandModelBuildRequest)
    ], CreateUnderstandModelBuildRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateUnderstandModelBuildSecurity)
    ], CreateUnderstandModelBuildRequest.prototype, "security", void 0);
    return CreateUnderstandModelBuildRequest;
}(SpeakeasyBase));
export { CreateUnderstandModelBuildRequest };
var CreateUnderstandModelBuildResponse = /** @class */ (function (_super) {
    __extends(CreateUnderstandModelBuildResponse, _super);
    function CreateUnderstandModelBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateUnderstandModelBuildResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateUnderstandModelBuildResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantModelBuild)
    ], CreateUnderstandModelBuildResponse.prototype, "previewUnderstandAssistantModelBuild", void 0);
    return CreateUnderstandModelBuildResponse;
}(SpeakeasyBase));
export { CreateUnderstandModelBuildResponse };
