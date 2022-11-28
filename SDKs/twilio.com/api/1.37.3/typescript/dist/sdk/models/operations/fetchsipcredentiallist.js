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
export var FetchSipCredentialListServerList = [
    "https://api.twilio.com",
];
var FetchSipCredentialListPathParams = /** @class */ (function (_super) {
    __extends(FetchSipCredentialListPathParams, _super);
    function FetchSipCredentialListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], FetchSipCredentialListPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSipCredentialListPathParams.prototype, "sid", void 0);
    return FetchSipCredentialListPathParams;
}(SpeakeasyBase));
export { FetchSipCredentialListPathParams };
var FetchSipCredentialListSecurity = /** @class */ (function (_super) {
    __extends(FetchSipCredentialListSecurity, _super);
    function FetchSipCredentialListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSipCredentialListSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSipCredentialListSecurity;
}(SpeakeasyBase));
export { FetchSipCredentialListSecurity };
var FetchSipCredentialListRequest = /** @class */ (function (_super) {
    __extends(FetchSipCredentialListRequest, _super);
    function FetchSipCredentialListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSipCredentialListRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSipCredentialListPathParams)
    ], FetchSipCredentialListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSipCredentialListSecurity)
    ], FetchSipCredentialListRequest.prototype, "security", void 0);
    return FetchSipCredentialListRequest;
}(SpeakeasyBase));
export { FetchSipCredentialListRequest };
var FetchSipCredentialListResponse = /** @class */ (function (_super) {
    __extends(FetchSipCredentialListResponse, _super);
    function FetchSipCredentialListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSipCredentialListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSipCredentialListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipCredentialList)
    ], FetchSipCredentialListResponse.prototype, "apiV2010AccountSipSipCredentialList", void 0);
    return FetchSipCredentialListResponse;
}(SpeakeasyBase));
export { FetchSipCredentialListResponse };
