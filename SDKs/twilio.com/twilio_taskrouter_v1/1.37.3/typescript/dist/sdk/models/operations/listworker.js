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
export var ListWorkerServerList = [
    "https://taskrouter.twilio.com",
];
var ListWorkerPathParams = /** @class */ (function (_super) {
    __extends(ListWorkerPathParams, _super);
    function ListWorkerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListWorkerPathParams.prototype, "workspaceSid", void 0);
    return ListWorkerPathParams;
}(SpeakeasyBase));
export { ListWorkerPathParams };
var ListWorkerQueryParams = /** @class */ (function (_super) {
    __extends(ListWorkerQueryParams, _super);
    function ListWorkerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ActivityName" }),
        __metadata("design:type", String)
    ], ListWorkerQueryParams.prototype, "activityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ActivitySid" }),
        __metadata("design:type", String)
    ], ListWorkerQueryParams.prototype, "activitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Available" }),
        __metadata("design:type", String)
    ], ListWorkerQueryParams.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListWorkerQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ordering" }),
        __metadata("design:type", String)
    ], ListWorkerQueryParams.prototype, "ordering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListWorkerQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetWorkersExpression" }),
        __metadata("design:type", String)
    ], ListWorkerQueryParams.prototype, "targetWorkersExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskQueueName" }),
        __metadata("design:type", String)
    ], ListWorkerQueryParams.prototype, "taskQueueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" }),
        __metadata("design:type", String)
    ], ListWorkerQueryParams.prototype, "taskQueueSid", void 0);
    return ListWorkerQueryParams;
}(SpeakeasyBase));
export { ListWorkerQueryParams };
var ListWorkerSecurity = /** @class */ (function (_super) {
    __extends(ListWorkerSecurity, _super);
    function ListWorkerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListWorkerSecurity.prototype, "accountSidAuthToken", void 0);
    return ListWorkerSecurity;
}(SpeakeasyBase));
export { ListWorkerSecurity };
var ListWorkerListWorkerResponseMeta = /** @class */ (function (_super) {
    __extends(ListWorkerListWorkerResponseMeta, _super);
    function ListWorkerListWorkerResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListWorkerListWorkerResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListWorkerListWorkerResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListWorkerListWorkerResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListWorkerListWorkerResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWorkerListWorkerResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListWorkerListWorkerResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListWorkerListWorkerResponseMeta.prototype, "url", void 0);
    return ListWorkerListWorkerResponseMeta;
}(SpeakeasyBase));
export { ListWorkerListWorkerResponseMeta };
var ListWorkerListWorkerResponse = /** @class */ (function (_super) {
    __extends(ListWorkerListWorkerResponse, _super);
    function ListWorkerListWorkerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListWorkerListWorkerResponseMeta)
    ], ListWorkerListWorkerResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workers", elemType: shared.TaskrouterV1WorkspaceWorker }),
        __metadata("design:type", Array)
    ], ListWorkerListWorkerResponse.prototype, "workers", void 0);
    return ListWorkerListWorkerResponse;
}(SpeakeasyBase));
export { ListWorkerListWorkerResponse };
var ListWorkerRequest = /** @class */ (function (_super) {
    __extends(ListWorkerRequest, _super);
    function ListWorkerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWorkerRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkerPathParams)
    ], ListWorkerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkerQueryParams)
    ], ListWorkerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkerSecurity)
    ], ListWorkerRequest.prototype, "security", void 0);
    return ListWorkerRequest;
}(SpeakeasyBase));
export { ListWorkerRequest };
var ListWorkerResponse = /** @class */ (function (_super) {
    __extends(ListWorkerResponse, _super);
    function ListWorkerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWorkerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkerListWorkerResponse)
    ], ListWorkerResponse.prototype, "listWorkerResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListWorkerResponse.prototype, "statusCode", void 0);
    return ListWorkerResponse;
}(SpeakeasyBase));
export { ListWorkerResponse };
