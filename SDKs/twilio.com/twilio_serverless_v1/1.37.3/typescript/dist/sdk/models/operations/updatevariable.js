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
export var UpdateVariableServerList = [
    "https://serverless.twilio.com",
];
var UpdateVariablePathParams = /** @class */ (function (_super) {
    __extends(UpdateVariablePathParams, _super);
    function UpdateVariablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" }),
        __metadata("design:type", String)
    ], UpdateVariablePathParams.prototype, "environmentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateVariablePathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateVariablePathParams.prototype, "sid", void 0);
    return UpdateVariablePathParams;
}(SpeakeasyBase));
export { UpdateVariablePathParams };
var UpdateVariableUpdateVariableRequest = /** @class */ (function (_super) {
    __extends(UpdateVariableUpdateVariableRequest, _super);
    function UpdateVariableUpdateVariableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Key;" }),
        __metadata("design:type", String)
    ], UpdateVariableUpdateVariableRequest.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Value;" }),
        __metadata("design:type", String)
    ], UpdateVariableUpdateVariableRequest.prototype, "value", void 0);
    return UpdateVariableUpdateVariableRequest;
}(SpeakeasyBase));
export { UpdateVariableUpdateVariableRequest };
var UpdateVariableSecurity = /** @class */ (function (_super) {
    __extends(UpdateVariableSecurity, _super);
    function UpdateVariableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateVariableSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateVariableSecurity;
}(SpeakeasyBase));
export { UpdateVariableSecurity };
var UpdateVariableRequest = /** @class */ (function (_super) {
    __extends(UpdateVariableRequest, _super);
    function UpdateVariableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateVariableRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVariablePathParams)
    ], UpdateVariableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateVariableUpdateVariableRequest)
    ], UpdateVariableRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateVariableSecurity)
    ], UpdateVariableRequest.prototype, "security", void 0);
    return UpdateVariableRequest;
}(SpeakeasyBase));
export { UpdateVariableRequest };
var UpdateVariableResponse = /** @class */ (function (_super) {
    __extends(UpdateVariableResponse, _super);
    function UpdateVariableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateVariableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateVariableResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServerlessV1ServiceEnvironmentVariable)
    ], UpdateVariableResponse.prototype, "serverlessV1ServiceEnvironmentVariable", void 0);
    return UpdateVariableResponse;
}(SpeakeasyBase));
export { UpdateVariableResponse };
