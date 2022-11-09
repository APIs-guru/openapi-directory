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
export var LISTROOMRECORDING_SERVERS = [
    "https://video.twilio.com",
];
var ListRoomRecordingPathParams = /** @class */ (function (_super) {
    __extends(ListRoomRecordingPathParams, _super);
    function ListRoomRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], ListRoomRecordingPathParams.prototype, "roomSid", void 0);
    return ListRoomRecordingPathParams;
}(SpeakeasyBase));
export { ListRoomRecordingPathParams };
var ListRoomRecordingQueryParams = /** @class */ (function (_super) {
    __extends(ListRoomRecordingQueryParams, _super);
    function ListRoomRecordingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" }),
        __metadata("design:type", Date)
    ], ListRoomRecordingQueryParams.prototype, "dateCreatedAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" }),
        __metadata("design:type", Date)
    ], ListRoomRecordingQueryParams.prototype, "dateCreatedBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRoomRecordingQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceSid" }),
        __metadata("design:type", String)
    ], ListRoomRecordingQueryParams.prototype, "sourceSid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListRoomRecordingQueryParams.prototype, "status", void 0);
    return ListRoomRecordingQueryParams;
}(SpeakeasyBase));
export { ListRoomRecordingQueryParams };
var ListRoomRecordingSecurity = /** @class */ (function (_super) {
    __extends(ListRoomRecordingSecurity, _super);
    function ListRoomRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRoomRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRoomRecordingSecurity;
}(SpeakeasyBase));
export { ListRoomRecordingSecurity };
var ListRoomRecordingRequest = /** @class */ (function (_super) {
    __extends(ListRoomRecordingRequest, _super);
    function ListRoomRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRoomRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomRecordingPathParams)
    ], ListRoomRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomRecordingQueryParams)
    ], ListRoomRecordingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomRecordingSecurity)
    ], ListRoomRecordingRequest.prototype, "security", void 0);
    return ListRoomRecordingRequest;
}(SpeakeasyBase));
export { ListRoomRecordingRequest };
var ListRoomRecordingListRoomRecordingResponseMeta = /** @class */ (function (_super) {
    __extends(ListRoomRecordingListRoomRecordingResponseMeta, _super);
    function ListRoomRecordingListRoomRecordingResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRoomRecordingListRoomRecordingResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRoomRecordingListRoomRecordingResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRoomRecordingListRoomRecordingResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRoomRecordingListRoomRecordingResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRoomRecordingListRoomRecordingResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRoomRecordingListRoomRecordingResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRoomRecordingListRoomRecordingResponseMeta.prototype, "url", void 0);
    return ListRoomRecordingListRoomRecordingResponseMeta;
}(SpeakeasyBase));
export { ListRoomRecordingListRoomRecordingResponseMeta };
var ListRoomRecordingListRoomRecordingResponse = /** @class */ (function (_super) {
    __extends(ListRoomRecordingListRoomRecordingResponse, _super);
    function ListRoomRecordingListRoomRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListRoomRecordingListRoomRecordingResponseMeta)
    ], ListRoomRecordingListRoomRecordingResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=recordings", elemType: shared.VideoV1RoomRoomRecording }),
        __metadata("design:type", Array)
    ], ListRoomRecordingListRoomRecordingResponse.prototype, "recordings", void 0);
    return ListRoomRecordingListRoomRecordingResponse;
}(SpeakeasyBase));
export { ListRoomRecordingListRoomRecordingResponse };
var ListRoomRecordingResponse = /** @class */ (function (_super) {
    __extends(ListRoomRecordingResponse, _super);
    function ListRoomRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRoomRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomRecordingListRoomRecordingResponse)
    ], ListRoomRecordingResponse.prototype, "listRoomRecordingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListRoomRecordingResponse.prototype, "statusCode", void 0);
    return ListRoomRecordingResponse;
}(SpeakeasyBase));
export { ListRoomRecordingResponse };
