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
export var UPDATEFUNCTION_SERVERS = [
    "https://serverless.twilio.com",
];
var UpdateFunctionPathParams = /** @class */ (function (_super) {
    __extends(UpdateFunctionPathParams, _super);
    function UpdateFunctionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateFunctionPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateFunctionPathParams.prototype, "sid", void 0);
    return UpdateFunctionPathParams;
}(SpeakeasyBase));
export { UpdateFunctionPathParams };
var UpdateFunctionUpdateFunctionRequest = /** @class */ (function (_super) {
    __extends(UpdateFunctionUpdateFunctionRequest, _super);
    function UpdateFunctionUpdateFunctionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateFunctionUpdateFunctionRequest.prototype, "friendlyName", void 0);
    return UpdateFunctionUpdateFunctionRequest;
}(SpeakeasyBase));
export { UpdateFunctionUpdateFunctionRequest };
var UpdateFunctionSecurity = /** @class */ (function (_super) {
    __extends(UpdateFunctionSecurity, _super);
    function UpdateFunctionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateFunctionSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateFunctionSecurity;
}(SpeakeasyBase));
export { UpdateFunctionSecurity };
var UpdateFunctionRequest = /** @class */ (function (_super) {
    __extends(UpdateFunctionRequest, _super);
    function UpdateFunctionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateFunctionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateFunctionPathParams)
    ], UpdateFunctionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateFunctionUpdateFunctionRequest)
    ], UpdateFunctionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateFunctionSecurity)
    ], UpdateFunctionRequest.prototype, "security", void 0);
    return UpdateFunctionRequest;
}(SpeakeasyBase));
export { UpdateFunctionRequest };
var UpdateFunctionResponse = /** @class */ (function (_super) {
    __extends(UpdateFunctionResponse, _super);
    function UpdateFunctionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateFunctionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateFunctionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ServerlessV1ServiceFunction)
    ], UpdateFunctionResponse.prototype, "serverlessV1ServiceFunction", void 0);
    return UpdateFunctionResponse;
}(SpeakeasyBase));
export { UpdateFunctionResponse };
