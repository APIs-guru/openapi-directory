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
export var LISTITEMASSIGNMENT_SERVERS = [
    "https://numbers.twilio.com",
];
var ListItemAssignmentPathParams = /** @class */ (function (_super) {
    __extends(ListItemAssignmentPathParams, _super);
    function ListItemAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" }),
        __metadata("design:type", String)
    ], ListItemAssignmentPathParams.prototype, "bundleSid", void 0);
    return ListItemAssignmentPathParams;
}(SpeakeasyBase));
export { ListItemAssignmentPathParams };
var ListItemAssignmentQueryParams = /** @class */ (function (_super) {
    __extends(ListItemAssignmentQueryParams, _super);
    function ListItemAssignmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListItemAssignmentQueryParams.prototype, "pageSize", void 0);
    return ListItemAssignmentQueryParams;
}(SpeakeasyBase));
export { ListItemAssignmentQueryParams };
var ListItemAssignmentSecurity = /** @class */ (function (_super) {
    __extends(ListItemAssignmentSecurity, _super);
    function ListItemAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListItemAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListItemAssignmentSecurity;
}(SpeakeasyBase));
export { ListItemAssignmentSecurity };
var ListItemAssignmentRequest = /** @class */ (function (_super) {
    __extends(ListItemAssignmentRequest, _super);
    function ListItemAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListItemAssignmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListItemAssignmentPathParams)
    ], ListItemAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListItemAssignmentQueryParams)
    ], ListItemAssignmentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListItemAssignmentSecurity)
    ], ListItemAssignmentRequest.prototype, "security", void 0);
    return ListItemAssignmentRequest;
}(SpeakeasyBase));
export { ListItemAssignmentRequest };
var ListItemAssignmentListItemAssignmentResponseMeta = /** @class */ (function (_super) {
    __extends(ListItemAssignmentListItemAssignmentResponseMeta, _super);
    function ListItemAssignmentListItemAssignmentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListItemAssignmentListItemAssignmentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListItemAssignmentListItemAssignmentResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListItemAssignmentListItemAssignmentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListItemAssignmentListItemAssignmentResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListItemAssignmentListItemAssignmentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListItemAssignmentListItemAssignmentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListItemAssignmentListItemAssignmentResponseMeta.prototype, "url", void 0);
    return ListItemAssignmentListItemAssignmentResponseMeta;
}(SpeakeasyBase));
export { ListItemAssignmentListItemAssignmentResponseMeta };
var ListItemAssignmentListItemAssignmentResponse = /** @class */ (function (_super) {
    __extends(ListItemAssignmentListItemAssignmentResponse, _super);
    function ListItemAssignmentListItemAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListItemAssignmentListItemAssignmentResponseMeta)
    ], ListItemAssignmentListItemAssignmentResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundleItemAssignment }),
        __metadata("design:type", Array)
    ], ListItemAssignmentListItemAssignmentResponse.prototype, "results", void 0);
    return ListItemAssignmentListItemAssignmentResponse;
}(SpeakeasyBase));
export { ListItemAssignmentListItemAssignmentResponse };
var ListItemAssignmentResponse = /** @class */ (function (_super) {
    __extends(ListItemAssignmentResponse, _super);
    function ListItemAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListItemAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListItemAssignmentListItemAssignmentResponse)
    ], ListItemAssignmentResponse.prototype, "listItemAssignmentResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListItemAssignmentResponse.prototype, "statusCode", void 0);
    return ListItemAssignmentResponse;
}(SpeakeasyBase));
export { ListItemAssignmentResponse };
