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
export var DELETEMEDIA_SERVERS = [
    "https://api.twilio.com",
];
var DeleteMediaPathParams = /** @class */ (function (_super) {
    __extends(DeleteMediaPathParams, _super);
    function DeleteMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], DeleteMediaPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" }),
        __metadata("design:type", String)
    ], DeleteMediaPathParams.prototype, "messageSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteMediaPathParams.prototype, "sid", void 0);
    return DeleteMediaPathParams;
}(SpeakeasyBase));
export { DeleteMediaPathParams };
var DeleteMediaSecurity = /** @class */ (function (_super) {
    __extends(DeleteMediaSecurity, _super);
    function DeleteMediaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteMediaSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteMediaSecurity;
}(SpeakeasyBase));
export { DeleteMediaSecurity };
var DeleteMediaRequest = /** @class */ (function (_super) {
    __extends(DeleteMediaRequest, _super);
    function DeleteMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteMediaRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteMediaPathParams)
    ], DeleteMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteMediaSecurity)
    ], DeleteMediaRequest.prototype, "security", void 0);
    return DeleteMediaRequest;
}(SpeakeasyBase));
export { DeleteMediaRequest };
var DeleteMediaResponse = /** @class */ (function (_super) {
    __extends(DeleteMediaResponse, _super);
    function DeleteMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteMediaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteMediaResponse.prototype, "statusCode", void 0);
    return DeleteMediaResponse;
}(SpeakeasyBase));
export { DeleteMediaResponse };
