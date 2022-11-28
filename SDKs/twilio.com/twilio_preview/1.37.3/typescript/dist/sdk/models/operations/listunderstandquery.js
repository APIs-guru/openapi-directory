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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var ListUnderstandQueryServerList = [
    "https://preview.twilio.com",
];
var ListUnderstandQueryPathParams = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryPathParams, _super);
    function ListUnderstandQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryPathParams.prototype, "assistantSid", void 0);
    return ListUnderstandQueryPathParams;
}(SpeakeasyBase));
export { ListUnderstandQueryPathParams };
var ListUnderstandQueryQueryParams = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryQueryParams, _super);
    function ListUnderstandQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Language" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ModelBuild" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryQueryParams.prototype, "modelBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUnderstandQueryQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryQueryParams.prototype, "status", void 0);
    return ListUnderstandQueryQueryParams;
}(SpeakeasyBase));
export { ListUnderstandQueryQueryParams };
var ListUnderstandQuerySecurity = /** @class */ (function (_super) {
    __extends(ListUnderstandQuerySecurity, _super);
    function ListUnderstandQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUnderstandQuerySecurity.prototype, "accountSidAuthToken", void 0);
    return ListUnderstandQuerySecurity;
}(SpeakeasyBase));
export { ListUnderstandQuerySecurity };
var ListUnderstandQueryListUnderstandQueryResponseMeta = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryListUnderstandQueryResponseMeta, _super);
    function ListUnderstandQueryListUnderstandQueryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUnderstandQueryListUnderstandQueryResponseMeta.prototype, "url", void 0);
    return ListUnderstandQueryListUnderstandQueryResponseMeta;
}(SpeakeasyBase));
export { ListUnderstandQueryListUnderstandQueryResponseMeta };
var ListUnderstandQueryListUnderstandQueryResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryListUnderstandQueryResponse, _super);
    function ListUnderstandQueryListUnderstandQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUnderstandQueryListUnderstandQueryResponseMeta)
    ], ListUnderstandQueryListUnderstandQueryResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queries", elemType: shared.PreviewUnderstandAssistantQuery }),
        __metadata("design:type", Array)
    ], ListUnderstandQueryListUnderstandQueryResponse.prototype, "queries", void 0);
    return ListUnderstandQueryListUnderstandQueryResponse;
}(SpeakeasyBase));
export { ListUnderstandQueryListUnderstandQueryResponse };
var ListUnderstandQueryRequest = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryRequest, _super);
    function ListUnderstandQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUnderstandQueryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandQueryPathParams)
    ], ListUnderstandQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandQueryQueryParams)
    ], ListUnderstandQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandQuerySecurity)
    ], ListUnderstandQueryRequest.prototype, "security", void 0);
    return ListUnderstandQueryRequest;
}(SpeakeasyBase));
export { ListUnderstandQueryRequest };
var ListUnderstandQueryResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandQueryResponse, _super);
    function ListUnderstandQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUnderstandQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandQueryListUnderstandQueryResponse)
    ], ListUnderstandQueryResponse.prototype, "listUnderstandQueryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListUnderstandQueryResponse.prototype, "statusCode", void 0);
    return ListUnderstandQueryResponse;
}(SpeakeasyBase));
export { ListUnderstandQueryResponse };
