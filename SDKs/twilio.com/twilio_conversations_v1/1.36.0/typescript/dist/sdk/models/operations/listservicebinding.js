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
export var LISTSERVICEBINDING_SERVERS = [
    "https://conversations.twilio.com",
];
var ListServiceBindingPathParams = /** @class */ (function (_super) {
    __extends(ListServiceBindingPathParams, _super);
    function ListServiceBindingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceBindingPathParams.prototype, "chatServiceSid", void 0);
    return ListServiceBindingPathParams;
}(SpeakeasyBase));
export { ListServiceBindingPathParams };
var ListServiceBindingQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceBindingQueryParams, _super);
    function ListServiceBindingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=BindingType" }),
        __metadata("design:type", Array)
    ], ListServiceBindingQueryParams.prototype, "bindingType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", Array)
    ], ListServiceBindingQueryParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceBindingQueryParams.prototype, "pageSize", void 0);
    return ListServiceBindingQueryParams;
}(SpeakeasyBase));
export { ListServiceBindingQueryParams };
var ListServiceBindingSecurity = /** @class */ (function (_super) {
    __extends(ListServiceBindingSecurity, _super);
    function ListServiceBindingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceBindingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceBindingSecurity;
}(SpeakeasyBase));
export { ListServiceBindingSecurity };
var ListServiceBindingRequest = /** @class */ (function (_super) {
    __extends(ListServiceBindingRequest, _super);
    function ListServiceBindingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceBindingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceBindingPathParams)
    ], ListServiceBindingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceBindingQueryParams)
    ], ListServiceBindingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceBindingSecurity)
    ], ListServiceBindingRequest.prototype, "security", void 0);
    return ListServiceBindingRequest;
}(SpeakeasyBase));
export { ListServiceBindingRequest };
var ListServiceBindingListServiceBindingResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceBindingListServiceBindingResponseMeta, _super);
    function ListServiceBindingListServiceBindingResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceBindingListServiceBindingResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceBindingListServiceBindingResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceBindingListServiceBindingResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceBindingListServiceBindingResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceBindingListServiceBindingResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceBindingListServiceBindingResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceBindingListServiceBindingResponseMeta.prototype, "url", void 0);
    return ListServiceBindingListServiceBindingResponseMeta;
}(SpeakeasyBase));
export { ListServiceBindingListServiceBindingResponseMeta };
var ListServiceBindingListServiceBindingResponse = /** @class */ (function (_super) {
    __extends(ListServiceBindingListServiceBindingResponse, _super);
    function ListServiceBindingListServiceBindingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bindings", elemType: shared.ConversationsV1ServiceServiceBinding }),
        __metadata("design:type", Array)
    ], ListServiceBindingListServiceBindingResponse.prototype, "bindings", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceBindingListServiceBindingResponseMeta)
    ], ListServiceBindingListServiceBindingResponse.prototype, "meta", void 0);
    return ListServiceBindingListServiceBindingResponse;
}(SpeakeasyBase));
export { ListServiceBindingListServiceBindingResponse };
var ListServiceBindingResponse = /** @class */ (function (_super) {
    __extends(ListServiceBindingResponse, _super);
    function ListServiceBindingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListServiceBindingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListServiceBindingListServiceBindingResponse)
    ], ListServiceBindingResponse.prototype, "listServiceBindingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListServiceBindingResponse.prototype, "statusCode", void 0);
    return ListServiceBindingResponse;
}(SpeakeasyBase));
export { ListServiceBindingResponse };
