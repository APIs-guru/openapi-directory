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
export var LISTFAX_SERVERS = [
    "https://fax.twilio.com",
];
var ListFaxQueryParams = /** @class */ (function (_super) {
    __extends(ListFaxQueryParams, _super);
    function ListFaxQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" }),
        __metadata("design:type", Date)
    ], ListFaxQueryParams.prototype, "dateCreatedAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedOnOrBefore" }),
        __metadata("design:type", Date)
    ], ListFaxQueryParams.prototype, "dateCreatedOnOrBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=From" }),
        __metadata("design:type", String)
    ], ListFaxQueryParams.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFaxQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=To" }),
        __metadata("design:type", String)
    ], ListFaxQueryParams.prototype, "to", void 0);
    return ListFaxQueryParams;
}(SpeakeasyBase));
export { ListFaxQueryParams };
var ListFaxSecurity = /** @class */ (function (_super) {
    __extends(ListFaxSecurity, _super);
    function ListFaxSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFaxSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFaxSecurity;
}(SpeakeasyBase));
export { ListFaxSecurity };
var ListFaxRequest = /** @class */ (function (_super) {
    __extends(ListFaxRequest, _super);
    function ListFaxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFaxRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFaxQueryParams)
    ], ListFaxRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFaxSecurity)
    ], ListFaxRequest.prototype, "security", void 0);
    return ListFaxRequest;
}(SpeakeasyBase));
export { ListFaxRequest };
var ListFaxListFaxResponseMeta = /** @class */ (function (_super) {
    __extends(ListFaxListFaxResponseMeta, _super);
    function ListFaxListFaxResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFaxListFaxResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFaxListFaxResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFaxListFaxResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFaxListFaxResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFaxListFaxResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFaxListFaxResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFaxListFaxResponseMeta.prototype, "url", void 0);
    return ListFaxListFaxResponseMeta;
}(SpeakeasyBase));
export { ListFaxListFaxResponseMeta };
var ListFaxListFaxResponse = /** @class */ (function (_super) {
    __extends(ListFaxListFaxResponse, _super);
    function ListFaxListFaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=faxes", elemType: shared.FaxV1Fax }),
        __metadata("design:type", Array)
    ], ListFaxListFaxResponse.prototype, "faxes", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListFaxListFaxResponseMeta)
    ], ListFaxListFaxResponse.prototype, "meta", void 0);
    return ListFaxListFaxResponse;
}(SpeakeasyBase));
export { ListFaxListFaxResponse };
var ListFaxResponse = /** @class */ (function (_super) {
    __extends(ListFaxResponse, _super);
    function ListFaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFaxResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFaxListFaxResponse)
    ], ListFaxResponse.prototype, "listFaxResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFaxResponse.prototype, "statusCode", void 0);
    return ListFaxResponse;
}(SpeakeasyBase));
export { ListFaxResponse };
