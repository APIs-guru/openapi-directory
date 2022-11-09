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
var UserCtrlGetUsersPathParams = /** @class */ (function (_super) {
    __extends(UserCtrlGetUsersPathParams, _super);
    function UserCtrlGetUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" }),
        __metadata("design:type", String)
    ], UserCtrlGetUsersPathParams.prototype, "accountId", void 0);
    return UserCtrlGetUsersPathParams;
}(SpeakeasyBase));
export { UserCtrlGetUsersPathParams };
var UserCtrlGetUsersQueryParams = /** @class */ (function (_super) {
    __extends(UserCtrlGetUsersQueryParams, _super);
    function UserCtrlGetUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], UserCtrlGetUsersQueryParams.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=first_name" }),
        __metadata("design:type", String)
    ], UserCtrlGetUsersQueryParams.prototype, "firstName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=last_name" }),
        __metadata("design:type", String)
    ], UserCtrlGetUsersQueryParams.prototype, "lastName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=login_name" }),
        __metadata("design:type", String)
    ], UserCtrlGetUsersQueryParams.prototype, "loginName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], UserCtrlGetUsersQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], UserCtrlGetUsersQueryParams.prototype, "pageSize", void 0);
    return UserCtrlGetUsersQueryParams;
}(SpeakeasyBase));
export { UserCtrlGetUsersQueryParams };
var UserCtrlGetUsersSecurity = /** @class */ (function (_super) {
    __extends(UserCtrlGetUsersSecurity, _super);
    function UserCtrlGetUsersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], UserCtrlGetUsersSecurity.prototype, "bearerAuth", void 0);
    return UserCtrlGetUsersSecurity;
}(SpeakeasyBase));
export { UserCtrlGetUsersSecurity };
var UserCtrlGetUsersRequest = /** @class */ (function (_super) {
    __extends(UserCtrlGetUsersRequest, _super);
    function UserCtrlGetUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UserCtrlGetUsersPathParams)
    ], UserCtrlGetUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UserCtrlGetUsersQueryParams)
    ], UserCtrlGetUsersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UserCtrlGetUsersSecurity)
    ], UserCtrlGetUsersRequest.prototype, "security", void 0);
    return UserCtrlGetUsersRequest;
}(SpeakeasyBase));
export { UserCtrlGetUsersRequest };
var UserCtrlGetUsersResponse = /** @class */ (function (_super) {
    __extends(UserCtrlGetUsersResponse, _super);
    function UserCtrlGetUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UserCtrlGetUsersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UserCtrlGetUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UsersHalResponse)
    ], UserCtrlGetUsersResponse.prototype, "usersHalResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ValidationErrorsResponse)
    ], UserCtrlGetUsersResponse.prototype, "validationErrorsResponse", void 0);
    return UserCtrlGetUsersResponse;
}(SpeakeasyBase));
export { UserCtrlGetUsersResponse };
