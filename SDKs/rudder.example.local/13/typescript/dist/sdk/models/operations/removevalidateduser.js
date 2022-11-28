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
var RemoveValidatedUserPathParams = /** @class */ (function (_super) {
    __extends(RemoveValidatedUserPathParams, _super);
    function RemoveValidatedUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], RemoveValidatedUserPathParams.prototype, "username", void 0);
    return RemoveValidatedUserPathParams;
}(SpeakeasyBase));
export { RemoveValidatedUserPathParams };
export var RemoveValidatedUser200ApplicationJsonActionEnum;
(function (RemoveValidatedUser200ApplicationJsonActionEnum) {
    RemoveValidatedUser200ApplicationJsonActionEnum["ListUsers"] = "listUsers";
})(RemoveValidatedUser200ApplicationJsonActionEnum || (RemoveValidatedUser200ApplicationJsonActionEnum = {}));
export var RemoveValidatedUser200ApplicationJsonResultEnum;
(function (RemoveValidatedUser200ApplicationJsonResultEnum) {
    RemoveValidatedUser200ApplicationJsonResultEnum["Success"] = "success";
    RemoveValidatedUser200ApplicationJsonResultEnum["Error"] = "error";
})(RemoveValidatedUser200ApplicationJsonResultEnum || (RemoveValidatedUser200ApplicationJsonResultEnum = {}));
var RemoveValidatedUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveValidatedUser200ApplicationJson, _super);
    function RemoveValidatedUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], RemoveValidatedUser200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], RemoveValidatedUser200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], RemoveValidatedUser200ApplicationJson.prototype, "result", void 0);
    return RemoveValidatedUser200ApplicationJson;
}(SpeakeasyBase));
export { RemoveValidatedUser200ApplicationJson };
var RemoveValidatedUserRequest = /** @class */ (function (_super) {
    __extends(RemoveValidatedUserRequest, _super);
    function RemoveValidatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveValidatedUserPathParams)
    ], RemoveValidatedUserRequest.prototype, "pathParams", void 0);
    return RemoveValidatedUserRequest;
}(SpeakeasyBase));
export { RemoveValidatedUserRequest };
var RemoveValidatedUserResponse = /** @class */ (function (_super) {
    __extends(RemoveValidatedUserResponse, _super);
    function RemoveValidatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveValidatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveValidatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveValidatedUser200ApplicationJson)
    ], RemoveValidatedUserResponse.prototype, "removeValidatedUser200ApplicationJsonObject", void 0);
    return RemoveValidatedUserResponse;
}(SpeakeasyBase));
export { RemoveValidatedUserResponse };
