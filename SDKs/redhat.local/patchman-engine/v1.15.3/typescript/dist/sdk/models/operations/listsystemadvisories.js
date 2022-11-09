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
var ListSystemAdvisoriesPathParams = /** @class */ (function (_super) {
    __extends(ListSystemAdvisoriesPathParams, _super);
    function ListSystemAdvisoriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" }),
        __metadata("design:type", String)
    ], ListSystemAdvisoriesPathParams.prototype, "inventoryId", void 0);
    return ListSystemAdvisoriesPathParams;
}(SpeakeasyBase));
export { ListSystemAdvisoriesPathParams };
export var ListSystemAdvisoriesSortEnum;
(function (ListSystemAdvisoriesSortEnum) {
    ListSystemAdvisoriesSortEnum["Id"] = "id";
    ListSystemAdvisoriesSortEnum["Name"] = "name";
    ListSystemAdvisoriesSortEnum["Type"] = "type";
    ListSystemAdvisoriesSortEnum["Synopsis"] = "synopsis";
    ListSystemAdvisoriesSortEnum["PublicDate"] = "public_date";
})(ListSystemAdvisoriesSortEnum || (ListSystemAdvisoriesSortEnum = {}));
var ListSystemAdvisoriesQueryParams = /** @class */ (function (_super) {
    __extends(ListSystemAdvisoriesQueryParams, _super);
    function ListSystemAdvisoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[advisory_type]" }),
        __metadata("design:type", String)
    ], ListSystemAdvisoriesQueryParams.prototype, "filterAdvisoryType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[description]" }),
        __metadata("design:type", String)
    ], ListSystemAdvisoriesQueryParams.prototype, "filterDescription", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[id]" }),
        __metadata("design:type", String)
    ], ListSystemAdvisoriesQueryParams.prototype, "filterId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[public_date]" }),
        __metadata("design:type", String)
    ], ListSystemAdvisoriesQueryParams.prototype, "filterPublicDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[severity]" }),
        __metadata("design:type", String)
    ], ListSystemAdvisoriesQueryParams.prototype, "filterSeverity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[synopsis]" }),
        __metadata("design:type", String)
    ], ListSystemAdvisoriesQueryParams.prototype, "filterSynopsis", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListSystemAdvisoriesQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListSystemAdvisoriesQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ListSystemAdvisoriesQueryParams.prototype, "search", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListSystemAdvisoriesQueryParams.prototype, "sort", void 0);
    return ListSystemAdvisoriesQueryParams;
}(SpeakeasyBase));
export { ListSystemAdvisoriesQueryParams };
var ListSystemAdvisoriesSecurity = /** @class */ (function (_super) {
    __extends(ListSystemAdvisoriesSecurity, _super);
    function ListSystemAdvisoriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ListSystemAdvisoriesSecurity.prototype, "rhIdentity", void 0);
    return ListSystemAdvisoriesSecurity;
}(SpeakeasyBase));
export { ListSystemAdvisoriesSecurity };
var ListSystemAdvisoriesRequest = /** @class */ (function (_super) {
    __extends(ListSystemAdvisoriesRequest, _super);
    function ListSystemAdvisoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListSystemAdvisoriesPathParams)
    ], ListSystemAdvisoriesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSystemAdvisoriesQueryParams)
    ], ListSystemAdvisoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSystemAdvisoriesSecurity)
    ], ListSystemAdvisoriesRequest.prototype, "security", void 0);
    return ListSystemAdvisoriesRequest;
}(SpeakeasyBase));
export { ListSystemAdvisoriesRequest };
var ListSystemAdvisoriesResponse = /** @class */ (function (_super) {
    __extends(ListSystemAdvisoriesResponse, _super);
    function ListSystemAdvisoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSystemAdvisoriesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSystemAdvisoriesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ControllersSystemAdvisoriesResponse)
    ], ListSystemAdvisoriesResponse.prototype, "controllersSystemAdvisoriesResponse", void 0);
    return ListSystemAdvisoriesResponse;
}(SpeakeasyBase));
export { ListSystemAdvisoriesResponse };
