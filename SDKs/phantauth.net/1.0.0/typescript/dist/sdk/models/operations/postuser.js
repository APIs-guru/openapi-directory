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
// PostUserRequestBodyAddress
/**
 * The user's preferred postal address.
**/
var PostUserRequestBodyAddress = /** @class */ (function (_super) {
    __extends(PostUserRequestBodyAddress, _super);
    function PostUserRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostUserRequestBodyAddress.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=formatted" }),
        __metadata("design:type", String)
    ], PostUserRequestBodyAddress.prototype, "formatted", void 0);
    __decorate([
        Metadata({ data: "json, name=locality" }),
        __metadata("design:type", String)
    ], PostUserRequestBodyAddress.prototype, "locality", void 0);
    __decorate([
        Metadata({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], PostUserRequestBodyAddress.prototype, "postalCode", void 0);
    __decorate([
        Metadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PostUserRequestBodyAddress.prototype, "region", void 0);
    __decorate([
        Metadata({ data: "json, name=street_address" }),
        __metadata("design:type", String)
    ], PostUserRequestBodyAddress.prototype, "streetAddress", void 0);
    return PostUserRequestBodyAddress;
}(SpeakeasyBase));
export { PostUserRequestBodyAddress };
var PostUserRequestBody = /** @class */ (function (_super) {
    __extends(PostUserRequestBody, _super);
    function PostUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@id" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "atId", void 0);
    __decorate([
        Metadata({ data: "json, name=address" }),
        __metadata("design:type", PostUserRequestBodyAddress)
    ], PostUserRequestBody.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "json, name=birthdate" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "birthdate", void 0);
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=email_verified" }),
        __metadata("design:type", Boolean)
    ], PostUserRequestBody.prototype, "emailVerified", void 0);
    __decorate([
        Metadata({ data: "json, name=family_name" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "familyName", void 0);
    __decorate([
        Metadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "gender", void 0);
    __decorate([
        Metadata({ data: "json, name=given_name" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "givenName", void 0);
    __decorate([
        Metadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "locale", void 0);
    __decorate([
        Metadata({ data: "json, name=me" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "me", void 0);
    __decorate([
        Metadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "middleName", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "nickname", void 0);
    __decorate([
        Metadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "password", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number_verified" }),
        __metadata("design:type", Boolean)
    ], PostUserRequestBody.prototype, "phoneNumberVerified", void 0);
    __decorate([
        Metadata({ data: "json, name=picture" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "picture", void 0);
    __decorate([
        Metadata({ data: "json, name=preferred_username" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "preferredUsername", void 0);
    __decorate([
        Metadata({ data: "json, name=profile" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "profile", void 0);
    __decorate([
        Metadata({ data: "json, name=sub" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "sub", void 0);
    __decorate([
        Metadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Number)
    ], PostUserRequestBody.prototype, "updatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=webmail" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "webmail", void 0);
    __decorate([
        Metadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "website", void 0);
    __decorate([
        Metadata({ data: "json, name=zoneinfo" }),
        __metadata("design:type", String)
    ], PostUserRequestBody.prototype, "zoneinfo", void 0);
    return PostUserRequestBody;
}(SpeakeasyBase));
export { PostUserRequestBody };
var PostUserRequest = /** @class */ (function (_super) {
    __extends(PostUserRequest, _super);
    function PostUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostUserRequestBody)
    ], PostUserRequest.prototype, "request", void 0);
    return PostUserRequest;
}(SpeakeasyBase));
export { PostUserRequest };
var PostUserResponse = /** @class */ (function (_super) {
    __extends(PostUserResponse, _super);
    function PostUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUserResponse.prototype, "statusCode", void 0);
    return PostUserResponse;
}(SpeakeasyBase));
export { PostUserResponse };
