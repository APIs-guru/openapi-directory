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
var PostUsersUserIdCheckPermissionsPathParams = /** @class */ (function (_super) {
    __extends(PostUsersUserIdCheckPermissionsPathParams, _super);
    function PostUsersUserIdCheckPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PostUsersUserIdCheckPermissionsPathParams.prototype, "userId", void 0);
    return PostUsersUserIdCheckPermissionsPathParams;
}(SpeakeasyBase));
export { PostUsersUserIdCheckPermissionsPathParams };
var PostUsersUserIdCheckPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(PostUsersUserIdCheckPermissionsQueryParams, _super);
    function PostUsersUserIdCheckPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamId" }),
        __metadata("design:type", String)
    ], PostUsersUserIdCheckPermissionsQueryParams.prototype, "teamId", void 0);
    return PostUsersUserIdCheckPermissionsQueryParams;
}(SpeakeasyBase));
export { PostUsersUserIdCheckPermissionsQueryParams };
var PostUsersUserIdCheckPermissionsRequests = /** @class */ (function (_super) {
    __extends(PostUsersUserIdCheckPermissionsRequests, _super);
    function PostUsersUserIdCheckPermissionsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.StringItemsWrapper)
    ], PostUsersUserIdCheckPermissionsRequests.prototype, "stringItemsWrapper", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StringItemsWrapper)
    ], PostUsersUserIdCheckPermissionsRequests.prototype, "stringItemsWrapper1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.StringItemsWrapper)
    ], PostUsersUserIdCheckPermissionsRequests.prototype, "stringItemsWrapper2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.StringItemsWrapper)
    ], PostUsersUserIdCheckPermissionsRequests.prototype, "stringItemsWrapper3", void 0);
    return PostUsersUserIdCheckPermissionsRequests;
}(SpeakeasyBase));
export { PostUsersUserIdCheckPermissionsRequests };
var PostUsersUserIdCheckPermissionsRequest = /** @class */ (function (_super) {
    __extends(PostUsersUserIdCheckPermissionsRequest, _super);
    function PostUsersUserIdCheckPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersUserIdCheckPermissionsPathParams)
    ], PostUsersUserIdCheckPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersUserIdCheckPermissionsQueryParams)
    ], PostUsersUserIdCheckPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersUserIdCheckPermissionsRequests)
    ], PostUsersUserIdCheckPermissionsRequest.prototype, "request", void 0);
    return PostUsersUserIdCheckPermissionsRequest;
}(SpeakeasyBase));
export { PostUsersUserIdCheckPermissionsRequest };
var PostUsersUserIdCheckPermissionsResponse = /** @class */ (function (_super) {
    __extends(PostUsersUserIdCheckPermissionsResponse, _super);
    function PostUsersUserIdCheckPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostUsersUserIdCheckPermissionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersUserIdCheckPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostUsersUserIdCheckPermissionsResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersUserIdCheckPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserImage)
    ], PostUsersUserIdCheckPermissionsResponse.prototype, "userImage", void 0);
    return PostUsersUserIdCheckPermissionsResponse;
}(SpeakeasyBase));
export { PostUsersUserIdCheckPermissionsResponse };
