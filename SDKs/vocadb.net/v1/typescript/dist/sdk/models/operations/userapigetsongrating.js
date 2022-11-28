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
var UserApiGetSongRatingPathParams = /** @class */ (function (_super) {
    __extends(UserApiGetSongRatingPathParams, _super);
    function UserApiGetSongRatingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserApiGetSongRatingPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=songId" }),
        __metadata("design:type", Number)
    ], UserApiGetSongRatingPathParams.prototype, "songId", void 0);
    return UserApiGetSongRatingPathParams;
}(SpeakeasyBase));
export { UserApiGetSongRatingPathParams };
export var UserApiGetSongRating200ApplicationJsonEnum;
(function (UserApiGetSongRating200ApplicationJsonEnum) {
    UserApiGetSongRating200ApplicationJsonEnum["Nothing"] = "Nothing";
    UserApiGetSongRating200ApplicationJsonEnum["Dislike"] = "Dislike";
    UserApiGetSongRating200ApplicationJsonEnum["Like"] = "Like";
    UserApiGetSongRating200ApplicationJsonEnum["Favorite"] = "Favorite";
})(UserApiGetSongRating200ApplicationJsonEnum || (UserApiGetSongRating200ApplicationJsonEnum = {}));
export var UserApiGetSongRating200ApplicationJsonpEnum;
(function (UserApiGetSongRating200ApplicationJsonpEnum) {
    UserApiGetSongRating200ApplicationJsonpEnum["Nothing"] = "Nothing";
    UserApiGetSongRating200ApplicationJsonpEnum["Dislike"] = "Dislike";
    UserApiGetSongRating200ApplicationJsonpEnum["Like"] = "Like";
    UserApiGetSongRating200ApplicationJsonpEnum["Favorite"] = "Favorite";
})(UserApiGetSongRating200ApplicationJsonpEnum || (UserApiGetSongRating200ApplicationJsonpEnum = {}));
export var UserApiGetSongRating200TextJsonEnum;
(function (UserApiGetSongRating200TextJsonEnum) {
    UserApiGetSongRating200TextJsonEnum["Nothing"] = "Nothing";
    UserApiGetSongRating200TextJsonEnum["Dislike"] = "Dislike";
    UserApiGetSongRating200TextJsonEnum["Like"] = "Like";
    UserApiGetSongRating200TextJsonEnum["Favorite"] = "Favorite";
})(UserApiGetSongRating200TextJsonEnum || (UserApiGetSongRating200TextJsonEnum = {}));
var UserApiGetSongRatingRequest = /** @class */ (function (_super) {
    __extends(UserApiGetSongRatingRequest, _super);
    function UserApiGetSongRatingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetSongRatingPathParams)
    ], UserApiGetSongRatingRequest.prototype, "pathParams", void 0);
    return UserApiGetSongRatingRequest;
}(SpeakeasyBase));
export { UserApiGetSongRatingRequest };
var UserApiGetSongRatingResponse = /** @class */ (function (_super) {
    __extends(UserApiGetSongRatingResponse, _super);
    function UserApiGetSongRatingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetSongRatingResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiGetSongRatingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingResponse.prototype, "userApiGetSongRating200ApplicationJsonStringEnum", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingResponse.prototype, "userApiGetSongRating200ApplicationJsonpStringEnum", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingResponse.prototype, "userApiGetSongRating200TextJsonStringEnum", void 0);
    return UserApiGetSongRatingResponse;
}(SpeakeasyBase));
export { UserApiGetSongRatingResponse };
