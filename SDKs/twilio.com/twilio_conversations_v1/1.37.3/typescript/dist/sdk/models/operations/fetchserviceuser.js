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
export var FetchServiceUserServerList = [
    "https://conversations.twilio.com",
];
var FetchServiceUserPathParams = /** @class */ (function (_super) {
    __extends(FetchServiceUserPathParams, _super);
    function FetchServiceUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], FetchServiceUserPathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchServiceUserPathParams.prototype, "sid", void 0);
    return FetchServiceUserPathParams;
}(SpeakeasyBase));
export { FetchServiceUserPathParams };
var FetchServiceUserSecurity = /** @class */ (function (_super) {
    __extends(FetchServiceUserSecurity, _super);
    function FetchServiceUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchServiceUserSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchServiceUserSecurity;
}(SpeakeasyBase));
export { FetchServiceUserSecurity };
var FetchServiceUserRequest = /** @class */ (function (_super) {
    __extends(FetchServiceUserRequest, _super);
    function FetchServiceUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchServiceUserRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchServiceUserPathParams)
    ], FetchServiceUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchServiceUserSecurity)
    ], FetchServiceUserRequest.prototype, "security", void 0);
    return FetchServiceUserRequest;
}(SpeakeasyBase));
export { FetchServiceUserRequest };
var FetchServiceUserResponse = /** @class */ (function (_super) {
    __extends(FetchServiceUserResponse, _super);
    function FetchServiceUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchServiceUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchServiceUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsV1ServiceServiceUser)
    ], FetchServiceUserResponse.prototype, "conversationsV1ServiceServiceUser", void 0);
    return FetchServiceUserResponse;
}(SpeakeasyBase));
export { FetchServiceUserResponse };
