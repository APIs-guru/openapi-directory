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
export var DELETEUSERBINDING_SERVERS = [
    "https://chat.twilio.com",
];
var DeleteUserBindingPathParams = /** @class */ (function (_super) {
    __extends(DeleteUserBindingPathParams, _super);
    function DeleteUserBindingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteUserBindingPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteUserBindingPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], DeleteUserBindingPathParams.prototype, "userSid", void 0);
    return DeleteUserBindingPathParams;
}(SpeakeasyBase));
export { DeleteUserBindingPathParams };
var DeleteUserBindingSecurity = /** @class */ (function (_super) {
    __extends(DeleteUserBindingSecurity, _super);
    function DeleteUserBindingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteUserBindingSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteUserBindingSecurity;
}(SpeakeasyBase));
export { DeleteUserBindingSecurity };
var DeleteUserBindingRequest = /** @class */ (function (_super) {
    __extends(DeleteUserBindingRequest, _super);
    function DeleteUserBindingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteUserBindingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteUserBindingPathParams)
    ], DeleteUserBindingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteUserBindingSecurity)
    ], DeleteUserBindingRequest.prototype, "security", void 0);
    return DeleteUserBindingRequest;
}(SpeakeasyBase));
export { DeleteUserBindingRequest };
var DeleteUserBindingResponse = /** @class */ (function (_super) {
    __extends(DeleteUserBindingResponse, _super);
    function DeleteUserBindingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteUserBindingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteUserBindingResponse.prototype, "statusCode", void 0);
    return DeleteUserBindingResponse;
}(SpeakeasyBase));
export { DeleteUserBindingResponse };
