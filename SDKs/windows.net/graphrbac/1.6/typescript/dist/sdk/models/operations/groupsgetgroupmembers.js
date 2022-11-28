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
var GroupsGetGroupMembersPathParams = /** @class */ (function (_super) {
    __extends(GroupsGetGroupMembersPathParams, _super);
    function GroupsGetGroupMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" }),
        __metadata("design:type", String)
    ], GroupsGetGroupMembersPathParams.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], GroupsGetGroupMembersPathParams.prototype, "tenantId", void 0);
    return GroupsGetGroupMembersPathParams;
}(SpeakeasyBase));
export { GroupsGetGroupMembersPathParams };
var GroupsGetGroupMembersQueryParams = /** @class */ (function (_super) {
    __extends(GroupsGetGroupMembersQueryParams, _super);
    function GroupsGetGroupMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], GroupsGetGroupMembersQueryParams.prototype, "apiVersion", void 0);
    return GroupsGetGroupMembersQueryParams;
}(SpeakeasyBase));
export { GroupsGetGroupMembersQueryParams };
var GroupsGetGroupMembersRequest = /** @class */ (function (_super) {
    __extends(GroupsGetGroupMembersRequest, _super);
    function GroupsGetGroupMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetGroupMembersPathParams)
    ], GroupsGetGroupMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsGetGroupMembersQueryParams)
    ], GroupsGetGroupMembersRequest.prototype, "queryParams", void 0);
    return GroupsGetGroupMembersRequest;
}(SpeakeasyBase));
export { GroupsGetGroupMembersRequest };
var GroupsGetGroupMembersResponse = /** @class */ (function (_super) {
    __extends(GroupsGetGroupMembersResponse, _super);
    function GroupsGetGroupMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsGetGroupMembersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryObjectListResult)
    ], GroupsGetGroupMembersResponse.prototype, "directoryObjectListResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], GroupsGetGroupMembersResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsGetGroupMembersResponse.prototype, "statusCode", void 0);
    return GroupsGetGroupMembersResponse;
}(SpeakeasyBase));
export { GroupsGetGroupMembersResponse };
