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
var UserApiGetProfileCommentsPathParams = /** @class */ (function (_super) {
    __extends(UserApiGetProfileCommentsPathParams, _super);
    function UserApiGetProfileCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserApiGetProfileCommentsPathParams.prototype, "id", void 0);
    return UserApiGetProfileCommentsPathParams;
}(SpeakeasyBase));
export { UserApiGetProfileCommentsPathParams };
var UserApiGetProfileCommentsQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetProfileCommentsQueryParams, _super);
    function UserApiGetProfileCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], UserApiGetProfileCommentsQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], UserApiGetProfileCommentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], UserApiGetProfileCommentsQueryParams.prototype, "start", void 0);
    return UserApiGetProfileCommentsQueryParams;
}(SpeakeasyBase));
export { UserApiGetProfileCommentsQueryParams };
var UserApiGetProfileCommentsRequest = /** @class */ (function (_super) {
    __extends(UserApiGetProfileCommentsRequest, _super);
    function UserApiGetProfileCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetProfileCommentsPathParams)
    ], UserApiGetProfileCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetProfileCommentsQueryParams)
    ], UserApiGetProfileCommentsRequest.prototype, "queryParams", void 0);
    return UserApiGetProfileCommentsRequest;
}(SpeakeasyBase));
export { UserApiGetProfileCommentsRequest };
var UserApiGetProfileCommentsResponse = /** @class */ (function (_super) {
    __extends(UserApiGetProfileCommentsResponse, _super);
    function UserApiGetProfileCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetProfileCommentsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetProfileCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialFindResultCommentForApiContract)
    ], UserApiGetProfileCommentsResponse.prototype, "partialFindResultCommentForApiContract", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiGetProfileCommentsResponse.prototype, "statusCode", void 0);
    return UserApiGetProfileCommentsResponse;
}(SpeakeasyBase));
export { UserApiGetProfileCommentsResponse };
