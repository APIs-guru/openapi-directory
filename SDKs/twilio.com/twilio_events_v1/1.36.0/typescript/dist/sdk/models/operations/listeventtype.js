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
export var LISTEVENTTYPE_SERVERS = [
    "https://events.twilio.com",
];
var ListEventTypeQueryParams = /** @class */ (function (_super) {
    __extends(ListEventTypeQueryParams, _super);
    function ListEventTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEventTypeQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SchemaId" }),
        __metadata("design:type", String)
    ], ListEventTypeQueryParams.prototype, "schemaId", void 0);
    return ListEventTypeQueryParams;
}(SpeakeasyBase));
export { ListEventTypeQueryParams };
var ListEventTypeSecurity = /** @class */ (function (_super) {
    __extends(ListEventTypeSecurity, _super);
    function ListEventTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEventTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEventTypeSecurity;
}(SpeakeasyBase));
export { ListEventTypeSecurity };
var ListEventTypeRequest = /** @class */ (function (_super) {
    __extends(ListEventTypeRequest, _super);
    function ListEventTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEventTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEventTypeQueryParams)
    ], ListEventTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEventTypeSecurity)
    ], ListEventTypeRequest.prototype, "security", void 0);
    return ListEventTypeRequest;
}(SpeakeasyBase));
export { ListEventTypeRequest };
var ListEventTypeListEventTypeResponseMeta = /** @class */ (function (_super) {
    __extends(ListEventTypeListEventTypeResponseMeta, _super);
    function ListEventTypeListEventTypeResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEventTypeListEventTypeResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEventTypeListEventTypeResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEventTypeListEventTypeResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEventTypeListEventTypeResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEventTypeListEventTypeResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEventTypeListEventTypeResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEventTypeListEventTypeResponseMeta.prototype, "url", void 0);
    return ListEventTypeListEventTypeResponseMeta;
}(SpeakeasyBase));
export { ListEventTypeListEventTypeResponseMeta };
var ListEventTypeListEventTypeResponse = /** @class */ (function (_super) {
    __extends(ListEventTypeListEventTypeResponse, _super);
    function ListEventTypeListEventTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListEventTypeListEventTypeResponseMeta)
    ], ListEventTypeListEventTypeResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=types", elemType: shared.EventsV1EventType }),
        __metadata("design:type", Array)
    ], ListEventTypeListEventTypeResponse.prototype, "types", void 0);
    return ListEventTypeListEventTypeResponse;
}(SpeakeasyBase));
export { ListEventTypeListEventTypeResponse };
var ListEventTypeResponse = /** @class */ (function (_super) {
    __extends(ListEventTypeResponse, _super);
    function ListEventTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEventTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEventTypeListEventTypeResponse)
    ], ListEventTypeResponse.prototype, "listEventTypeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListEventTypeResponse.prototype, "statusCode", void 0);
    return ListEventTypeResponse;
}(SpeakeasyBase));
export { ListEventTypeResponse };
