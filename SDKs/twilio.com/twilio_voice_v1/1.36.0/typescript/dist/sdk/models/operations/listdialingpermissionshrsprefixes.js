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
export var LISTDIALINGPERMISSIONSHRSPREFIXES_SERVERS = [
    "https://voice.twilio.com",
];
var ListDialingPermissionsHrsPrefixesPathParams = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesPathParams, _super);
    function ListDialingPermissionsHrsPrefixesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=IsoCode" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesPathParams.prototype, "isoCode", void 0);
    return ListDialingPermissionsHrsPrefixesPathParams;
}(SpeakeasyBase));
export { ListDialingPermissionsHrsPrefixesPathParams };
var ListDialingPermissionsHrsPrefixesQueryParams = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesQueryParams, _super);
    function ListDialingPermissionsHrsPrefixesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsHrsPrefixesQueryParams.prototype, "pageSize", void 0);
    return ListDialingPermissionsHrsPrefixesQueryParams;
}(SpeakeasyBase));
export { ListDialingPermissionsHrsPrefixesQueryParams };
var ListDialingPermissionsHrsPrefixesSecurity = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesSecurity, _super);
    function ListDialingPermissionsHrsPrefixesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDialingPermissionsHrsPrefixesSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDialingPermissionsHrsPrefixesSecurity;
}(SpeakeasyBase));
export { ListDialingPermissionsHrsPrefixesSecurity };
var ListDialingPermissionsHrsPrefixesRequest = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesRequest, _super);
    function ListDialingPermissionsHrsPrefixesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDialingPermissionsHrsPrefixesPathParams)
    ], ListDialingPermissionsHrsPrefixesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDialingPermissionsHrsPrefixesQueryParams)
    ], ListDialingPermissionsHrsPrefixesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDialingPermissionsHrsPrefixesSecurity)
    ], ListDialingPermissionsHrsPrefixesRequest.prototype, "security", void 0);
    return ListDialingPermissionsHrsPrefixesRequest;
}(SpeakeasyBase));
export { ListDialingPermissionsHrsPrefixesRequest };
var ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta, _super);
    function ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta.prototype, "url", void 0);
    return ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta;
}(SpeakeasyBase));
export { ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta };
var ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse, _super);
    function ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=content", elemType: shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes }),
        __metadata("design:type", Array)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta)
    ], ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse.prototype, "meta", void 0);
    return ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse;
}(SpeakeasyBase));
export { ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse };
var ListDialingPermissionsHrsPrefixesResponse = /** @class */ (function (_super) {
    __extends(ListDialingPermissionsHrsPrefixesResponse, _super);
    function ListDialingPermissionsHrsPrefixesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDialingPermissionsHrsPrefixesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse)
    ], ListDialingPermissionsHrsPrefixesResponse.prototype, "listDialingPermissionsHrsPrefixesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDialingPermissionsHrsPrefixesResponse.prototype, "statusCode", void 0);
    return ListDialingPermissionsHrsPrefixesResponse;
}(SpeakeasyBase));
export { ListDialingPermissionsHrsPrefixesResponse };
