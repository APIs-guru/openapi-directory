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
export var DELETECREDENTIALAWS_SERVERS = [
    "https://accounts.twilio.com",
];
var DeleteCredentialAwsPathParams = /** @class */ (function (_super) {
    __extends(DeleteCredentialAwsPathParams, _super);
    function DeleteCredentialAwsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteCredentialAwsPathParams.prototype, "sid", void 0);
    return DeleteCredentialAwsPathParams;
}(SpeakeasyBase));
export { DeleteCredentialAwsPathParams };
var DeleteCredentialAwsSecurity = /** @class */ (function (_super) {
    __extends(DeleteCredentialAwsSecurity, _super);
    function DeleteCredentialAwsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteCredentialAwsSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteCredentialAwsSecurity;
}(SpeakeasyBase));
export { DeleteCredentialAwsSecurity };
var DeleteCredentialAwsRequest = /** @class */ (function (_super) {
    __extends(DeleteCredentialAwsRequest, _super);
    function DeleteCredentialAwsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteCredentialAwsRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteCredentialAwsPathParams)
    ], DeleteCredentialAwsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteCredentialAwsSecurity)
    ], DeleteCredentialAwsRequest.prototype, "security", void 0);
    return DeleteCredentialAwsRequest;
}(SpeakeasyBase));
export { DeleteCredentialAwsRequest };
var DeleteCredentialAwsResponse = /** @class */ (function (_super) {
    __extends(DeleteCredentialAwsResponse, _super);
    function DeleteCredentialAwsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteCredentialAwsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteCredentialAwsResponse.prototype, "statusCode", void 0);
    return DeleteCredentialAwsResponse;
}(SpeakeasyBase));
export { DeleteCredentialAwsResponse };
