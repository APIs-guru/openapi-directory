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
var UserFeedback = /** @class */ (function (_super) {
    __extends(UserFeedback, _super);
    function UserFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percent_positive" }),
        __metadata("design:type", Number)
    ], UserFeedback.prototype, "percentPositive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restriction" }),
        __metadata("design:type", String)
    ], UserFeedback.prototype, "restriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], UserFeedback.prototype, "score", void 0);
    return UserFeedback;
}(SpeakeasyBase));
export { UserFeedback };
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=about_me" }),
        __metadata("design:type", String)
    ], User.prototype, "aboutMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], User.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedback" }),
        __metadata("design:type", UserFeedback)
    ], User.prototype, "feedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], User.prototype, "firstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], User.prototype, "lastname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=member_since" }),
        __metadata("design:type", String)
    ], User.prototype, "memberSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile_image" }),
        __metadata("design:type", String)
    ], User.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_time" }),
        __metadata("design:type", Number)
    ], User.prototype, "replyTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], User.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    return User;
}(SpeakeasyBase));
export { User };
