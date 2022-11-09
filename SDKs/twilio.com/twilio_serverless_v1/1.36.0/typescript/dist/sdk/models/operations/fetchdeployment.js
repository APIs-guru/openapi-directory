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
export var FETCHDEPLOYMENT_SERVERS = [
    "https://serverless.twilio.com",
];
var FetchDeploymentPathParams = /** @class */ (function (_super) {
    __extends(FetchDeploymentPathParams, _super);
    function FetchDeploymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" }),
        __metadata("design:type", String)
    ], FetchDeploymentPathParams.prototype, "environmentSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchDeploymentPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchDeploymentPathParams.prototype, "sid", void 0);
    return FetchDeploymentPathParams;
}(SpeakeasyBase));
export { FetchDeploymentPathParams };
var FetchDeploymentSecurity = /** @class */ (function (_super) {
    __extends(FetchDeploymentSecurity, _super);
    function FetchDeploymentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchDeploymentSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchDeploymentSecurity;
}(SpeakeasyBase));
export { FetchDeploymentSecurity };
var FetchDeploymentRequest = /** @class */ (function (_super) {
    __extends(FetchDeploymentRequest, _super);
    function FetchDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchDeploymentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchDeploymentPathParams)
    ], FetchDeploymentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchDeploymentSecurity)
    ], FetchDeploymentRequest.prototype, "security", void 0);
    return FetchDeploymentRequest;
}(SpeakeasyBase));
export { FetchDeploymentRequest };
var FetchDeploymentResponse = /** @class */ (function (_super) {
    __extends(FetchDeploymentResponse, _super);
    function FetchDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchDeploymentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchDeploymentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ServerlessV1ServiceEnvironmentDeployment)
    ], FetchDeploymentResponse.prototype, "serverlessV1ServiceEnvironmentDeployment", void 0);
    return FetchDeploymentResponse;
}(SpeakeasyBase));
export { FetchDeploymentResponse };
