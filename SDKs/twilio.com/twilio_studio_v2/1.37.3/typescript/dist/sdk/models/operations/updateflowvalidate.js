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
export var UpdateFlowValidateServerList = [
    "https://studio.twilio.com",
];
var UpdateFlowValidateUpdateFlowValidateRequest = /** @class */ (function (_super) {
    __extends(UpdateFlowValidateUpdateFlowValidateRequest, _super);
    function UpdateFlowValidateUpdateFlowValidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CommitMessage;" }),
        __metadata("design:type", String)
    ], UpdateFlowValidateUpdateFlowValidateRequest.prototype, "commitMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Definition;" }),
        __metadata("design:type", Object)
    ], UpdateFlowValidateUpdateFlowValidateRequest.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateFlowValidateUpdateFlowValidateRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateFlowValidateUpdateFlowValidateRequest.prototype, "status", void 0);
    return UpdateFlowValidateUpdateFlowValidateRequest;
}(SpeakeasyBase));
export { UpdateFlowValidateUpdateFlowValidateRequest };
var UpdateFlowValidateSecurity = /** @class */ (function (_super) {
    __extends(UpdateFlowValidateSecurity, _super);
    function UpdateFlowValidateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateFlowValidateSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateFlowValidateSecurity;
}(SpeakeasyBase));
export { UpdateFlowValidateSecurity };
var UpdateFlowValidateRequest = /** @class */ (function (_super) {
    __extends(UpdateFlowValidateRequest, _super);
    function UpdateFlowValidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFlowValidateRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateFlowValidateUpdateFlowValidateRequest)
    ], UpdateFlowValidateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFlowValidateSecurity)
    ], UpdateFlowValidateRequest.prototype, "security", void 0);
    return UpdateFlowValidateRequest;
}(SpeakeasyBase));
export { UpdateFlowValidateRequest };
var UpdateFlowValidateResponse = /** @class */ (function (_super) {
    __extends(UpdateFlowValidateResponse, _super);
    function UpdateFlowValidateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFlowValidateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFlowValidateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StudioV2FlowValidate)
    ], UpdateFlowValidateResponse.prototype, "studioV2FlowValidate", void 0);
    return UpdateFlowValidateResponse;
}(SpeakeasyBase));
export { UpdateFlowValidateResponse };
