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
export var LISTTRUSTPRODUCTEVALUATION_SERVERS = [
    "https://trusthub.twilio.com",
];
var ListTrustProductEvaluationPathParams = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationPathParams, _super);
    function ListTrustProductEvaluationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationPathParams.prototype, "trustProductSid", void 0);
    return ListTrustProductEvaluationPathParams;
}(SpeakeasyBase));
export { ListTrustProductEvaluationPathParams };
var ListTrustProductEvaluationQueryParams = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationQueryParams, _super);
    function ListTrustProductEvaluationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTrustProductEvaluationQueryParams.prototype, "pageSize", void 0);
    return ListTrustProductEvaluationQueryParams;
}(SpeakeasyBase));
export { ListTrustProductEvaluationQueryParams };
var ListTrustProductEvaluationSecurity = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationSecurity, _super);
    function ListTrustProductEvaluationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTrustProductEvaluationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTrustProductEvaluationSecurity;
}(SpeakeasyBase));
export { ListTrustProductEvaluationSecurity };
var ListTrustProductEvaluationRequest = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationRequest, _super);
    function ListTrustProductEvaluationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrustProductEvaluationPathParams)
    ], ListTrustProductEvaluationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrustProductEvaluationQueryParams)
    ], ListTrustProductEvaluationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrustProductEvaluationSecurity)
    ], ListTrustProductEvaluationRequest.prototype, "security", void 0);
    return ListTrustProductEvaluationRequest;
}(SpeakeasyBase));
export { ListTrustProductEvaluationRequest };
var ListTrustProductEvaluationListTrustProductEvaluationResponseMeta = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationListTrustProductEvaluationResponseMeta, _super);
    function ListTrustProductEvaluationListTrustProductEvaluationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponseMeta.prototype, "url", void 0);
    return ListTrustProductEvaluationListTrustProductEvaluationResponseMeta;
}(SpeakeasyBase));
export { ListTrustProductEvaluationListTrustProductEvaluationResponseMeta };
var ListTrustProductEvaluationListTrustProductEvaluationResponse = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationListTrustProductEvaluationResponse, _super);
    function ListTrustProductEvaluationListTrustProductEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTrustProductEvaluationListTrustProductEvaluationResponseMeta)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.TrusthubV1TrustProductTrustProductEvaluation }),
        __metadata("design:type", Array)
    ], ListTrustProductEvaluationListTrustProductEvaluationResponse.prototype, "results", void 0);
    return ListTrustProductEvaluationListTrustProductEvaluationResponse;
}(SpeakeasyBase));
export { ListTrustProductEvaluationListTrustProductEvaluationResponse };
var ListTrustProductEvaluationResponse = /** @class */ (function (_super) {
    __extends(ListTrustProductEvaluationResponse, _super);
    function ListTrustProductEvaluationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTrustProductEvaluationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrustProductEvaluationListTrustProductEvaluationResponse)
    ], ListTrustProductEvaluationResponse.prototype, "listTrustProductEvaluationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTrustProductEvaluationResponse.prototype, "statusCode", void 0);
    return ListTrustProductEvaluationResponse;
}(SpeakeasyBase));
export { ListTrustProductEvaluationResponse };
