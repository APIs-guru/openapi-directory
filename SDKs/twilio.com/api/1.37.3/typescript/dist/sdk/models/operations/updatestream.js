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
export var UpdateStreamServerList = [
    "https://api.twilio.com",
];
var UpdateStreamPathParams = /** @class */ (function (_super) {
    __extends(UpdateStreamPathParams, _super);
    function UpdateStreamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateStreamPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], UpdateStreamPathParams.prototype, "callSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateStreamPathParams.prototype, "sid", void 0);
    return UpdateStreamPathParams;
}(SpeakeasyBase));
export { UpdateStreamPathParams };
var UpdateStreamUpdateStreamRequest = /** @class */ (function (_super) {
    __extends(UpdateStreamUpdateStreamRequest, _super);
    function UpdateStreamUpdateStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateStreamUpdateStreamRequest.prototype, "status", void 0);
    return UpdateStreamUpdateStreamRequest;
}(SpeakeasyBase));
export { UpdateStreamUpdateStreamRequest };
var UpdateStreamSecurity = /** @class */ (function (_super) {
    __extends(UpdateStreamSecurity, _super);
    function UpdateStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateStreamSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateStreamSecurity;
}(SpeakeasyBase));
export { UpdateStreamSecurity };
var UpdateStreamRequest = /** @class */ (function (_super) {
    __extends(UpdateStreamRequest, _super);
    function UpdateStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateStreamRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStreamPathParams)
    ], UpdateStreamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateStreamUpdateStreamRequest)
    ], UpdateStreamRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStreamSecurity)
    ], UpdateStreamRequest.prototype, "security", void 0);
    return UpdateStreamRequest;
}(SpeakeasyBase));
export { UpdateStreamRequest };
var UpdateStreamResponse = /** @class */ (function (_super) {
    __extends(UpdateStreamResponse, _super);
    function UpdateStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateStreamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateStreamResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCallStream)
    ], UpdateStreamResponse.prototype, "apiV2010AccountCallStream", void 0);
    return UpdateStreamResponse;
}(SpeakeasyBase));
export { UpdateStreamResponse };
