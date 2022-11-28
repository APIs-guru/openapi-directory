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
export var ListTaskReservationServerList = [
    "https://taskrouter.twilio.com",
];
var ListTaskReservationPathParams = /** @class */ (function (_super) {
    __extends(ListTaskReservationPathParams, _super);
    function ListTaskReservationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], ListTaskReservationPathParams.prototype, "taskSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListTaskReservationPathParams.prototype, "workspaceSid", void 0);
    return ListTaskReservationPathParams;
}(SpeakeasyBase));
export { ListTaskReservationPathParams };
var ListTaskReservationQueryParams = /** @class */ (function (_super) {
    __extends(ListTaskReservationQueryParams, _super);
    function ListTaskReservationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTaskReservationQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservationStatus" }),
        __metadata("design:type", String)
    ], ListTaskReservationQueryParams.prototype, "reservationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WorkerSid" }),
        __metadata("design:type", String)
    ], ListTaskReservationQueryParams.prototype, "workerSid", void 0);
    return ListTaskReservationQueryParams;
}(SpeakeasyBase));
export { ListTaskReservationQueryParams };
var ListTaskReservationSecurity = /** @class */ (function (_super) {
    __extends(ListTaskReservationSecurity, _super);
    function ListTaskReservationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTaskReservationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTaskReservationSecurity;
}(SpeakeasyBase));
export { ListTaskReservationSecurity };
var ListTaskReservationListTaskReservationResponseMeta = /** @class */ (function (_super) {
    __extends(ListTaskReservationListTaskReservationResponseMeta, _super);
    function ListTaskReservationListTaskReservationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "url", void 0);
    return ListTaskReservationListTaskReservationResponseMeta;
}(SpeakeasyBase));
export { ListTaskReservationListTaskReservationResponseMeta };
var ListTaskReservationListTaskReservationResponse = /** @class */ (function (_super) {
    __extends(ListTaskReservationListTaskReservationResponse, _super);
    function ListTaskReservationListTaskReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTaskReservationListTaskReservationResponseMeta)
    ], ListTaskReservationListTaskReservationResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservations", elemType: shared.TaskrouterV1WorkspaceTaskTaskReservation }),
        __metadata("design:type", Array)
    ], ListTaskReservationListTaskReservationResponse.prototype, "reservations", void 0);
    return ListTaskReservationListTaskReservationResponse;
}(SpeakeasyBase));
export { ListTaskReservationListTaskReservationResponse };
var ListTaskReservationRequest = /** @class */ (function (_super) {
    __extends(ListTaskReservationRequest, _super);
    function ListTaskReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTaskReservationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTaskReservationPathParams)
    ], ListTaskReservationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTaskReservationQueryParams)
    ], ListTaskReservationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTaskReservationSecurity)
    ], ListTaskReservationRequest.prototype, "security", void 0);
    return ListTaskReservationRequest;
}(SpeakeasyBase));
export { ListTaskReservationRequest };
var ListTaskReservationResponse = /** @class */ (function (_super) {
    __extends(ListTaskReservationResponse, _super);
    function ListTaskReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTaskReservationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTaskReservationListTaskReservationResponse)
    ], ListTaskReservationResponse.prototype, "listTaskReservationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTaskReservationResponse.prototype, "statusCode", void 0);
    return ListTaskReservationResponse;
}(SpeakeasyBase));
export { ListTaskReservationResponse };
