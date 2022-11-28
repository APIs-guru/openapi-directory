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
export var ListUnderstandAssistantServerList = [
    "https://preview.twilio.com",
];
var ListUnderstandAssistantQueryParams = /** @class */ (function (_super) {
    __extends(ListUnderstandAssistantQueryParams, _super);
    function ListUnderstandAssistantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUnderstandAssistantQueryParams.prototype, "pageSize", void 0);
    return ListUnderstandAssistantQueryParams;
}(SpeakeasyBase));
export { ListUnderstandAssistantQueryParams };
var ListUnderstandAssistantSecurity = /** @class */ (function (_super) {
    __extends(ListUnderstandAssistantSecurity, _super);
    function ListUnderstandAssistantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUnderstandAssistantSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUnderstandAssistantSecurity;
}(SpeakeasyBase));
export { ListUnderstandAssistantSecurity };
var ListUnderstandAssistantListUnderstandAssistantResponseMeta = /** @class */ (function (_super) {
    __extends(ListUnderstandAssistantListUnderstandAssistantResponseMeta, _super);
    function ListUnderstandAssistantListUnderstandAssistantResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandAssistantListUnderstandAssistantResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUnderstandAssistantListUnderstandAssistantResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandAssistantListUnderstandAssistantResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUnderstandAssistantListUnderstandAssistantResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUnderstandAssistantListUnderstandAssistantResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUnderstandAssistantListUnderstandAssistantResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUnderstandAssistantListUnderstandAssistantResponseMeta.prototype, "url", void 0);
    return ListUnderstandAssistantListUnderstandAssistantResponseMeta;
}(SpeakeasyBase));
export { ListUnderstandAssistantListUnderstandAssistantResponseMeta };
var ListUnderstandAssistantListUnderstandAssistantResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandAssistantListUnderstandAssistantResponse, _super);
    function ListUnderstandAssistantListUnderstandAssistantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assistants", elemType: shared.PreviewUnderstandAssistant }),
        __metadata("design:type", Array)
    ], ListUnderstandAssistantListUnderstandAssistantResponse.prototype, "assistants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUnderstandAssistantListUnderstandAssistantResponseMeta)
    ], ListUnderstandAssistantListUnderstandAssistantResponse.prototype, "meta", void 0);
    return ListUnderstandAssistantListUnderstandAssistantResponse;
}(SpeakeasyBase));
export { ListUnderstandAssistantListUnderstandAssistantResponse };
var ListUnderstandAssistantRequest = /** @class */ (function (_super) {
    __extends(ListUnderstandAssistantRequest, _super);
    function ListUnderstandAssistantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUnderstandAssistantRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandAssistantQueryParams)
    ], ListUnderstandAssistantRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandAssistantSecurity)
    ], ListUnderstandAssistantRequest.prototype, "security", void 0);
    return ListUnderstandAssistantRequest;
}(SpeakeasyBase));
export { ListUnderstandAssistantRequest };
var ListUnderstandAssistantResponse = /** @class */ (function (_super) {
    __extends(ListUnderstandAssistantResponse, _super);
    function ListUnderstandAssistantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUnderstandAssistantResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUnderstandAssistantListUnderstandAssistantResponse)
    ], ListUnderstandAssistantResponse.prototype, "listUnderstandAssistantResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListUnderstandAssistantResponse.prototype, "statusCode", void 0);
    return ListUnderstandAssistantResponse;
}(SpeakeasyBase));
export { ListUnderstandAssistantResponse };
