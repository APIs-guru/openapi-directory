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
export var CreateTrustProductChannelEndpointAssignmentServerList = [
    "https://trusthub.twilio.com",
];
var CreateTrustProductChannelEndpointAssignmentPathParams = /** @class */ (function (_super) {
    __extends(CreateTrustProductChannelEndpointAssignmentPathParams, _super);
    function CreateTrustProductChannelEndpointAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" }),
        __metadata("design:type", String)
    ], CreateTrustProductChannelEndpointAssignmentPathParams.prototype, "trustProductSid", void 0);
    return CreateTrustProductChannelEndpointAssignmentPathParams;
}(SpeakeasyBase));
export { CreateTrustProductChannelEndpointAssignmentPathParams };
var CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest = /** @class */ (function (_super) {
    __extends(CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest, _super);
    function CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ChannelEndpointSid;" }),
        __metadata("design:type", String)
    ], CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest.prototype, "channelEndpointSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ChannelEndpointType;" }),
        __metadata("design:type", String)
    ], CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest.prototype, "channelEndpointType", void 0);
    return CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest;
}(SpeakeasyBase));
export { CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest };
var CreateTrustProductChannelEndpointAssignmentSecurity = /** @class */ (function (_super) {
    __extends(CreateTrustProductChannelEndpointAssignmentSecurity, _super);
    function CreateTrustProductChannelEndpointAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTrustProductChannelEndpointAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTrustProductChannelEndpointAssignmentSecurity;
}(SpeakeasyBase));
export { CreateTrustProductChannelEndpointAssignmentSecurity };
var CreateTrustProductChannelEndpointAssignmentRequest = /** @class */ (function (_super) {
    __extends(CreateTrustProductChannelEndpointAssignmentRequest, _super);
    function CreateTrustProductChannelEndpointAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTrustProductChannelEndpointAssignmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTrustProductChannelEndpointAssignmentPathParams)
    ], CreateTrustProductChannelEndpointAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest)
    ], CreateTrustProductChannelEndpointAssignmentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTrustProductChannelEndpointAssignmentSecurity)
    ], CreateTrustProductChannelEndpointAssignmentRequest.prototype, "security", void 0);
    return CreateTrustProductChannelEndpointAssignmentRequest;
}(SpeakeasyBase));
export { CreateTrustProductChannelEndpointAssignmentRequest };
var CreateTrustProductChannelEndpointAssignmentResponse = /** @class */ (function (_super) {
    __extends(CreateTrustProductChannelEndpointAssignmentResponse, _super);
    function CreateTrustProductChannelEndpointAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTrustProductChannelEndpointAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTrustProductChannelEndpointAssignmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment)
    ], CreateTrustProductChannelEndpointAssignmentResponse.prototype, "trusthubV1TrustProductTrustProductChannelEndpointAssignment", void 0);
    return CreateTrustProductChannelEndpointAssignmentResponse;
}(SpeakeasyBase));
export { CreateTrustProductChannelEndpointAssignmentResponse };
