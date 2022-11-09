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
export var LISTTASKCHANNEL_SERVERS = [
    "https://taskrouter.twilio.com",
];
var ListTaskChannelPathParams = /** @class */ (function (_super) {
    __extends(ListTaskChannelPathParams, _super);
    function ListTaskChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListTaskChannelPathParams.prototype, "workspaceSid", void 0);
    return ListTaskChannelPathParams;
}(SpeakeasyBase));
export { ListTaskChannelPathParams };
var ListTaskChannelQueryParams = /** @class */ (function (_super) {
    __extends(ListTaskChannelQueryParams, _super);
    function ListTaskChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTaskChannelQueryParams.prototype, "pageSize", void 0);
    return ListTaskChannelQueryParams;
}(SpeakeasyBase));
export { ListTaskChannelQueryParams };
var ListTaskChannelSecurity = /** @class */ (function (_super) {
    __extends(ListTaskChannelSecurity, _super);
    function ListTaskChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTaskChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTaskChannelSecurity;
}(SpeakeasyBase));
export { ListTaskChannelSecurity };
var ListTaskChannelRequest = /** @class */ (function (_super) {
    __extends(ListTaskChannelRequest, _super);
    function ListTaskChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTaskChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskChannelPathParams)
    ], ListTaskChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskChannelQueryParams)
    ], ListTaskChannelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskChannelSecurity)
    ], ListTaskChannelRequest.prototype, "security", void 0);
    return ListTaskChannelRequest;
}(SpeakeasyBase));
export { ListTaskChannelRequest };
var ListTaskChannelListTaskChannelResponseMeta = /** @class */ (function (_super) {
    __extends(ListTaskChannelListTaskChannelResponseMeta, _super);
    function ListTaskChannelListTaskChannelResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTaskChannelListTaskChannelResponseMeta.prototype, "url", void 0);
    return ListTaskChannelListTaskChannelResponseMeta;
}(SpeakeasyBase));
export { ListTaskChannelListTaskChannelResponseMeta };
var ListTaskChannelListTaskChannelResponse = /** @class */ (function (_super) {
    __extends(ListTaskChannelListTaskChannelResponse, _super);
    function ListTaskChannelListTaskChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=channels", elemType: shared.TaskrouterV1WorkspaceTaskChannel }),
        __metadata("design:type", Array)
    ], ListTaskChannelListTaskChannelResponse.prototype, "channels", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTaskChannelListTaskChannelResponseMeta)
    ], ListTaskChannelListTaskChannelResponse.prototype, "meta", void 0);
    return ListTaskChannelListTaskChannelResponse;
}(SpeakeasyBase));
export { ListTaskChannelListTaskChannelResponse };
var ListTaskChannelResponse = /** @class */ (function (_super) {
    __extends(ListTaskChannelResponse, _super);
    function ListTaskChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTaskChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTaskChannelListTaskChannelResponse)
    ], ListTaskChannelResponse.prototype, "listTaskChannelResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTaskChannelResponse.prototype, "statusCode", void 0);
    return ListTaskChannelResponse;
}(SpeakeasyBase));
export { ListTaskChannelResponse };
