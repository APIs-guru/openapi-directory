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
export var LISTROOM_SERVERS = [
    "https://video.twilio.com",
];
var ListRoomQueryParams = /** @class */ (function (_super) {
    __extends(ListRoomQueryParams, _super);
    function ListRoomQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" }),
        __metadata("design:type", Date)
    ], ListRoomQueryParams.prototype, "dateCreatedAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" }),
        __metadata("design:type", Date)
    ], ListRoomQueryParams.prototype, "dateCreatedBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRoomQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListRoomQueryParams.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UniqueName" }),
        __metadata("design:type", String)
    ], ListRoomQueryParams.prototype, "uniqueName", void 0);
    return ListRoomQueryParams;
}(SpeakeasyBase));
export { ListRoomQueryParams };
var ListRoomSecurity = /** @class */ (function (_super) {
    __extends(ListRoomSecurity, _super);
    function ListRoomSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRoomSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRoomSecurity;
}(SpeakeasyBase));
export { ListRoomSecurity };
var ListRoomRequest = /** @class */ (function (_super) {
    __extends(ListRoomRequest, _super);
    function ListRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRoomRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomQueryParams)
    ], ListRoomRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomSecurity)
    ], ListRoomRequest.prototype, "security", void 0);
    return ListRoomRequest;
}(SpeakeasyBase));
export { ListRoomRequest };
var ListRoomListRoomResponseMeta = /** @class */ (function (_super) {
    __extends(ListRoomListRoomResponseMeta, _super);
    function ListRoomListRoomResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRoomListRoomResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRoomListRoomResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRoomListRoomResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRoomListRoomResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRoomListRoomResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRoomListRoomResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRoomListRoomResponseMeta.prototype, "url", void 0);
    return ListRoomListRoomResponseMeta;
}(SpeakeasyBase));
export { ListRoomListRoomResponseMeta };
var ListRoomListRoomResponse = /** @class */ (function (_super) {
    __extends(ListRoomListRoomResponse, _super);
    function ListRoomListRoomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListRoomListRoomResponseMeta)
    ], ListRoomListRoomResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=rooms", elemType: shared.VideoV1Room }),
        __metadata("design:type", Array)
    ], ListRoomListRoomResponse.prototype, "rooms", void 0);
    return ListRoomListRoomResponse;
}(SpeakeasyBase));
export { ListRoomListRoomResponse };
var ListRoomResponse = /** @class */ (function (_super) {
    __extends(ListRoomResponse, _super);
    function ListRoomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListRoomResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListRoomListRoomResponse)
    ], ListRoomResponse.prototype, "listRoomResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListRoomResponse.prototype, "statusCode", void 0);
    return ListRoomResponse;
}(SpeakeasyBase));
export { ListRoomResponse };
