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
export var LISTTRUSTPRODUCTCHANNELENDPOINTASSIGNMENT_SERVERS = [
    "https://trusthub.twilio.com",
];
var ListTrustProductChannelEndpointAssignmentPathParams = /** @class */ (function (_super) {
    __extends(ListTrustProductChannelEndpointAssignmentPathParams, _super);
    function ListTrustProductChannelEndpointAssignmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" }),
        __metadata("design:type", String)
    ], ListTrustProductChannelEndpointAssignmentPathParams.prototype, "trustProductSid", void 0);
    return ListTrustProductChannelEndpointAssignmentPathParams;
}(SpeakeasyBase));
export { ListTrustProductChannelEndpointAssignmentPathParams };
var ListTrustProductChannelEndpointAssignmentQueryParams = /** @class */ (function (_super) {
    __extends(ListTrustProductChannelEndpointAssignmentQueryParams, _super);
    function ListTrustProductChannelEndpointAssignmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ChannelEndpointSid" }),
        __metadata("design:type", String)
    ], ListTrustProductChannelEndpointAssignmentQueryParams.prototype, "channelEndpointSid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ChannelEndpointSids" }),
        __metadata("design:type", String)
    ], ListTrustProductChannelEndpointAssignmentQueryParams.prototype, "channelEndpointSids", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTrustProductChannelEndpointAssignmentQueryParams.prototype, "pageSize", void 0);
    return ListTrustProductChannelEndpointAssignmentQueryParams;
}(SpeakeasyBase));
export { ListTrustProductChannelEndpointAssignmentQueryParams };
var ListTrustProductChannelEndpointAssignmentSecurity = /** @class */ (function (_super) {
    __extends(ListTrustProductChannelEndpointAssignmentSecurity, _super);
    function ListTrustProductChannelEndpointAssignmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTrustProductChannelEndpointAssignmentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTrustProductChannelEndpointAssignmentSecurity;
}(SpeakeasyBase));
export { ListTrustProductChannelEndpointAssignmentSecurity };
var ListTrustProductChannelEndpointAssignmentRequest = /** @class */ (function (_super) {
    __extends(ListTrustProductChannelEndpointAssignmentRequest, _super);
    function ListTrustProductChannelEndpointAssignmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTrustProductChannelEndpointAssignmentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrustProductChannelEndpointAssignmentPathParams)
    ], ListTrustProductChannelEndpointAssignmentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrustProductChannelEndpointAssignmentQueryParams)
    ], ListTrustProductChannelEndpointAssignmentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrustProductChannelEndpointAssignmentSecurity)
    ], ListTrustProductChannelEndpointAssignmentRequest.prototype, "security", void 0);
    return ListTrustProductChannelEndpointAssignmentRequest;
}(SpeakeasyBase));
export { ListTrustProductChannelEndpointAssignmentRequest };
var ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta = /** @class */ (function (_super) {
    __extends(ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta, _super);
    function ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta.prototype, "url", void 0);
    return ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta;
}(SpeakeasyBase));
export { ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta };
var ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse = /** @class */ (function (_super) {
    __extends(ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse, _super);
    function ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta)
    ], ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment }),
        __metadata("design:type", Array)
    ], ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse.prototype, "results", void 0);
    return ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse;
}(SpeakeasyBase));
export { ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse };
var ListTrustProductChannelEndpointAssignmentResponse = /** @class */ (function (_super) {
    __extends(ListTrustProductChannelEndpointAssignmentResponse, _super);
    function ListTrustProductChannelEndpointAssignmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTrustProductChannelEndpointAssignmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse)
    ], ListTrustProductChannelEndpointAssignmentResponse.prototype, "listTrustProductChannelEndpointAssignmentResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTrustProductChannelEndpointAssignmentResponse.prototype, "statusCode", void 0);
    return ListTrustProductChannelEndpointAssignmentResponse;
}(SpeakeasyBase));
export { ListTrustProductChannelEndpointAssignmentResponse };
