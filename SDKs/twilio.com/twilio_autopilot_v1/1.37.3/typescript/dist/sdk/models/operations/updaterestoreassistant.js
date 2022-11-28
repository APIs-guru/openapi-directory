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
export var UpdateRestoreAssistantServerList = [
    "https://autopilot.twilio.com",
];
var UpdateRestoreAssistantUpdateRestoreAssistantRequest = /** @class */ (function (_super) {
    __extends(UpdateRestoreAssistantUpdateRestoreAssistantRequest, _super);
    function UpdateRestoreAssistantUpdateRestoreAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Assistant;" }),
        __metadata("design:type", String)
    ], UpdateRestoreAssistantUpdateRestoreAssistantRequest.prototype, "assistant", void 0);
    return UpdateRestoreAssistantUpdateRestoreAssistantRequest;
}(SpeakeasyBase));
export { UpdateRestoreAssistantUpdateRestoreAssistantRequest };
var UpdateRestoreAssistantSecurity = /** @class */ (function (_super) {
    __extends(UpdateRestoreAssistantSecurity, _super);
    function UpdateRestoreAssistantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateRestoreAssistantSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateRestoreAssistantSecurity;
}(SpeakeasyBase));
export { UpdateRestoreAssistantSecurity };
var UpdateRestoreAssistantRequest = /** @class */ (function (_super) {
    __extends(UpdateRestoreAssistantRequest, _super);
    function UpdateRestoreAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRestoreAssistantRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateRestoreAssistantUpdateRestoreAssistantRequest)
    ], UpdateRestoreAssistantRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRestoreAssistantSecurity)
    ], UpdateRestoreAssistantRequest.prototype, "security", void 0);
    return UpdateRestoreAssistantRequest;
}(SpeakeasyBase));
export { UpdateRestoreAssistantRequest };
var UpdateRestoreAssistantResponse = /** @class */ (function (_super) {
    __extends(UpdateRestoreAssistantResponse, _super);
    function UpdateRestoreAssistantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRestoreAssistantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRestoreAssistantResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1RestoreAssistant)
    ], UpdateRestoreAssistantResponse.prototype, "autopilotV1RestoreAssistant", void 0);
    return UpdateRestoreAssistantResponse;
}(SpeakeasyBase));
export { UpdateRestoreAssistantResponse };
