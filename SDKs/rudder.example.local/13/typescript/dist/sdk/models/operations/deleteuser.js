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
var DeleteUserPathParams = /** @class */ (function (_super) {
    __extends(DeleteUserPathParams, _super);
    function DeleteUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], DeleteUserPathParams.prototype, "username", void 0);
    return DeleteUserPathParams;
}(SpeakeasyBase));
export { DeleteUserPathParams };
export var DeleteUser200ApplicationJsonActionEnum;
(function (DeleteUser200ApplicationJsonActionEnum) {
    DeleteUser200ApplicationJsonActionEnum["DeleteUser"] = "deleteUser";
})(DeleteUser200ApplicationJsonActionEnum || (DeleteUser200ApplicationJsonActionEnum = {}));
var DeleteUser200ApplicationJsonDataDeletedUser = /** @class */ (function (_super) {
    __extends(DeleteUser200ApplicationJsonDataDeletedUser, _super);
    function DeleteUser200ApplicationJsonDataDeletedUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], DeleteUser200ApplicationJsonDataDeletedUser.prototype, "username", void 0);
    return DeleteUser200ApplicationJsonDataDeletedUser;
}(SpeakeasyBase));
export { DeleteUser200ApplicationJsonDataDeletedUser };
var DeleteUser200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteUser200ApplicationJsonData, _super);
    function DeleteUser200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletedUser" }),
        __metadata("design:type", DeleteUser200ApplicationJsonDataDeletedUser)
    ], DeleteUser200ApplicationJsonData.prototype, "deletedUser", void 0);
    return DeleteUser200ApplicationJsonData;
}(SpeakeasyBase));
export { DeleteUser200ApplicationJsonData };
export var DeleteUser200ApplicationJsonResultEnum;
(function (DeleteUser200ApplicationJsonResultEnum) {
    DeleteUser200ApplicationJsonResultEnum["Success"] = "success";
    DeleteUser200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteUser200ApplicationJsonResultEnum || (DeleteUser200ApplicationJsonResultEnum = {}));
var DeleteUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteUser200ApplicationJson, _super);
    function DeleteUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteUser200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", DeleteUser200ApplicationJsonData)
    ], DeleteUser200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteUser200ApplicationJson.prototype, "result", void 0);
    return DeleteUser200ApplicationJson;
}(SpeakeasyBase));
export { DeleteUser200ApplicationJson };
var DeleteUserRequest = /** @class */ (function (_super) {
    __extends(DeleteUserRequest, _super);
    function DeleteUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUserPathParams)
    ], DeleteUserRequest.prototype, "pathParams", void 0);
    return DeleteUserRequest;
}(SpeakeasyBase));
export { DeleteUserRequest };
var DeleteUserResponse = /** @class */ (function (_super) {
    __extends(DeleteUserResponse, _super);
    function DeleteUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUser200ApplicationJson)
    ], DeleteUserResponse.prototype, "deleteUser200ApplicationJsonObject", void 0);
    return DeleteUserResponse;
}(SpeakeasyBase));
export { DeleteUserResponse };
