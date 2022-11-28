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
export var ListQueryServerList = [
    "https://autopilot.twilio.com",
];
var ListQueryPathParams = /** @class */ (function (_super) {
    __extends(ListQueryPathParams, _super);
    function ListQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListQueryPathParams.prototype, "assistantSid", void 0);
    return ListQueryPathParams;
}(SpeakeasyBase));
export { ListQueryPathParams };
var ListQueryQueryParams = /** @class */ (function (_super) {
    __extends(ListQueryQueryParams, _super);
    function ListQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DialogueSid" }),
        __metadata("design:type", String)
    ], ListQueryQueryParams.prototype, "dialogueSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Language" }),
        __metadata("design:type", String)
    ], ListQueryQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ModelBuild" }),
        __metadata("design:type", String)
    ], ListQueryQueryParams.prototype, "modelBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListQueryQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListQueryQueryParams.prototype, "status", void 0);
    return ListQueryQueryParams;
}(SpeakeasyBase));
export { ListQueryQueryParams };
var ListQuerySecurity = /** @class */ (function (_super) {
    __extends(ListQuerySecurity, _super);
    function ListQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListQuerySecurity.prototype, "accountSidAuthToken", void 0);
    return ListQuerySecurity;
}(SpeakeasyBase));
export { ListQuerySecurity };
var ListQueryListQueryResponseMeta = /** @class */ (function (_super) {
    __extends(ListQueryListQueryResponseMeta, _super);
    function ListQueryListQueryResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListQueryListQueryResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListQueryListQueryResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListQueryListQueryResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListQueryListQueryResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListQueryListQueryResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListQueryListQueryResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListQueryListQueryResponseMeta.prototype, "url", void 0);
    return ListQueryListQueryResponseMeta;
}(SpeakeasyBase));
export { ListQueryListQueryResponseMeta };
var ListQueryListQueryResponse = /** @class */ (function (_super) {
    __extends(ListQueryListQueryResponse, _super);
    function ListQueryListQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListQueryListQueryResponseMeta)
    ], ListQueryListQueryResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queries", elemType: shared.AutopilotV1AssistantQuery }),
        __metadata("design:type", Array)
    ], ListQueryListQueryResponse.prototype, "queries", void 0);
    return ListQueryListQueryResponse;
}(SpeakeasyBase));
export { ListQueryListQueryResponse };
var ListQueryRequest = /** @class */ (function (_super) {
    __extends(ListQueryRequest, _super);
    function ListQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListQueryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListQueryPathParams)
    ], ListQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListQueryQueryParams)
    ], ListQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListQuerySecurity)
    ], ListQueryRequest.prototype, "security", void 0);
    return ListQueryRequest;
}(SpeakeasyBase));
export { ListQueryRequest };
var ListQueryResponse = /** @class */ (function (_super) {
    __extends(ListQueryResponse, _super);
    function ListQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListQueryListQueryResponse)
    ], ListQueryResponse.prototype, "listQueryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListQueryResponse.prototype, "statusCode", void 0);
    return ListQueryResponse;
}(SpeakeasyBase));
export { ListQueryResponse };
