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
export var LISTROOMPARTICIPANT_SERVERS = [
    "https://video.twilio.com",
];
var ListRoomParticipantPathParams = /** @class */ (function (_super) {
    __extends(ListRoomParticipantPathParams, _super);
    function ListRoomParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], ListRoomParticipantPathParams.prototype, "roomSid", void 0);
    return ListRoomParticipantPathParams;
}(SpeakeasyBase));
export { ListRoomParticipantPathParams };
var ListRoomParticipantQueryParams = /** @class */ (function (_super) {
    __extends(ListRoomParticipantQueryParams, _super);
    function ListRoomParticipantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" }),
        __metadata("design:type", Date)
    ], ListRoomParticipantQueryParams.prototype, "dateCreatedAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" }),
        __metadata("design:type", Date)
    ], ListRoomParticipantQueryParams.prototype, "dateCreatedBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], ListRoomParticipantQueryParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListRoomParticipantQueryParams.prototype, "status", void 0);
    return ListRoomParticipantQueryParams;
}(SpeakeasyBase));
export { ListRoomParticipantQueryParams };
var ListRoomParticipantSecurity = /** @class */ (function (_super) {
    __extends(ListRoomParticipantSecurity, _super);
    function ListRoomParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRoomParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRoomParticipantSecurity;
}(SpeakeasyBase));
export { ListRoomParticipantSecurity };
var ListRoomParticipantRequest = /** @class */ (function (_super) {
    __extends(ListRoomParticipantRequest, _super);
    function ListRoomParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRoomParticipantRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomParticipantPathParams)
    ], ListRoomParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomParticipantQueryParams)
    ], ListRoomParticipantRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomParticipantSecurity)
    ], ListRoomParticipantRequest.prototype, "security", void 0);
    return ListRoomParticipantRequest;
}(SpeakeasyBase));
export { ListRoomParticipantRequest };
var ListRoomParticipantListRoomParticipantResponseMeta = /** @class */ (function (_super) {
    __extends(ListRoomParticipantListRoomParticipantResponseMeta, _super);
    function ListRoomParticipantListRoomParticipantResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantListRoomParticipantResponseMeta.prototype, "url", void 0);
    return ListRoomParticipantListRoomParticipantResponseMeta;
}(SpeakeasyBase));
export { ListRoomParticipantListRoomParticipantResponseMeta };
var ListRoomParticipantListRoomParticipantResponse = /** @class */ (function (_super) {
    __extends(ListRoomParticipantListRoomParticipantResponse, _super);
    function ListRoomParticipantListRoomParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListRoomParticipantListRoomParticipantResponseMeta)
    ], ListRoomParticipantListRoomParticipantResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=participants", elemType: shared.VideoV1RoomRoomParticipant }),
        __metadata("design:type", Array)
    ], ListRoomParticipantListRoomParticipantResponse.prototype, "participants", void 0);
    return ListRoomParticipantListRoomParticipantResponse;
}(SpeakeasyBase));
export { ListRoomParticipantListRoomParticipantResponse };
var ListRoomParticipantResponse = /** @class */ (function (_super) {
    __extends(ListRoomParticipantResponse, _super);
    function ListRoomParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRoomParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomParticipantListRoomParticipantResponse)
    ], ListRoomParticipantResponse.prototype, "listRoomParticipantResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListRoomParticipantResponse.prototype, "statusCode", void 0);
    return ListRoomParticipantResponse;
}(SpeakeasyBase));
export { ListRoomParticipantResponse };
