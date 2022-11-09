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
export var LISTCHANNEL_SERVERS = [
    "https://ip-messaging.twilio.com",
];
var ListChannelPathParams = /** @class */ (function (_super) {
    __extends(ListChannelPathParams, _super);
    function ListChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListChannelPathParams.prototype, "serviceSid", void 0);
    return ListChannelPathParams;
}(SpeakeasyBase));
export { ListChannelPathParams };
var ListChannelQueryParams = /** @class */ (function (_super) {
    __extends(ListChannelQueryParams, _super);
    function ListChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListChannelQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Type" }),
        __metadata("design:type", Array)
    ], ListChannelQueryParams.prototype, "type", void 0);
    return ListChannelQueryParams;
}(SpeakeasyBase));
export { ListChannelQueryParams };
var ListChannelSecurity = /** @class */ (function (_super) {
    __extends(ListChannelSecurity, _super);
    function ListChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return ListChannelSecurity;
}(SpeakeasyBase));
export { ListChannelSecurity };
var ListChannelRequest = /** @class */ (function (_super) {
    __extends(ListChannelRequest, _super);
    function ListChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListChannelPathParams)
    ], ListChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListChannelQueryParams)
    ], ListChannelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListChannelSecurity)
    ], ListChannelRequest.prototype, "security", void 0);
    return ListChannelRequest;
}(SpeakeasyBase));
export { ListChannelRequest };
var ListChannelListChannelResponseMeta = /** @class */ (function (_super) {
    __extends(ListChannelListChannelResponseMeta, _super);
    function ListChannelListChannelResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListChannelListChannelResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListChannelListChannelResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListChannelListChannelResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListChannelListChannelResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListChannelListChannelResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListChannelListChannelResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListChannelListChannelResponseMeta.prototype, "url", void 0);
    return ListChannelListChannelResponseMeta;
}(SpeakeasyBase));
export { ListChannelListChannelResponseMeta };
var ListChannelListChannelResponse = /** @class */ (function (_super) {
    __extends(ListChannelListChannelResponse, _super);
    function ListChannelListChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=channels", elemType: shared.IpMessagingV2ServiceChannel }),
        __metadata("design:type", Array)
    ], ListChannelListChannelResponse.prototype, "channels", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListChannelListChannelResponseMeta)
    ], ListChannelListChannelResponse.prototype, "meta", void 0);
    return ListChannelListChannelResponse;
}(SpeakeasyBase));
export { ListChannelListChannelResponse };
var ListChannelResponse = /** @class */ (function (_super) {
    __extends(ListChannelResponse, _super);
    function ListChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListChannelListChannelResponse)
    ], ListChannelResponse.prototype, "listChannelResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListChannelResponse.prototype, "statusCode", void 0);
    return ListChannelResponse;
}(SpeakeasyBase));
export { ListChannelResponse };
