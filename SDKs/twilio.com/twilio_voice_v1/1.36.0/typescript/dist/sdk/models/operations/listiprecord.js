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
export var LISTIPRECORD_SERVERS = [
    "https://voice.twilio.com",
];
var ListIpRecordQueryParams = /** @class */ (function (_super) {
    __extends(ListIpRecordQueryParams, _super);
    function ListIpRecordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIpRecordQueryParams.prototype, "pageSize", void 0);
    return ListIpRecordQueryParams;
}(SpeakeasyBase));
export { ListIpRecordQueryParams };
var ListIpRecordSecurity = /** @class */ (function (_super) {
    __extends(ListIpRecordSecurity, _super);
    function ListIpRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIpRecordSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIpRecordSecurity;
}(SpeakeasyBase));
export { ListIpRecordSecurity };
var ListIpRecordRequest = /** @class */ (function (_super) {
    __extends(ListIpRecordRequest, _super);
    function ListIpRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIpRecordRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIpRecordQueryParams)
    ], ListIpRecordRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIpRecordSecurity)
    ], ListIpRecordRequest.prototype, "security", void 0);
    return ListIpRecordRequest;
}(SpeakeasyBase));
export { ListIpRecordRequest };
var ListIpRecordListIpRecordResponseMeta = /** @class */ (function (_super) {
    __extends(ListIpRecordListIpRecordResponseMeta, _super);
    function ListIpRecordListIpRecordResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListIpRecordListIpRecordResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListIpRecordListIpRecordResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListIpRecordListIpRecordResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIpRecordListIpRecordResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIpRecordListIpRecordResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListIpRecordListIpRecordResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListIpRecordListIpRecordResponseMeta.prototype, "url", void 0);
    return ListIpRecordListIpRecordResponseMeta;
}(SpeakeasyBase));
export { ListIpRecordListIpRecordResponseMeta };
var ListIpRecordListIpRecordResponse = /** @class */ (function (_super) {
    __extends(ListIpRecordListIpRecordResponse, _super);
    function ListIpRecordListIpRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ip_records", elemType: shared.VoiceV1IpRecord }),
        __metadata("design:type", Array)
    ], ListIpRecordListIpRecordResponse.prototype, "ipRecords", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListIpRecordListIpRecordResponseMeta)
    ], ListIpRecordListIpRecordResponse.prototype, "meta", void 0);
    return ListIpRecordListIpRecordResponse;
}(SpeakeasyBase));
export { ListIpRecordListIpRecordResponse };
var ListIpRecordResponse = /** @class */ (function (_super) {
    __extends(ListIpRecordResponse, _super);
    function ListIpRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIpRecordResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIpRecordListIpRecordResponse)
    ], ListIpRecordResponse.prototype, "listIpRecordResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListIpRecordResponse.prototype, "statusCode", void 0);
    return ListIpRecordResponse;
}(SpeakeasyBase));
export { ListIpRecordResponse };
