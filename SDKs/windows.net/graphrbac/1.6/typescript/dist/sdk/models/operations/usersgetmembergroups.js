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
var UsersGetMemberGroupsPathParams = /** @class */ (function (_super) {
    __extends(UsersGetMemberGroupsPathParams, _super);
    function UsersGetMemberGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" }),
        __metadata("design:type", String)
    ], UsersGetMemberGroupsPathParams.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], UsersGetMemberGroupsPathParams.prototype, "tenantId", void 0);
    return UsersGetMemberGroupsPathParams;
}(SpeakeasyBase));
export { UsersGetMemberGroupsPathParams };
var UsersGetMemberGroupsQueryParams = /** @class */ (function (_super) {
    __extends(UsersGetMemberGroupsQueryParams, _super);
    function UsersGetMemberGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], UsersGetMemberGroupsQueryParams.prototype, "apiVersion", void 0);
    return UsersGetMemberGroupsQueryParams;
}(SpeakeasyBase));
export { UsersGetMemberGroupsQueryParams };
var UsersGetMemberGroupsRequests = /** @class */ (function (_super) {
    __extends(UsersGetMemberGroupsRequests, _super);
    function UsersGetMemberGroupsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], UsersGetMemberGroupsRequests.prototype, "userGetMemberGroupsParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], UsersGetMemberGroupsRequests.prototype, "userGetMemberGroupsParameters1", void 0);
    return UsersGetMemberGroupsRequests;
}(SpeakeasyBase));
export { UsersGetMemberGroupsRequests };
var UsersGetMemberGroupsRequest = /** @class */ (function (_super) {
    __extends(UsersGetMemberGroupsRequest, _super);
    function UsersGetMemberGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersGetMemberGroupsPathParams)
    ], UsersGetMemberGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersGetMemberGroupsQueryParams)
    ], UsersGetMemberGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersGetMemberGroupsRequests)
    ], UsersGetMemberGroupsRequest.prototype, "request", void 0);
    return UsersGetMemberGroupsRequest;
}(SpeakeasyBase));
export { UsersGetMemberGroupsRequest };
var UsersGetMemberGroupsResponse = /** @class */ (function (_super) {
    __extends(UsersGetMemberGroupsResponse, _super);
    function UsersGetMemberGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersGetMemberGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], UsersGetMemberGroupsResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersGetMemberGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserGetMemberGroupsResult)
    ], UsersGetMemberGroupsResponse.prototype, "userGetMemberGroupsResult", void 0);
    return UsersGetMemberGroupsResponse;
}(SpeakeasyBase));
export { UsersGetMemberGroupsResponse };
