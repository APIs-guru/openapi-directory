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
export var DELETETRUSTPRODUCTCHANNELENDPOINTASSIGNMENT_SERVERS = [
    "https://trusthub.twilio.com",
];
var DeleteTrustProductChannelEndpointAssignmentPathParams = /** @class */ (function (_super) {
    __extends(DeleteTrustProductChannelEndpointAssignmentPathParams, _super);
    function DeleteTrustProductChannelEndpointAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteTrustProductChannelEndpointAssignmentPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" }),
        __metadata("design:type", String)
    ], DeleteTrustProductChannelEndpointAssignmentPathParams.prototype, "trustProductSid", void 0);
    return DeleteTrustProductChannelEndpointAssignmentPathParams;
}(SpeakeasyBase));
export { DeleteTrustProductChannelEndpointAssignmentPathParams };
var DeleteTrustProductChannelEndpointAssignmentSecurity = /** @class */ (function (_super) {
    __extends(DeleteTrustProductChannelEndpointAssignmentSecurity, _super);
    function DeleteTrustProductChannelEndpointAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteTrustProductChannelEndpointAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteTrustProductChannelEndpointAssignmentSecurity;
}(SpeakeasyBase));
export { DeleteTrustProductChannelEndpointAssignmentSecurity };
var DeleteTrustProductChannelEndpointAssignmentRequest = /** @class */ (function (_super) {
    __extends(DeleteTrustProductChannelEndpointAssignmentRequest, _super);
    function DeleteTrustProductChannelEndpointAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteTrustProductChannelEndpointAssignmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteTrustProductChannelEndpointAssignmentPathParams)
    ], DeleteTrustProductChannelEndpointAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteTrustProductChannelEndpointAssignmentSecurity)
    ], DeleteTrustProductChannelEndpointAssignmentRequest.prototype, "security", void 0);
    return DeleteTrustProductChannelEndpointAssignmentRequest;
}(SpeakeasyBase));
export { DeleteTrustProductChannelEndpointAssignmentRequest };
var DeleteTrustProductChannelEndpointAssignmentResponse = /** @class */ (function (_super) {
    __extends(DeleteTrustProductChannelEndpointAssignmentResponse, _super);
    function DeleteTrustProductChannelEndpointAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteTrustProductChannelEndpointAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteTrustProductChannelEndpointAssignmentResponse.prototype, "statusCode", void 0);
    return DeleteTrustProductChannelEndpointAssignmentResponse;
}(SpeakeasyBase));
export { DeleteTrustProductChannelEndpointAssignmentResponse };
