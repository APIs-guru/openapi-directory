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
export var CreateSessionServerList = [
    "https://proxy.twilio.com",
];
var CreateSessionPathParams = /** @class */ (function (_super) {
    __extends(CreateSessionPathParams, _super);
    function CreateSessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSessionPathParams.prototype, "serviceSid", void 0);
    return CreateSessionPathParams;
}(SpeakeasyBase));
export { CreateSessionPathParams };
var CreateSessionCreateSessionRequest = /** @class */ (function (_super) {
    __extends(CreateSessionCreateSessionRequest, _super);
    function CreateSessionCreateSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DateExpiry;" }),
        __metadata("design:type", Date)
    ], CreateSessionCreateSessionRequest.prototype, "dateExpiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Mode;" }),
        __metadata("design:type", String)
    ], CreateSessionCreateSessionRequest.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Participants;" }),
        __metadata("design:type", Array)
    ], CreateSessionCreateSessionRequest.prototype, "participants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], CreateSessionCreateSessionRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], CreateSessionCreateSessionRequest.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateSessionCreateSessionRequest.prototype, "uniqueName", void 0);
    return CreateSessionCreateSessionRequest;
}(SpeakeasyBase));
export { CreateSessionCreateSessionRequest };
var CreateSessionSecurity = /** @class */ (function (_super) {
    __extends(CreateSessionSecurity, _super);
    function CreateSessionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSessionSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSessionSecurity;
}(SpeakeasyBase));
export { CreateSessionSecurity };
var CreateSessionRequest = /** @class */ (function (_super) {
    __extends(CreateSessionRequest, _super);
    function CreateSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSessionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSessionPathParams)
    ], CreateSessionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSessionCreateSessionRequest)
    ], CreateSessionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSessionSecurity)
    ], CreateSessionRequest.prototype, "security", void 0);
    return CreateSessionRequest;
}(SpeakeasyBase));
export { CreateSessionRequest };
var CreateSessionResponse = /** @class */ (function (_super) {
    __extends(CreateSessionResponse, _super);
    function CreateSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSessionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSessionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProxyV1ServiceSession)
    ], CreateSessionResponse.prototype, "proxyV1ServiceSession", void 0);
    return CreateSessionResponse;
}(SpeakeasyBase));
export { CreateSessionResponse };
