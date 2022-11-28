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
export var UpdateModelBuildServerList = [
    "https://autopilot.twilio.com",
];
var UpdateModelBuildPathParams = /** @class */ (function (_super) {
    __extends(UpdateModelBuildPathParams, _super);
    function UpdateModelBuildPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateModelBuildPathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateModelBuildPathParams.prototype, "sid", void 0);
    return UpdateModelBuildPathParams;
}(SpeakeasyBase));
export { UpdateModelBuildPathParams };
var UpdateModelBuildUpdateModelBuildRequest = /** @class */ (function (_super) {
    __extends(UpdateModelBuildUpdateModelBuildRequest, _super);
    function UpdateModelBuildUpdateModelBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateModelBuildUpdateModelBuildRequest.prototype, "uniqueName", void 0);
    return UpdateModelBuildUpdateModelBuildRequest;
}(SpeakeasyBase));
export { UpdateModelBuildUpdateModelBuildRequest };
var UpdateModelBuildSecurity = /** @class */ (function (_super) {
    __extends(UpdateModelBuildSecurity, _super);
    function UpdateModelBuildSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateModelBuildSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateModelBuildSecurity;
}(SpeakeasyBase));
export { UpdateModelBuildSecurity };
var UpdateModelBuildRequest = /** @class */ (function (_super) {
    __extends(UpdateModelBuildRequest, _super);
    function UpdateModelBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateModelBuildRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateModelBuildPathParams)
    ], UpdateModelBuildRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateModelBuildUpdateModelBuildRequest)
    ], UpdateModelBuildRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateModelBuildSecurity)
    ], UpdateModelBuildRequest.prototype, "security", void 0);
    return UpdateModelBuildRequest;
}(SpeakeasyBase));
export { UpdateModelBuildRequest };
var UpdateModelBuildResponse = /** @class */ (function (_super) {
    __extends(UpdateModelBuildResponse, _super);
    function UpdateModelBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateModelBuildResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateModelBuildResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantModelBuild)
    ], UpdateModelBuildResponse.prototype, "autopilotV1AssistantModelBuild", void 0);
    return UpdateModelBuildResponse;
}(SpeakeasyBase));
export { UpdateModelBuildResponse };
