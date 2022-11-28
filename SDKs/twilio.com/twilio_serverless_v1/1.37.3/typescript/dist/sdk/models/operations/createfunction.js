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
export var CreateFunctionServerList = [
    "https://serverless.twilio.com",
];
var CreateFunctionPathParams = /** @class */ (function (_super) {
    __extends(CreateFunctionPathParams, _super);
    function CreateFunctionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateFunctionPathParams.prototype, "serviceSid", void 0);
    return CreateFunctionPathParams;
}(SpeakeasyBase));
export { CreateFunctionPathParams };
var CreateFunctionCreateFunctionRequest = /** @class */ (function (_super) {
    __extends(CreateFunctionCreateFunctionRequest, _super);
    function CreateFunctionCreateFunctionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateFunctionCreateFunctionRequest.prototype, "friendlyName", void 0);
    return CreateFunctionCreateFunctionRequest;
}(SpeakeasyBase));
export { CreateFunctionCreateFunctionRequest };
var CreateFunctionSecurity = /** @class */ (function (_super) {
    __extends(CreateFunctionSecurity, _super);
    function CreateFunctionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateFunctionSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateFunctionSecurity;
}(SpeakeasyBase));
export { CreateFunctionSecurity };
var CreateFunctionRequest = /** @class */ (function (_super) {
    __extends(CreateFunctionRequest, _super);
    function CreateFunctionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFunctionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFunctionPathParams)
    ], CreateFunctionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateFunctionCreateFunctionRequest)
    ], CreateFunctionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFunctionSecurity)
    ], CreateFunctionRequest.prototype, "security", void 0);
    return CreateFunctionRequest;
}(SpeakeasyBase));
export { CreateFunctionRequest };
var CreateFunctionResponse = /** @class */ (function (_super) {
    __extends(CreateFunctionResponse, _super);
    function CreateFunctionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFunctionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFunctionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServerlessV1ServiceFunction)
    ], CreateFunctionResponse.prototype, "serverlessV1ServiceFunction", void 0);
    return CreateFunctionResponse;
}(SpeakeasyBase));
export { CreateFunctionResponse };
