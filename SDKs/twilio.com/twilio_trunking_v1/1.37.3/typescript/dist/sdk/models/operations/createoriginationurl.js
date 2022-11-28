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
export var CreateOriginationUrlServerList = [
    "https://trunking.twilio.com",
];
var CreateOriginationUrlPathParams = /** @class */ (function (_super) {
    __extends(CreateOriginationUrlPathParams, _super);
    function CreateOriginationUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], CreateOriginationUrlPathParams.prototype, "trunkSid", void 0);
    return CreateOriginationUrlPathParams;
}(SpeakeasyBase));
export { CreateOriginationUrlPathParams };
var CreateOriginationUrlCreateOriginationUrlRequest = /** @class */ (function (_super) {
    __extends(CreateOriginationUrlCreateOriginationUrlRequest, _super);
    function CreateOriginationUrlCreateOriginationUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Enabled;" }),
        __metadata("design:type", Boolean)
    ], CreateOriginationUrlCreateOriginationUrlRequest.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateOriginationUrlCreateOriginationUrlRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Priority;" }),
        __metadata("design:type", Number)
    ], CreateOriginationUrlCreateOriginationUrlRequest.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SipUrl;" }),
        __metadata("design:type", String)
    ], CreateOriginationUrlCreateOriginationUrlRequest.prototype, "sipUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Weight;" }),
        __metadata("design:type", Number)
    ], CreateOriginationUrlCreateOriginationUrlRequest.prototype, "weight", void 0);
    return CreateOriginationUrlCreateOriginationUrlRequest;
}(SpeakeasyBase));
export { CreateOriginationUrlCreateOriginationUrlRequest };
var CreateOriginationUrlSecurity = /** @class */ (function (_super) {
    __extends(CreateOriginationUrlSecurity, _super);
    function CreateOriginationUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateOriginationUrlSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateOriginationUrlSecurity;
}(SpeakeasyBase));
export { CreateOriginationUrlSecurity };
var CreateOriginationUrlRequest = /** @class */ (function (_super) {
    __extends(CreateOriginationUrlRequest, _super);
    function CreateOriginationUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOriginationUrlRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOriginationUrlPathParams)
    ], CreateOriginationUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateOriginationUrlCreateOriginationUrlRequest)
    ], CreateOriginationUrlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOriginationUrlSecurity)
    ], CreateOriginationUrlRequest.prototype, "security", void 0);
    return CreateOriginationUrlRequest;
}(SpeakeasyBase));
export { CreateOriginationUrlRequest };
var CreateOriginationUrlResponse = /** @class */ (function (_super) {
    __extends(CreateOriginationUrlResponse, _super);
    function CreateOriginationUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOriginationUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateOriginationUrlResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrunkingV1TrunkOriginationUrl)
    ], CreateOriginationUrlResponse.prototype, "trunkingV1TrunkOriginationUrl", void 0);
    return CreateOriginationUrlResponse;
}(SpeakeasyBase));
export { CreateOriginationUrlResponse };
