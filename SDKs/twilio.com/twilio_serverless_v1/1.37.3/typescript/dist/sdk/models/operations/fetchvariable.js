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
export var FetchVariableServerList = [
    "https://serverless.twilio.com",
];
var FetchVariablePathParams = /** @class */ (function (_super) {
    __extends(FetchVariablePathParams, _super);
    function FetchVariablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" }),
        __metadata("design:type", String)
    ], FetchVariablePathParams.prototype, "environmentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchVariablePathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchVariablePathParams.prototype, "sid", void 0);
    return FetchVariablePathParams;
}(SpeakeasyBase));
export { FetchVariablePathParams };
var FetchVariableSecurity = /** @class */ (function (_super) {
    __extends(FetchVariableSecurity, _super);
    function FetchVariableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchVariableSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchVariableSecurity;
}(SpeakeasyBase));
export { FetchVariableSecurity };
var FetchVariableRequest = /** @class */ (function (_super) {
    __extends(FetchVariableRequest, _super);
    function FetchVariableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchVariableRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchVariablePathParams)
    ], FetchVariableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchVariableSecurity)
    ], FetchVariableRequest.prototype, "security", void 0);
    return FetchVariableRequest;
}(SpeakeasyBase));
export { FetchVariableRequest };
var FetchVariableResponse = /** @class */ (function (_super) {
    __extends(FetchVariableResponse, _super);
    function FetchVariableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchVariableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchVariableResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServerlessV1ServiceEnvironmentVariable)
    ], FetchVariableResponse.prototype, "serverlessV1ServiceEnvironmentVariable", void 0);
    return FetchVariableResponse;
}(SpeakeasyBase));
export { FetchVariableResponse };
