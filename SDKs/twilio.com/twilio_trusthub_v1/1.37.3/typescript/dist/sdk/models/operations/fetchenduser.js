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
export var FetchEndUserServerList = [
    "https://trusthub.twilio.com",
];
var FetchEndUserPathParams = /** @class */ (function (_super) {
    __extends(FetchEndUserPathParams, _super);
    function FetchEndUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchEndUserPathParams.prototype, "sid", void 0);
    return FetchEndUserPathParams;
}(SpeakeasyBase));
export { FetchEndUserPathParams };
var FetchEndUserSecurity = /** @class */ (function (_super) {
    __extends(FetchEndUserSecurity, _super);
    function FetchEndUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchEndUserSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchEndUserSecurity;
}(SpeakeasyBase));
export { FetchEndUserSecurity };
var FetchEndUserRequest = /** @class */ (function (_super) {
    __extends(FetchEndUserRequest, _super);
    function FetchEndUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchEndUserRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchEndUserPathParams)
    ], FetchEndUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchEndUserSecurity)
    ], FetchEndUserRequest.prototype, "security", void 0);
    return FetchEndUserRequest;
}(SpeakeasyBase));
export { FetchEndUserRequest };
var FetchEndUserResponse = /** @class */ (function (_super) {
    __extends(FetchEndUserResponse, _super);
    function FetchEndUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchEndUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchEndUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrusthubV1EndUser)
    ], FetchEndUserResponse.prototype, "trusthubV1EndUser", void 0);
    return FetchEndUserResponse;
}(SpeakeasyBase));
export { FetchEndUserResponse };
