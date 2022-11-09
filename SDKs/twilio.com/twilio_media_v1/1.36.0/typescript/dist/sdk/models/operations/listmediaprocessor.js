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
export var LISTMEDIAPROCESSOR_SERVERS = [
    "https://media.twilio.com",
];
var ListMediaProcessorQueryParams = /** @class */ (function (_super) {
    __extends(ListMediaProcessorQueryParams, _super);
    function ListMediaProcessorQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListMediaProcessorQueryParams.prototype, "order", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMediaProcessorQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListMediaProcessorQueryParams.prototype, "status", void 0);
    return ListMediaProcessorQueryParams;
}(SpeakeasyBase));
export { ListMediaProcessorQueryParams };
var ListMediaProcessorSecurity = /** @class */ (function (_super) {
    __extends(ListMediaProcessorSecurity, _super);
    function ListMediaProcessorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMediaProcessorSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMediaProcessorSecurity;
}(SpeakeasyBase));
export { ListMediaProcessorSecurity };
var ListMediaProcessorRequest = /** @class */ (function (_super) {
    __extends(ListMediaProcessorRequest, _super);
    function ListMediaProcessorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMediaProcessorRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMediaProcessorQueryParams)
    ], ListMediaProcessorRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMediaProcessorSecurity)
    ], ListMediaProcessorRequest.prototype, "security", void 0);
    return ListMediaProcessorRequest;
}(SpeakeasyBase));
export { ListMediaProcessorRequest };
var ListMediaProcessorListMediaProcessorResponseMeta = /** @class */ (function (_super) {
    __extends(ListMediaProcessorListMediaProcessorResponseMeta, _super);
    function ListMediaProcessorListMediaProcessorResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMediaProcessorListMediaProcessorResponseMeta.prototype, "url", void 0);
    return ListMediaProcessorListMediaProcessorResponseMeta;
}(SpeakeasyBase));
export { ListMediaProcessorListMediaProcessorResponseMeta };
var ListMediaProcessorListMediaProcessorResponse = /** @class */ (function (_super) {
    __extends(ListMediaProcessorListMediaProcessorResponse, _super);
    function ListMediaProcessorListMediaProcessorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=media_processors", elemType: shared.MediaV1MediaProcessor }),
        __metadata("design:type", Array)
    ], ListMediaProcessorListMediaProcessorResponse.prototype, "mediaProcessors", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListMediaProcessorListMediaProcessorResponseMeta)
    ], ListMediaProcessorListMediaProcessorResponse.prototype, "meta", void 0);
    return ListMediaProcessorListMediaProcessorResponse;
}(SpeakeasyBase));
export { ListMediaProcessorListMediaProcessorResponse };
var ListMediaProcessorResponse = /** @class */ (function (_super) {
    __extends(ListMediaProcessorResponse, _super);
    function ListMediaProcessorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMediaProcessorResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMediaProcessorListMediaProcessorResponse)
    ], ListMediaProcessorResponse.prototype, "listMediaProcessorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListMediaProcessorResponse.prototype, "statusCode", void 0);
    return ListMediaProcessorResponse;
}(SpeakeasyBase));
export { ListMediaProcessorResponse };
