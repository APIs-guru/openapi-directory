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
var ListServiceInventoryTagsPathParams = /** @class */ (function (_super) {
    __extends(ListServiceInventoryTagsPathParams, _super);
    function ListServiceInventoryTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ListServiceInventoryTagsPathParams.prototype, "id", void 0);
    return ListServiceInventoryTagsPathParams;
}(SpeakeasyBase));
export { ListServiceInventoryTagsPathParams };
var ListServiceInventoryTagsQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceInventoryTagsQueryParams, _super);
    function ListServiceInventoryTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", Map)
    ], ListServiceInventoryTagsQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListServiceInventoryTagsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListServiceInventoryTagsQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], ListServiceInventoryTagsQueryParams.prototype, "sortBy", void 0);
    return ListServiceInventoryTagsQueryParams;
}(SpeakeasyBase));
export { ListServiceInventoryTagsQueryParams };
var ListServiceInventoryTagsRequest = /** @class */ (function (_super) {
    __extends(ListServiceInventoryTagsRequest, _super);
    function ListServiceInventoryTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceInventoryTagsPathParams)
    ], ListServiceInventoryTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceInventoryTagsQueryParams)
    ], ListServiceInventoryTagsRequest.prototype, "queryParams", void 0);
    return ListServiceInventoryTagsRequest;
}(SpeakeasyBase));
export { ListServiceInventoryTagsRequest };
var ListServiceInventoryTagsResponse = /** @class */ (function (_super) {
    __extends(ListServiceInventoryTagsResponse, _super);
    function ListServiceInventoryTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceInventoryTagsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorNotFound)
    ], ListServiceInventoryTagsResponse.prototype, "errorNotFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListServiceInventoryTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TagsCollection)
    ], ListServiceInventoryTagsResponse.prototype, "tagsCollection", void 0);
    return ListServiceInventoryTagsResponse;
}(SpeakeasyBase));
export { ListServiceInventoryTagsResponse };
