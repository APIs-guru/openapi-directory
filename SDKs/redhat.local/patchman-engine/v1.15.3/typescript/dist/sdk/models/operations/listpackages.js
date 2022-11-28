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
export var ListPackagesSortEnum;
(function (ListPackagesSortEnum) {
    ListPackagesSortEnum["Id"] = "id";
    ListPackagesSortEnum["Name"] = "name";
    ListPackagesSortEnum["SystemsInstalled"] = "systems_installed";
    ListPackagesSortEnum["SystemsUpdatable"] = "systems_updatable";
})(ListPackagesSortEnum || (ListPackagesSortEnum = {}));
var ListPackagesQueryParams = /** @class */ (function (_super) {
    __extends(ListPackagesQueryParams, _super);
    function ListPackagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[name]" }),
        __metadata("design:type", String)
    ], ListPackagesQueryParams.prototype, "filterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[summary]" }),
        __metadata("design:type", String)
    ], ListPackagesQueryParams.prototype, "filterSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" }),
        __metadata("design:type", Array)
    ], ListPackagesQueryParams.prototype, "filterSystemProfileSapSidsIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" }),
        __metadata("design:type", String)
    ], ListPackagesQueryParams.prototype, "filterSystemProfileSapSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[systems_installed]" }),
        __metadata("design:type", String)
    ], ListPackagesQueryParams.prototype, "filterSystemsInstalled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[systems_updatable]" }),
        __metadata("design:type", String)
    ], ListPackagesQueryParams.prototype, "filterSystemsUpdatable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListPackagesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListPackagesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ListPackagesQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListPackagesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], ListPackagesQueryParams.prototype, "tags", void 0);
    return ListPackagesQueryParams;
}(SpeakeasyBase));
export { ListPackagesQueryParams };
var ListPackagesSecurity = /** @class */ (function (_super) {
    __extends(ListPackagesSecurity, _super);
    function ListPackagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ListPackagesSecurity.prototype, "rhIdentity", void 0);
    return ListPackagesSecurity;
}(SpeakeasyBase));
export { ListPackagesSecurity };
var ListPackagesRequest = /** @class */ (function (_super) {
    __extends(ListPackagesRequest, _super);
    function ListPackagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPackagesQueryParams)
    ], ListPackagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPackagesSecurity)
    ], ListPackagesRequest.prototype, "security", void 0);
    return ListPackagesRequest;
}(SpeakeasyBase));
export { ListPackagesRequest };
var ListPackagesResponse = /** @class */ (function (_super) {
    __extends(ListPackagesResponse, _super);
    function ListPackagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPackagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPackagesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ControllersPackagesResponse)
    ], ListPackagesResponse.prototype, "controllersPackagesResponse", void 0);
    return ListPackagesResponse;
}(SpeakeasyBase));
export { ListPackagesResponse };
