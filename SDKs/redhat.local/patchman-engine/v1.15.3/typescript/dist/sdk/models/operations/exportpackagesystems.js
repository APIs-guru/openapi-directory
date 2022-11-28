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
var ExportPackageSystemsPathParams = /** @class */ (function (_super) {
    __extends(ExportPackageSystemsPathParams, _super);
    function ExportPackageSystemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" }),
        __metadata("design:type", String)
    ], ExportPackageSystemsPathParams.prototype, "packageName", void 0);
    return ExportPackageSystemsPathParams;
}(SpeakeasyBase));
export { ExportPackageSystemsPathParams };
var ExportPackageSystemsQueryParams = /** @class */ (function (_super) {
    __extends(ExportPackageSystemsQueryParams, _super);
    function ExportPackageSystemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" }),
        __metadata("design:type", Array)
    ], ExportPackageSystemsQueryParams.prototype, "filterSystemProfileSapSidsIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" }),
        __metadata("design:type", String)
    ], ExportPackageSystemsQueryParams.prototype, "filterSystemProfileSapSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], ExportPackageSystemsQueryParams.prototype, "tags", void 0);
    return ExportPackageSystemsQueryParams;
}(SpeakeasyBase));
export { ExportPackageSystemsQueryParams };
var ExportPackageSystemsSecurity = /** @class */ (function (_super) {
    __extends(ExportPackageSystemsSecurity, _super);
    function ExportPackageSystemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ExportPackageSystemsSecurity.prototype, "rhIdentity", void 0);
    return ExportPackageSystemsSecurity;
}(SpeakeasyBase));
export { ExportPackageSystemsSecurity };
var ExportPackageSystemsRequest = /** @class */ (function (_super) {
    __extends(ExportPackageSystemsRequest, _super);
    function ExportPackageSystemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportPackageSystemsPathParams)
    ], ExportPackageSystemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportPackageSystemsQueryParams)
    ], ExportPackageSystemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportPackageSystemsSecurity)
    ], ExportPackageSystemsRequest.prototype, "security", void 0);
    return ExportPackageSystemsRequest;
}(SpeakeasyBase));
export { ExportPackageSystemsRequest };
var ExportPackageSystemsResponse = /** @class */ (function (_super) {
    __extends(ExportPackageSystemsResponse, _super);
    function ExportPackageSystemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportPackageSystemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportPackageSystemsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ControllersPackageSystemItem }),
        __metadata("design:type", Array)
    ], ExportPackageSystemsResponse.prototype, "controllersPackageSystemItems", void 0);
    return ExportPackageSystemsResponse;
}(SpeakeasyBase));
export { ExportPackageSystemsResponse };
