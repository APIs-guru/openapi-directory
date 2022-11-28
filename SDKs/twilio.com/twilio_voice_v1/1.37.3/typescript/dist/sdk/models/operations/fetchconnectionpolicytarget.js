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
export var FetchConnectionPolicyTargetServerList = [
    "https://voice.twilio.com",
];
var FetchConnectionPolicyTargetPathParams = /** @class */ (function (_super) {
    __extends(FetchConnectionPolicyTargetPathParams, _super);
    function FetchConnectionPolicyTargetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" }),
        __metadata("design:type", String)
    ], FetchConnectionPolicyTargetPathParams.prototype, "connectionPolicySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchConnectionPolicyTargetPathParams.prototype, "sid", void 0);
    return FetchConnectionPolicyTargetPathParams;
}(SpeakeasyBase));
export { FetchConnectionPolicyTargetPathParams };
var FetchConnectionPolicyTargetSecurity = /** @class */ (function (_super) {
    __extends(FetchConnectionPolicyTargetSecurity, _super);
    function FetchConnectionPolicyTargetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchConnectionPolicyTargetSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchConnectionPolicyTargetSecurity;
}(SpeakeasyBase));
export { FetchConnectionPolicyTargetSecurity };
var FetchConnectionPolicyTargetRequest = /** @class */ (function (_super) {
    __extends(FetchConnectionPolicyTargetRequest, _super);
    function FetchConnectionPolicyTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchConnectionPolicyTargetRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchConnectionPolicyTargetPathParams)
    ], FetchConnectionPolicyTargetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchConnectionPolicyTargetSecurity)
    ], FetchConnectionPolicyTargetRequest.prototype, "security", void 0);
    return FetchConnectionPolicyTargetRequest;
}(SpeakeasyBase));
export { FetchConnectionPolicyTargetRequest };
var FetchConnectionPolicyTargetResponse = /** @class */ (function (_super) {
    __extends(FetchConnectionPolicyTargetResponse, _super);
    function FetchConnectionPolicyTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchConnectionPolicyTargetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchConnectionPolicyTargetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VoiceV1ConnectionPolicyConnectionPolicyTarget)
    ], FetchConnectionPolicyTargetResponse.prototype, "voiceV1ConnectionPolicyConnectionPolicyTarget", void 0);
    return FetchConnectionPolicyTargetResponse;
}(SpeakeasyBase));
export { FetchConnectionPolicyTargetResponse };
