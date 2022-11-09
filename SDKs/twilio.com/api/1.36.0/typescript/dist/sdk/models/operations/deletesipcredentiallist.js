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
export var DELETESIPCREDENTIALLIST_SERVERS = [
    "https://api.twilio.com",
];
var DeleteSipCredentialListPathParams = /** @class */ (function (_super) {
    __extends(DeleteSipCredentialListPathParams, _super);
    function DeleteSipCredentialListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], DeleteSipCredentialListPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteSipCredentialListPathParams.prototype, "sid", void 0);
    return DeleteSipCredentialListPathParams;
}(SpeakeasyBase));
export { DeleteSipCredentialListPathParams };
var DeleteSipCredentialListSecurity = /** @class */ (function (_super) {
    __extends(DeleteSipCredentialListSecurity, _super);
    function DeleteSipCredentialListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSipCredentialListSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSipCredentialListSecurity;
}(SpeakeasyBase));
export { DeleteSipCredentialListSecurity };
var DeleteSipCredentialListRequest = /** @class */ (function (_super) {
    __extends(DeleteSipCredentialListRequest, _super);
    function DeleteSipCredentialListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSipCredentialListRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSipCredentialListPathParams)
    ], DeleteSipCredentialListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSipCredentialListSecurity)
    ], DeleteSipCredentialListRequest.prototype, "security", void 0);
    return DeleteSipCredentialListRequest;
}(SpeakeasyBase));
export { DeleteSipCredentialListRequest };
var DeleteSipCredentialListResponse = /** @class */ (function (_super) {
    __extends(DeleteSipCredentialListResponse, _super);
    function DeleteSipCredentialListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSipCredentialListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSipCredentialListResponse.prototype, "statusCode", void 0);
    return DeleteSipCredentialListResponse;
}(SpeakeasyBase));
export { DeleteSipCredentialListResponse };
