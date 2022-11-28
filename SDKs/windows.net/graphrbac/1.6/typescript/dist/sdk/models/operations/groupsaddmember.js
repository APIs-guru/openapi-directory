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
var GroupsAddMemberPathParams = /** @class */ (function (_super) {
    __extends(GroupsAddMemberPathParams, _super);
    function GroupsAddMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupObjectId" }),
        __metadata("design:type", String)
    ], GroupsAddMemberPathParams.prototype, "groupObjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], GroupsAddMemberPathParams.prototype, "tenantId", void 0);
    return GroupsAddMemberPathParams;
}(SpeakeasyBase));
export { GroupsAddMemberPathParams };
var GroupsAddMemberQueryParams = /** @class */ (function (_super) {
    __extends(GroupsAddMemberQueryParams, _super);
    function GroupsAddMemberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], GroupsAddMemberQueryParams.prototype, "apiVersion", void 0);
    return GroupsAddMemberQueryParams;
}(SpeakeasyBase));
export { GroupsAddMemberQueryParams };
var GroupsAddMemberRequests = /** @class */ (function (_super) {
    __extends(GroupsAddMemberRequests, _super);
    function GroupsAddMemberRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], GroupsAddMemberRequests.prototype, "groupAddMemberParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], GroupsAddMemberRequests.prototype, "groupAddMemberParameters1", void 0);
    return GroupsAddMemberRequests;
}(SpeakeasyBase));
export { GroupsAddMemberRequests };
var GroupsAddMemberRequest = /** @class */ (function (_super) {
    __extends(GroupsAddMemberRequest, _super);
    function GroupsAddMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsAddMemberPathParams)
    ], GroupsAddMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsAddMemberQueryParams)
    ], GroupsAddMemberRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsAddMemberRequests)
    ], GroupsAddMemberRequest.prototype, "request", void 0);
    return GroupsAddMemberRequest;
}(SpeakeasyBase));
export { GroupsAddMemberRequest };
var GroupsAddMemberResponse = /** @class */ (function (_super) {
    __extends(GroupsAddMemberResponse, _super);
    function GroupsAddMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsAddMemberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], GroupsAddMemberResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsAddMemberResponse.prototype, "statusCode", void 0);
    return GroupsAddMemberResponse;
}(SpeakeasyBase));
export { GroupsAddMemberResponse };
