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
export var FetchUnderstandModelBuildServerList = [
    "https://preview.twilio.com",
];
var FetchUnderstandModelBuildPathParams = /** @class */ (function (_super) {
    __extends(FetchUnderstandModelBuildPathParams, _super);
    function FetchUnderstandModelBuildPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], FetchUnderstandModelBuildPathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchUnderstandModelBuildPathParams.prototype, "sid", void 0);
    return FetchUnderstandModelBuildPathParams;
}(SpeakeasyBase));
export { FetchUnderstandModelBuildPathParams };
var FetchUnderstandModelBuildSecurity = /** @class */ (function (_super) {
    __extends(FetchUnderstandModelBuildSecurity, _super);
    function FetchUnderstandModelBuildSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchUnderstandModelBuildSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchUnderstandModelBuildSecurity;
}(SpeakeasyBase));
export { FetchUnderstandModelBuildSecurity };
var FetchUnderstandModelBuildRequest = /** @class */ (function (_super) {
    __extends(FetchUnderstandModelBuildRequest, _super);
    function FetchUnderstandModelBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUnderstandModelBuildRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUnderstandModelBuildPathParams)
    ], FetchUnderstandModelBuildRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchUnderstandModelBuildSecurity)
    ], FetchUnderstandModelBuildRequest.prototype, "security", void 0);
    return FetchUnderstandModelBuildRequest;
}(SpeakeasyBase));
export { FetchUnderstandModelBuildRequest };
var FetchUnderstandModelBuildResponse = /** @class */ (function (_super) {
    __extends(FetchUnderstandModelBuildResponse, _super);
    function FetchUnderstandModelBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchUnderstandModelBuildResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchUnderstandModelBuildResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistantModelBuild)
    ], FetchUnderstandModelBuildResponse.prototype, "previewUnderstandAssistantModelBuild", void 0);
    return FetchUnderstandModelBuildResponse;
}(SpeakeasyBase));
export { FetchUnderstandModelBuildResponse };
