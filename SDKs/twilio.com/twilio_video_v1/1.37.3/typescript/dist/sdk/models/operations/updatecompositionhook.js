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
export var UpdateCompositionHookServerList = [
    "https://video.twilio.com",
];
var UpdateCompositionHookPathParams = /** @class */ (function (_super) {
    __extends(UpdateCompositionHookPathParams, _super);
    function UpdateCompositionHookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateCompositionHookPathParams.prototype, "sid", void 0);
    return UpdateCompositionHookPathParams;
}(SpeakeasyBase));
export { UpdateCompositionHookPathParams };
export var UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum;
(function (UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum) {
    UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum["Get"] = "GET";
    UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum["Post"] = "POST";
    UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum["Put"] = "PUT";
    UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum || (UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum = {}));
var UpdateCompositionHookUpdateCompositionHookRequest = /** @class */ (function (_super) {
    __extends(UpdateCompositionHookUpdateCompositionHookRequest, _super);
    function UpdateCompositionHookUpdateCompositionHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AudioSources;" }),
        __metadata("design:type", Array)
    ], UpdateCompositionHookUpdateCompositionHookRequest.prototype, "audioSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AudioSourcesExcluded;" }),
        __metadata("design:type", Array)
    ], UpdateCompositionHookUpdateCompositionHookRequest.prototype, "audioSourcesExcluded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateCompositionHookUpdateCompositionHookRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Format;" }),
        __metadata("design:type", String)
    ], UpdateCompositionHookUpdateCompositionHookRequest.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateCompositionHookUpdateCompositionHookRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Resolution;" }),
        __metadata("design:type", String)
    ], UpdateCompositionHookUpdateCompositionHookRequest.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], UpdateCompositionHookUpdateCompositionHookRequest.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateCompositionHookUpdateCompositionHookRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Trim;" }),
        __metadata("design:type", Boolean)
    ], UpdateCompositionHookUpdateCompositionHookRequest.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=VideoLayout;" }),
        __metadata("design:type", Object)
    ], UpdateCompositionHookUpdateCompositionHookRequest.prototype, "videoLayout", void 0);
    return UpdateCompositionHookUpdateCompositionHookRequest;
}(SpeakeasyBase));
export { UpdateCompositionHookUpdateCompositionHookRequest };
var UpdateCompositionHookSecurity = /** @class */ (function (_super) {
    __extends(UpdateCompositionHookSecurity, _super);
    function UpdateCompositionHookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateCompositionHookSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateCompositionHookSecurity;
}(SpeakeasyBase));
export { UpdateCompositionHookSecurity };
var UpdateCompositionHookRequest = /** @class */ (function (_super) {
    __extends(UpdateCompositionHookRequest, _super);
    function UpdateCompositionHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCompositionHookRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCompositionHookPathParams)
    ], UpdateCompositionHookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateCompositionHookUpdateCompositionHookRequest)
    ], UpdateCompositionHookRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCompositionHookSecurity)
    ], UpdateCompositionHookRequest.prototype, "security", void 0);
    return UpdateCompositionHookRequest;
}(SpeakeasyBase));
export { UpdateCompositionHookRequest };
var UpdateCompositionHookResponse = /** @class */ (function (_super) {
    __extends(UpdateCompositionHookResponse, _super);
    function UpdateCompositionHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCompositionHookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCompositionHookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideoV1CompositionHook)
    ], UpdateCompositionHookResponse.prototype, "videoV1CompositionHook", void 0);
    return UpdateCompositionHookResponse;
}(SpeakeasyBase));
export { UpdateCompositionHookResponse };
