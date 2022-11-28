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
var PostUsersUserIdPunchInAsManagerPathParams = /** @class */ (function (_super) {
    __extends(PostUsersUserIdPunchInAsManagerPathParams, _super);
    function PostUsersUserIdPunchInAsManagerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PostUsersUserIdPunchInAsManagerPathParams.prototype, "userId", void 0);
    return PostUsersUserIdPunchInAsManagerPathParams;
}(SpeakeasyBase));
export { PostUsersUserIdPunchInAsManagerPathParams };
var PostUsersUserIdPunchInAsManagerRequest = /** @class */ (function (_super) {
    __extends(PostUsersUserIdPunchInAsManagerRequest, _super);
    function PostUsersUserIdPunchInAsManagerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersUserIdPunchInAsManagerPathParams)
    ], PostUsersUserIdPunchInAsManagerRequest.prototype, "pathParams", void 0);
    return PostUsersUserIdPunchInAsManagerRequest;
}(SpeakeasyBase));
export { PostUsersUserIdPunchInAsManagerRequest };
var PostUsersUserIdPunchInAsManagerResponse = /** @class */ (function (_super) {
    __extends(PostUsersUserIdPunchInAsManagerResponse, _super);
    function PostUsersUserIdPunchInAsManagerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostUsersUserIdPunchInAsManagerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersUserIdPunchInAsManagerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostUsersUserIdPunchInAsManagerResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersUserIdPunchInAsManagerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserDutyInfo)
    ], PostUsersUserIdPunchInAsManagerResponse.prototype, "userDutyInfo", void 0);
    return PostUsersUserIdPunchInAsManagerResponse;
}(SpeakeasyBase));
export { PostUsersUserIdPunchInAsManagerResponse };
