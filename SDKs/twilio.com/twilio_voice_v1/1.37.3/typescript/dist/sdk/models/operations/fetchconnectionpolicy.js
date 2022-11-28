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
export var FetchConnectionPolicyServerList = [
    "https://voice.twilio.com",
];
var FetchConnectionPolicyPathParams = /** @class */ (function (_super) {
    __extends(FetchConnectionPolicyPathParams, _super);
    function FetchConnectionPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchConnectionPolicyPathParams.prototype, "sid", void 0);
    return FetchConnectionPolicyPathParams;
}(SpeakeasyBase));
export { FetchConnectionPolicyPathParams };
var FetchConnectionPolicySecurity = /** @class */ (function (_super) {
    __extends(FetchConnectionPolicySecurity, _super);
    function FetchConnectionPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchConnectionPolicySecurity.prototype, "accountSidAuthToken", void 0);
    return FetchConnectionPolicySecurity;
}(SpeakeasyBase));
export { FetchConnectionPolicySecurity };
var FetchConnectionPolicyRequest = /** @class */ (function (_super) {
    __extends(FetchConnectionPolicyRequest, _super);
    function FetchConnectionPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchConnectionPolicyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchConnectionPolicyPathParams)
    ], FetchConnectionPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchConnectionPolicySecurity)
    ], FetchConnectionPolicyRequest.prototype, "security", void 0);
    return FetchConnectionPolicyRequest;
}(SpeakeasyBase));
export { FetchConnectionPolicyRequest };
var FetchConnectionPolicyResponse = /** @class */ (function (_super) {
    __extends(FetchConnectionPolicyResponse, _super);
    function FetchConnectionPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchConnectionPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchConnectionPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VoiceV1ConnectionPolicy)
    ], FetchConnectionPolicyResponse.prototype, "voiceV1ConnectionPolicy", void 0);
    return FetchConnectionPolicyResponse;
}(SpeakeasyBase));
export { FetchConnectionPolicyResponse };
