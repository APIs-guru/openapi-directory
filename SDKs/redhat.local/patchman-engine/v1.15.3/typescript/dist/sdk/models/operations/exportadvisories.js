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
var ExportAdvisoriesQueryParams = /** @class */ (function (_super) {
    __extends(ExportAdvisoriesQueryParams, _super);
    function ExportAdvisoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[advisory_type]" }),
        __metadata("design:type", String)
    ], ExportAdvisoriesQueryParams.prototype, "filterAdvisoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[applicable_systems]" }),
        __metadata("design:type", String)
    ], ExportAdvisoriesQueryParams.prototype, "filterApplicableSystems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[description]" }),
        __metadata("design:type", String)
    ], ExportAdvisoriesQueryParams.prototype, "filterDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[id]" }),
        __metadata("design:type", String)
    ], ExportAdvisoriesQueryParams.prototype, "filterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[public_date]" }),
        __metadata("design:type", String)
    ], ExportAdvisoriesQueryParams.prototype, "filterPublicDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[severity]" }),
        __metadata("design:type", String)
    ], ExportAdvisoriesQueryParams.prototype, "filterSeverity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[synopsis]" }),
        __metadata("design:type", String)
    ], ExportAdvisoriesQueryParams.prototype, "filterSynopsis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportAdvisoriesQueryParams.prototype, "search", void 0);
    return ExportAdvisoriesQueryParams;
}(SpeakeasyBase));
export { ExportAdvisoriesQueryParams };
var ExportAdvisoriesSecurity = /** @class */ (function (_super) {
    __extends(ExportAdvisoriesSecurity, _super);
    function ExportAdvisoriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ExportAdvisoriesSecurity.prototype, "rhIdentity", void 0);
    return ExportAdvisoriesSecurity;
}(SpeakeasyBase));
export { ExportAdvisoriesSecurity };
var ExportAdvisoriesRequest = /** @class */ (function (_super) {
    __extends(ExportAdvisoriesRequest, _super);
    function ExportAdvisoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportAdvisoriesQueryParams)
    ], ExportAdvisoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportAdvisoriesSecurity)
    ], ExportAdvisoriesRequest.prototype, "security", void 0);
    return ExportAdvisoriesRequest;
}(SpeakeasyBase));
export { ExportAdvisoriesRequest };
var ExportAdvisoriesResponse = /** @class */ (function (_super) {
    __extends(ExportAdvisoriesResponse, _super);
    function ExportAdvisoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ExportAdvisoriesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportAdvisoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportAdvisoriesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ControllersAdvisoryInlineItem }),
        __metadata("design:type", Array)
    ], ExportAdvisoriesResponse.prototype, "controllersAdvisoryInlineItems", void 0);
    return ExportAdvisoriesResponse;
}(SpeakeasyBase));
export { ExportAdvisoriesResponse };
