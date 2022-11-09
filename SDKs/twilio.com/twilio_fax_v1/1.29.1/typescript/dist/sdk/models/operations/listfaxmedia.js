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
export var LISTFAXMEDIA_SERVERS = [
    "https://fax.twilio.com",
];
var ListFaxMediaPathParams = /** @class */ (function (_super) {
    __extends(ListFaxMediaPathParams, _super);
    function ListFaxMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FaxSid" }),
        __metadata("design:type", String)
    ], ListFaxMediaPathParams.prototype, "faxSid", void 0);
    return ListFaxMediaPathParams;
}(SpeakeasyBase));
export { ListFaxMediaPathParams };
var ListFaxMediaQueryParams = /** @class */ (function (_super) {
    __extends(ListFaxMediaQueryParams, _super);
    function ListFaxMediaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFaxMediaQueryParams.prototype, "pageSize", void 0);
    return ListFaxMediaQueryParams;
}(SpeakeasyBase));
export { ListFaxMediaQueryParams };
var ListFaxMediaSecurity = /** @class */ (function (_super) {
    __extends(ListFaxMediaSecurity, _super);
    function ListFaxMediaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFaxMediaSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFaxMediaSecurity;
}(SpeakeasyBase));
export { ListFaxMediaSecurity };
var ListFaxMediaRequest = /** @class */ (function (_super) {
    __extends(ListFaxMediaRequest, _super);
    function ListFaxMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFaxMediaRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFaxMediaPathParams)
    ], ListFaxMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFaxMediaQueryParams)
    ], ListFaxMediaRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFaxMediaSecurity)
    ], ListFaxMediaRequest.prototype, "security", void 0);
    return ListFaxMediaRequest;
}(SpeakeasyBase));
export { ListFaxMediaRequest };
var ListFaxMediaListFaxMediaResponseMeta = /** @class */ (function (_super) {
    __extends(ListFaxMediaListFaxMediaResponseMeta, _super);
    function ListFaxMediaListFaxMediaResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFaxMediaListFaxMediaResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFaxMediaListFaxMediaResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFaxMediaListFaxMediaResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFaxMediaListFaxMediaResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFaxMediaListFaxMediaResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFaxMediaListFaxMediaResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFaxMediaListFaxMediaResponseMeta.prototype, "url", void 0);
    return ListFaxMediaListFaxMediaResponseMeta;
}(SpeakeasyBase));
export { ListFaxMediaListFaxMediaResponseMeta };
var ListFaxMediaListFaxMediaResponse = /** @class */ (function (_super) {
    __extends(ListFaxMediaListFaxMediaResponse, _super);
    function ListFaxMediaListFaxMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=media", elemType: shared.FaxV1FaxFaxMedia }),
        __metadata("design:type", Array)
    ], ListFaxMediaListFaxMediaResponse.prototype, "media", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListFaxMediaListFaxMediaResponseMeta)
    ], ListFaxMediaListFaxMediaResponse.prototype, "meta", void 0);
    return ListFaxMediaListFaxMediaResponse;
}(SpeakeasyBase));
export { ListFaxMediaListFaxMediaResponse };
var ListFaxMediaResponse = /** @class */ (function (_super) {
    __extends(ListFaxMediaResponse, _super);
    function ListFaxMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFaxMediaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFaxMediaListFaxMediaResponse)
    ], ListFaxMediaResponse.prototype, "listFaxMediaResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFaxMediaResponse.prototype, "statusCode", void 0);
    return ListFaxMediaResponse;
}(SpeakeasyBase));
export { ListFaxMediaResponse };
