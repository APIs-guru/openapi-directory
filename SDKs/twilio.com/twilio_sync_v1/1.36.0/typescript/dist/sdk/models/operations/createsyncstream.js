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
export var CREATESYNCSTREAM_SERVERS = [
    "https://sync.twilio.com",
];
var CreateSyncStreamPathParams = /** @class */ (function (_super) {
    __extends(CreateSyncStreamPathParams, _super);
    function CreateSyncStreamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSyncStreamPathParams.prototype, "serviceSid", void 0);
    return CreateSyncStreamPathParams;
}(SpeakeasyBase));
export { CreateSyncStreamPathParams };
var CreateSyncStreamCreateSyncStreamRequest = /** @class */ (function (_super) {
    __extends(CreateSyncStreamCreateSyncStreamRequest, _super);
    function CreateSyncStreamCreateSyncStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], CreateSyncStreamCreateSyncStreamRequest.prototype, "ttl", void 0);
    __decorate([
        Metadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateSyncStreamCreateSyncStreamRequest.prototype, "uniqueName", void 0);
    return CreateSyncStreamCreateSyncStreamRequest;
}(SpeakeasyBase));
export { CreateSyncStreamCreateSyncStreamRequest };
var CreateSyncStreamSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncStreamSecurity, _super);
    function CreateSyncStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncStreamSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncStreamSecurity;
}(SpeakeasyBase));
export { CreateSyncStreamSecurity };
var CreateSyncStreamRequest = /** @class */ (function (_super) {
    __extends(CreateSyncStreamRequest, _super);
    function CreateSyncStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSyncStreamRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSyncStreamPathParams)
    ], CreateSyncStreamRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncStreamCreateSyncStreamRequest)
    ], CreateSyncStreamRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSyncStreamSecurity)
    ], CreateSyncStreamRequest.prototype, "security", void 0);
    return CreateSyncStreamRequest;
}(SpeakeasyBase));
export { CreateSyncStreamRequest };
var CreateSyncStreamResponse = /** @class */ (function (_super) {
    __extends(CreateSyncStreamResponse, _super);
    function CreateSyncStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSyncStreamResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSyncStreamResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncStream)
    ], CreateSyncStreamResponse.prototype, "syncV1ServiceSyncStream", void 0);
    return CreateSyncStreamResponse;
}(SpeakeasyBase));
export { CreateSyncStreamResponse };
