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
export var UpdateSessionServerList = [
    "https://proxy.twilio.com",
];
var UpdateSessionPathParams = /** @class */ (function (_super) {
    __extends(UpdateSessionPathParams, _super);
    function UpdateSessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSessionPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSessionPathParams.prototype, "sid", void 0);
    return UpdateSessionPathParams;
}(SpeakeasyBase));
export { UpdateSessionPathParams };
var UpdateSessionUpdateSessionRequest = /** @class */ (function (_super) {
    __extends(UpdateSessionUpdateSessionRequest, _super);
    function UpdateSessionUpdateSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DateExpiry;" }),
        __metadata("design:type", Date)
    ], UpdateSessionUpdateSessionRequest.prototype, "dateExpiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateSessionUpdateSessionRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], UpdateSessionUpdateSessionRequest.prototype, "ttl", void 0);
    return UpdateSessionUpdateSessionRequest;
}(SpeakeasyBase));
export { UpdateSessionUpdateSessionRequest };
var UpdateSessionSecurity = /** @class */ (function (_super) {
    __extends(UpdateSessionSecurity, _super);
    function UpdateSessionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSessionSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSessionSecurity;
}(SpeakeasyBase));
export { UpdateSessionSecurity };
var UpdateSessionRequest = /** @class */ (function (_super) {
    __extends(UpdateSessionRequest, _super);
    function UpdateSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSessionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSessionPathParams)
    ], UpdateSessionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSessionUpdateSessionRequest)
    ], UpdateSessionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSessionSecurity)
    ], UpdateSessionRequest.prototype, "security", void 0);
    return UpdateSessionRequest;
}(SpeakeasyBase));
export { UpdateSessionRequest };
var UpdateSessionResponse = /** @class */ (function (_super) {
    __extends(UpdateSessionResponse, _super);
    function UpdateSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSessionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSessionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProxyV1ServiceSession)
    ], UpdateSessionResponse.prototype, "proxyV1ServiceSession", void 0);
    return UpdateSessionResponse;
}(SpeakeasyBase));
export { UpdateSessionResponse };
