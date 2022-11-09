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
var PublishersListQueryParams = /** @class */ (function (_super) {
    __extends(PublishersListQueryParams, _super);
    function PublishersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], PublishersListQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], PublishersListQueryParams.prototype, "pageSize", void 0);
    return PublishersListQueryParams;
}(SpeakeasyBase));
export { PublishersListQueryParams };
var PublishersListRequest = /** @class */ (function (_super) {
    __extends(PublishersListRequest, _super);
    function PublishersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PublishersListQueryParams)
    ], PublishersListRequest.prototype, "queryParams", void 0);
    return PublishersListRequest;
}(SpeakeasyBase));
export { PublishersListRequest };
var PublishersList200ApplicationJson = /** @class */ (function (_super) {
    __extends(PublishersList200ApplicationJson, _super);
    function PublishersList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], PublishersList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], PublishersList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        Metadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], PublishersList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.Publisher }),
        __metadata("design:type", Array)
    ], PublishersList200ApplicationJson.prototype, "results", void 0);
    return PublishersList200ApplicationJson;
}(SpeakeasyBase));
export { PublishersList200ApplicationJson };
var PublishersListResponse = /** @class */ (function (_super) {
    __extends(PublishersListResponse, _super);
    function PublishersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PublishersListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PublishersListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PublishersList200ApplicationJson)
    ], PublishersListResponse.prototype, "publishersList200ApplicationJsonObject", void 0);
    return PublishersListResponse;
}(SpeakeasyBase));
export { PublishersListResponse };
