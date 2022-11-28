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
var DeleteVideoPrivacyUserPathParams = /** @class */ (function (_super) {
    __extends(DeleteVideoPrivacyUserPathParams, _super);
    function DeleteVideoPrivacyUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoPrivacyUserPathParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], DeleteVideoPrivacyUserPathParams.prototype, "videoId", void 0);
    return DeleteVideoPrivacyUserPathParams;
}(SpeakeasyBase));
export { DeleteVideoPrivacyUserPathParams };
var DeleteVideoPrivacyUserSecurity = /** @class */ (function (_super) {
    __extends(DeleteVideoPrivacyUserSecurity, _super);
    function DeleteVideoPrivacyUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteVideoPrivacyUserSecurity.prototype, "oauth2", void 0);
    return DeleteVideoPrivacyUserSecurity;
}(SpeakeasyBase));
export { DeleteVideoPrivacyUserSecurity };
var DeleteVideoPrivacyUserRequest = /** @class */ (function (_super) {
    __extends(DeleteVideoPrivacyUserRequest, _super);
    function DeleteVideoPrivacyUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoPrivacyUserPathParams)
    ], DeleteVideoPrivacyUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideoPrivacyUserSecurity)
    ], DeleteVideoPrivacyUserRequest.prototype, "security", void 0);
    return DeleteVideoPrivacyUserRequest;
}(SpeakeasyBase));
export { DeleteVideoPrivacyUserRequest };
var DeleteVideoPrivacyUserResponse = /** @class */ (function (_super) {
    __extends(DeleteVideoPrivacyUserResponse, _super);
    function DeleteVideoPrivacyUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVideoPrivacyUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVideoPrivacyUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], DeleteVideoPrivacyUserResponse.prototype, "legacyError", void 0);
    return DeleteVideoPrivacyUserResponse;
}(SpeakeasyBase));
export { DeleteVideoPrivacyUserResponse };
