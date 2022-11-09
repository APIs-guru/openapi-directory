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
export var CREATESINKVALIDATE_SERVERS = [
    "https://events.twilio.com",
];
var CreateSinkValidatePathParams = /** @class */ (function (_super) {
    __extends(CreateSinkValidatePathParams, _super);
    function CreateSinkValidatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], CreateSinkValidatePathParams.prototype, "sid", void 0);
    return CreateSinkValidatePathParams;
}(SpeakeasyBase));
export { CreateSinkValidatePathParams };
var CreateSinkValidateCreateSinkValidateRequest = /** @class */ (function (_super) {
    __extends(CreateSinkValidateCreateSinkValidateRequest, _super);
    function CreateSinkValidateCreateSinkValidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=TestId;" }),
        __metadata("design:type", String)
    ], CreateSinkValidateCreateSinkValidateRequest.prototype, "testId", void 0);
    return CreateSinkValidateCreateSinkValidateRequest;
}(SpeakeasyBase));
export { CreateSinkValidateCreateSinkValidateRequest };
var CreateSinkValidateSecurity = /** @class */ (function (_super) {
    __extends(CreateSinkValidateSecurity, _super);
    function CreateSinkValidateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSinkValidateSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSinkValidateSecurity;
}(SpeakeasyBase));
export { CreateSinkValidateSecurity };
var CreateSinkValidateRequest = /** @class */ (function (_super) {
    __extends(CreateSinkValidateRequest, _super);
    function CreateSinkValidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSinkValidateRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSinkValidatePathParams)
    ], CreateSinkValidateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSinkValidateCreateSinkValidateRequest)
    ], CreateSinkValidateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSinkValidateSecurity)
    ], CreateSinkValidateRequest.prototype, "security", void 0);
    return CreateSinkValidateRequest;
}(SpeakeasyBase));
export { CreateSinkValidateRequest };
var CreateSinkValidateResponse = /** @class */ (function (_super) {
    __extends(CreateSinkValidateResponse, _super);
    function CreateSinkValidateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSinkValidateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSinkValidateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EventsV1SinkSinkValidate)
    ], CreateSinkValidateResponse.prototype, "eventsV1SinkSinkValidate", void 0);
    return CreateSinkValidateResponse;
}(SpeakeasyBase));
export { CreateSinkValidateResponse };
