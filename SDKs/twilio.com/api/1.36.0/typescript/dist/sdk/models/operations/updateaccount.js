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
export var UPDATEACCOUNT_SERVERS = [
    "https://api.twilio.com",
];
var UpdateAccountPathParams = /** @class */ (function (_super) {
    __extends(UpdateAccountPathParams, _super);
    function UpdateAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateAccountPathParams.prototype, "sid", void 0);
    return UpdateAccountPathParams;
}(SpeakeasyBase));
export { UpdateAccountPathParams };
var UpdateAccountUpdateAccountRequest = /** @class */ (function (_super) {
    __extends(UpdateAccountUpdateAccountRequest, _super);
    function UpdateAccountUpdateAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequest.prototype, "status", void 0);
    return UpdateAccountUpdateAccountRequest;
}(SpeakeasyBase));
export { UpdateAccountUpdateAccountRequest };
var UpdateAccountSecurity = /** @class */ (function (_super) {
    __extends(UpdateAccountSecurity, _super);
    function UpdateAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateAccountSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateAccountSecurity;
}(SpeakeasyBase));
export { UpdateAccountSecurity };
var UpdateAccountRequest = /** @class */ (function (_super) {
    __extends(UpdateAccountRequest, _super);
    function UpdateAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAccountRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAccountPathParams)
    ], UpdateAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateAccountUpdateAccountRequest)
    ], UpdateAccountRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAccountSecurity)
    ], UpdateAccountRequest.prototype, "security", void 0);
    return UpdateAccountRequest;
}(SpeakeasyBase));
export { UpdateAccountRequest };
var UpdateAccountResponse = /** @class */ (function (_super) {
    __extends(UpdateAccountResponse, _super);
    function UpdateAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAccountResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010Account)
    ], UpdateAccountResponse.prototype, "apiV2010Account", void 0);
    return UpdateAccountResponse;
}(SpeakeasyBase));
export { UpdateAccountResponse };
