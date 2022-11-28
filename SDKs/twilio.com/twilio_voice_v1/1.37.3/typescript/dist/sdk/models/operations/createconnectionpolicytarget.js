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
export var CreateConnectionPolicyTargetServerList = [
    "https://voice.twilio.com",
];
var CreateConnectionPolicyTargetPathParams = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyTargetPathParams, _super);
    function CreateConnectionPolicyTargetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" }),
        __metadata("design:type", String)
    ], CreateConnectionPolicyTargetPathParams.prototype, "connectionPolicySid", void 0);
    return CreateConnectionPolicyTargetPathParams;
}(SpeakeasyBase));
export { CreateConnectionPolicyTargetPathParams };
var CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest, _super);
    function CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Priority;" }),
        __metadata("design:type", Number)
    ], CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Target;" }),
        __metadata("design:type", String)
    ], CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Weight;" }),
        __metadata("design:type", Number)
    ], CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest.prototype, "weight", void 0);
    return CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest;
}(SpeakeasyBase));
export { CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest };
var CreateConnectionPolicyTargetSecurity = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyTargetSecurity, _super);
    function CreateConnectionPolicyTargetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateConnectionPolicyTargetSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateConnectionPolicyTargetSecurity;
}(SpeakeasyBase));
export { CreateConnectionPolicyTargetSecurity };
var CreateConnectionPolicyTargetRequest = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyTargetRequest, _super);
    function CreateConnectionPolicyTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConnectionPolicyTargetRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConnectionPolicyTargetPathParams)
    ], CreateConnectionPolicyTargetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest)
    ], CreateConnectionPolicyTargetRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConnectionPolicyTargetSecurity)
    ], CreateConnectionPolicyTargetRequest.prototype, "security", void 0);
    return CreateConnectionPolicyTargetRequest;
}(SpeakeasyBase));
export { CreateConnectionPolicyTargetRequest };
var CreateConnectionPolicyTargetResponse = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyTargetResponse, _super);
    function CreateConnectionPolicyTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConnectionPolicyTargetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateConnectionPolicyTargetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VoiceV1ConnectionPolicyConnectionPolicyTarget)
    ], CreateConnectionPolicyTargetResponse.prototype, "voiceV1ConnectionPolicyConnectionPolicyTarget", void 0);
    return CreateConnectionPolicyTargetResponse;
}(SpeakeasyBase));
export { CreateConnectionPolicyTargetResponse };
