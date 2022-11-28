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
var ExportSystemAdvisoriesPathParams = /** @class */ (function (_super) {
    __extends(ExportSystemAdvisoriesPathParams, _super);
    function ExportSystemAdvisoriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" }),
        __metadata("design:type", String)
    ], ExportSystemAdvisoriesPathParams.prototype, "inventoryId", void 0);
    return ExportSystemAdvisoriesPathParams;
}(SpeakeasyBase));
export { ExportSystemAdvisoriesPathParams };
var ExportSystemAdvisoriesQueryParams = /** @class */ (function (_super) {
    __extends(ExportSystemAdvisoriesQueryParams, _super);
    function ExportSystemAdvisoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[advisory_type]" }),
        __metadata("design:type", String)
    ], ExportSystemAdvisoriesQueryParams.prototype, "filterAdvisoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[description]" }),
        __metadata("design:type", String)
    ], ExportSystemAdvisoriesQueryParams.prototype, "filterDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[id]" }),
        __metadata("design:type", String)
    ], ExportSystemAdvisoriesQueryParams.prototype, "filterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[public_date]" }),
        __metadata("design:type", String)
    ], ExportSystemAdvisoriesQueryParams.prototype, "filterPublicDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[severity]" }),
        __metadata("design:type", String)
    ], ExportSystemAdvisoriesQueryParams.prototype, "filterSeverity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[synopsis]" }),
        __metadata("design:type", String)
    ], ExportSystemAdvisoriesQueryParams.prototype, "filterSynopsis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportSystemAdvisoriesQueryParams.prototype, "search", void 0);
    return ExportSystemAdvisoriesQueryParams;
}(SpeakeasyBase));
export { ExportSystemAdvisoriesQueryParams };
var ExportSystemAdvisoriesSecurity = /** @class */ (function (_super) {
    __extends(ExportSystemAdvisoriesSecurity, _super);
    function ExportSystemAdvisoriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], ExportSystemAdvisoriesSecurity.prototype, "rhIdentity", void 0);
    return ExportSystemAdvisoriesSecurity;
}(SpeakeasyBase));
export { ExportSystemAdvisoriesSecurity };
var ExportSystemAdvisoriesRequest = /** @class */ (function (_super) {
    __extends(ExportSystemAdvisoriesRequest, _super);
    function ExportSystemAdvisoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportSystemAdvisoriesPathParams)
    ], ExportSystemAdvisoriesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportSystemAdvisoriesQueryParams)
    ], ExportSystemAdvisoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportSystemAdvisoriesSecurity)
    ], ExportSystemAdvisoriesRequest.prototype, "security", void 0);
    return ExportSystemAdvisoriesRequest;
}(SpeakeasyBase));
export { ExportSystemAdvisoriesRequest };
var ExportSystemAdvisoriesResponse = /** @class */ (function (_super) {
    __extends(ExportSystemAdvisoriesResponse, _super);
    function ExportSystemAdvisoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ExportSystemAdvisoriesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportSystemAdvisoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportSystemAdvisoriesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ControllersSystemAdvisoriesDbLookup }),
        __metadata("design:type", Array)
    ], ExportSystemAdvisoriesResponse.prototype, "controllersSystemAdvisoriesDbLookups", void 0);
    return ExportSystemAdvisoriesResponse;
}(SpeakeasyBase));
export { ExportSystemAdvisoriesResponse };
