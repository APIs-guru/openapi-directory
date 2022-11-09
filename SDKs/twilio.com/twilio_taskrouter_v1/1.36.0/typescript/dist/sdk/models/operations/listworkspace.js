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
export var LISTWORKSPACE_SERVERS = [
    "https://taskrouter.twilio.com",
];
var ListWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(ListWorkspaceQueryParams, _super);
    function ListWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListWorkspaceQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListWorkspaceQueryParams.prototype, "pageSize", void 0);
    return ListWorkspaceQueryParams;
}(SpeakeasyBase));
export { ListWorkspaceQueryParams };
var ListWorkspaceSecurity = /** @class */ (function (_super) {
    __extends(ListWorkspaceSecurity, _super);
    function ListWorkspaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListWorkspaceSecurity.prototype, "accountSidAuthToken", void 0);
    return ListWorkspaceSecurity;
}(SpeakeasyBase));
export { ListWorkspaceSecurity };
var ListWorkspaceRequest = /** @class */ (function (_super) {
    __extends(ListWorkspaceRequest, _super);
    function ListWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListWorkspaceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWorkspaceQueryParams)
    ], ListWorkspaceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWorkspaceSecurity)
    ], ListWorkspaceRequest.prototype, "security", void 0);
    return ListWorkspaceRequest;
}(SpeakeasyBase));
export { ListWorkspaceRequest };
var ListWorkspaceListWorkspaceResponseMeta = /** @class */ (function (_super) {
    __extends(ListWorkspaceListWorkspaceResponseMeta, _super);
    function ListWorkspaceListWorkspaceResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListWorkspaceListWorkspaceResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListWorkspaceListWorkspaceResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListWorkspaceListWorkspaceResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListWorkspaceListWorkspaceResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWorkspaceListWorkspaceResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListWorkspaceListWorkspaceResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListWorkspaceListWorkspaceResponseMeta.prototype, "url", void 0);
    return ListWorkspaceListWorkspaceResponseMeta;
}(SpeakeasyBase));
export { ListWorkspaceListWorkspaceResponseMeta };
var ListWorkspaceListWorkspaceResponse = /** @class */ (function (_super) {
    __extends(ListWorkspaceListWorkspaceResponse, _super);
    function ListWorkspaceListWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListWorkspaceListWorkspaceResponseMeta)
    ], ListWorkspaceListWorkspaceResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=workspaces", elemType: shared.TaskrouterV1Workspace }),
        __metadata("design:type", Array)
    ], ListWorkspaceListWorkspaceResponse.prototype, "workspaces", void 0);
    return ListWorkspaceListWorkspaceResponse;
}(SpeakeasyBase));
export { ListWorkspaceListWorkspaceResponse };
var ListWorkspaceResponse = /** @class */ (function (_super) {
    __extends(ListWorkspaceResponse, _super);
    function ListWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWorkspaceListWorkspaceResponse)
    ], ListWorkspaceResponse.prototype, "listWorkspaceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListWorkspaceResponse.prototype, "statusCode", void 0);
    return ListWorkspaceResponse;
}(SpeakeasyBase));
export { ListWorkspaceResponse };
