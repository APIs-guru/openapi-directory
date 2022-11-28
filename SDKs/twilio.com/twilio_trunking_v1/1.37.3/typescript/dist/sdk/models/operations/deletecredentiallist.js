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
export var DeleteCredentialListServerList = [
    "https://trunking.twilio.com",
];
var DeleteCredentialListPathParams = /** @class */ (function (_super) {
    __extends(DeleteCredentialListPathParams, _super);
    function DeleteCredentialListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteCredentialListPathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], DeleteCredentialListPathParams.prototype, "trunkSid", void 0);
    return DeleteCredentialListPathParams;
}(SpeakeasyBase));
export { DeleteCredentialListPathParams };
var DeleteCredentialListSecurity = /** @class */ (function (_super) {
    __extends(DeleteCredentialListSecurity, _super);
    function DeleteCredentialListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteCredentialListSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteCredentialListSecurity;
}(SpeakeasyBase));
export { DeleteCredentialListSecurity };
var DeleteCredentialListRequest = /** @class */ (function (_super) {
    __extends(DeleteCredentialListRequest, _super);
    function DeleteCredentialListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCredentialListRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCredentialListPathParams)
    ], DeleteCredentialListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCredentialListSecurity)
    ], DeleteCredentialListRequest.prototype, "security", void 0);
    return DeleteCredentialListRequest;
}(SpeakeasyBase));
export { DeleteCredentialListRequest };
var DeleteCredentialListResponse = /** @class */ (function (_super) {
    __extends(DeleteCredentialListResponse, _super);
    function DeleteCredentialListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCredentialListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCredentialListResponse.prototype, "statusCode", void 0);
    return DeleteCredentialListResponse;
}(SpeakeasyBase));
export { DeleteCredentialListResponse };
