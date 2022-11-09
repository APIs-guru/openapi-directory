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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var UPDATECONNECTIONPOLICY_SERVERS = [
    "https://voice.twilio.com",
];
var UpdateConnectionPolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdateConnectionPolicyPathParams, _super);
    function UpdateConnectionPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateConnectionPolicyPathParams.prototype, "sid", void 0);
    return UpdateConnectionPolicyPathParams;
}(SpeakeasyBase));
export { UpdateConnectionPolicyPathParams };
var UpdateConnectionPolicyUpdateConnectionPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateConnectionPolicyUpdateConnectionPolicyRequest, _super);
    function UpdateConnectionPolicyUpdateConnectionPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateConnectionPolicyUpdateConnectionPolicyRequest.prototype, "friendlyName", void 0);
    return UpdateConnectionPolicyUpdateConnectionPolicyRequest;
}(SpeakeasyBase));
export { UpdateConnectionPolicyUpdateConnectionPolicyRequest };
var UpdateConnectionPolicySecurity = /** @class */ (function (_super) {
    __extends(UpdateConnectionPolicySecurity, _super);
    function UpdateConnectionPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateConnectionPolicySecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateConnectionPolicySecurity;
}(SpeakeasyBase));
export { UpdateConnectionPolicySecurity };
var UpdateConnectionPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateConnectionPolicyRequest, _super);
    function UpdateConnectionPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConnectionPolicyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConnectionPolicyPathParams)
    ], UpdateConnectionPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateConnectionPolicyUpdateConnectionPolicyRequest)
    ], UpdateConnectionPolicyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConnectionPolicySecurity)
    ], UpdateConnectionPolicyRequest.prototype, "security", void 0);
    return UpdateConnectionPolicyRequest;
}(SpeakeasyBase));
export { UpdateConnectionPolicyRequest };
var UpdateConnectionPolicyResponse = /** @class */ (function (_super) {
    __extends(UpdateConnectionPolicyResponse, _super);
    function UpdateConnectionPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConnectionPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateConnectionPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VoiceV1ConnectionPolicy)
    ], UpdateConnectionPolicyResponse.prototype, "voiceV1ConnectionPolicy", void 0);
    return UpdateConnectionPolicyResponse;
}(SpeakeasyBase));
export { UpdateConnectionPolicyResponse };
