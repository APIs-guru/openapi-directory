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
var FollowUsersAlt1RequestBody = /** @class */ (function (_super) {
    __extends(FollowUsersAlt1RequestBody, _super);
    function FollowUsersAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", Array)
    ], FollowUsersAlt1RequestBody.prototype, "users", void 0);
    return FollowUsersAlt1RequestBody;
}(SpeakeasyBase));
export { FollowUsersAlt1RequestBody };
var FollowUsersAlt1Security = /** @class */ (function (_super) {
    __extends(FollowUsersAlt1Security, _super);
    function FollowUsersAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FollowUsersAlt1Security.prototype, "oauth2", void 0);
    return FollowUsersAlt1Security;
}(SpeakeasyBase));
export { FollowUsersAlt1Security };
var FollowUsersAlt1Request = /** @class */ (function (_super) {
    __extends(FollowUsersAlt1Request, _super);
    function FollowUsersAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", FollowUsersAlt1RequestBody)
    ], FollowUsersAlt1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FollowUsersAlt1Security)
    ], FollowUsersAlt1Request.prototype, "security", void 0);
    return FollowUsersAlt1Request;
}(SpeakeasyBase));
export { FollowUsersAlt1Request };
var FollowUsersAlt1Response = /** @class */ (function (_super) {
    __extends(FollowUsersAlt1Response, _super);
    function FollowUsersAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FollowUsersAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FollowUsersAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], FollowUsersAlt1Response.prototype, "error", void 0);
    return FollowUsersAlt1Response;
}(SpeakeasyBase));
export { FollowUsersAlt1Response };
