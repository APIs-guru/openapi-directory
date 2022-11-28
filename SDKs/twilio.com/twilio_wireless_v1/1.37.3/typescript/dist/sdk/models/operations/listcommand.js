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
export var ListCommandServerList = [
    "https://wireless.twilio.com",
];
var ListCommandQueryParams = /** @class */ (function (_super) {
    __extends(ListCommandQueryParams, _super);
    function ListCommandQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Direction" }),
        __metadata("design:type", String)
    ], ListCommandQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCommandQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Sim" }),
        __metadata("design:type", String)
    ], ListCommandQueryParams.prototype, "sim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListCommandQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Transport" }),
        __metadata("design:type", String)
    ], ListCommandQueryParams.prototype, "transport", void 0);
    return ListCommandQueryParams;
}(SpeakeasyBase));
export { ListCommandQueryParams };
var ListCommandSecurity = /** @class */ (function (_super) {
    __extends(ListCommandSecurity, _super);
    function ListCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCommandSecurity;
}(SpeakeasyBase));
export { ListCommandSecurity };
var ListCommandListCommandResponseMeta = /** @class */ (function (_super) {
    __extends(ListCommandListCommandResponseMeta, _super);
    function ListCommandListCommandResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListCommandListCommandResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListCommandListCommandResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListCommandListCommandResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCommandListCommandResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCommandListCommandResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListCommandListCommandResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListCommandListCommandResponseMeta.prototype, "url", void 0);
    return ListCommandListCommandResponseMeta;
}(SpeakeasyBase));
export { ListCommandListCommandResponseMeta };
var ListCommandListCommandResponse = /** @class */ (function (_super) {
    __extends(ListCommandListCommandResponse, _super);
    function ListCommandListCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commands", elemType: shared.WirelessV1Command }),
        __metadata("design:type", Array)
    ], ListCommandListCommandResponse.prototype, "commands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListCommandListCommandResponseMeta)
    ], ListCommandListCommandResponse.prototype, "meta", void 0);
    return ListCommandListCommandResponse;
}(SpeakeasyBase));
export { ListCommandListCommandResponse };
var ListCommandRequest = /** @class */ (function (_super) {
    __extends(ListCommandRequest, _super);
    function ListCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCommandRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCommandQueryParams)
    ], ListCommandRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCommandSecurity)
    ], ListCommandRequest.prototype, "security", void 0);
    return ListCommandRequest;
}(SpeakeasyBase));
export { ListCommandRequest };
var ListCommandResponse = /** @class */ (function (_super) {
    __extends(ListCommandResponse, _super);
    function ListCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCommandListCommandResponse)
    ], ListCommandResponse.prototype, "listCommandResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListCommandResponse.prototype, "statusCode", void 0);
    return ListCommandResponse;
}(SpeakeasyBase));
export { ListCommandResponse };
