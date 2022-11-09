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
export var UPDATECREDENTIALAWS_SERVERS = [
    "https://accounts.twilio.com",
];
var UpdateCredentialAwsPathParams = /** @class */ (function (_super) {
    __extends(UpdateCredentialAwsPathParams, _super);
    function UpdateCredentialAwsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateCredentialAwsPathParams.prototype, "sid", void 0);
    return UpdateCredentialAwsPathParams;
}(SpeakeasyBase));
export { UpdateCredentialAwsPathParams };
var UpdateCredentialAwsUpdateCredentialAwsRequest = /** @class */ (function (_super) {
    __extends(UpdateCredentialAwsUpdateCredentialAwsRequest, _super);
    function UpdateCredentialAwsUpdateCredentialAwsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateCredentialAwsUpdateCredentialAwsRequest.prototype, "friendlyName", void 0);
    return UpdateCredentialAwsUpdateCredentialAwsRequest;
}(SpeakeasyBase));
export { UpdateCredentialAwsUpdateCredentialAwsRequest };
var UpdateCredentialAwsSecurity = /** @class */ (function (_super) {
    __extends(UpdateCredentialAwsSecurity, _super);
    function UpdateCredentialAwsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateCredentialAwsSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateCredentialAwsSecurity;
}(SpeakeasyBase));
export { UpdateCredentialAwsSecurity };
var UpdateCredentialAwsRequest = /** @class */ (function (_super) {
    __extends(UpdateCredentialAwsRequest, _super);
    function UpdateCredentialAwsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateCredentialAwsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateCredentialAwsPathParams)
    ], UpdateCredentialAwsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateCredentialAwsUpdateCredentialAwsRequest)
    ], UpdateCredentialAwsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateCredentialAwsSecurity)
    ], UpdateCredentialAwsRequest.prototype, "security", void 0);
    return UpdateCredentialAwsRequest;
}(SpeakeasyBase));
export { UpdateCredentialAwsRequest };
var UpdateCredentialAwsResponse = /** @class */ (function (_super) {
    __extends(UpdateCredentialAwsResponse, _super);
    function UpdateCredentialAwsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateCredentialAwsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateCredentialAwsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AccountsV1CredentialCredentialAws)
    ], UpdateCredentialAwsResponse.prototype, "accountsV1CredentialCredentialAws", void 0);
    return UpdateCredentialAwsResponse;
}(SpeakeasyBase));
export { UpdateCredentialAwsResponse };
