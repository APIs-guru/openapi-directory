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
var PutUsersUserIdChangePasswordPathParams = /** @class */ (function (_super) {
    __extends(PutUsersUserIdChangePasswordPathParams, _super);
    function PutUsersUserIdChangePasswordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PutUsersUserIdChangePasswordPathParams.prototype, "userId", void 0);
    return PutUsersUserIdChangePasswordPathParams;
}(SpeakeasyBase));
export { PutUsersUserIdChangePasswordPathParams };
var PutUsersUserIdChangePasswordRequests = /** @class */ (function (_super) {
    __extends(PutUsersUserIdChangePasswordRequests, _super);
    function PutUsersUserIdChangePasswordRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UpdatePasswordInfo)
    ], PutUsersUserIdChangePasswordRequests.prototype, "updatePasswordInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdatePasswordInfo)
    ], PutUsersUserIdChangePasswordRequests.prototype, "updatePasswordInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.UpdatePasswordInfo)
    ], PutUsersUserIdChangePasswordRequests.prototype, "updatePasswordInfo2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdatePasswordInfo)
    ], PutUsersUserIdChangePasswordRequests.prototype, "updatePasswordInfo3", void 0);
    return PutUsersUserIdChangePasswordRequests;
}(SpeakeasyBase));
export { PutUsersUserIdChangePasswordRequests };
var PutUsersUserIdChangePasswordRequest = /** @class */ (function (_super) {
    __extends(PutUsersUserIdChangePasswordRequest, _super);
    function PutUsersUserIdChangePasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutUsersUserIdChangePasswordPathParams)
    ], PutUsersUserIdChangePasswordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutUsersUserIdChangePasswordRequests)
    ], PutUsersUserIdChangePasswordRequest.prototype, "request", void 0);
    return PutUsersUserIdChangePasswordRequest;
}(SpeakeasyBase));
export { PutUsersUserIdChangePasswordRequest };
var PutUsersUserIdChangePasswordResponse = /** @class */ (function (_super) {
    __extends(PutUsersUserIdChangePasswordResponse, _super);
    function PutUsersUserIdChangePasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutUsersUserIdChangePasswordResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutUsersUserIdChangePasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PutUsersUserIdChangePasswordResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutUsersUserIdChangePasswordResponse.prototype, "statusCode", void 0);
    return PutUsersUserIdChangePasswordResponse;
}(SpeakeasyBase));
export { PutUsersUserIdChangePasswordResponse };
