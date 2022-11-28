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
export var ListAdvisoriesSortEnum;
(function (ListAdvisoriesSortEnum) {
    ListAdvisoriesSortEnum["Id"] = "id";
    ListAdvisoriesSortEnum["Name"] = "name";
    ListAdvisoriesSortEnum["AdvisoryType"] = "advisory_type";
    ListAdvisoriesSortEnum["Synopsis"] = "synopsis";
    ListAdvisoriesSortEnum["PublicDate"] = "public_date";
    ListAdvisoriesSortEnum["ApplicableSystems"] = "applicable_systems";
})(ListAdvisoriesSortEnum || (ListAdvisoriesSortEnum = {}));
var ListAdvisoriesQueryParams = /** @class */ (function (_super) {
    __extends(ListAdvisoriesQueryParams, _super);
    function ListAdvisoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[advisory_type]" }),
        __metadata("design:type", String)
    ], ListAdvisoriesQueryParams.prototype, "filterAdvisoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[applicable_systems]" }),
        __metadata("design:type", String)
    ], ListAdvisoriesQueryParams.prototype, "filterApplicableSystems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[description]" }),
        __metadata("design:type", String)
    ], ListAdvisoriesQueryParams.prototype, "filterDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[id]" }),
        __metadata("design:type", String)
    ], ListAdvisoriesQueryParams.prototype, "filterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[public_date]" }),
        __metadata("design:type", String)
    ], ListAdvisoriesQueryParams.prototype, "filterPublicDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[severity]" }),
        __metadata("design:type", String)
    ], ListAdvisoriesQueryParams.prototype, "filterSeverity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[synopsis]" }),
        __metadata("design:type", String)
    ], ListAdvisoriesQueryParams.prototype, "filterSynopsis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" }),
        __metadata("design:type", Array)
    ], ListAdvisoriesQueryParams.prototype, "filterSystemProfileSapSidsIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" }),
        __metadata("design:type", String)
    ], ListAdvisoriesQueryParams.prototype, "filterSystemProfileSapSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListAdvisoriesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListAdvisoriesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ListAdvisoriesQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListAdvisoriesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], ListAdvisoriesQueryParams.prototype, "tags", void 0);
    return ListAdvisoriesQueryParams;
}(SpeakeasyBase));
export { ListAdvisoriesQueryParams };
var ListAdvisoriesSecurity = /** @class */ (function (_super) {
    __extends(ListAdvisoriesSecurity, _super);
    function ListAdvisoriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ListAdvisoriesSecurity.prototype, "rhIdentity", void 0);
    return ListAdvisoriesSecurity;
}(SpeakeasyBase));
export { ListAdvisoriesSecurity };
var ListAdvisoriesRequest = /** @class */ (function (_super) {
    __extends(ListAdvisoriesRequest, _super);
    function ListAdvisoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAdvisoriesQueryParams)
    ], ListAdvisoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAdvisoriesSecurity)
    ], ListAdvisoriesRequest.prototype, "security", void 0);
    return ListAdvisoriesRequest;
}(SpeakeasyBase));
export { ListAdvisoriesRequest };
var ListAdvisoriesResponse = /** @class */ (function (_super) {
    __extends(ListAdvisoriesResponse, _super);
    function ListAdvisoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAdvisoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAdvisoriesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ControllersAdvisoriesResponse)
    ], ListAdvisoriesResponse.prototype, "controllersAdvisoriesResponse", void 0);
    return ListAdvisoriesResponse;
}(SpeakeasyBase));
export { ListAdvisoriesResponse };
