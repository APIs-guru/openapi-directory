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
export var UpdateSyncStreamServerList = [
    "https://sync.twilio.com",
];
var UpdateSyncStreamPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncStreamPathParams, _super);
    function UpdateSyncStreamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncStreamPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSyncStreamPathParams.prototype, "sid", void 0);
    return UpdateSyncStreamPathParams;
}(SpeakeasyBase));
export { UpdateSyncStreamPathParams };
var UpdateSyncStreamUpdateSyncStreamRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncStreamUpdateSyncStreamRequest, _super);
    function UpdateSyncStreamUpdateSyncStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], UpdateSyncStreamUpdateSyncStreamRequest.prototype, "ttl", void 0);
    return UpdateSyncStreamUpdateSyncStreamRequest;
}(SpeakeasyBase));
export { UpdateSyncStreamUpdateSyncStreamRequest };
var UpdateSyncStreamSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncStreamSecurity, _super);
    function UpdateSyncStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncStreamSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncStreamSecurity;
}(SpeakeasyBase));
export { UpdateSyncStreamSecurity };
var UpdateSyncStreamRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncStreamRequest, _super);
    function UpdateSyncStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSyncStreamRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSyncStreamPathParams)
    ], UpdateSyncStreamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncStreamUpdateSyncStreamRequest)
    ], UpdateSyncStreamRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSyncStreamSecurity)
    ], UpdateSyncStreamRequest.prototype, "security", void 0);
    return UpdateSyncStreamRequest;
}(SpeakeasyBase));
export { UpdateSyncStreamRequest };
var UpdateSyncStreamResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncStreamResponse, _super);
    function UpdateSyncStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSyncStreamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSyncStreamResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncStream)
    ], UpdateSyncStreamResponse.prototype, "syncV1ServiceSyncStream", void 0);
    return UpdateSyncStreamResponse;
}(SpeakeasyBase));
export { UpdateSyncStreamResponse };
