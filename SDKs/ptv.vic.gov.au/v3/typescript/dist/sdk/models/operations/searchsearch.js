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
var SearchSearchPathParams = /** @class */ (function (_super) {
    __extends(SearchSearchPathParams, _super);
    function SearchSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=search_term" }),
        __metadata("design:type", String)
    ], SearchSearchPathParams.prototype, "searchTerm", void 0);
    return SearchSearchPathParams;
}(SpeakeasyBase));
export { SearchSearchPathParams };
var SearchSearchQueryParams = /** @class */ (function (_super) {
    __extends(SearchSearchQueryParams, _super);
    function SearchSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], SearchSearchQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_addresses" }),
        __metadata("design:type", Boolean)
    ], SearchSearchQueryParams.prototype, "includeAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_outlets" }),
        __metadata("design:type", Boolean)
    ], SearchSearchQueryParams.prototype, "includeOutlets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], SearchSearchQueryParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], SearchSearchQueryParams.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match_route_by_suburb" }),
        __metadata("design:type", Boolean)
    ], SearchSearchQueryParams.prototype, "matchRouteBySuburb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match_stop_by_gtfs_stop_id" }),
        __metadata("design:type", Boolean)
    ], SearchSearchQueryParams.prototype, "matchStopByGtfsStopId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match_stop_by_suburb" }),
        __metadata("design:type", Boolean)
    ], SearchSearchQueryParams.prototype, "matchStopBySuburb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_distance" }),
        __metadata("design:type", Number)
    ], SearchSearchQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=route_types" }),
        __metadata("design:type", Array)
    ], SearchSearchQueryParams.prototype, "routeTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], SearchSearchQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], SearchSearchQueryParams.prototype, "token", void 0);
    return SearchSearchQueryParams;
}(SpeakeasyBase));
export { SearchSearchQueryParams };
var SearchSearchRequest = /** @class */ (function (_super) {
    __extends(SearchSearchRequest, _super);
    function SearchSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchSearchPathParams)
    ], SearchSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchSearchQueryParams)
    ], SearchSearchRequest.prototype, "queryParams", void 0);
    return SearchSearchRequest;
}(SpeakeasyBase));
export { SearchSearchRequest };
var SearchSearchResponse = /** @class */ (function (_super) {
    __extends(SearchSearchResponse, _super);
    function SearchSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SearchSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchSearchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], SearchSearchResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3SearchResult)
    ], SearchSearchResponse.prototype, "v3SearchResult", void 0);
    return SearchSearchResponse;
}(SpeakeasyBase));
export { SearchSearchResponse };
