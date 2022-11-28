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
import * as shared from "../shared";
export var AddUser200ApplicationJsonActionEnum;
(function (AddUser200ApplicationJsonActionEnum) {
    AddUser200ApplicationJsonActionEnum["AddUser"] = "addUser";
})(AddUser200ApplicationJsonActionEnum || (AddUser200ApplicationJsonActionEnum = {}));
var AddUser200ApplicationJsonDataAddedUser = /** @class */ (function (_super) {
    __extends(AddUser200ApplicationJsonDataAddedUser, _super);
    function AddUser200ApplicationJsonDataAddedUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], AddUser200ApplicationJsonDataAddedUser.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", Array)
    ], AddUser200ApplicationJsonDataAddedUser.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], AddUser200ApplicationJsonDataAddedUser.prototype, "username", void 0);
    return AddUser200ApplicationJsonDataAddedUser;
}(SpeakeasyBase));
export { AddUser200ApplicationJsonDataAddedUser };
var AddUser200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(AddUser200ApplicationJsonData, _super);
    function AddUser200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addedUser" }),
        __metadata("design:type", AddUser200ApplicationJsonDataAddedUser)
    ], AddUser200ApplicationJsonData.prototype, "addedUser", void 0);
    return AddUser200ApplicationJsonData;
}(SpeakeasyBase));
export { AddUser200ApplicationJsonData };
export var AddUser200ApplicationJsonResultEnum;
(function (AddUser200ApplicationJsonResultEnum) {
    AddUser200ApplicationJsonResultEnum["Success"] = "success";
    AddUser200ApplicationJsonResultEnum["Error"] = "error";
})(AddUser200ApplicationJsonResultEnum || (AddUser200ApplicationJsonResultEnum = {}));
var AddUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddUser200ApplicationJson, _super);
    function AddUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], AddUser200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", AddUser200ApplicationJsonData)
    ], AddUser200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], AddUser200ApplicationJson.prototype, "result", void 0);
    return AddUser200ApplicationJson;
}(SpeakeasyBase));
export { AddUser200ApplicationJson };
var AddUserRequest = /** @class */ (function (_super) {
    __extends(AddUserRequest, _super);
    function AddUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Users)
    ], AddUserRequest.prototype, "request", void 0);
    return AddUserRequest;
}(SpeakeasyBase));
export { AddUserRequest };
var AddUserResponse = /** @class */ (function (_super) {
    __extends(AddUserResponse, _super);
    function AddUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUser200ApplicationJson)
    ], AddUserResponse.prototype, "addUser200ApplicationJsonObject", void 0);
    return AddUserResponse;
}(SpeakeasyBase));
export { AddUserResponse };
