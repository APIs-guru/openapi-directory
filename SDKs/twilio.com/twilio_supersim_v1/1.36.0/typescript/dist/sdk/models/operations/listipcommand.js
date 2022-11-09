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
export var LISTIPCOMMAND_SERVERS = [
    "https://supersim.twilio.com",
];
var ListIpCommandQueryParams = /** @class */ (function (_super) {
    __extends(ListIpCommandQueryParams, _super);
    function ListIpCommandQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Direction" }),
        __metadata("design:type", String)
    ], ListIpCommandQueryParams.prototype, "direction", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIpCommandQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Sim" }),
        __metadata("design:type", String)
    ], ListIpCommandQueryParams.prototype, "sim", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SimIccid" }),
        __metadata("design:type", String)
    ], ListIpCommandQueryParams.prototype, "simIccid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListIpCommandQueryParams.prototype, "status", void 0);
    return ListIpCommandQueryParams;
}(SpeakeasyBase));
export { ListIpCommandQueryParams };
var ListIpCommandSecurity = /** @class */ (function (_super) {
    __extends(ListIpCommandSecurity, _super);
    function ListIpCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIpCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIpCommandSecurity;
}(SpeakeasyBase));
export { ListIpCommandSecurity };
var ListIpCommandRequest = /** @class */ (function (_super) {
    __extends(ListIpCommandRequest, _super);
    function ListIpCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIpCommandRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIpCommandQueryParams)
    ], ListIpCommandRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIpCommandSecurity)
    ], ListIpCommandRequest.prototype, "security", void 0);
    return ListIpCommandRequest;
}(SpeakeasyBase));
export { ListIpCommandRequest };
var ListIpCommandListIpCommandResponseMeta = /** @class */ (function (_super) {
    __extends(ListIpCommandListIpCommandResponseMeta, _super);
    function ListIpCommandListIpCommandResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListIpCommandListIpCommandResponseMeta.prototype, "url", void 0);
    return ListIpCommandListIpCommandResponseMeta;
}(SpeakeasyBase));
export { ListIpCommandListIpCommandResponseMeta };
var ListIpCommandListIpCommandResponse = /** @class */ (function (_super) {
    __extends(ListIpCommandListIpCommandResponse, _super);
    function ListIpCommandListIpCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ip_commands", elemType: shared.SupersimV1IpCommand }),
        __metadata("design:type", Array)
    ], ListIpCommandListIpCommandResponse.prototype, "ipCommands", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListIpCommandListIpCommandResponseMeta)
    ], ListIpCommandListIpCommandResponse.prototype, "meta", void 0);
    return ListIpCommandListIpCommandResponse;
}(SpeakeasyBase));
export { ListIpCommandListIpCommandResponse };
var ListIpCommandResponse = /** @class */ (function (_super) {
    __extends(ListIpCommandResponse, _super);
    function ListIpCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIpCommandResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIpCommandListIpCommandResponse)
    ], ListIpCommandResponse.prototype, "listIpCommandResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListIpCommandResponse.prototype, "statusCode", void 0);
    return ListIpCommandResponse;
}(SpeakeasyBase));
export { ListIpCommandResponse };
