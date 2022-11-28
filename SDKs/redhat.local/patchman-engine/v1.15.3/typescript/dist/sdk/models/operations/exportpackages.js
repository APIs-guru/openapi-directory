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
export var ExportPackagesSortEnum;
(function (ExportPackagesSortEnum) {
    ExportPackagesSortEnum["Id"] = "id";
    ExportPackagesSortEnum["Name"] = "name";
    ExportPackagesSortEnum["SystemsInstalled"] = "systems_installed";
    ExportPackagesSortEnum["SystemsUpdatable"] = "systems_updatable";
})(ExportPackagesSortEnum || (ExportPackagesSortEnum = {}));
var ExportPackagesQueryParams = /** @class */ (function (_super) {
    __extends(ExportPackagesQueryParams, _super);
    function ExportPackagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[name]" }),
        __metadata("design:type", String)
    ], ExportPackagesQueryParams.prototype, "filterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[summary]" }),
        __metadata("design:type", String)
    ], ExportPackagesQueryParams.prototype, "filterSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[systems_installed]" }),
        __metadata("design:type", String)
    ], ExportPackagesQueryParams.prototype, "filterSystemsInstalled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[systems_updatable]" }),
        __metadata("design:type", String)
    ], ExportPackagesQueryParams.prototype, "filterSystemsUpdatable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportPackagesQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ExportPackagesQueryParams.prototype, "sort", void 0);
    return ExportPackagesQueryParams;
}(SpeakeasyBase));
export { ExportPackagesQueryParams };
var ExportPackagesSecurity = /** @class */ (function (_super) {
    __extends(ExportPackagesSecurity, _super);
    function ExportPackagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ExportPackagesSecurity.prototype, "rhIdentity", void 0);
    return ExportPackagesSecurity;
}(SpeakeasyBase));
export { ExportPackagesSecurity };
var ExportPackagesRequest = /** @class */ (function (_super) {
    __extends(ExportPackagesRequest, _super);
    function ExportPackagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportPackagesQueryParams)
    ], ExportPackagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportPackagesSecurity)
    ], ExportPackagesRequest.prototype, "security", void 0);
    return ExportPackagesRequest;
}(SpeakeasyBase));
export { ExportPackagesRequest };
var ExportPackagesResponse = /** @class */ (function (_super) {
    __extends(ExportPackagesResponse, _super);
    function ExportPackagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ExportPackagesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportPackagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportPackagesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ControllersPackageItem }),
        __metadata("design:type", Array)
    ], ExportPackagesResponse.prototype, "controllersPackageItems", void 0);
    return ExportPackagesResponse;
}(SpeakeasyBase));
export { ExportPackagesResponse };
