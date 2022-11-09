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
export var CREATEITEMASSIGNMENT_SERVERS = [
    "https://numbers.twilio.com",
];
var CreateItemAssignmentPathParams = /** @class */ (function (_super) {
    __extends(CreateItemAssignmentPathParams, _super);
    function CreateItemAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" }),
        __metadata("design:type", String)
    ], CreateItemAssignmentPathParams.prototype, "bundleSid", void 0);
    return CreateItemAssignmentPathParams;
}(SpeakeasyBase));
export { CreateItemAssignmentPathParams };
var CreateItemAssignmentCreateItemAssignmentRequest = /** @class */ (function (_super) {
    __extends(CreateItemAssignmentCreateItemAssignmentRequest, _super);
    function CreateItemAssignmentCreateItemAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=ObjectSid;" }),
        __metadata("design:type", String)
    ], CreateItemAssignmentCreateItemAssignmentRequest.prototype, "objectSid", void 0);
    return CreateItemAssignmentCreateItemAssignmentRequest;
}(SpeakeasyBase));
export { CreateItemAssignmentCreateItemAssignmentRequest };
var CreateItemAssignmentSecurity = /** @class */ (function (_super) {
    __extends(CreateItemAssignmentSecurity, _super);
    function CreateItemAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateItemAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateItemAssignmentSecurity;
}(SpeakeasyBase));
export { CreateItemAssignmentSecurity };
var CreateItemAssignmentRequest = /** @class */ (function (_super) {
    __extends(CreateItemAssignmentRequest, _super);
    function CreateItemAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateItemAssignmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateItemAssignmentPathParams)
    ], CreateItemAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateItemAssignmentCreateItemAssignmentRequest)
    ], CreateItemAssignmentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateItemAssignmentSecurity)
    ], CreateItemAssignmentRequest.prototype, "security", void 0);
    return CreateItemAssignmentRequest;
}(SpeakeasyBase));
export { CreateItemAssignmentRequest };
var CreateItemAssignmentResponse = /** @class */ (function (_super) {
    __extends(CreateItemAssignmentResponse, _super);
    function CreateItemAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateItemAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateItemAssignmentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NumbersV2RegulatoryComplianceBundleItemAssignment)
    ], CreateItemAssignmentResponse.prototype, "numbersV2RegulatoryComplianceBundleItemAssignment", void 0);
    return CreateItemAssignmentResponse;
}(SpeakeasyBase));
export { CreateItemAssignmentResponse };
