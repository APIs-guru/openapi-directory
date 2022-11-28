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
export var ListWorkerChannelServerList = [
    "https://taskrouter.twilio.com",
];
var ListWorkerChannelPathParams = /** @class */ (function (_super) {
    __extends(ListWorkerChannelPathParams, _super);
    function ListWorkerChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" }),
        __metadata("design:type", String)
    ], ListWorkerChannelPathParams.prototype, "workerSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListWorkerChannelPathParams.prototype, "workspaceSid", void 0);
    return ListWorkerChannelPathParams;
}(SpeakeasyBase));
export { ListWorkerChannelPathParams };
var ListWorkerChannelQueryParams = /** @class */ (function (_super) {
    __extends(ListWorkerChannelQueryParams, _super);
    function ListWorkerChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListWorkerChannelQueryParams.prototype, "pageSize", void 0);
    return ListWorkerChannelQueryParams;
}(SpeakeasyBase));
export { ListWorkerChannelQueryParams };
var ListWorkerChannelSecurity = /** @class */ (function (_super) {
    __extends(ListWorkerChannelSecurity, _super);
    function ListWorkerChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListWorkerChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return ListWorkerChannelSecurity;
}(SpeakeasyBase));
export { ListWorkerChannelSecurity };
var ListWorkerChannelListWorkerChannelResponseMeta = /** @class */ (function (_super) {
    __extends(ListWorkerChannelListWorkerChannelResponseMeta, _super);
    function ListWorkerChannelListWorkerChannelResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListWorkerChannelListWorkerChannelResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListWorkerChannelListWorkerChannelResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListWorkerChannelListWorkerChannelResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListWorkerChannelListWorkerChannelResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWorkerChannelListWorkerChannelResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListWorkerChannelListWorkerChannelResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListWorkerChannelListWorkerChannelResponseMeta.prototype, "url", void 0);
    return ListWorkerChannelListWorkerChannelResponseMeta;
}(SpeakeasyBase));
export { ListWorkerChannelListWorkerChannelResponseMeta };
var ListWorkerChannelListWorkerChannelResponse = /** @class */ (function (_super) {
    __extends(ListWorkerChannelListWorkerChannelResponse, _super);
    function ListWorkerChannelListWorkerChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels", elemType: shared.TaskrouterV1WorkspaceWorkerWorkerChannel }),
        __metadata("design:type", Array)
    ], ListWorkerChannelListWorkerChannelResponse.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListWorkerChannelListWorkerChannelResponseMeta)
    ], ListWorkerChannelListWorkerChannelResponse.prototype, "meta", void 0);
    return ListWorkerChannelListWorkerChannelResponse;
}(SpeakeasyBase));
export { ListWorkerChannelListWorkerChannelResponse };
var ListWorkerChannelRequest = /** @class */ (function (_super) {
    __extends(ListWorkerChannelRequest, _super);
    function ListWorkerChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWorkerChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkerChannelPathParams)
    ], ListWorkerChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkerChannelQueryParams)
    ], ListWorkerChannelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkerChannelSecurity)
    ], ListWorkerChannelRequest.prototype, "security", void 0);
    return ListWorkerChannelRequest;
}(SpeakeasyBase));
export { ListWorkerChannelRequest };
var ListWorkerChannelResponse = /** @class */ (function (_super) {
    __extends(ListWorkerChannelResponse, _super);
    function ListWorkerChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWorkerChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkerChannelListWorkerChannelResponse)
    ], ListWorkerChannelResponse.prototype, "listWorkerChannelResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListWorkerChannelResponse.prototype, "statusCode", void 0);
    return ListWorkerChannelResponse;
}(SpeakeasyBase));
export { ListWorkerChannelResponse };
