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
export var CREATECUSTOMERPROFILECHANNELENDPOINTASSIGNMENT_SERVERS = [
    "https://trusthub.twilio.com",
];
var CreateCustomerProfileChannelEndpointAssignmentPathParams = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileChannelEndpointAssignmentPathParams, _super);
    function CreateCustomerProfileChannelEndpointAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerProfileSid" }),
        __metadata("design:type", String)
    ], CreateCustomerProfileChannelEndpointAssignmentPathParams.prototype, "customerProfileSid", void 0);
    return CreateCustomerProfileChannelEndpointAssignmentPathParams;
}(SpeakeasyBase));
export { CreateCustomerProfileChannelEndpointAssignmentPathParams };
var CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest, _super);
    function CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ChannelEndpointSid;" }),
        __metadata("design:type", String)
    ], CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest.prototype, "channelEndpointSid", void 0);
    __decorate([
        Metadata({ data: "form, name=ChannelEndpointType;" }),
        __metadata("design:type", String)
    ], CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest.prototype, "channelEndpointType", void 0);
    return CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest;
}(SpeakeasyBase));
export { CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest };
var CreateCustomerProfileChannelEndpointAssignmentSecurity = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileChannelEndpointAssignmentSecurity, _super);
    function CreateCustomerProfileChannelEndpointAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCustomerProfileChannelEndpointAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCustomerProfileChannelEndpointAssignmentSecurity;
}(SpeakeasyBase));
export { CreateCustomerProfileChannelEndpointAssignmentSecurity };
var CreateCustomerProfileChannelEndpointAssignmentRequest = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileChannelEndpointAssignmentRequest, _super);
    function CreateCustomerProfileChannelEndpointAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCustomerProfileChannelEndpointAssignmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateCustomerProfileChannelEndpointAssignmentPathParams)
    ], CreateCustomerProfileChannelEndpointAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest)
    ], CreateCustomerProfileChannelEndpointAssignmentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateCustomerProfileChannelEndpointAssignmentSecurity)
    ], CreateCustomerProfileChannelEndpointAssignmentRequest.prototype, "security", void 0);
    return CreateCustomerProfileChannelEndpointAssignmentRequest;
}(SpeakeasyBase));
export { CreateCustomerProfileChannelEndpointAssignmentRequest };
var CreateCustomerProfileChannelEndpointAssignmentResponse = /** @class */ (function (_super) {
    __extends(CreateCustomerProfileChannelEndpointAssignmentResponse, _super);
    function CreateCustomerProfileChannelEndpointAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCustomerProfileChannelEndpointAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateCustomerProfileChannelEndpointAssignmentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment)
    ], CreateCustomerProfileChannelEndpointAssignmentResponse.prototype, "trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment", void 0);
    return CreateCustomerProfileChannelEndpointAssignmentResponse;
}(SpeakeasyBase));
export { CreateCustomerProfileChannelEndpointAssignmentResponse };
