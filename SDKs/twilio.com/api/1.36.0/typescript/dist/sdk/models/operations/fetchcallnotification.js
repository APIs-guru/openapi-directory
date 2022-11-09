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
export var FETCHCALLNOTIFICATION_SERVERS = [
    "https://api.twilio.com",
];
var FetchCallNotificationPathParams = /** @class */ (function (_super) {
    __extends(FetchCallNotificationPathParams, _super);
    function FetchCallNotificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchCallNotificationPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], FetchCallNotificationPathParams.prototype, "callSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchCallNotificationPathParams.prototype, "sid", void 0);
    return FetchCallNotificationPathParams;
}(SpeakeasyBase));
export { FetchCallNotificationPathParams };
var FetchCallNotificationSecurity = /** @class */ (function (_super) {
    __extends(FetchCallNotificationSecurity, _super);
    function FetchCallNotificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchCallNotificationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchCallNotificationSecurity;
}(SpeakeasyBase));
export { FetchCallNotificationSecurity };
var FetchCallNotificationRequest = /** @class */ (function (_super) {
    __extends(FetchCallNotificationRequest, _super);
    function FetchCallNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchCallNotificationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchCallNotificationPathParams)
    ], FetchCallNotificationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchCallNotificationSecurity)
    ], FetchCallNotificationRequest.prototype, "security", void 0);
    return FetchCallNotificationRequest;
}(SpeakeasyBase));
export { FetchCallNotificationRequest };
var FetchCallNotificationResponse = /** @class */ (function (_super) {
    __extends(FetchCallNotificationResponse, _super);
    function FetchCallNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchCallNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchCallNotificationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountCallCallNotificationInstance)
    ], FetchCallNotificationResponse.prototype, "apiV2010AccountCallCallNotificationInstance", void 0);
    return FetchCallNotificationResponse;
}(SpeakeasyBase));
export { FetchCallNotificationResponse };
