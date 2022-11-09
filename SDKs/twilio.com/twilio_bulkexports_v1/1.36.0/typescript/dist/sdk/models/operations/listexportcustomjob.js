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
export var LISTEXPORTCUSTOMJOB_SERVERS = [
    "https://bulkexports.twilio.com",
];
var ListExportCustomJobPathParams = /** @class */ (function (_super) {
    __extends(ListExportCustomJobPathParams, _super);
    function ListExportCustomJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" }),
        __metadata("design:type", String)
    ], ListExportCustomJobPathParams.prototype, "resourceType", void 0);
    return ListExportCustomJobPathParams;
}(SpeakeasyBase));
export { ListExportCustomJobPathParams };
var ListExportCustomJobQueryParams = /** @class */ (function (_super) {
    __extends(ListExportCustomJobQueryParams, _super);
    function ListExportCustomJobQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListExportCustomJobQueryParams.prototype, "pageSize", void 0);
    return ListExportCustomJobQueryParams;
}(SpeakeasyBase));
export { ListExportCustomJobQueryParams };
var ListExportCustomJobSecurity = /** @class */ (function (_super) {
    __extends(ListExportCustomJobSecurity, _super);
    function ListExportCustomJobSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListExportCustomJobSecurity.prototype, "accountSidAuthToken", void 0);
    return ListExportCustomJobSecurity;
}(SpeakeasyBase));
export { ListExportCustomJobSecurity };
var ListExportCustomJobRequest = /** @class */ (function (_super) {
    __extends(ListExportCustomJobRequest, _super);
    function ListExportCustomJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListExportCustomJobRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListExportCustomJobPathParams)
    ], ListExportCustomJobRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListExportCustomJobQueryParams)
    ], ListExportCustomJobRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListExportCustomJobSecurity)
    ], ListExportCustomJobRequest.prototype, "security", void 0);
    return ListExportCustomJobRequest;
}(SpeakeasyBase));
export { ListExportCustomJobRequest };
var ListExportCustomJobListExportCustomJobResponseMeta = /** @class */ (function (_super) {
    __extends(ListExportCustomJobListExportCustomJobResponseMeta, _super);
    function ListExportCustomJobListExportCustomJobResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListExportCustomJobListExportCustomJobResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListExportCustomJobListExportCustomJobResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListExportCustomJobListExportCustomJobResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListExportCustomJobListExportCustomJobResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListExportCustomJobListExportCustomJobResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListExportCustomJobListExportCustomJobResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListExportCustomJobListExportCustomJobResponseMeta.prototype, "url", void 0);
    return ListExportCustomJobListExportCustomJobResponseMeta;
}(SpeakeasyBase));
export { ListExportCustomJobListExportCustomJobResponseMeta };
var ListExportCustomJobListExportCustomJobResponse = /** @class */ (function (_super) {
    __extends(ListExportCustomJobListExportCustomJobResponse, _super);
    function ListExportCustomJobListExportCustomJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=jobs", elemType: shared.BulkexportsV1ExportExportCustomJob }),
        __metadata("design:type", Array)
    ], ListExportCustomJobListExportCustomJobResponse.prototype, "jobs", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListExportCustomJobListExportCustomJobResponseMeta)
    ], ListExportCustomJobListExportCustomJobResponse.prototype, "meta", void 0);
    return ListExportCustomJobListExportCustomJobResponse;
}(SpeakeasyBase));
export { ListExportCustomJobListExportCustomJobResponse };
var ListExportCustomJobResponse = /** @class */ (function (_super) {
    __extends(ListExportCustomJobResponse, _super);
    function ListExportCustomJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListExportCustomJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListExportCustomJobListExportCustomJobResponse)
    ], ListExportCustomJobResponse.prototype, "listExportCustomJobResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListExportCustomJobResponse.prototype, "statusCode", void 0);
    return ListExportCustomJobResponse;
}(SpeakeasyBase));
export { ListExportCustomJobResponse };
