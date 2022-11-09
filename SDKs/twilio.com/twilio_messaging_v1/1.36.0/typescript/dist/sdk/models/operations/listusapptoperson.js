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
export var LISTUSAPPTOPERSON_SERVERS = [
    "https://messaging.twilio.com",
];
var ListUsAppToPersonPathParams = /** @class */ (function (_super) {
    __extends(ListUsAppToPersonPathParams, _super);
    function ListUsAppToPersonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MessagingServiceSid" }),
        __metadata("design:type", String)
    ], ListUsAppToPersonPathParams.prototype, "messagingServiceSid", void 0);
    return ListUsAppToPersonPathParams;
}(SpeakeasyBase));
export { ListUsAppToPersonPathParams };
var ListUsAppToPersonQueryParams = /** @class */ (function (_super) {
    __extends(ListUsAppToPersonQueryParams, _super);
    function ListUsAppToPersonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsAppToPersonQueryParams.prototype, "pageSize", void 0);
    return ListUsAppToPersonQueryParams;
}(SpeakeasyBase));
export { ListUsAppToPersonQueryParams };
var ListUsAppToPersonSecurity = /** @class */ (function (_super) {
    __extends(ListUsAppToPersonSecurity, _super);
    function ListUsAppToPersonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsAppToPersonSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsAppToPersonSecurity;
}(SpeakeasyBase));
export { ListUsAppToPersonSecurity };
var ListUsAppToPersonRequest = /** @class */ (function (_super) {
    __extends(ListUsAppToPersonRequest, _super);
    function ListUsAppToPersonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsAppToPersonRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsAppToPersonPathParams)
    ], ListUsAppToPersonRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsAppToPersonQueryParams)
    ], ListUsAppToPersonRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsAppToPersonSecurity)
    ], ListUsAppToPersonRequest.prototype, "security", void 0);
    return ListUsAppToPersonRequest;
}(SpeakeasyBase));
export { ListUsAppToPersonRequest };
var ListUsAppToPersonListUsAppToPersonResponseMeta = /** @class */ (function (_super) {
    __extends(ListUsAppToPersonListUsAppToPersonResponseMeta, _super);
    function ListUsAppToPersonListUsAppToPersonResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUsAppToPersonListUsAppToPersonResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUsAppToPersonListUsAppToPersonResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUsAppToPersonListUsAppToPersonResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsAppToPersonListUsAppToPersonResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsAppToPersonListUsAppToPersonResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUsAppToPersonListUsAppToPersonResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUsAppToPersonListUsAppToPersonResponseMeta.prototype, "url", void 0);
    return ListUsAppToPersonListUsAppToPersonResponseMeta;
}(SpeakeasyBase));
export { ListUsAppToPersonListUsAppToPersonResponseMeta };
var ListUsAppToPersonListUsAppToPersonResponse = /** @class */ (function (_super) {
    __extends(ListUsAppToPersonListUsAppToPersonResponse, _super);
    function ListUsAppToPersonListUsAppToPersonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=compliance", elemType: shared.MessagingV1ServiceUsAppToPerson }),
        __metadata("design:type", Array)
    ], ListUsAppToPersonListUsAppToPersonResponse.prototype, "compliance", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUsAppToPersonListUsAppToPersonResponseMeta)
    ], ListUsAppToPersonListUsAppToPersonResponse.prototype, "meta", void 0);
    return ListUsAppToPersonListUsAppToPersonResponse;
}(SpeakeasyBase));
export { ListUsAppToPersonListUsAppToPersonResponse };
var ListUsAppToPersonResponse = /** @class */ (function (_super) {
    __extends(ListUsAppToPersonResponse, _super);
    function ListUsAppToPersonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUsAppToPersonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUsAppToPersonListUsAppToPersonResponse)
    ], ListUsAppToPersonResponse.prototype, "listUsAppToPersonResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUsAppToPersonResponse.prototype, "statusCode", void 0);
    return ListUsAppToPersonResponse;
}(SpeakeasyBase));
export { ListUsAppToPersonResponse };
