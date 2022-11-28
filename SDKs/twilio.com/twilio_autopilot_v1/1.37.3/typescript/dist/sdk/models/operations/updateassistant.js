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
export var UpdateAssistantServerList = [
    "https://autopilot.twilio.com",
];
var UpdateAssistantPathParams = /** @class */ (function (_super) {
    __extends(UpdateAssistantPathParams, _super);
    function UpdateAssistantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateAssistantPathParams.prototype, "sid", void 0);
    return UpdateAssistantPathParams;
}(SpeakeasyBase));
export { UpdateAssistantPathParams };
var UpdateAssistantUpdateAssistantRequest = /** @class */ (function (_super) {
    __extends(UpdateAssistantUpdateAssistantRequest, _super);
    function UpdateAssistantUpdateAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackEvents;" }),
        __metadata("design:type", String)
    ], UpdateAssistantUpdateAssistantRequest.prototype, "callbackEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateAssistantUpdateAssistantRequest.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Defaults;" }),
        __metadata("design:type", Object)
    ], UpdateAssistantUpdateAssistantRequest.prototype, "defaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DevelopmentStage;" }),
        __metadata("design:type", String)
    ], UpdateAssistantUpdateAssistantRequest.prototype, "developmentStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateAssistantUpdateAssistantRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=LogQueries;" }),
        __metadata("design:type", Boolean)
    ], UpdateAssistantUpdateAssistantRequest.prototype, "logQueries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StyleSheet;" }),
        __metadata("design:type", Object)
    ], UpdateAssistantUpdateAssistantRequest.prototype, "styleSheet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateAssistantUpdateAssistantRequest.prototype, "uniqueName", void 0);
    return UpdateAssistantUpdateAssistantRequest;
}(SpeakeasyBase));
export { UpdateAssistantUpdateAssistantRequest };
var UpdateAssistantSecurity = /** @class */ (function (_super) {
    __extends(UpdateAssistantSecurity, _super);
    function UpdateAssistantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateAssistantSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateAssistantSecurity;
}(SpeakeasyBase));
export { UpdateAssistantSecurity };
var UpdateAssistantRequest = /** @class */ (function (_super) {
    __extends(UpdateAssistantRequest, _super);
    function UpdateAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAssistantRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAssistantPathParams)
    ], UpdateAssistantRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateAssistantUpdateAssistantRequest)
    ], UpdateAssistantRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAssistantSecurity)
    ], UpdateAssistantRequest.prototype, "security", void 0);
    return UpdateAssistantRequest;
}(SpeakeasyBase));
export { UpdateAssistantRequest };
var UpdateAssistantResponse = /** @class */ (function (_super) {
    __extends(UpdateAssistantResponse, _super);
    function UpdateAssistantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAssistantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAssistantResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1Assistant)
    ], UpdateAssistantResponse.prototype, "autopilotV1Assistant", void 0);
    return UpdateAssistantResponse;
}(SpeakeasyBase));
export { UpdateAssistantResponse };
