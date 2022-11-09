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
var ExportSystemPackagesPathParams = /** @class */ (function (_super) {
    __extends(ExportSystemPackagesPathParams, _super);
    function ExportSystemPackagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" }),
        __metadata("design:type", String)
    ], ExportSystemPackagesPathParams.prototype, "inventoryId", void 0);
    return ExportSystemPackagesPathParams;
}(SpeakeasyBase));
export { ExportSystemPackagesPathParams };
var ExportSystemPackagesQueryParams = /** @class */ (function (_super) {
    __extends(ExportSystemPackagesQueryParams, _super);
    function ExportSystemPackagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[description]" }),
        __metadata("design:type", String)
    ], ExportSystemPackagesQueryParams.prototype, "filterDescription", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[evra]" }),
        __metadata("design:type", String)
    ], ExportSystemPackagesQueryParams.prototype, "filterEvra", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[name]" }),
        __metadata("design:type", String)
    ], ExportSystemPackagesQueryParams.prototype, "filterName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[summary]" }),
        __metadata("design:type", String)
    ], ExportSystemPackagesQueryParams.prototype, "filterSummary", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[updatable]" }),
        __metadata("design:type", Boolean)
    ], ExportSystemPackagesQueryParams.prototype, "filterUpdatable", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportSystemPackagesQueryParams.prototype, "search", void 0);
    return ExportSystemPackagesQueryParams;
}(SpeakeasyBase));
export { ExportSystemPackagesQueryParams };
var ExportSystemPackagesSecurity = /** @class */ (function (_super) {
    __extends(ExportSystemPackagesSecurity, _super);
    function ExportSystemPackagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ExportSystemPackagesSecurity.prototype, "rhIdentity", void 0);
    return ExportSystemPackagesSecurity;
}(SpeakeasyBase));
export { ExportSystemPackagesSecurity };
var ExportSystemPackagesRequest = /** @class */ (function (_super) {
    __extends(ExportSystemPackagesRequest, _super);
    function ExportSystemPackagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ExportSystemPackagesPathParams)
    ], ExportSystemPackagesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ExportSystemPackagesQueryParams)
    ], ExportSystemPackagesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ExportSystemPackagesSecurity)
    ], ExportSystemPackagesRequest.prototype, "security", void 0);
    return ExportSystemPackagesRequest;
}(SpeakeasyBase));
export { ExportSystemPackagesRequest };
var ExportSystemPackagesResponse = /** @class */ (function (_super) {
    __extends(ExportSystemPackagesResponse, _super);
    function ExportSystemPackagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ExportSystemPackagesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ExportSystemPackagesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.ControllersSystemPackageInline }),
        __metadata("design:type", Array)
    ], ExportSystemPackagesResponse.prototype, "controllersSystemPackageInlines", void 0);
    return ExportSystemPackagesResponse;
}(SpeakeasyBase));
export { ExportSystemPackagesResponse };
