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
export var UpdateSipCredentialListServerList = [
    "https://api.twilio.com",
];
var UpdateSipCredentialListPathParams = /** @class */ (function (_super) {
    __extends(UpdateSipCredentialListPathParams, _super);
    function UpdateSipCredentialListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateSipCredentialListPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSipCredentialListPathParams.prototype, "sid", void 0);
    return UpdateSipCredentialListPathParams;
}(SpeakeasyBase));
export { UpdateSipCredentialListPathParams };
var UpdateSipCredentialListUpdateSipCredentialListRequest = /** @class */ (function (_super) {
    __extends(UpdateSipCredentialListUpdateSipCredentialListRequest, _super);
    function UpdateSipCredentialListUpdateSipCredentialListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateSipCredentialListUpdateSipCredentialListRequest.prototype, "friendlyName", void 0);
    return UpdateSipCredentialListUpdateSipCredentialListRequest;
}(SpeakeasyBase));
export { UpdateSipCredentialListUpdateSipCredentialListRequest };
var UpdateSipCredentialListSecurity = /** @class */ (function (_super) {
    __extends(UpdateSipCredentialListSecurity, _super);
    function UpdateSipCredentialListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSipCredentialListSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSipCredentialListSecurity;
}(SpeakeasyBase));
export { UpdateSipCredentialListSecurity };
var UpdateSipCredentialListRequest = /** @class */ (function (_super) {
    __extends(UpdateSipCredentialListRequest, _super);
    function UpdateSipCredentialListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSipCredentialListRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSipCredentialListPathParams)
    ], UpdateSipCredentialListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSipCredentialListUpdateSipCredentialListRequest)
    ], UpdateSipCredentialListRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSipCredentialListSecurity)
    ], UpdateSipCredentialListRequest.prototype, "security", void 0);
    return UpdateSipCredentialListRequest;
}(SpeakeasyBase));
export { UpdateSipCredentialListRequest };
var UpdateSipCredentialListResponse = /** @class */ (function (_super) {
    __extends(UpdateSipCredentialListResponse, _super);
    function UpdateSipCredentialListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSipCredentialListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSipCredentialListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipCredentialList)
    ], UpdateSipCredentialListResponse.prototype, "apiV2010AccountSipSipCredentialList", void 0);
    return UpdateSipCredentialListResponse;
}(SpeakeasyBase));
export { UpdateSipCredentialListResponse };
