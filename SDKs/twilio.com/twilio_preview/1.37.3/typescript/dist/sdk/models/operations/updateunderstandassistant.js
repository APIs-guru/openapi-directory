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
export var UpdateUnderstandAssistantServerList = [
    "https://preview.twilio.com",
];
var UpdateUnderstandAssistantPathParams = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantPathParams, _super);
    function UpdateUnderstandAssistantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantPathParams.prototype, "sid", void 0);
    return UpdateUnderstandAssistantPathParams;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantPathParams };
var UpdateUnderstandAssistantUpdateUnderstandAssistantRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantUpdateUnderstandAssistantRequest, _super);
    function UpdateUnderstandAssistantUpdateUnderstandAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackEvents;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantUpdateUnderstandAssistantRequest.prototype, "callbackEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantUpdateUnderstandAssistantRequest.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FallbackActions;" }),
        __metadata("design:type", Object)
    ], UpdateUnderstandAssistantUpdateUnderstandAssistantRequest.prototype, "fallbackActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantUpdateUnderstandAssistantRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=InitiationActions;" }),
        __metadata("design:type", Object)
    ], UpdateUnderstandAssistantUpdateUnderstandAssistantRequest.prototype, "initiationActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=LogQueries;" }),
        __metadata("design:type", Boolean)
    ], UpdateUnderstandAssistantUpdateUnderstandAssistantRequest.prototype, "logQueries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StyleSheet;" }),
        __metadata("design:type", Object)
    ], UpdateUnderstandAssistantUpdateUnderstandAssistantRequest.prototype, "styleSheet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantUpdateUnderstandAssistantRequest.prototype, "uniqueName", void 0);
    return UpdateUnderstandAssistantUpdateUnderstandAssistantRequest;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantUpdateUnderstandAssistantRequest };
var UpdateUnderstandAssistantSecurity = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantSecurity, _super);
    function UpdateUnderstandAssistantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUnderstandAssistantSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUnderstandAssistantSecurity;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantSecurity };
var UpdateUnderstandAssistantRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantRequest, _super);
    function UpdateUnderstandAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUnderstandAssistantPathParams)
    ], UpdateUnderstandAssistantRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUnderstandAssistantUpdateUnderstandAssistantRequest)
    ], UpdateUnderstandAssistantRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUnderstandAssistantSecurity)
    ], UpdateUnderstandAssistantRequest.prototype, "security", void 0);
    return UpdateUnderstandAssistantRequest;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantRequest };
var UpdateUnderstandAssistantResponse = /** @class */ (function (_super) {
    __extends(UpdateUnderstandAssistantResponse, _super);
    function UpdateUnderstandAssistantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUnderstandAssistantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUnderstandAssistantResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewUnderstandAssistant)
    ], UpdateUnderstandAssistantResponse.prototype, "previewUnderstandAssistant", void 0);
    return UpdateUnderstandAssistantResponse;
}(SpeakeasyBase));
export { UpdateUnderstandAssistantResponse };
