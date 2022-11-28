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
var GroupsRemoveMemberPathParams = /** @class */ (function (_super) {
    __extends(GroupsRemoveMemberPathParams, _super);
    function GroupsRemoveMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupObjectId" }),
        __metadata("design:type", String)
    ], GroupsRemoveMemberPathParams.prototype, "groupObjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberObjectId" }),
        __metadata("design:type", String)
    ], GroupsRemoveMemberPathParams.prototype, "memberObjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], GroupsRemoveMemberPathParams.prototype, "tenantId", void 0);
    return GroupsRemoveMemberPathParams;
}(SpeakeasyBase));
export { GroupsRemoveMemberPathParams };
var GroupsRemoveMemberQueryParams = /** @class */ (function (_super) {
    __extends(GroupsRemoveMemberQueryParams, _super);
    function GroupsRemoveMemberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], GroupsRemoveMemberQueryParams.prototype, "apiVersion", void 0);
    return GroupsRemoveMemberQueryParams;
}(SpeakeasyBase));
export { GroupsRemoveMemberQueryParams };
var GroupsRemoveMemberRequest = /** @class */ (function (_super) {
    __extends(GroupsRemoveMemberRequest, _super);
    function GroupsRemoveMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsRemoveMemberPathParams)
    ], GroupsRemoveMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsRemoveMemberQueryParams)
    ], GroupsRemoveMemberRequest.prototype, "queryParams", void 0);
    return GroupsRemoveMemberRequest;
}(SpeakeasyBase));
export { GroupsRemoveMemberRequest };
var GroupsRemoveMemberResponse = /** @class */ (function (_super) {
    __extends(GroupsRemoveMemberResponse, _super);
    function GroupsRemoveMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsRemoveMemberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], GroupsRemoveMemberResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsRemoveMemberResponse.prototype, "statusCode", void 0);
    return GroupsRemoveMemberResponse;
}(SpeakeasyBase));
export { GroupsRemoveMemberResponse };
