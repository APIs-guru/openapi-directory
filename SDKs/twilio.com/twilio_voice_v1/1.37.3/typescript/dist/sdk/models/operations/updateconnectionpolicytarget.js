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
export var UpdateConnectionPolicyTargetServerList = [
    "https://voice.twilio.com",
];
var UpdateConnectionPolicyTargetPathParams = /** @class */ (function (_super) {
    __extends(UpdateConnectionPolicyTargetPathParams, _super);
    function UpdateConnectionPolicyTargetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" }),
        __metadata("design:type", String)
    ], UpdateConnectionPolicyTargetPathParams.prototype, "connectionPolicySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateConnectionPolicyTargetPathParams.prototype, "sid", void 0);
    return UpdateConnectionPolicyTargetPathParams;
}(SpeakeasyBase));
export { UpdateConnectionPolicyTargetPathParams };
var UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest = /** @class */ (function (_super) {
    __extends(UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest, _super);
    function UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Priority;" }),
        __metadata("design:type", Number)
    ], UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Target;" }),
        __metadata("design:type", String)
    ], UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Weight;" }),
        __metadata("design:type", Number)
    ], UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest.prototype, "weight", void 0);
    return UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest;
}(SpeakeasyBase));
export { UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest };
var UpdateConnectionPolicyTargetSecurity = /** @class */ (function (_super) {
    __extends(UpdateConnectionPolicyTargetSecurity, _super);
    function UpdateConnectionPolicyTargetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConnectionPolicyTargetSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConnectionPolicyTargetSecurity;
}(SpeakeasyBase));
export { UpdateConnectionPolicyTargetSecurity };
var UpdateConnectionPolicyTargetRequest = /** @class */ (function (_super) {
    __extends(UpdateConnectionPolicyTargetRequest, _super);
    function UpdateConnectionPolicyTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateConnectionPolicyTargetRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConnectionPolicyTargetPathParams)
    ], UpdateConnectionPolicyTargetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest)
    ], UpdateConnectionPolicyTargetRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConnectionPolicyTargetSecurity)
    ], UpdateConnectionPolicyTargetRequest.prototype, "security", void 0);
    return UpdateConnectionPolicyTargetRequest;
}(SpeakeasyBase));
export { UpdateConnectionPolicyTargetRequest };
var UpdateConnectionPolicyTargetResponse = /** @class */ (function (_super) {
    __extends(UpdateConnectionPolicyTargetResponse, _super);
    function UpdateConnectionPolicyTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateConnectionPolicyTargetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateConnectionPolicyTargetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VoiceV1ConnectionPolicyConnectionPolicyTarget)
    ], UpdateConnectionPolicyTargetResponse.prototype, "voiceV1ConnectionPolicyConnectionPolicyTarget", void 0);
    return UpdateConnectionPolicyTargetResponse;
}(SpeakeasyBase));
export { UpdateConnectionPolicyTargetResponse };
