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
export var ListRoomParticipantSubscribedTrackServerList = [
    "https://video.twilio.com",
];
var ListRoomParticipantSubscribedTrackPathParams = /** @class */ (function (_super) {
    __extends(ListRoomParticipantSubscribedTrackPathParams, _super);
    function ListRoomParticipantSubscribedTrackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" }),
        __metadata("design:type", String)
    ], ListRoomParticipantSubscribedTrackPathParams.prototype, "participantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" }),
        __metadata("design:type", String)
    ], ListRoomParticipantSubscribedTrackPathParams.prototype, "roomSid", void 0);
    return ListRoomParticipantSubscribedTrackPathParams;
}(SpeakeasyBase));
export { ListRoomParticipantSubscribedTrackPathParams };
var ListRoomParticipantSubscribedTrackQueryParams = /** @class */ (function (_super) {
    __extends(ListRoomParticipantSubscribedTrackQueryParams, _super);
    function ListRoomParticipantSubscribedTrackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantSubscribedTrackQueryParams.prototype, "pageSize", void 0);
    return ListRoomParticipantSubscribedTrackQueryParams;
}(SpeakeasyBase));
export { ListRoomParticipantSubscribedTrackQueryParams };
var ListRoomParticipantSubscribedTrackSecurity = /** @class */ (function (_super) {
    __extends(ListRoomParticipantSubscribedTrackSecurity, _super);
    function ListRoomParticipantSubscribedTrackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRoomParticipantSubscribedTrackSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRoomParticipantSubscribedTrackSecurity;
}(SpeakeasyBase));
export { ListRoomParticipantSubscribedTrackSecurity };
var ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta = /** @class */ (function (_super) {
    __extends(ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta, _super);
    function ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta.prototype, "url", void 0);
    return ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta;
}(SpeakeasyBase));
export { ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta };
var ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse = /** @class */ (function (_super) {
    __extends(ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse, _super);
    function ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta)
    ], ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribed_tracks", elemType: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack }),
        __metadata("design:type", Array)
    ], ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse.prototype, "subscribedTracks", void 0);
    return ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse;
}(SpeakeasyBase));
export { ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse };
var ListRoomParticipantSubscribedTrackRequest = /** @class */ (function (_super) {
    __extends(ListRoomParticipantSubscribedTrackRequest, _super);
    function ListRoomParticipantSubscribedTrackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRoomParticipantSubscribedTrackRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoomParticipantSubscribedTrackPathParams)
    ], ListRoomParticipantSubscribedTrackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoomParticipantSubscribedTrackQueryParams)
    ], ListRoomParticipantSubscribedTrackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoomParticipantSubscribedTrackSecurity)
    ], ListRoomParticipantSubscribedTrackRequest.prototype, "security", void 0);
    return ListRoomParticipantSubscribedTrackRequest;
}(SpeakeasyBase));
export { ListRoomParticipantSubscribedTrackRequest };
var ListRoomParticipantSubscribedTrackResponse = /** @class */ (function (_super) {
    __extends(ListRoomParticipantSubscribedTrackResponse, _super);
    function ListRoomParticipantSubscribedTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRoomParticipantSubscribedTrackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse)
    ], ListRoomParticipantSubscribedTrackResponse.prototype, "listRoomParticipantSubscribedTrackResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListRoomParticipantSubscribedTrackResponse.prototype, "statusCode", void 0);
    return ListRoomParticipantSubscribedTrackResponse;
}(SpeakeasyBase));
export { ListRoomParticipantSubscribedTrackResponse };
