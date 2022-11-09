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
export var DELETESYNCSTREAM_SERVERS = [
    "https://sync.twilio.com",
];
var DeleteSyncStreamPathParams = /** @class */ (function (_super) {
    __extends(DeleteSyncStreamPathParams, _super);
    function DeleteSyncStreamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteSyncStreamPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteSyncStreamPathParams.prototype, "sid", void 0);
    return DeleteSyncStreamPathParams;
}(SpeakeasyBase));
export { DeleteSyncStreamPathParams };
var DeleteSyncStreamSecurity = /** @class */ (function (_super) {
    __extends(DeleteSyncStreamSecurity, _super);
    function DeleteSyncStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSyncStreamSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSyncStreamSecurity;
}(SpeakeasyBase));
export { DeleteSyncStreamSecurity };
var DeleteSyncStreamRequest = /** @class */ (function (_super) {
    __extends(DeleteSyncStreamRequest, _super);
    function DeleteSyncStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSyncStreamRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSyncStreamPathParams)
    ], DeleteSyncStreamRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSyncStreamSecurity)
    ], DeleteSyncStreamRequest.prototype, "security", void 0);
    return DeleteSyncStreamRequest;
}(SpeakeasyBase));
export { DeleteSyncStreamRequest };
var DeleteSyncStreamResponse = /** @class */ (function (_super) {
    __extends(DeleteSyncStreamResponse, _super);
    function DeleteSyncStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSyncStreamResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSyncStreamResponse.prototype, "statusCode", void 0);
    return DeleteSyncStreamResponse;
}(SpeakeasyBase));
export { DeleteSyncStreamResponse };
