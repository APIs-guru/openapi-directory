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
export var CREATETRUSTPRODUCTENTITYASSIGNMENT_SERVERS = [
    "https://trusthub.twilio.com",
];
var CreateTrustProductEntityAssignmentPathParams = /** @class */ (function (_super) {
    __extends(CreateTrustProductEntityAssignmentPathParams, _super);
    function CreateTrustProductEntityAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" }),
        __metadata("design:type", String)
    ], CreateTrustProductEntityAssignmentPathParams.prototype, "trustProductSid", void 0);
    return CreateTrustProductEntityAssignmentPathParams;
}(SpeakeasyBase));
export { CreateTrustProductEntityAssignmentPathParams };
var CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest = /** @class */ (function (_super) {
    __extends(CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest, _super);
    function CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ObjectSid;" }),
        __metadata("design:type", String)
    ], CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest.prototype, "objectSid", void 0);
    return CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest;
}(SpeakeasyBase));
export { CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest };
var CreateTrustProductEntityAssignmentSecurity = /** @class */ (function (_super) {
    __extends(CreateTrustProductEntityAssignmentSecurity, _super);
    function CreateTrustProductEntityAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTrustProductEntityAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTrustProductEntityAssignmentSecurity;
}(SpeakeasyBase));
export { CreateTrustProductEntityAssignmentSecurity };
var CreateTrustProductEntityAssignmentRequest = /** @class */ (function (_super) {
    __extends(CreateTrustProductEntityAssignmentRequest, _super);
    function CreateTrustProductEntityAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTrustProductEntityAssignmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTrustProductEntityAssignmentPathParams)
    ], CreateTrustProductEntityAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest)
    ], CreateTrustProductEntityAssignmentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTrustProductEntityAssignmentSecurity)
    ], CreateTrustProductEntityAssignmentRequest.prototype, "security", void 0);
    return CreateTrustProductEntityAssignmentRequest;
}(SpeakeasyBase));
export { CreateTrustProductEntityAssignmentRequest };
var CreateTrustProductEntityAssignmentResponse = /** @class */ (function (_super) {
    __extends(CreateTrustProductEntityAssignmentResponse, _super);
    function CreateTrustProductEntityAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTrustProductEntityAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateTrustProductEntityAssignmentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrusthubV1TrustProductTrustProductEntityAssignment)
    ], CreateTrustProductEntityAssignmentResponse.prototype, "trusthubV1TrustProductTrustProductEntityAssignment", void 0);
    return CreateTrustProductEntityAssignmentResponse;
}(SpeakeasyBase));
export { CreateTrustProductEntityAssignmentResponse };
