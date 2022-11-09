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
export var UPDATEORIGINATIONURL_SERVERS = [
    "https://trunking.twilio.com",
];
var UpdateOriginationUrlPathParams = /** @class */ (function (_super) {
    __extends(UpdateOriginationUrlPathParams, _super);
    function UpdateOriginationUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateOriginationUrlPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], UpdateOriginationUrlPathParams.prototype, "trunkSid", void 0);
    return UpdateOriginationUrlPathParams;
}(SpeakeasyBase));
export { UpdateOriginationUrlPathParams };
var UpdateOriginationUrlUpdateOriginationUrlRequest = /** @class */ (function (_super) {
    __extends(UpdateOriginationUrlUpdateOriginationUrlRequest, _super);
    function UpdateOriginationUrlUpdateOriginationUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateOriginationUrlUpdateOriginationUrlRequest.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateOriginationUrlUpdateOriginationUrlRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Priority;" }),
        __metadata("design:type", Number)
    ], UpdateOriginationUrlUpdateOriginationUrlRequest.prototype, "priority", void 0);
    __decorate([
        Metadata({ data: "form, name=SipUrl;" }),
        __metadata("design:type", String)
    ], UpdateOriginationUrlUpdateOriginationUrlRequest.prototype, "sipUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=Weight;" }),
        __metadata("design:type", Number)
    ], UpdateOriginationUrlUpdateOriginationUrlRequest.prototype, "weight", void 0);
    return UpdateOriginationUrlUpdateOriginationUrlRequest;
}(SpeakeasyBase));
export { UpdateOriginationUrlUpdateOriginationUrlRequest };
var UpdateOriginationUrlSecurity = /** @class */ (function (_super) {
    __extends(UpdateOriginationUrlSecurity, _super);
    function UpdateOriginationUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateOriginationUrlSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateOriginationUrlSecurity;
}(SpeakeasyBase));
export { UpdateOriginationUrlSecurity };
var UpdateOriginationUrlRequest = /** @class */ (function (_super) {
    __extends(UpdateOriginationUrlRequest, _super);
    function UpdateOriginationUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateOriginationUrlRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateOriginationUrlPathParams)
    ], UpdateOriginationUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateOriginationUrlUpdateOriginationUrlRequest)
    ], UpdateOriginationUrlRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateOriginationUrlSecurity)
    ], UpdateOriginationUrlRequest.prototype, "security", void 0);
    return UpdateOriginationUrlRequest;
}(SpeakeasyBase));
export { UpdateOriginationUrlRequest };
var UpdateOriginationUrlResponse = /** @class */ (function (_super) {
    __extends(UpdateOriginationUrlResponse, _super);
    function UpdateOriginationUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateOriginationUrlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateOriginationUrlResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrunkingV1TrunkOriginationUrl)
    ], UpdateOriginationUrlResponse.prototype, "trunkingV1TrunkOriginationUrl", void 0);
    return UpdateOriginationUrlResponse;
}(SpeakeasyBase));
export { UpdateOriginationUrlResponse };
