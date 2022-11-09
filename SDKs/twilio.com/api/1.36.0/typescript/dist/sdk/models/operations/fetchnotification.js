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
export var FETCHNOTIFICATION_SERVERS = [
    "https://api.twilio.com",
];
var FetchNotificationPathParams = /** @class */ (function (_super) {
    __extends(FetchNotificationPathParams, _super);
    function FetchNotificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchNotificationPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchNotificationPathParams.prototype, "sid", void 0);
    return FetchNotificationPathParams;
}(SpeakeasyBase));
export { FetchNotificationPathParams };
var FetchNotificationSecurity = /** @class */ (function (_super) {
    __extends(FetchNotificationSecurity, _super);
    function FetchNotificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchNotificationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchNotificationSecurity;
}(SpeakeasyBase));
export { FetchNotificationSecurity };
var FetchNotificationRequest = /** @class */ (function (_super) {
    __extends(FetchNotificationRequest, _super);
    function FetchNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchNotificationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchNotificationPathParams)
    ], FetchNotificationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchNotificationSecurity)
    ], FetchNotificationRequest.prototype, "security", void 0);
    return FetchNotificationRequest;
}(SpeakeasyBase));
export { FetchNotificationRequest };
var FetchNotificationResponse = /** @class */ (function (_super) {
    __extends(FetchNotificationResponse, _super);
    function FetchNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchNotificationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountNotificationInstance)
    ], FetchNotificationResponse.prototype, "apiV2010AccountNotificationInstance", void 0);
    return FetchNotificationResponse;
}(SpeakeasyBase));
export { FetchNotificationResponse };
