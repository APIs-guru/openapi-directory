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
export var FETCHSOURCEIPMAPPING_SERVERS = [
    "https://voice.twilio.com",
];
var FetchSourceIpMappingPathParams = /** @class */ (function (_super) {
    __extends(FetchSourceIpMappingPathParams, _super);
    function FetchSourceIpMappingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSourceIpMappingPathParams.prototype, "sid", void 0);
    return FetchSourceIpMappingPathParams;
}(SpeakeasyBase));
export { FetchSourceIpMappingPathParams };
var FetchSourceIpMappingSecurity = /** @class */ (function (_super) {
    __extends(FetchSourceIpMappingSecurity, _super);
    function FetchSourceIpMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSourceIpMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSourceIpMappingSecurity;
}(SpeakeasyBase));
export { FetchSourceIpMappingSecurity };
var FetchSourceIpMappingRequest = /** @class */ (function (_super) {
    __extends(FetchSourceIpMappingRequest, _super);
    function FetchSourceIpMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSourceIpMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSourceIpMappingPathParams)
    ], FetchSourceIpMappingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSourceIpMappingSecurity)
    ], FetchSourceIpMappingRequest.prototype, "security", void 0);
    return FetchSourceIpMappingRequest;
}(SpeakeasyBase));
export { FetchSourceIpMappingRequest };
var FetchSourceIpMappingResponse = /** @class */ (function (_super) {
    __extends(FetchSourceIpMappingResponse, _super);
    function FetchSourceIpMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSourceIpMappingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchSourceIpMappingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VoiceV1SourceIpMapping)
    ], FetchSourceIpMappingResponse.prototype, "voiceV1SourceIpMapping", void 0);
    return FetchSourceIpMappingResponse;
}(SpeakeasyBase));
export { FetchSourceIpMappingResponse };
