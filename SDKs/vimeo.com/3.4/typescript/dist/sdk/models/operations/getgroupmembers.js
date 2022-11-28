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
var GetGroupMembersPathParams = /** @class */ (function (_super) {
    __extends(GetGroupMembersPathParams, _super);
    function GetGroupMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" }),
        __metadata("design:type", Number)
    ], GetGroupMembersPathParams.prototype, "groupId", void 0);
    return GetGroupMembersPathParams;
}(SpeakeasyBase));
export { GetGroupMembersPathParams };
export var GetGroupMembersDirectionEnum;
(function (GetGroupMembersDirectionEnum) {
    GetGroupMembersDirectionEnum["Asc"] = "asc";
    GetGroupMembersDirectionEnum["Desc"] = "desc";
})(GetGroupMembersDirectionEnum || (GetGroupMembersDirectionEnum = {}));
export var GetGroupMembersFilterEnum;
(function (GetGroupMembersFilterEnum) {
    GetGroupMembersFilterEnum["Moderators"] = "moderators";
})(GetGroupMembersFilterEnum || (GetGroupMembersFilterEnum = {}));
export var GetGroupMembersSortEnum;
(function (GetGroupMembersSortEnum) {
    GetGroupMembersSortEnum["Alphabetical"] = "alphabetical";
    GetGroupMembersSortEnum["Date"] = "date";
})(GetGroupMembersSortEnum || (GetGroupMembersSortEnum = {}));
var GetGroupMembersQueryParams = /** @class */ (function (_super) {
    __extends(GetGroupMembersQueryParams, _super);
    function GetGroupMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetGroupMembersQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetGroupMembersQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetGroupMembersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetGroupMembersQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetGroupMembersQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetGroupMembersQueryParams.prototype, "sort", void 0);
    return GetGroupMembersQueryParams;
}(SpeakeasyBase));
export { GetGroupMembersQueryParams };
var GetGroupMembersRequest = /** @class */ (function (_super) {
    __extends(GetGroupMembersRequest, _super);
    function GetGroupMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupMembersPathParams)
    ], GetGroupMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupMembersQueryParams)
    ], GetGroupMembersRequest.prototype, "queryParams", void 0);
    return GetGroupMembersRequest;
}(SpeakeasyBase));
export { GetGroupMembersRequest };
var GetGroupMembersResponse = /** @class */ (function (_super) {
    __extends(GetGroupMembersResponse, _super);
    function GetGroupMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGroupMembersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGroupMembersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetGroupMembersResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetGroupMembersResponse.prototype, "users", void 0);
    return GetGroupMembersResponse;
}(SpeakeasyBase));
export { GetGroupMembersResponse };
