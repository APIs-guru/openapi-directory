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
var UserApiGetOnePathParams = /** @class */ (function (_super) {
    __extends(UserApiGetOnePathParams, _super);
    function UserApiGetOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserApiGetOnePathParams.prototype, "id", void 0);
    return UserApiGetOnePathParams;
}(SpeakeasyBase));
export { UserApiGetOnePathParams };
export var UserApiGetOneFieldsEnum;
(function (UserApiGetOneFieldsEnum) {
    UserApiGetOneFieldsEnum["None"] = "None";
    UserApiGetOneFieldsEnum["KnownLanguages"] = "KnownLanguages";
    UserApiGetOneFieldsEnum["MainPicture"] = "MainPicture";
    UserApiGetOneFieldsEnum["OldUsernames"] = "OldUsernames";
})(UserApiGetOneFieldsEnum || (UserApiGetOneFieldsEnum = {}));
var UserApiGetOneQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetOneQueryParams, _super);
    function UserApiGetOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], UserApiGetOneQueryParams.prototype, "fields", void 0);
    return UserApiGetOneQueryParams;
}(SpeakeasyBase));
export { UserApiGetOneQueryParams };
var UserApiGetOneRequest = /** @class */ (function (_super) {
    __extends(UserApiGetOneRequest, _super);
    function UserApiGetOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetOnePathParams)
    ], UserApiGetOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetOneQueryParams)
    ], UserApiGetOneRequest.prototype, "queryParams", void 0);
    return UserApiGetOneRequest;
}(SpeakeasyBase));
export { UserApiGetOneRequest };
var UserApiGetOneResponse = /** @class */ (function (_super) {
    __extends(UserApiGetOneResponse, _super);
    function UserApiGetOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetOneResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiGetOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserForApiContract)
    ], UserApiGetOneResponse.prototype, "userForApiContract", void 0);
    return UserApiGetOneResponse;
}(SpeakeasyBase));
export { UserApiGetOneResponse };
