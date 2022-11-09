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
export var LISTSHORTCODE_SERVERS = [
    "https://api.twilio.com",
];
var ListShortCodePathParams = /** @class */ (function (_super) {
    __extends(ListShortCodePathParams, _super);
    function ListShortCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListShortCodePathParams.prototype, "accountSid", void 0);
    return ListShortCodePathParams;
}(SpeakeasyBase));
export { ListShortCodePathParams };
var ListShortCodeQueryParams = /** @class */ (function (_super) {
    __extends(ListShortCodeQueryParams, _super);
    function ListShortCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListShortCodeQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListShortCodeQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ShortCode" }),
        __metadata("design:type", String)
    ], ListShortCodeQueryParams.prototype, "shortCode", void 0);
    return ListShortCodeQueryParams;
}(SpeakeasyBase));
export { ListShortCodeQueryParams };
var ListShortCodeSecurity = /** @class */ (function (_super) {
    __extends(ListShortCodeSecurity, _super);
    function ListShortCodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListShortCodeSecurity.prototype, "accountSidAuthToken", void 0);
    return ListShortCodeSecurity;
}(SpeakeasyBase));
export { ListShortCodeSecurity };
var ListShortCodeRequest = /** @class */ (function (_super) {
    __extends(ListShortCodeRequest, _super);
    function ListShortCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListShortCodeRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListShortCodePathParams)
    ], ListShortCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListShortCodeQueryParams)
    ], ListShortCodeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListShortCodeSecurity)
    ], ListShortCodeRequest.prototype, "security", void 0);
    return ListShortCodeRequest;
}(SpeakeasyBase));
export { ListShortCodeRequest };
var ListShortCodeListShortCodeResponse = /** @class */ (function (_super) {
    __extends(ListShortCodeListShortCodeResponse, _super);
    function ListShortCodeListShortCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListShortCodeListShortCodeResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListShortCodeListShortCodeResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListShortCodeListShortCodeResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListShortCodeListShortCodeResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListShortCodeListShortCodeResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListShortCodeListShortCodeResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=short_codes", elemType: shared.ApiV2010AccountShortCode }),
        __metadata("design:type", Array)
    ], ListShortCodeListShortCodeResponse.prototype, "shortCodes", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListShortCodeListShortCodeResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListShortCodeListShortCodeResponse.prototype, "uri", void 0);
    return ListShortCodeListShortCodeResponse;
}(SpeakeasyBase));
export { ListShortCodeListShortCodeResponse };
var ListShortCodeResponse = /** @class */ (function (_super) {
    __extends(ListShortCodeResponse, _super);
    function ListShortCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListShortCodeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListShortCodeListShortCodeResponse)
    ], ListShortCodeResponse.prototype, "listShortCodeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListShortCodeResponse.prototype, "statusCode", void 0);
    return ListShortCodeResponse;
}(SpeakeasyBase));
export { ListShortCodeResponse };
