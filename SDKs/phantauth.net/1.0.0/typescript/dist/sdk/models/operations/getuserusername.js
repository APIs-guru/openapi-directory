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
var GetUserUsernamePathParams = /** @class */ (function (_super) {
    __extends(GetUserUsernamePathParams, _super);
    function GetUserUsernamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetUserUsernamePathParams.prototype, "username", void 0);
    return GetUserUsernamePathParams;
}(SpeakeasyBase));
export { GetUserUsernamePathParams };
// GetUserUsername200ApplicationJsonAddress
/**
 * The user's preferred postal address.
**/
var GetUserUsername200ApplicationJsonAddress = /** @class */ (function (_super) {
    __extends(GetUserUsername200ApplicationJsonAddress, _super);
    function GetUserUsername200ApplicationJsonAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJsonAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formatted" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJsonAddress.prototype, "formatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locality" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJsonAddress.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJsonAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJsonAddress.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_address" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJsonAddress.prototype, "streetAddress", void 0);
    return GetUserUsername200ApplicationJsonAddress;
}(SpeakeasyBase));
export { GetUserUsername200ApplicationJsonAddress };
var GetUserUsername200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserUsername200ApplicationJson, _super);
    function GetUserUsername200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@id" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "atId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", GetUserUsername200ApplicationJsonAddress)
    ], GetUserUsername200ApplicationJson.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthdate" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "birthdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_verified" }),
        __metadata("design:type", Boolean)
    ], GetUserUsername200ApplicationJson.prototype, "emailVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=family_name" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=given_name" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "givenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=me" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "me", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "nickname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number_verified" }),
        __metadata("design:type", Boolean)
    ], GetUserUsername200ApplicationJson.prototype, "phoneNumberVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=picture" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "picture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferred_username" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "preferredUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "sub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Number)
    ], GetUserUsername200ApplicationJson.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webmail" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "webmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "website", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zoneinfo" }),
        __metadata("design:type", String)
    ], GetUserUsername200ApplicationJson.prototype, "zoneinfo", void 0);
    return GetUserUsername200ApplicationJson;
}(SpeakeasyBase));
export { GetUserUsername200ApplicationJson };
var GetUserUsernameRequest = /** @class */ (function (_super) {
    __extends(GetUserUsernameRequest, _super);
    function GetUserUsernameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserUsernamePathParams)
    ], GetUserUsernameRequest.prototype, "pathParams", void 0);
    return GetUserUsernameRequest;
}(SpeakeasyBase));
export { GetUserUsernameRequest };
var GetUserUsernameResponse = /** @class */ (function (_super) {
    __extends(GetUserUsernameResponse, _super);
    function GetUserUsernameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserUsernameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserUsername200ApplicationJson)
    ], GetUserUsernameResponse.prototype, "getUserUsername200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserUsernameResponse.prototype, "statusCode", void 0);
    return GetUserUsernameResponse;
}(SpeakeasyBase));
export { GetUserUsernameResponse };
