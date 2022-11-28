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
var GetAllPostsChangesQueryParams = /** @class */ (function (_super) {
    __extends(GetAllPostsChangesQueryParams, _super);
    function GetAllPostsChangesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_max" }),
        __metadata("design:type", Date)
    ], GetAllPostsChangesQueryParams.prototype, "dateMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_min" }),
        __metadata("design:type", Date)
    ], GetAllPostsChangesQueryParams.prototype, "dateMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAllPostsChangesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetAllPostsChangesQueryParams.prototype, "perPage", void 0);
    return GetAllPostsChangesQueryParams;
}(SpeakeasyBase));
export { GetAllPostsChangesQueryParams };
var GetAllPostsChangesSecurity = /** @class */ (function (_super) {
    __extends(GetAllPostsChangesSecurity, _super);
    function GetAllPostsChangesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Implicit)
    ], GetAllPostsChangesSecurity.prototype, "oauth2Implicit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Code)
    ], GetAllPostsChangesSecurity.prototype, "oauth2Code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetAllPostsChangesSecurity.prototype, "apiKey", void 0);
    return GetAllPostsChangesSecurity;
}(SpeakeasyBase));
export { GetAllPostsChangesSecurity };
var GetAllPostsChanges200ApplicationJsonChanges = /** @class */ (function (_super) {
    __extends(GetAllPostsChanges200ApplicationJsonChanges, _super);
    function GetAllPostsChanges200ApplicationJsonChanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GetAllPostsChanges200ApplicationJsonChanges.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_id" }),
        __metadata("design:type", String)
    ], GetAllPostsChanges200ApplicationJsonChanges.prototype, "postId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetAllPostsChanges200ApplicationJsonChanges.prototype, "type", void 0);
    return GetAllPostsChanges200ApplicationJsonChanges;
}(SpeakeasyBase));
export { GetAllPostsChanges200ApplicationJsonChanges };
var GetAllPostsChanges200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllPostsChanges200ApplicationJson, _super);
    function GetAllPostsChanges200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changes", elemType: GetAllPostsChanges200ApplicationJsonChanges }),
        __metadata("design:type", Array)
    ], GetAllPostsChanges200ApplicationJson.prototype, "changes", void 0);
    return GetAllPostsChanges200ApplicationJson;
}(SpeakeasyBase));
export { GetAllPostsChanges200ApplicationJson };
var GetAllPostsChangesRequest = /** @class */ (function (_super) {
    __extends(GetAllPostsChangesRequest, _super);
    function GetAllPostsChangesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllPostsChangesQueryParams)
    ], GetAllPostsChangesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllPostsChangesSecurity)
    ], GetAllPostsChangesRequest.prototype, "security", void 0);
    return GetAllPostsChangesRequest;
}(SpeakeasyBase));
export { GetAllPostsChangesRequest };
var GetAllPostsChangesResponse = /** @class */ (function (_super) {
    __extends(GetAllPostsChangesResponse, _super);
    function GetAllPostsChangesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllPostsChangesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllPostsChangesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllPostsChanges200ApplicationJson)
    ], GetAllPostsChangesResponse.prototype, "getAllPostsChanges200ApplicationJsonObject", void 0);
    return GetAllPostsChangesResponse;
}(SpeakeasyBase));
export { GetAllPostsChangesResponse };
