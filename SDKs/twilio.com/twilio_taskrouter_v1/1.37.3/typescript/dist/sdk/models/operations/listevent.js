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
export var ListEventServerList = [
    "https://taskrouter.twilio.com",
];
var ListEventPathParams = /** @class */ (function (_super) {
    __extends(ListEventPathParams, _super);
    function ListEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListEventPathParams.prototype, "workspaceSid", void 0);
    return ListEventPathParams;
}(SpeakeasyBase));
export { ListEventPathParams };
var ListEventQueryParams = /** @class */ (function (_super) {
    __extends(ListEventQueryParams, _super);
    function ListEventQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListEventQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EventType" }),
        __metadata("design:type", String)
    ], ListEventQueryParams.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" }),
        __metadata("design:type", Number)
    ], ListEventQueryParams.prototype, "minutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEventQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservationSid" }),
        __metadata("design:type", String)
    ], ListEventQueryParams.prototype, "reservationSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Sid" }),
        __metadata("design:type", String)
    ], ListEventQueryParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListEventQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" }),
        __metadata("design:type", String)
    ], ListEventQueryParams.prototype, "taskChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" }),
        __metadata("design:type", String)
    ], ListEventQueryParams.prototype, "taskQueueSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskSid" }),
        __metadata("design:type", String)
    ], ListEventQueryParams.prototype, "taskSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WorkerSid" }),
        __metadata("design:type", String)
    ], ListEventQueryParams.prototype, "workerSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WorkflowSid" }),
        __metadata("design:type", String)
    ], ListEventQueryParams.prototype, "workflowSid", void 0);
    return ListEventQueryParams;
}(SpeakeasyBase));
export { ListEventQueryParams };
var ListEventSecurity = /** @class */ (function (_super) {
    __extends(ListEventSecurity, _super);
    function ListEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEventSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEventSecurity;
}(SpeakeasyBase));
export { ListEventSecurity };
var ListEventListEventResponseMeta = /** @class */ (function (_super) {
    __extends(ListEventListEventResponseMeta, _super);
    function ListEventListEventResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEventListEventResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEventListEventResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEventListEventResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEventListEventResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEventListEventResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEventListEventResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEventListEventResponseMeta.prototype, "url", void 0);
    return ListEventListEventResponseMeta;
}(SpeakeasyBase));
export { ListEventListEventResponseMeta };
var ListEventListEventResponse = /** @class */ (function (_super) {
    __extends(ListEventListEventResponse, _super);
    function ListEventListEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: shared.TaskrouterV1WorkspaceEvent }),
        __metadata("design:type", Array)
    ], ListEventListEventResponse.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListEventListEventResponseMeta)
    ], ListEventListEventResponse.prototype, "meta", void 0);
    return ListEventListEventResponse;
}(SpeakeasyBase));
export { ListEventListEventResponse };
var ListEventRequest = /** @class */ (function (_super) {
    __extends(ListEventRequest, _super);
    function ListEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListEventRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEventPathParams)
    ], ListEventRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEventQueryParams)
    ], ListEventRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEventSecurity)
    ], ListEventRequest.prototype, "security", void 0);
    return ListEventRequest;
}(SpeakeasyBase));
export { ListEventRequest };
var ListEventResponse = /** @class */ (function (_super) {
    __extends(ListEventResponse, _super);
    function ListEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListEventResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEventListEventResponse)
    ], ListEventResponse.prototype, "listEventResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListEventResponse.prototype, "statusCode", void 0);
    return ListEventResponse;
}(SpeakeasyBase));
export { ListEventResponse };
