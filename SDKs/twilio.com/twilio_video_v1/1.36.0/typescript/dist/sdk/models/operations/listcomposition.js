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
export var LISTCOMPOSITION_SERVERS = [
    "https://video.twilio.com",
];
var ListCompositionQueryParams = /** @class */ (function (_super) {
    __extends(ListCompositionQueryParams, _super);
    function ListCompositionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" }),
        __metadata("design:type", Date)
    ], ListCompositionQueryParams.prototype, "dateCreatedAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" }),
        __metadata("design:type", Date)
    ], ListCompositionQueryParams.prototype, "dateCreatedBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCompositionQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RoomSid" }),
        __metadata("design:type", String)
    ], ListCompositionQueryParams.prototype, "roomSid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListCompositionQueryParams.prototype, "status", void 0);
    return ListCompositionQueryParams;
}(SpeakeasyBase));
export { ListCompositionQueryParams };
var ListCompositionSecurity = /** @class */ (function (_super) {
    __extends(ListCompositionSecurity, _super);
    function ListCompositionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCompositionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCompositionSecurity;
}(SpeakeasyBase));
export { ListCompositionSecurity };
var ListCompositionRequest = /** @class */ (function (_super) {
    __extends(ListCompositionRequest, _super);
    function ListCompositionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCompositionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCompositionQueryParams)
    ], ListCompositionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCompositionSecurity)
    ], ListCompositionRequest.prototype, "security", void 0);
    return ListCompositionRequest;
}(SpeakeasyBase));
export { ListCompositionRequest };
var ListCompositionListCompositionResponseMeta = /** @class */ (function (_super) {
    __extends(ListCompositionListCompositionResponseMeta, _super);
    function ListCompositionListCompositionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCompositionListCompositionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCompositionListCompositionResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCompositionListCompositionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCompositionListCompositionResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCompositionListCompositionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCompositionListCompositionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCompositionListCompositionResponseMeta.prototype, "url", void 0);
    return ListCompositionListCompositionResponseMeta;
}(SpeakeasyBase));
export { ListCompositionListCompositionResponseMeta };
var ListCompositionListCompositionResponse = /** @class */ (function (_super) {
    __extends(ListCompositionListCompositionResponse, _super);
    function ListCompositionListCompositionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=compositions", elemType: shared.VideoV1Composition }),
        __metadata("design:type", Array)
    ], ListCompositionListCompositionResponse.prototype, "compositions", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListCompositionListCompositionResponseMeta)
    ], ListCompositionListCompositionResponse.prototype, "meta", void 0);
    return ListCompositionListCompositionResponse;
}(SpeakeasyBase));
export { ListCompositionListCompositionResponse };
var ListCompositionResponse = /** @class */ (function (_super) {
    __extends(ListCompositionResponse, _super);
    function ListCompositionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCompositionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCompositionListCompositionResponse)
    ], ListCompositionResponse.prototype, "listCompositionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListCompositionResponse.prototype, "statusCode", void 0);
    return ListCompositionResponse;
}(SpeakeasyBase));
export { ListCompositionResponse };
