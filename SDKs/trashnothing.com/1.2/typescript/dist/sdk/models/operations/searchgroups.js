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
var SearchGroupsQueryParams = /** @class */ (function (_super) {
    __extends(SearchGroupsQueryParams, _super);
    function SearchGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], SearchGroupsQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distance" }),
        __metadata("design:type", Number)
    ], SearchGroupsQueryParams.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], SearchGroupsQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], SearchGroupsQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchGroupsQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchGroupsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchGroupsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=postal_code" }),
        __metadata("design:type", String)
    ], SearchGroupsQueryParams.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], SearchGroupsQueryParams.prototype, "region", void 0);
    return SearchGroupsQueryParams;
}(SpeakeasyBase));
export { SearchGroupsQueryParams };
var SearchGroupsSecurity = /** @class */ (function (_super) {
    __extends(SearchGroupsSecurity, _super);
    function SearchGroupsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Implicit)
    ], SearchGroupsSecurity.prototype, "oauth2Implicit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Code)
    ], SearchGroupsSecurity.prototype, "oauth2Code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SearchGroupsSecurity.prototype, "apiKey", void 0);
    return SearchGroupsSecurity;
}(SpeakeasyBase));
export { SearchGroupsSecurity };
var SearchGroups200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchGroups200ApplicationJson, _super);
    function SearchGroups200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_index" }),
        __metadata("design:type", Number)
    ], SearchGroups200ApplicationJson.prototype, "endIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group }),
        __metadata("design:type", Array)
    ], SearchGroups200ApplicationJson.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_groups" }),
        __metadata("design:type", Number)
    ], SearchGroups200ApplicationJson.prototype, "numGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_pages" }),
        __metadata("design:type", Number)
    ], SearchGroups200ApplicationJson.prototype, "numPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], SearchGroups200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], SearchGroups200ApplicationJson.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_index" }),
        __metadata("design:type", Number)
    ], SearchGroups200ApplicationJson.prototype, "startIndex", void 0);
    return SearchGroups200ApplicationJson;
}(SpeakeasyBase));
export { SearchGroups200ApplicationJson };
var SearchGroupsRequest = /** @class */ (function (_super) {
    __extends(SearchGroupsRequest, _super);
    function SearchGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchGroupsQueryParams)
    ], SearchGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchGroupsSecurity)
    ], SearchGroupsRequest.prototype, "security", void 0);
    return SearchGroupsRequest;
}(SpeakeasyBase));
export { SearchGroupsRequest };
var SearchGroupsResponse = /** @class */ (function (_super) {
    __extends(SearchGroupsResponse, _super);
    function SearchGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchGroups200ApplicationJson)
    ], SearchGroupsResponse.prototype, "searchGroups200ApplicationJsonObject", void 0);
    return SearchGroupsResponse;
}(SpeakeasyBase));
export { SearchGroupsResponse };
