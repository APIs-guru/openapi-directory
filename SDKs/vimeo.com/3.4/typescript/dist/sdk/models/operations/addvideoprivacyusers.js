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
var AddVideoPrivacyUsersPathParams = /** @class */ (function (_super) {
    __extends(AddVideoPrivacyUsersPathParams, _super);
    function AddVideoPrivacyUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], AddVideoPrivacyUsersPathParams.prototype, "videoId", void 0);
    return AddVideoPrivacyUsersPathParams;
}(SpeakeasyBase));
export { AddVideoPrivacyUsersPathParams };
var AddVideoPrivacyUsersSecurity = /** @class */ (function (_super) {
    __extends(AddVideoPrivacyUsersSecurity, _super);
    function AddVideoPrivacyUsersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AddVideoPrivacyUsersSecurity.prototype, "oauth2", void 0);
    return AddVideoPrivacyUsersSecurity;
}(SpeakeasyBase));
export { AddVideoPrivacyUsersSecurity };
var AddVideoPrivacyUsersRequest = /** @class */ (function (_super) {
    __extends(AddVideoPrivacyUsersRequest, _super);
    function AddVideoPrivacyUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoPrivacyUsersPathParams)
    ], AddVideoPrivacyUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoPrivacyUsersSecurity)
    ], AddVideoPrivacyUsersRequest.prototype, "security", void 0);
    return AddVideoPrivacyUsersRequest;
}(SpeakeasyBase));
export { AddVideoPrivacyUsersRequest };
var AddVideoPrivacyUsersResponse = /** @class */ (function (_super) {
    __extends(AddVideoPrivacyUsersResponse, _super);
    function AddVideoPrivacyUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVideoPrivacyUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVideoPrivacyUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], AddVideoPrivacyUsersResponse.prototype, "users", void 0);
    return AddVideoPrivacyUsersResponse;
}(SpeakeasyBase));
export { AddVideoPrivacyUsersResponse };
