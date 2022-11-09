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
export var FETCHFUNCTIONVERSION_SERVERS = [
    "https://serverless.twilio.com",
];
var FetchFunctionVersionPathParams = /** @class */ (function (_super) {
    __extends(FetchFunctionVersionPathParams, _super);
    function FetchFunctionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionSid" }),
        __metadata("design:type", String)
    ], FetchFunctionVersionPathParams.prototype, "functionSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchFunctionVersionPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchFunctionVersionPathParams.prototype, "sid", void 0);
    return FetchFunctionVersionPathParams;
}(SpeakeasyBase));
export { FetchFunctionVersionPathParams };
var FetchFunctionVersionSecurity = /** @class */ (function (_super) {
    __extends(FetchFunctionVersionSecurity, _super);
    function FetchFunctionVersionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchFunctionVersionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchFunctionVersionSecurity;
}(SpeakeasyBase));
export { FetchFunctionVersionSecurity };
var FetchFunctionVersionRequest = /** @class */ (function (_super) {
    __extends(FetchFunctionVersionRequest, _super);
    function FetchFunctionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchFunctionVersionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchFunctionVersionPathParams)
    ], FetchFunctionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchFunctionVersionSecurity)
    ], FetchFunctionVersionRequest.prototype, "security", void 0);
    return FetchFunctionVersionRequest;
}(SpeakeasyBase));
export { FetchFunctionVersionRequest };
var FetchFunctionVersionResponse = /** @class */ (function (_super) {
    __extends(FetchFunctionVersionResponse, _super);
    function FetchFunctionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchFunctionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchFunctionVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ServerlessV1ServiceFunctionFunctionVersion)
    ], FetchFunctionVersionResponse.prototype, "serverlessV1ServiceFunctionFunctionVersion", void 0);
    return FetchFunctionVersionResponse;
}(SpeakeasyBase));
export { FetchFunctionVersionResponse };
