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
export var FETCHSYNCSTREAM_SERVERS = [
    "https://sync.twilio.com",
];
var FetchSyncStreamPathParams = /** @class */ (function (_super) {
    __extends(FetchSyncStreamPathParams, _super);
    function FetchSyncStreamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchSyncStreamPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSyncStreamPathParams.prototype, "sid", void 0);
    return FetchSyncStreamPathParams;
}(SpeakeasyBase));
export { FetchSyncStreamPathParams };
var FetchSyncStreamSecurity = /** @class */ (function (_super) {
    __extends(FetchSyncStreamSecurity, _super);
    function FetchSyncStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSyncStreamSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSyncStreamSecurity;
}(SpeakeasyBase));
export { FetchSyncStreamSecurity };
var FetchSyncStreamRequest = /** @class */ (function (_super) {
    __extends(FetchSyncStreamRequest, _super);
    function FetchSyncStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSyncStreamRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSyncStreamPathParams)
    ], FetchSyncStreamRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSyncStreamSecurity)
    ], FetchSyncStreamRequest.prototype, "security", void 0);
    return FetchSyncStreamRequest;
}(SpeakeasyBase));
export { FetchSyncStreamRequest };
var FetchSyncStreamResponse = /** @class */ (function (_super) {
    __extends(FetchSyncStreamResponse, _super);
    function FetchSyncStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSyncStreamResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchSyncStreamResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncStream)
    ], FetchSyncStreamResponse.prototype, "syncV1ServiceSyncStream", void 0);
    return FetchSyncStreamResponse;
}(SpeakeasyBase));
export { FetchSyncStreamResponse };
