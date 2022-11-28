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
export var ListRoomParticipantPublishedTrackServerList = [
    "https://video.twilio.com",
];
var ListRoomParticipantPublishedTrackPathParams = /** @class */ (function (_super) {
    __extends(ListRoomParticipantPublishedTrackPathParams, _super);
    function ListRoomParticipantPublishedTrackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" }),
        __metadata("design:type", String)
    ], ListRoomParticipantPublishedTrackPathParams.prototype, "participantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], ListRoomParticipantPublishedTrackPathParams.prototype, "roomSid", void 0);
    return ListRoomParticipantPublishedTrackPathParams;
}(SpeakeasyBase));
export { ListRoomParticipantPublishedTrackPathParams };
var ListRoomParticipantPublishedTrackQueryParams = /** @class */ (function (_super) {
    __extends(ListRoomParticipantPublishedTrackQueryParams, _super);
    function ListRoomParticipantPublishedTrackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantPublishedTrackQueryParams.prototype, "pageSize", void 0);
    return ListRoomParticipantPublishedTrackQueryParams;
}(SpeakeasyBase));
export { ListRoomParticipantPublishedTrackQueryParams };
var ListRoomParticipantPublishedTrackSecurity = /** @class */ (function (_super) {
    __extends(ListRoomParticipantPublishedTrackSecurity, _super);
    function ListRoomParticipantPublishedTrackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRoomParticipantPublishedTrackSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRoomParticipantPublishedTrackSecurity;
}(SpeakeasyBase));
export { ListRoomParticipantPublishedTrackSecurity };
var ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta = /** @class */ (function (_super) {
    __extends(ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta, _super);
    function ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta.prototype, "url", void 0);
    return ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta;
}(SpeakeasyBase));
export { ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta };
var ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse = /** @class */ (function (_super) {
    __extends(ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse, _super);
    function ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta)
    ], ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published_tracks", elemType: shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack }),
        __metadata("design:type", Array)
    ], ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse.prototype, "publishedTracks", void 0);
    return ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse;
}(SpeakeasyBase));
export { ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse };
var ListRoomParticipantPublishedTrackRequest = /** @class */ (function (_super) {
    __extends(ListRoomParticipantPublishedTrackRequest, _super);
    function ListRoomParticipantPublishedTrackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRoomParticipantPublishedTrackRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoomParticipantPublishedTrackPathParams)
    ], ListRoomParticipantPublishedTrackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoomParticipantPublishedTrackQueryParams)
    ], ListRoomParticipantPublishedTrackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoomParticipantPublishedTrackSecurity)
    ], ListRoomParticipantPublishedTrackRequest.prototype, "security", void 0);
    return ListRoomParticipantPublishedTrackRequest;
}(SpeakeasyBase));
export { ListRoomParticipantPublishedTrackRequest };
var ListRoomParticipantPublishedTrackResponse = /** @class */ (function (_super) {
    __extends(ListRoomParticipantPublishedTrackResponse, _super);
    function ListRoomParticipantPublishedTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRoomParticipantPublishedTrackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse)
    ], ListRoomParticipantPublishedTrackResponse.prototype, "listRoomParticipantPublishedTrackResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListRoomParticipantPublishedTrackResponse.prototype, "statusCode", void 0);
    return ListRoomParticipantPublishedTrackResponse;
}(SpeakeasyBase));
export { ListRoomParticipantPublishedTrackResponse };
