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
export var DELETEBUILD_SERVERS = [
    "https://serverless.twilio.com",
];
var DeleteBuildPathParams = /** @class */ (function (_super) {
    __extends(DeleteBuildPathParams, _super);
    function DeleteBuildPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteBuildPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteBuildPathParams.prototype, "sid", void 0);
    return DeleteBuildPathParams;
}(SpeakeasyBase));
export { DeleteBuildPathParams };
var DeleteBuildSecurity = /** @class */ (function (_super) {
    __extends(DeleteBuildSecurity, _super);
    function DeleteBuildSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteBuildSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteBuildSecurity;
}(SpeakeasyBase));
export { DeleteBuildSecurity };
var DeleteBuildRequest = /** @class */ (function (_super) {
    __extends(DeleteBuildRequest, _super);
    function DeleteBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteBuildRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteBuildPathParams)
    ], DeleteBuildRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteBuildSecurity)
    ], DeleteBuildRequest.prototype, "security", void 0);
    return DeleteBuildRequest;
}(SpeakeasyBase));
export { DeleteBuildRequest };
var DeleteBuildResponse = /** @class */ (function (_super) {
    __extends(DeleteBuildResponse, _super);
    function DeleteBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteBuildResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteBuildResponse.prototype, "statusCode", void 0);
    return DeleteBuildResponse;
}(SpeakeasyBase));
export { DeleteBuildResponse };
