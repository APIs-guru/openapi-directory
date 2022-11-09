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
export var LISTUSERBINDING_SERVERS = [
    "https://ip-messaging.twilio.com",
];
var ListUserBindingPathParams = /** @class */ (function (_super) {
    __extends(ListUserBindingPathParams, _super);
    function ListUserBindingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListUserBindingPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], ListUserBindingPathParams.prototype, "userSid", void 0);
    return ListUserBindingPathParams;
}(SpeakeasyBase));
export { ListUserBindingPathParams };
var ListUserBindingQueryParams = /** @class */ (function (_super) {
    __extends(ListUserBindingQueryParams, _super);
    function ListUserBindingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=BindingType" }),
        __metadata("design:type", Array)
    ], ListUserBindingQueryParams.prototype, "bindingType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUserBindingQueryParams.prototype, "pageSize", void 0);
    return ListUserBindingQueryParams;
}(SpeakeasyBase));
export { ListUserBindingQueryParams };
var ListUserBindingSecurity = /** @class */ (function (_super) {
    __extends(ListUserBindingSecurity, _super);
    function ListUserBindingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUserBindingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUserBindingSecurity;
}(SpeakeasyBase));
export { ListUserBindingSecurity };
var ListUserBindingRequest = /** @class */ (function (_super) {
    __extends(ListUserBindingRequest, _super);
    function ListUserBindingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUserBindingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUserBindingPathParams)
    ], ListUserBindingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUserBindingQueryParams)
    ], ListUserBindingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUserBindingSecurity)
    ], ListUserBindingRequest.prototype, "security", void 0);
    return ListUserBindingRequest;
}(SpeakeasyBase));
export { ListUserBindingRequest };
var ListUserBindingListUserBindingResponseMeta = /** @class */ (function (_super) {
    __extends(ListUserBindingListUserBindingResponseMeta, _super);
    function ListUserBindingListUserBindingResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUserBindingListUserBindingResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUserBindingListUserBindingResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUserBindingListUserBindingResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUserBindingListUserBindingResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUserBindingListUserBindingResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUserBindingListUserBindingResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUserBindingListUserBindingResponseMeta.prototype, "url", void 0);
    return ListUserBindingListUserBindingResponseMeta;
}(SpeakeasyBase));
export { ListUserBindingListUserBindingResponseMeta };
var ListUserBindingListUserBindingResponse = /** @class */ (function (_super) {
    __extends(ListUserBindingListUserBindingResponse, _super);
    function ListUserBindingListUserBindingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bindings", elemType: shared.IpMessagingV2ServiceUserUserBinding }),
        __metadata("design:type", Array)
    ], ListUserBindingListUserBindingResponse.prototype, "bindings", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUserBindingListUserBindingResponseMeta)
    ], ListUserBindingListUserBindingResponse.prototype, "meta", void 0);
    return ListUserBindingListUserBindingResponse;
}(SpeakeasyBase));
export { ListUserBindingListUserBindingResponse };
var ListUserBindingResponse = /** @class */ (function (_super) {
    __extends(ListUserBindingResponse, _super);
    function ListUserBindingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListUserBindingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListUserBindingListUserBindingResponse)
    ], ListUserBindingResponse.prototype, "listUserBindingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListUserBindingResponse.prototype, "statusCode", void 0);
    return ListUserBindingResponse;
}(SpeakeasyBase));
export { ListUserBindingResponse };
