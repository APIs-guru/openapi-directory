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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CreatorRolesListQueryParams = /** @class */ (function (_super) {
    __extends(CreatorRolesListQueryParams, _super);
    function CreatorRolesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CreatorRolesListQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], CreatorRolesListQueryParams.prototype, "pageSize", void 0);
    return CreatorRolesListQueryParams;
}(SpeakeasyBase));
export { CreatorRolesListQueryParams };
var CreatorRolesListRequest = /** @class */ (function (_super) {
    __extends(CreatorRolesListRequest, _super);
    function CreatorRolesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreatorRolesListQueryParams)
    ], CreatorRolesListRequest.prototype, "queryParams", void 0);
    return CreatorRolesListRequest;
}(SpeakeasyBase));
export { CreatorRolesListRequest };
var CreatorRolesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatorRolesList200ApplicationJson, _super);
    function CreatorRolesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], CreatorRolesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], CreatorRolesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        Metadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], CreatorRolesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.Position }),
        __metadata("design:type", Array)
    ], CreatorRolesList200ApplicationJson.prototype, "results", void 0);
    return CreatorRolesList200ApplicationJson;
}(SpeakeasyBase));
export { CreatorRolesList200ApplicationJson };
var CreatorRolesListResponse = /** @class */ (function (_super) {
    __extends(CreatorRolesListResponse, _super);
    function CreatorRolesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreatorRolesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreatorRolesListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreatorRolesList200ApplicationJson)
    ], CreatorRolesListResponse.prototype, "creatorRolesList200ApplicationJsonObject", void 0);
    return CreatorRolesListResponse;
}(SpeakeasyBase));
export { CreatorRolesListResponse };
