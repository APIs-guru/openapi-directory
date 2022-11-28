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
var ExportAdvisorySystemsPathParams = /** @class */ (function (_super) {
    __extends(ExportAdvisorySystemsPathParams, _super);
    function ExportAdvisorySystemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advisory_id" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsPathParams.prototype, "advisoryId", void 0);
    return ExportAdvisorySystemsPathParams;
}(SpeakeasyBase));
export { ExportAdvisorySystemsPathParams };
var ExportAdvisorySystemsQueryParams = /** @class */ (function (_super) {
    __extends(ExportAdvisorySystemsQueryParams, _super);
    function ExportAdvisorySystemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[display_name]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[id]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[last_evaluation]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterLastEvaluation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[last_upload]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterLastUpload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[other_count]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterOtherCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[packages_installed]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterPackagesInstalled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[packages_updatable]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterPackagesUpdatable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhba_count]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterRhbaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhea_count]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterRheaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhsa_count]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterRhsaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[stale]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterStale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" }),
        __metadata("design:type", Array)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterSystemProfileSapSidsIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "filterSystemProfileSapSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], ExportAdvisorySystemsQueryParams.prototype, "tags", void 0);
    return ExportAdvisorySystemsQueryParams;
}(SpeakeasyBase));
export { ExportAdvisorySystemsQueryParams };
var ExportAdvisorySystemsSecurity = /** @class */ (function (_super) {
    __extends(ExportAdvisorySystemsSecurity, _super);
    function ExportAdvisorySystemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ExportAdvisorySystemsSecurity.prototype, "rhIdentity", void 0);
    return ExportAdvisorySystemsSecurity;
}(SpeakeasyBase));
export { ExportAdvisorySystemsSecurity };
var ExportAdvisorySystemsRequest = /** @class */ (function (_super) {
    __extends(ExportAdvisorySystemsRequest, _super);
    function ExportAdvisorySystemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportAdvisorySystemsPathParams)
    ], ExportAdvisorySystemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportAdvisorySystemsQueryParams)
    ], ExportAdvisorySystemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportAdvisorySystemsSecurity)
    ], ExportAdvisorySystemsRequest.prototype, "security", void 0);
    return ExportAdvisorySystemsRequest;
}(SpeakeasyBase));
export { ExportAdvisorySystemsRequest };
var ExportAdvisorySystemsResponse = /** @class */ (function (_super) {
    __extends(ExportAdvisorySystemsResponse, _super);
    function ExportAdvisorySystemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ExportAdvisorySystemsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportAdvisorySystemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportAdvisorySystemsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ControllersSystemInlineItem }),
        __metadata("design:type", Array)
    ], ExportAdvisorySystemsResponse.prototype, "controllersSystemInlineItems", void 0);
    return ExportAdvisorySystemsResponse;
}(SpeakeasyBase));
export { ExportAdvisorySystemsResponse };
