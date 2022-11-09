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
export var LISTASSISTANT_SERVERS = [
    "https://autopilot.twilio.com",
];
var ListAssistantQueryParams = /** @class */ (function (_super) {
    __extends(ListAssistantQueryParams, _super);
    function ListAssistantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAssistantQueryParams.prototype, "pageSize", void 0);
    return ListAssistantQueryParams;
}(SpeakeasyBase));
export { ListAssistantQueryParams };
var ListAssistantSecurity = /** @class */ (function (_super) {
    __extends(ListAssistantSecurity, _super);
    function ListAssistantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAssistantSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAssistantSecurity;
}(SpeakeasyBase));
export { ListAssistantSecurity };
var ListAssistantRequest = /** @class */ (function (_super) {
    __extends(ListAssistantRequest, _super);
    function ListAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAssistantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssistantQueryParams)
    ], ListAssistantRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssistantSecurity)
    ], ListAssistantRequest.prototype, "security", void 0);
    return ListAssistantRequest;
}(SpeakeasyBase));
export { ListAssistantRequest };
var ListAssistantListAssistantResponseMeta = /** @class */ (function (_super) {
    __extends(ListAssistantListAssistantResponseMeta, _super);
    function ListAssistantListAssistantResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListAssistantListAssistantResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListAssistantListAssistantResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListAssistantListAssistantResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAssistantListAssistantResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAssistantListAssistantResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListAssistantListAssistantResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListAssistantListAssistantResponseMeta.prototype, "url", void 0);
    return ListAssistantListAssistantResponseMeta;
}(SpeakeasyBase));
export { ListAssistantListAssistantResponseMeta };
var ListAssistantListAssistantResponse = /** @class */ (function (_super) {
    __extends(ListAssistantListAssistantResponse, _super);
    function ListAssistantListAssistantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=assistants", elemType: shared.AutopilotV1Assistant }),
        __metadata("design:type", Array)
    ], ListAssistantListAssistantResponse.prototype, "assistants", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListAssistantListAssistantResponseMeta)
    ], ListAssistantListAssistantResponse.prototype, "meta", void 0);
    return ListAssistantListAssistantResponse;
}(SpeakeasyBase));
export { ListAssistantListAssistantResponse };
var ListAssistantResponse = /** @class */ (function (_super) {
    __extends(ListAssistantResponse, _super);
    function ListAssistantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAssistantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssistantListAssistantResponse)
    ], ListAssistantResponse.prototype, "listAssistantResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAssistantResponse.prototype, "statusCode", void 0);
    return ListAssistantResponse;
}(SpeakeasyBase));
export { ListAssistantResponse };
