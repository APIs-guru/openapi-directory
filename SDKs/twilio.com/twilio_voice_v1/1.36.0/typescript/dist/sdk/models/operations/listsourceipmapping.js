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
export var LISTSOURCEIPMAPPING_SERVERS = [
    "https://voice.twilio.com",
];
var ListSourceIpMappingQueryParams = /** @class */ (function (_super) {
    __extends(ListSourceIpMappingQueryParams, _super);
    function ListSourceIpMappingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSourceIpMappingQueryParams.prototype, "pageSize", void 0);
    return ListSourceIpMappingQueryParams;
}(SpeakeasyBase));
export { ListSourceIpMappingQueryParams };
var ListSourceIpMappingSecurity = /** @class */ (function (_super) {
    __extends(ListSourceIpMappingSecurity, _super);
    function ListSourceIpMappingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSourceIpMappingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSourceIpMappingSecurity;
}(SpeakeasyBase));
export { ListSourceIpMappingSecurity };
var ListSourceIpMappingRequest = /** @class */ (function (_super) {
    __extends(ListSourceIpMappingRequest, _super);
    function ListSourceIpMappingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSourceIpMappingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSourceIpMappingQueryParams)
    ], ListSourceIpMappingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSourceIpMappingSecurity)
    ], ListSourceIpMappingRequest.prototype, "security", void 0);
    return ListSourceIpMappingRequest;
}(SpeakeasyBase));
export { ListSourceIpMappingRequest };
var ListSourceIpMappingListSourceIpMappingResponseMeta = /** @class */ (function (_super) {
    __extends(ListSourceIpMappingListSourceIpMappingResponseMeta, _super);
    function ListSourceIpMappingListSourceIpMappingResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSourceIpMappingListSourceIpMappingResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSourceIpMappingListSourceIpMappingResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSourceIpMappingListSourceIpMappingResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSourceIpMappingListSourceIpMappingResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSourceIpMappingListSourceIpMappingResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSourceIpMappingListSourceIpMappingResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSourceIpMappingListSourceIpMappingResponseMeta.prototype, "url", void 0);
    return ListSourceIpMappingListSourceIpMappingResponseMeta;
}(SpeakeasyBase));
export { ListSourceIpMappingListSourceIpMappingResponseMeta };
var ListSourceIpMappingListSourceIpMappingResponse = /** @class */ (function (_super) {
    __extends(ListSourceIpMappingListSourceIpMappingResponse, _super);
    function ListSourceIpMappingListSourceIpMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSourceIpMappingListSourceIpMappingResponseMeta)
    ], ListSourceIpMappingListSourceIpMappingResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=source_ip_mappings", elemType: shared.VoiceV1SourceIpMapping }),
        __metadata("design:type", Array)
    ], ListSourceIpMappingListSourceIpMappingResponse.prototype, "sourceIpMappings", void 0);
    return ListSourceIpMappingListSourceIpMappingResponse;
}(SpeakeasyBase));
export { ListSourceIpMappingListSourceIpMappingResponse };
var ListSourceIpMappingResponse = /** @class */ (function (_super) {
    __extends(ListSourceIpMappingResponse, _super);
    function ListSourceIpMappingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSourceIpMappingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSourceIpMappingListSourceIpMappingResponse)
    ], ListSourceIpMappingResponse.prototype, "listSourceIpMappingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSourceIpMappingResponse.prototype, "statusCode", void 0);
    return ListSourceIpMappingResponse;
}(SpeakeasyBase));
export { ListSourceIpMappingResponse };
