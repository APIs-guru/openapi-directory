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
export var ListTrustProductEntityAssignmentServerList = [
    "https://trusthub.twilio.com",
];
var ListTrustProductEntityAssignmentPathParams = /** @class */ (function (_super) {
    __extends(ListTrustProductEntityAssignmentPathParams, _super);
    function ListTrustProductEntityAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" }),
        __metadata("design:type", String)
    ], ListTrustProductEntityAssignmentPathParams.prototype, "trustProductSid", void 0);
    return ListTrustProductEntityAssignmentPathParams;
}(SpeakeasyBase));
export { ListTrustProductEntityAssignmentPathParams };
var ListTrustProductEntityAssignmentQueryParams = /** @class */ (function (_super) {
    __extends(ListTrustProductEntityAssignmentQueryParams, _super);
    function ListTrustProductEntityAssignmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTrustProductEntityAssignmentQueryParams.prototype, "pageSize", void 0);
    return ListTrustProductEntityAssignmentQueryParams;
}(SpeakeasyBase));
export { ListTrustProductEntityAssignmentQueryParams };
var ListTrustProductEntityAssignmentSecurity = /** @class */ (function (_super) {
    __extends(ListTrustProductEntityAssignmentSecurity, _super);
    function ListTrustProductEntityAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTrustProductEntityAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTrustProductEntityAssignmentSecurity;
}(SpeakeasyBase));
export { ListTrustProductEntityAssignmentSecurity };
var ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta = /** @class */ (function (_super) {
    __extends(ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta, _super);
    function ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta.prototype, "url", void 0);
    return ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta;
}(SpeakeasyBase));
export { ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta };
var ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse = /** @class */ (function (_super) {
    __extends(ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse, _super);
    function ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta)
    ], ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.TrusthubV1TrustProductTrustProductEntityAssignment }),
        __metadata("design:type", Array)
    ], ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse.prototype, "results", void 0);
    return ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse;
}(SpeakeasyBase));
export { ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse };
var ListTrustProductEntityAssignmentRequest = /** @class */ (function (_super) {
    __extends(ListTrustProductEntityAssignmentRequest, _super);
    function ListTrustProductEntityAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTrustProductEntityAssignmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrustProductEntityAssignmentPathParams)
    ], ListTrustProductEntityAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrustProductEntityAssignmentQueryParams)
    ], ListTrustProductEntityAssignmentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrustProductEntityAssignmentSecurity)
    ], ListTrustProductEntityAssignmentRequest.prototype, "security", void 0);
    return ListTrustProductEntityAssignmentRequest;
}(SpeakeasyBase));
export { ListTrustProductEntityAssignmentRequest };
var ListTrustProductEntityAssignmentResponse = /** @class */ (function (_super) {
    __extends(ListTrustProductEntityAssignmentResponse, _super);
    function ListTrustProductEntityAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTrustProductEntityAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse)
    ], ListTrustProductEntityAssignmentResponse.prototype, "listTrustProductEntityAssignmentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTrustProductEntityAssignmentResponse.prototype, "statusCode", void 0);
    return ListTrustProductEntityAssignmentResponse;
}(SpeakeasyBase));
export { ListTrustProductEntityAssignmentResponse };
