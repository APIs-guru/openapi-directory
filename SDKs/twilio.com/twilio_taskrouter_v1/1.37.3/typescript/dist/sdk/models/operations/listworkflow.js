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
export var ListWorkflowServerList = [
    "https://taskrouter.twilio.com",
];
var ListWorkflowPathParams = /** @class */ (function (_super) {
    __extends(ListWorkflowPathParams, _super);
    function ListWorkflowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListWorkflowPathParams.prototype, "workspaceSid", void 0);
    return ListWorkflowPathParams;
}(SpeakeasyBase));
export { ListWorkflowPathParams };
var ListWorkflowQueryParams = /** @class */ (function (_super) {
    __extends(ListWorkflowQueryParams, _super);
    function ListWorkflowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListWorkflowQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListWorkflowQueryParams.prototype, "pageSize", void 0);
    return ListWorkflowQueryParams;
}(SpeakeasyBase));
export { ListWorkflowQueryParams };
var ListWorkflowSecurity = /** @class */ (function (_super) {
    __extends(ListWorkflowSecurity, _super);
    function ListWorkflowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListWorkflowSecurity.prototype, "accountSidAuthToken", void 0);
    return ListWorkflowSecurity;
}(SpeakeasyBase));
export { ListWorkflowSecurity };
var ListWorkflowListWorkflowResponseMeta = /** @class */ (function (_super) {
    __extends(ListWorkflowListWorkflowResponseMeta, _super);
    function ListWorkflowListWorkflowResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListWorkflowListWorkflowResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListWorkflowListWorkflowResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListWorkflowListWorkflowResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListWorkflowListWorkflowResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWorkflowListWorkflowResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListWorkflowListWorkflowResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListWorkflowListWorkflowResponseMeta.prototype, "url", void 0);
    return ListWorkflowListWorkflowResponseMeta;
}(SpeakeasyBase));
export { ListWorkflowListWorkflowResponseMeta };
var ListWorkflowListWorkflowResponse = /** @class */ (function (_super) {
    __extends(ListWorkflowListWorkflowResponse, _super);
    function ListWorkflowListWorkflowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListWorkflowListWorkflowResponseMeta)
    ], ListWorkflowListWorkflowResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflows", elemType: shared.TaskrouterV1WorkspaceWorkflow }),
        __metadata("design:type", Array)
    ], ListWorkflowListWorkflowResponse.prototype, "workflows", void 0);
    return ListWorkflowListWorkflowResponse;
}(SpeakeasyBase));
export { ListWorkflowListWorkflowResponse };
var ListWorkflowRequest = /** @class */ (function (_super) {
    __extends(ListWorkflowRequest, _super);
    function ListWorkflowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWorkflowRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkflowPathParams)
    ], ListWorkflowRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkflowQueryParams)
    ], ListWorkflowRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkflowSecurity)
    ], ListWorkflowRequest.prototype, "security", void 0);
    return ListWorkflowRequest;
}(SpeakeasyBase));
export { ListWorkflowRequest };
var ListWorkflowResponse = /** @class */ (function (_super) {
    __extends(ListWorkflowResponse, _super);
    function ListWorkflowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWorkflowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkflowListWorkflowResponse)
    ], ListWorkflowResponse.prototype, "listWorkflowResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListWorkflowResponse.prototype, "statusCode", void 0);
    return ListWorkflowResponse;
}(SpeakeasyBase));
export { ListWorkflowResponse };
