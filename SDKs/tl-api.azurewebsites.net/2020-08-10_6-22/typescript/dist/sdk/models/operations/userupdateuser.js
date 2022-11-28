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
var UserUpdateUserQueryParams = /** @class */ (function (_super) {
    __extends(UserUpdateUserQueryParams, _super);
    function UserUpdateUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccountNumber" }),
        __metadata("design:type", String)
    ], UserUpdateUserQueryParams.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExternalEntityNumber" }),
        __metadata("design:type", String)
    ], UserUpdateUserQueryParams.prototype, "externalEntityNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Guardian" }),
        __metadata("design:type", Number)
    ], UserUpdateUserQueryParams.prototype, "guardian", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GymNumber" }),
        __metadata("design:type", String)
    ], UserUpdateUserQueryParams.prototype, "gymNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IntroduceBy" }),
        __metadata("design:type", Number)
    ], UserUpdateUserQueryParams.prototype, "introduceBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Name" }),
        __metadata("design:type", String)
    ], UserUpdateUserQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Number" }),
        __metadata("design:type", String)
    ], UserUpdateUserQueryParams.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TypeId" }),
        __metadata("design:type", Number)
    ], UserUpdateUserQueryParams.prototype, "typeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserId" }),
        __metadata("design:type", Number)
    ], UserUpdateUserQueryParams.prototype, "userId", void 0);
    return UserUpdateUserQueryParams;
}(SpeakeasyBase));
export { UserUpdateUserQueryParams };
var UserUpdateUserRequest = /** @class */ (function (_super) {
    __extends(UserUpdateUserRequest, _super);
    function UserUpdateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserUpdateUserQueryParams)
    ], UserUpdateUserRequest.prototype, "queryParams", void 0);
    return UserUpdateUserRequest;
}(SpeakeasyBase));
export { UserUpdateUserRequest };
var UserUpdateUserResponse = /** @class */ (function (_super) {
    __extends(UserUpdateUserResponse, _super);
    function UserUpdateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserUpdateUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserUpdateUserResponse.prototype, "statusCode", void 0);
    return UserUpdateUserResponse;
}(SpeakeasyBase));
export { UserUpdateUserResponse };
