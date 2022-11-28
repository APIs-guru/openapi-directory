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
var ListAdvisorySystemsPathParams = /** @class */ (function (_super) {
    __extends(ListAdvisorySystemsPathParams, _super);
    function ListAdvisorySystemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advisory_id" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsPathParams.prototype, "advisoryId", void 0);
    return ListAdvisorySystemsPathParams;
}(SpeakeasyBase));
export { ListAdvisorySystemsPathParams };
export var ListAdvisorySystemsSortEnum;
(function (ListAdvisorySystemsSortEnum) {
    ListAdvisorySystemsSortEnum["Id"] = "id";
    ListAdvisorySystemsSortEnum["DisplayName"] = "display_name";
    ListAdvisorySystemsSortEnum["LastEvaluation"] = "last_evaluation";
    ListAdvisorySystemsSortEnum["LastUpload"] = "last_upload";
    ListAdvisorySystemsSortEnum["RhsaCount"] = "rhsa_count";
    ListAdvisorySystemsSortEnum["RhbaCount"] = "rhba_count";
    ListAdvisorySystemsSortEnum["RheaCount"] = "rhea_count";
    ListAdvisorySystemsSortEnum["OtherCount"] = "other_count";
    ListAdvisorySystemsSortEnum["Stale"] = "stale";
})(ListAdvisorySystemsSortEnum || (ListAdvisorySystemsSortEnum = {}));
var ListAdvisorySystemsQueryParams = /** @class */ (function (_super) {
    __extends(ListAdvisorySystemsQueryParams, _super);
    function ListAdvisorySystemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[created]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[culled_timestamp]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterCulledTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[display_name]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[id]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[insights_id]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterInsightsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[last_evaluation]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterLastEvaluation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[last_upload]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterLastUpload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[other_count]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterOtherCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhba_count]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterRhbaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhea_count]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterRheaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhsa_count]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterRhsaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[stale]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterStale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[stale_timestamp]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterStaleTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[stale_warning_timestamp]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterStaleWarningTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" }),
        __metadata("design:type", Array)
    ], ListAdvisorySystemsQueryParams.prototype, "filterSystemProfileSapSidsIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "filterSystemProfileSapSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListAdvisorySystemsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListAdvisorySystemsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListAdvisorySystemsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], ListAdvisorySystemsQueryParams.prototype, "tags", void 0);
    return ListAdvisorySystemsQueryParams;
}(SpeakeasyBase));
export { ListAdvisorySystemsQueryParams };
var ListAdvisorySystemsSecurity = /** @class */ (function (_super) {
    __extends(ListAdvisorySystemsSecurity, _super);
    function ListAdvisorySystemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ListAdvisorySystemsSecurity.prototype, "rhIdentity", void 0);
    return ListAdvisorySystemsSecurity;
}(SpeakeasyBase));
export { ListAdvisorySystemsSecurity };
var ListAdvisorySystemsRequest = /** @class */ (function (_super) {
    __extends(ListAdvisorySystemsRequest, _super);
    function ListAdvisorySystemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAdvisorySystemsPathParams)
    ], ListAdvisorySystemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAdvisorySystemsQueryParams)
    ], ListAdvisorySystemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAdvisorySystemsSecurity)
    ], ListAdvisorySystemsRequest.prototype, "security", void 0);
    return ListAdvisorySystemsRequest;
}(SpeakeasyBase));
export { ListAdvisorySystemsRequest };
var ListAdvisorySystemsResponse = /** @class */ (function (_super) {
    __extends(ListAdvisorySystemsResponse, _super);
    function ListAdvisorySystemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAdvisorySystemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAdvisorySystemsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ControllersAdvisorySystemsResponse)
    ], ListAdvisorySystemsResponse.prototype, "controllersAdvisorySystemsResponse", void 0);
    return ListAdvisorySystemsResponse;
}(SpeakeasyBase));
export { ListAdvisorySystemsResponse };
