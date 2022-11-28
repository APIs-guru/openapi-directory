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
var UserApiGetSongRatingForCurrentPathParams = /** @class */ (function (_super) {
    __extends(UserApiGetSongRatingForCurrentPathParams, _super);
    function UserApiGetSongRatingForCurrentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=songId" }),
        __metadata("design:type", Number)
    ], UserApiGetSongRatingForCurrentPathParams.prototype, "songId", void 0);
    return UserApiGetSongRatingForCurrentPathParams;
}(SpeakeasyBase));
export { UserApiGetSongRatingForCurrentPathParams };
export var UserApiGetSongRatingForCurrent200ApplicationJsonEnum;
(function (UserApiGetSongRatingForCurrent200ApplicationJsonEnum) {
    UserApiGetSongRatingForCurrent200ApplicationJsonEnum["Nothing"] = "Nothing";
    UserApiGetSongRatingForCurrent200ApplicationJsonEnum["Dislike"] = "Dislike";
    UserApiGetSongRatingForCurrent200ApplicationJsonEnum["Like"] = "Like";
    UserApiGetSongRatingForCurrent200ApplicationJsonEnum["Favorite"] = "Favorite";
})(UserApiGetSongRatingForCurrent200ApplicationJsonEnum || (UserApiGetSongRatingForCurrent200ApplicationJsonEnum = {}));
export var UserApiGetSongRatingForCurrent200ApplicationJsonpEnum;
(function (UserApiGetSongRatingForCurrent200ApplicationJsonpEnum) {
    UserApiGetSongRatingForCurrent200ApplicationJsonpEnum["Nothing"] = "Nothing";
    UserApiGetSongRatingForCurrent200ApplicationJsonpEnum["Dislike"] = "Dislike";
    UserApiGetSongRatingForCurrent200ApplicationJsonpEnum["Like"] = "Like";
    UserApiGetSongRatingForCurrent200ApplicationJsonpEnum["Favorite"] = "Favorite";
})(UserApiGetSongRatingForCurrent200ApplicationJsonpEnum || (UserApiGetSongRatingForCurrent200ApplicationJsonpEnum = {}));
export var UserApiGetSongRatingForCurrent200TextJsonEnum;
(function (UserApiGetSongRatingForCurrent200TextJsonEnum) {
    UserApiGetSongRatingForCurrent200TextJsonEnum["Nothing"] = "Nothing";
    UserApiGetSongRatingForCurrent200TextJsonEnum["Dislike"] = "Dislike";
    UserApiGetSongRatingForCurrent200TextJsonEnum["Like"] = "Like";
    UserApiGetSongRatingForCurrent200TextJsonEnum["Favorite"] = "Favorite";
})(UserApiGetSongRatingForCurrent200TextJsonEnum || (UserApiGetSongRatingForCurrent200TextJsonEnum = {}));
var UserApiGetSongRatingForCurrentRequest = /** @class */ (function (_super) {
    __extends(UserApiGetSongRatingForCurrentRequest, _super);
    function UserApiGetSongRatingForCurrentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetSongRatingForCurrentPathParams)
    ], UserApiGetSongRatingForCurrentRequest.prototype, "pathParams", void 0);
    return UserApiGetSongRatingForCurrentRequest;
}(SpeakeasyBase));
export { UserApiGetSongRatingForCurrentRequest };
var UserApiGetSongRatingForCurrentResponse = /** @class */ (function (_super) {
    __extends(UserApiGetSongRatingForCurrentResponse, _super);
    function UserApiGetSongRatingForCurrentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "userApiGetSongRatingForCurrent200ApplicationJsonStringEnum", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "userApiGetSongRatingForCurrent200ApplicationJsonpStringEnum", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "userApiGetSongRatingForCurrent200TextJsonStringEnum", void 0);
    return UserApiGetSongRatingForCurrentResponse;
}(SpeakeasyBase));
export { UserApiGetSongRatingForCurrentResponse };
