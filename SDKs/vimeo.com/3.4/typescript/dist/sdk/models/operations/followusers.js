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
var FollowUsersPathParams = /** @class */ (function (_super) {
    __extends(FollowUsersPathParams, _super);
    function FollowUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], FollowUsersPathParams.prototype, "userId", void 0);
    return FollowUsersPathParams;
}(SpeakeasyBase));
export { FollowUsersPathParams };
var FollowUsersRequestBody = /** @class */ (function (_super) {
    __extends(FollowUsersRequestBody, _super);
    function FollowUsersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", Array)
    ], FollowUsersRequestBody.prototype, "users", void 0);
    return FollowUsersRequestBody;
}(SpeakeasyBase));
export { FollowUsersRequestBody };
var FollowUsersSecurity = /** @class */ (function (_super) {
    __extends(FollowUsersSecurity, _super);
    function FollowUsersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FollowUsersSecurity.prototype, "oauth2", void 0);
    return FollowUsersSecurity;
}(SpeakeasyBase));
export { FollowUsersSecurity };
var FollowUsersRequest = /** @class */ (function (_super) {
    __extends(FollowUsersRequest, _super);
    function FollowUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FollowUsersPathParams)
    ], FollowUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", FollowUsersRequestBody)
    ], FollowUsersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FollowUsersSecurity)
    ], FollowUsersRequest.prototype, "security", void 0);
    return FollowUsersRequest;
}(SpeakeasyBase));
export { FollowUsersRequest };
var FollowUsersResponse = /** @class */ (function (_super) {
    __extends(FollowUsersResponse, _super);
    function FollowUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FollowUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FollowUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], FollowUsersResponse.prototype, "error", void 0);
    return FollowUsersResponse;
}(SpeakeasyBase));
export { FollowUsersResponse };
