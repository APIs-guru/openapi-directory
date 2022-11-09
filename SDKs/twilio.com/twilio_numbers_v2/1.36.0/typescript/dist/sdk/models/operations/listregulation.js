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
export var LISTREGULATION_SERVERS = [
    "https://numbers.twilio.com",
];
var ListRegulationQueryParams = /** @class */ (function (_super) {
    __extends(ListRegulationQueryParams, _super);
    function ListRegulationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndUserType" }),
        __metadata("design:type", String)
    ], ListRegulationQueryParams.prototype, "endUserType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=IsoCountry" }),
        __metadata("design:type", String)
    ], ListRegulationQueryParams.prototype, "isoCountry", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NumberType" }),
        __metadata("design:type", String)
    ], ListRegulationQueryParams.prototype, "numberType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRegulationQueryParams.prototype, "pageSize", void 0);
    return ListRegulationQueryParams;
}(SpeakeasyBase));
export { ListRegulationQueryParams };
var ListRegulationSecurity = /** @class */ (function (_super) {
    __extends(ListRegulationSecurity, _super);
    function ListRegulationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRegulationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRegulationSecurity;
}(SpeakeasyBase));
export { ListRegulationSecurity };
var ListRegulationRequest = /** @class */ (function (_super) {
    __extends(ListRegulationRequest, _super);
    function ListRegulationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRegulationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRegulationQueryParams)
    ], ListRegulationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRegulationSecurity)
    ], ListRegulationRequest.prototype, "security", void 0);
    return ListRegulationRequest;
}(SpeakeasyBase));
export { ListRegulationRequest };
var ListRegulationListRegulationResponseMeta = /** @class */ (function (_super) {
    __extends(ListRegulationListRegulationResponseMeta, _super);
    function ListRegulationListRegulationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRegulationListRegulationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRegulationListRegulationResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRegulationListRegulationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRegulationListRegulationResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRegulationListRegulationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRegulationListRegulationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRegulationListRegulationResponseMeta.prototype, "url", void 0);
    return ListRegulationListRegulationResponseMeta;
}(SpeakeasyBase));
export { ListRegulationListRegulationResponseMeta };
var ListRegulationListRegulationResponse = /** @class */ (function (_super) {
    __extends(ListRegulationListRegulationResponse, _super);
    function ListRegulationListRegulationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListRegulationListRegulationResponseMeta)
    ], ListRegulationListRegulationResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceRegulation }),
        __metadata("design:type", Array)
    ], ListRegulationListRegulationResponse.prototype, "results", void 0);
    return ListRegulationListRegulationResponse;
}(SpeakeasyBase));
export { ListRegulationListRegulationResponse };
var ListRegulationResponse = /** @class */ (function (_super) {
    __extends(ListRegulationResponse, _super);
    function ListRegulationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRegulationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRegulationListRegulationResponse)
    ], ListRegulationResponse.prototype, "listRegulationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListRegulationResponse.prototype, "statusCode", void 0);
    return ListRegulationResponse;
}(SpeakeasyBase));
export { ListRegulationResponse };
