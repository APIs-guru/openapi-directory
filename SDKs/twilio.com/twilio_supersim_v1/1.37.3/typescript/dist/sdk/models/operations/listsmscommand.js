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
export var ListSmsCommandServerList = [
    "https://supersim.twilio.com",
];
var ListSmsCommandQueryParams = /** @class */ (function (_super) {
    __extends(ListSmsCommandQueryParams, _super);
    function ListSmsCommandQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Direction" }),
        __metadata("design:type", String)
    ], ListSmsCommandQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSmsCommandQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Sim" }),
        __metadata("design:type", String)
    ], ListSmsCommandQueryParams.prototype, "sim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListSmsCommandQueryParams.prototype, "status", void 0);
    return ListSmsCommandQueryParams;
}(SpeakeasyBase));
export { ListSmsCommandQueryParams };
var ListSmsCommandSecurity = /** @class */ (function (_super) {
    __extends(ListSmsCommandSecurity, _super);
    function ListSmsCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSmsCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSmsCommandSecurity;
}(SpeakeasyBase));
export { ListSmsCommandSecurity };
var ListSmsCommandListSmsCommandResponseMeta = /** @class */ (function (_super) {
    __extends(ListSmsCommandListSmsCommandResponseMeta, _super);
    function ListSmsCommandListSmsCommandResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSmsCommandListSmsCommandResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSmsCommandListSmsCommandResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSmsCommandListSmsCommandResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSmsCommandListSmsCommandResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSmsCommandListSmsCommandResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSmsCommandListSmsCommandResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSmsCommandListSmsCommandResponseMeta.prototype, "url", void 0);
    return ListSmsCommandListSmsCommandResponseMeta;
}(SpeakeasyBase));
export { ListSmsCommandListSmsCommandResponseMeta };
var ListSmsCommandListSmsCommandResponse = /** @class */ (function (_super) {
    __extends(ListSmsCommandListSmsCommandResponse, _super);
    function ListSmsCommandListSmsCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSmsCommandListSmsCommandResponseMeta)
    ], ListSmsCommandListSmsCommandResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sms_commands", elemType: shared.SupersimV1SmsCommand }),
        __metadata("design:type", Array)
    ], ListSmsCommandListSmsCommandResponse.prototype, "smsCommands", void 0);
    return ListSmsCommandListSmsCommandResponse;
}(SpeakeasyBase));
export { ListSmsCommandListSmsCommandResponse };
var ListSmsCommandRequest = /** @class */ (function (_super) {
    __extends(ListSmsCommandRequest, _super);
    function ListSmsCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSmsCommandRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSmsCommandQueryParams)
    ], ListSmsCommandRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSmsCommandSecurity)
    ], ListSmsCommandRequest.prototype, "security", void 0);
    return ListSmsCommandRequest;
}(SpeakeasyBase));
export { ListSmsCommandRequest };
var ListSmsCommandResponse = /** @class */ (function (_super) {
    __extends(ListSmsCommandResponse, _super);
    function ListSmsCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSmsCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSmsCommandListSmsCommandResponse)
    ], ListSmsCommandResponse.prototype, "listSmsCommandResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSmsCommandResponse.prototype, "statusCode", void 0);
    return ListSmsCommandResponse;
}(SpeakeasyBase));
export { ListSmsCommandResponse };
