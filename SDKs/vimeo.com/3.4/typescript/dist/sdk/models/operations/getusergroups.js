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
var GetUserGroupsPathParams = /** @class */ (function (_super) {
    __extends(GetUserGroupsPathParams, _super);
    function GetUserGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetUserGroupsPathParams.prototype, "userId", void 0);
    return GetUserGroupsPathParams;
}(SpeakeasyBase));
export { GetUserGroupsPathParams };
export var GetUserGroupsDirectionEnum;
(function (GetUserGroupsDirectionEnum) {
    GetUserGroupsDirectionEnum["Asc"] = "asc";
    GetUserGroupsDirectionEnum["Desc"] = "desc";
})(GetUserGroupsDirectionEnum || (GetUserGroupsDirectionEnum = {}));
export var GetUserGroupsFilterEnum;
(function (GetUserGroupsFilterEnum) {
    GetUserGroupsFilterEnum["Moderated"] = "moderated";
})(GetUserGroupsFilterEnum || (GetUserGroupsFilterEnum = {}));
export var GetUserGroupsSortEnum;
(function (GetUserGroupsSortEnum) {
    GetUserGroupsSortEnum["Alphabetical"] = "alphabetical";
    GetUserGroupsSortEnum["Date"] = "date";
    GetUserGroupsSortEnum["Members"] = "members";
    GetUserGroupsSortEnum["Videos"] = "videos";
})(GetUserGroupsSortEnum || (GetUserGroupsSortEnum = {}));
var GetUserGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetUserGroupsQueryParams, _super);
    function GetUserGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetUserGroupsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUserGroupsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUserGroupsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetUserGroupsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetUserGroupsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUserGroupsQueryParams.prototype, "sort", void 0);
    return GetUserGroupsQueryParams;
}(SpeakeasyBase));
export { GetUserGroupsQueryParams };
var GetUserGroupsRequest = /** @class */ (function (_super) {
    __extends(GetUserGroupsRequest, _super);
    function GetUserGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserGroupsPathParams)
    ], GetUserGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserGroupsQueryParams)
    ], GetUserGroupsRequest.prototype, "queryParams", void 0);
    return GetUserGroupsRequest;
}(SpeakeasyBase));
export { GetUserGroupsRequest };
var GetUserGroupsResponse = /** @class */ (function (_super) {
    __extends(GetUserGroupsResponse, _super);
    function GetUserGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Group }),
        __metadata("design:type", Array)
    ], GetUserGroupsResponse.prototype, "groups", void 0);
    return GetUserGroupsResponse;
}(SpeakeasyBase));
export { GetUserGroupsResponse };
