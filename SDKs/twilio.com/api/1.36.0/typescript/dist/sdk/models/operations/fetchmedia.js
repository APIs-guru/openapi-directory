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
export var FETCHMEDIA_SERVERS = [
    "https://api.twilio.com",
];
var FetchMediaPathParams = /** @class */ (function (_super) {
    __extends(FetchMediaPathParams, _super);
    function FetchMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchMediaPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" }),
        __metadata("design:type", String)
    ], FetchMediaPathParams.prototype, "messageSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchMediaPathParams.prototype, "sid", void 0);
    return FetchMediaPathParams;
}(SpeakeasyBase));
export { FetchMediaPathParams };
var FetchMediaSecurity = /** @class */ (function (_super) {
    __extends(FetchMediaSecurity, _super);
    function FetchMediaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchMediaSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchMediaSecurity;
}(SpeakeasyBase));
export { FetchMediaSecurity };
var FetchMediaRequest = /** @class */ (function (_super) {
    __extends(FetchMediaRequest, _super);
    function FetchMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchMediaRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchMediaPathParams)
    ], FetchMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchMediaSecurity)
    ], FetchMediaRequest.prototype, "security", void 0);
    return FetchMediaRequest;
}(SpeakeasyBase));
export { FetchMediaRequest };
var FetchMediaResponse = /** @class */ (function (_super) {
    __extends(FetchMediaResponse, _super);
    function FetchMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchMediaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchMediaResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountMessageMedia)
    ], FetchMediaResponse.prototype, "apiV2010AccountMessageMedia", void 0);
    return FetchMediaResponse;
}(SpeakeasyBase));
export { FetchMediaResponse };
