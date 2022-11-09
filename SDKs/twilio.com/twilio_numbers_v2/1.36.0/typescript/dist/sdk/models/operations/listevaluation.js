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
export var LISTEVALUATION_SERVERS = [
    "https://numbers.twilio.com",
];
var ListEvaluationPathParams = /** @class */ (function (_super) {
    __extends(ListEvaluationPathParams, _super);
    function ListEvaluationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" }),
        __metadata("design:type", String)
    ], ListEvaluationPathParams.prototype, "bundleSid", void 0);
    return ListEvaluationPathParams;
}(SpeakeasyBase));
export { ListEvaluationPathParams };
var ListEvaluationQueryParams = /** @class */ (function (_super) {
    __extends(ListEvaluationQueryParams, _super);
    function ListEvaluationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEvaluationQueryParams.prototype, "pageSize", void 0);
    return ListEvaluationQueryParams;
}(SpeakeasyBase));
export { ListEvaluationQueryParams };
var ListEvaluationSecurity = /** @class */ (function (_super) {
    __extends(ListEvaluationSecurity, _super);
    function ListEvaluationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEvaluationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEvaluationSecurity;
}(SpeakeasyBase));
export { ListEvaluationSecurity };
var ListEvaluationRequest = /** @class */ (function (_super) {
    __extends(ListEvaluationRequest, _super);
    function ListEvaluationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEvaluationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEvaluationPathParams)
    ], ListEvaluationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEvaluationQueryParams)
    ], ListEvaluationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEvaluationSecurity)
    ], ListEvaluationRequest.prototype, "security", void 0);
    return ListEvaluationRequest;
}(SpeakeasyBase));
export { ListEvaluationRequest };
var ListEvaluationListEvaluationResponseMeta = /** @class */ (function (_super) {
    __extends(ListEvaluationListEvaluationResponseMeta, _super);
    function ListEvaluationListEvaluationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEvaluationListEvaluationResponseMeta.prototype, "url", void 0);
    return ListEvaluationListEvaluationResponseMeta;
}(SpeakeasyBase));
export { ListEvaluationListEvaluationResponseMeta };
var ListEvaluationListEvaluationResponse = /** @class */ (function (_super) {
    __extends(ListEvaluationListEvaluationResponse, _super);
    function ListEvaluationListEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListEvaluationListEvaluationResponseMeta)
    ], ListEvaluationListEvaluationResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundleEvaluation }),
        __metadata("design:type", Array)
    ], ListEvaluationListEvaluationResponse.prototype, "results", void 0);
    return ListEvaluationListEvaluationResponse;
}(SpeakeasyBase));
export { ListEvaluationListEvaluationResponse };
var ListEvaluationResponse = /** @class */ (function (_super) {
    __extends(ListEvaluationResponse, _super);
    function ListEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEvaluationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEvaluationListEvaluationResponse)
    ], ListEvaluationResponse.prototype, "listEvaluationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListEvaluationResponse.prototype, "statusCode", void 0);
    return ListEvaluationResponse;
}(SpeakeasyBase));
export { ListEvaluationResponse };
