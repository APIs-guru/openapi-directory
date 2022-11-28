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
var ExportSystemsQueryParams = /** @class */ (function (_super) {
    __extends(ExportSystemsQueryParams, _super);
    function ExportSystemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[display_name]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[id]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[last_evaluation]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterLastEvaluation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[last_upload]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterLastUpload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[other_count]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterOtherCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[packages_installed]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterPackagesInstalled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[packages_updatable]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterPackagesUpdatable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhba_count]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterRhbaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhea_count]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterRheaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhsa_count]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterRhsaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[stale]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterStale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" }),
        __metadata("design:type", Array)
    ], ExportSystemsQueryParams.prototype, "filterSystemProfileSapSidsIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "filterSystemProfileSapSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportSystemsQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", Array)
    ], ExportSystemsQueryParams.prototype, "tags", void 0);
    return ExportSystemsQueryParams;
}(SpeakeasyBase));
export { ExportSystemsQueryParams };
var ExportSystemsSecurity = /** @class */ (function (_super) {
    __extends(ExportSystemsSecurity, _super);
    function ExportSystemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ExportSystemsSecurity.prototype, "rhIdentity", void 0);
    return ExportSystemsSecurity;
}(SpeakeasyBase));
export { ExportSystemsSecurity };
var ExportSystemsRequest = /** @class */ (function (_super) {
    __extends(ExportSystemsRequest, _super);
    function ExportSystemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportSystemsQueryParams)
    ], ExportSystemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportSystemsSecurity)
    ], ExportSystemsRequest.prototype, "security", void 0);
    return ExportSystemsRequest;
}(SpeakeasyBase));
export { ExportSystemsRequest };
var ExportSystemsResponse = /** @class */ (function (_super) {
    __extends(ExportSystemsResponse, _super);
    function ExportSystemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ExportSystemsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportSystemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportSystemsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ControllersSystemInlineItem }),
        __metadata("design:type", Array)
    ], ExportSystemsResponse.prototype, "controllersSystemInlineItems", void 0);
    return ExportSystemsResponse;
}(SpeakeasyBase));
export { ExportSystemsResponse };
