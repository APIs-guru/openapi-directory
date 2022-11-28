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
export var CreateEnvironmentServerList = [
    "https://serverless.twilio.com",
];
var CreateEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(CreateEnvironmentPathParams, _super);
    function CreateEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateEnvironmentPathParams.prototype, "serviceSid", void 0);
    return CreateEnvironmentPathParams;
}(SpeakeasyBase));
export { CreateEnvironmentPathParams };
var CreateEnvironmentCreateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(CreateEnvironmentCreateEnvironmentRequest, _super);
    function CreateEnvironmentCreateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DomainSuffix;" }),
        __metadata("design:type", String)
    ], CreateEnvironmentCreateEnvironmentRequest.prototype, "domainSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateEnvironmentCreateEnvironmentRequest.prototype, "uniqueName", void 0);
    return CreateEnvironmentCreateEnvironmentRequest;
}(SpeakeasyBase));
export { CreateEnvironmentCreateEnvironmentRequest };
var CreateEnvironmentSecurity = /** @class */ (function (_super) {
    __extends(CreateEnvironmentSecurity, _super);
    function CreateEnvironmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateEnvironmentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateEnvironmentSecurity;
}(SpeakeasyBase));
export { CreateEnvironmentSecurity };
var CreateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(CreateEnvironmentRequest, _super);
    function CreateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEnvironmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEnvironmentPathParams)
    ], CreateEnvironmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateEnvironmentCreateEnvironmentRequest)
    ], CreateEnvironmentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEnvironmentSecurity)
    ], CreateEnvironmentRequest.prototype, "security", void 0);
    return CreateEnvironmentRequest;
}(SpeakeasyBase));
export { CreateEnvironmentRequest };
var CreateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(CreateEnvironmentResponse, _super);
    function CreateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServerlessV1ServiceEnvironment)
    ], CreateEnvironmentResponse.prototype, "serverlessV1ServiceEnvironment", void 0);
    return CreateEnvironmentResponse;
}(SpeakeasyBase));
export { CreateEnvironmentResponse };
