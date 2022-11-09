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
export var FETCHORIGINATIONURL_SERVERS = [
    "https://trunking.twilio.com",
];
var FetchOriginationUrlPathParams = /** @class */ (function (_super) {
    __extends(FetchOriginationUrlPathParams, _super);
    function FetchOriginationUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchOriginationUrlPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], FetchOriginationUrlPathParams.prototype, "trunkSid", void 0);
    return FetchOriginationUrlPathParams;
}(SpeakeasyBase));
export { FetchOriginationUrlPathParams };
var FetchOriginationUrlSecurity = /** @class */ (function (_super) {
    __extends(FetchOriginationUrlSecurity, _super);
    function FetchOriginationUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchOriginationUrlSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchOriginationUrlSecurity;
}(SpeakeasyBase));
export { FetchOriginationUrlSecurity };
var FetchOriginationUrlRequest = /** @class */ (function (_super) {
    __extends(FetchOriginationUrlRequest, _super);
    function FetchOriginationUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchOriginationUrlRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchOriginationUrlPathParams)
    ], FetchOriginationUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchOriginationUrlSecurity)
    ], FetchOriginationUrlRequest.prototype, "security", void 0);
    return FetchOriginationUrlRequest;
}(SpeakeasyBase));
export { FetchOriginationUrlRequest };
var FetchOriginationUrlResponse = /** @class */ (function (_super) {
    __extends(FetchOriginationUrlResponse, _super);
    function FetchOriginationUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchOriginationUrlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchOriginationUrlResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrunkingV1TrunkOriginationUrl)
    ], FetchOriginationUrlResponse.prototype, "trunkingV1TrunkOriginationUrl", void 0);
    return FetchOriginationUrlResponse;
}(SpeakeasyBase));
export { FetchOriginationUrlResponse };
