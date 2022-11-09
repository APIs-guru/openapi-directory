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
export var CREATEVARIABLE_SERVERS = [
    "https://serverless.twilio.com",
];
var CreateVariablePathParams = /** @class */ (function (_super) {
    __extends(CreateVariablePathParams, _super);
    function CreateVariablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" }),
        __metadata("design:type", String)
    ], CreateVariablePathParams.prototype, "environmentSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateVariablePathParams.prototype, "serviceSid", void 0);
    return CreateVariablePathParams;
}(SpeakeasyBase));
export { CreateVariablePathParams };
var CreateVariableCreateVariableRequest = /** @class */ (function (_super) {
    __extends(CreateVariableCreateVariableRequest, _super);
    function CreateVariableCreateVariableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Key;" }),
        __metadata("design:type", String)
    ], CreateVariableCreateVariableRequest.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "form, name=Value;" }),
        __metadata("design:type", String)
    ], CreateVariableCreateVariableRequest.prototype, "value", void 0);
    return CreateVariableCreateVariableRequest;
}(SpeakeasyBase));
export { CreateVariableCreateVariableRequest };
var CreateVariableSecurity = /** @class */ (function (_super) {
    __extends(CreateVariableSecurity, _super);
    function CreateVariableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateVariableSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateVariableSecurity;
}(SpeakeasyBase));
export { CreateVariableSecurity };
var CreateVariableRequest = /** @class */ (function (_super) {
    __extends(CreateVariableRequest, _super);
    function CreateVariableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateVariableRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateVariablePathParams)
    ], CreateVariableRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateVariableCreateVariableRequest)
    ], CreateVariableRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateVariableSecurity)
    ], CreateVariableRequest.prototype, "security", void 0);
    return CreateVariableRequest;
}(SpeakeasyBase));
export { CreateVariableRequest };
var CreateVariableResponse = /** @class */ (function (_super) {
    __extends(CreateVariableResponse, _super);
    function CreateVariableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateVariableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateVariableResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ServerlessV1ServiceEnvironmentVariable)
    ], CreateVariableResponse.prototype, "serverlessV1ServiceEnvironmentVariable", void 0);
    return CreateVariableResponse;
}(SpeakeasyBase));
export { CreateVariableResponse };
