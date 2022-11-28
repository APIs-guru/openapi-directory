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
export var CreateConnectionPolicyServerList = [
    "https://voice.twilio.com",
];
var CreateConnectionPolicyCreateConnectionPolicyRequest = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyCreateConnectionPolicyRequest, _super);
    function CreateConnectionPolicyCreateConnectionPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateConnectionPolicyCreateConnectionPolicyRequest.prototype, "friendlyName", void 0);
    return CreateConnectionPolicyCreateConnectionPolicyRequest;
}(SpeakeasyBase));
export { CreateConnectionPolicyCreateConnectionPolicyRequest };
var CreateConnectionPolicySecurity = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicySecurity, _super);
    function CreateConnectionPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateConnectionPolicySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateConnectionPolicySecurity;
}(SpeakeasyBase));
export { CreateConnectionPolicySecurity };
var CreateConnectionPolicyRequest = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyRequest, _super);
    function CreateConnectionPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConnectionPolicyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateConnectionPolicyCreateConnectionPolicyRequest)
    ], CreateConnectionPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConnectionPolicySecurity)
    ], CreateConnectionPolicyRequest.prototype, "security", void 0);
    return CreateConnectionPolicyRequest;
}(SpeakeasyBase));
export { CreateConnectionPolicyRequest };
var CreateConnectionPolicyResponse = /** @class */ (function (_super) {
    __extends(CreateConnectionPolicyResponse, _super);
    function CreateConnectionPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConnectionPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateConnectionPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VoiceV1ConnectionPolicy)
    ], CreateConnectionPolicyResponse.prototype, "voiceV1ConnectionPolicy", void 0);
    return CreateConnectionPolicyResponse;
}(SpeakeasyBase));
export { CreateConnectionPolicyResponse };
