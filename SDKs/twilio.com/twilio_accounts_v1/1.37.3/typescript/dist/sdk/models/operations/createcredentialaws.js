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
export var CreateCredentialAwsServerList = [
    "https://accounts.twilio.com",
];
var CreateCredentialAwsCreateCredentialAwsRequest = /** @class */ (function (_super) {
    __extends(CreateCredentialAwsCreateCredentialAwsRequest, _super);
    function CreateCredentialAwsCreateCredentialAwsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AccountSid;" }),
        __metadata("design:type", String)
    ], CreateCredentialAwsCreateCredentialAwsRequest.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Credentials;" }),
        __metadata("design:type", String)
    ], CreateCredentialAwsCreateCredentialAwsRequest.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateCredentialAwsCreateCredentialAwsRequest.prototype, "friendlyName", void 0);
    return CreateCredentialAwsCreateCredentialAwsRequest;
}(SpeakeasyBase));
export { CreateCredentialAwsCreateCredentialAwsRequest };
var CreateCredentialAwsSecurity = /** @class */ (function (_super) {
    __extends(CreateCredentialAwsSecurity, _super);
    function CreateCredentialAwsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCredentialAwsSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCredentialAwsSecurity;
}(SpeakeasyBase));
export { CreateCredentialAwsSecurity };
var CreateCredentialAwsRequest = /** @class */ (function (_super) {
    __extends(CreateCredentialAwsRequest, _super);
    function CreateCredentialAwsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCredentialAwsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCredentialAwsCreateCredentialAwsRequest)
    ], CreateCredentialAwsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCredentialAwsSecurity)
    ], CreateCredentialAwsRequest.prototype, "security", void 0);
    return CreateCredentialAwsRequest;
}(SpeakeasyBase));
export { CreateCredentialAwsRequest };
var CreateCredentialAwsResponse = /** @class */ (function (_super) {
    __extends(CreateCredentialAwsResponse, _super);
    function CreateCredentialAwsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCredentialAwsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCredentialAwsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountsV1CredentialCredentialAws)
    ], CreateCredentialAwsResponse.prototype, "accountsV1CredentialCredentialAws", void 0);
    return CreateCredentialAwsResponse;
}(SpeakeasyBase));
export { CreateCredentialAwsResponse };
