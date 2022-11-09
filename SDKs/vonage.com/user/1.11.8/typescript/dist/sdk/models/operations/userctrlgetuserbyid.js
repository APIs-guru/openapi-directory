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
var UserCtrlGetUserByIdPathParams = /** @class */ (function (_super) {
    __extends(UserCtrlGetUserByIdPathParams, _super);
    function UserCtrlGetUserByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" }),
        __metadata("design:type", String)
    ], UserCtrlGetUserByIdPathParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], UserCtrlGetUserByIdPathParams.prototype, "userId", void 0);
    return UserCtrlGetUserByIdPathParams;
}(SpeakeasyBase));
export { UserCtrlGetUserByIdPathParams };
var UserCtrlGetUserByIdSecurity = /** @class */ (function (_super) {
    __extends(UserCtrlGetUserByIdSecurity, _super);
    function UserCtrlGetUserByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], UserCtrlGetUserByIdSecurity.prototype, "bearerAuth", void 0);
    return UserCtrlGetUserByIdSecurity;
}(SpeakeasyBase));
export { UserCtrlGetUserByIdSecurity };
var UserCtrlGetUserByIdRequest = /** @class */ (function (_super) {
    __extends(UserCtrlGetUserByIdRequest, _super);
    function UserCtrlGetUserByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UserCtrlGetUserByIdPathParams)
    ], UserCtrlGetUserByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UserCtrlGetUserByIdSecurity)
    ], UserCtrlGetUserByIdRequest.prototype, "security", void 0);
    return UserCtrlGetUserByIdRequest;
}(SpeakeasyBase));
export { UserCtrlGetUserByIdRequest };
var UserCtrlGetUserByIdResponse = /** @class */ (function (_super) {
    __extends(UserCtrlGetUserByIdResponse, _super);
    function UserCtrlGetUserByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UserCtrlGetUserByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UserCtrlGetUserByIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UserCtrlGetUserByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UserHalResponse)
    ], UserCtrlGetUserByIdResponse.prototype, "userHalResponse", void 0);
    return UserCtrlGetUserByIdResponse;
}(SpeakeasyBase));
export { UserCtrlGetUserByIdResponse };
