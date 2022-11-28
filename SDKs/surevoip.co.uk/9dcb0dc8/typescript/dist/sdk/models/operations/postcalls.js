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
var PostCallsRequestBodyOptionsPlayAudio = /** @class */ (function (_super) {
    __extends(PostCallsRequestBodyOptionsPlayAudio, _super);
    function PostCallsRequestBodyOptionsPlayAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=announcement_id" }),
        __metadata("design:type", String)
    ], PostCallsRequestBodyOptionsPlayAudio.prototype, "announcementId", void 0);
    return PostCallsRequestBodyOptionsPlayAudio;
}(SpeakeasyBase));
export { PostCallsRequestBodyOptionsPlayAudio };
var PostCallsRequestBodyOptions = /** @class */ (function (_super) {
    __extends(PostCallsRequestBodyOptions, _super);
    function PostCallsRequestBodyOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=a_leg_caller_id" }),
        __metadata("design:type", String)
    ], PostCallsRequestBodyOptions.prototype, "aLegCallerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=a_leg_only" }),
        __metadata("design:type", Number)
    ], PostCallsRequestBodyOptions.prototype, "aLegOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancel_key" }),
        __metadata("design:type", Number)
    ], PostCallsRequestBodyOptions.prototype, "cancelKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connect_key" }),
        __metadata("design:type", Number)
    ], PostCallsRequestBodyOptions.prototype, "connectKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=play_audio", elemType: PostCallsRequestBodyOptionsPlayAudio }),
        __metadata("design:type", Array)
    ], PostCallsRequestBodyOptions.prototype, "playAudio", void 0);
    return PostCallsRequestBodyOptions;
}(SpeakeasyBase));
export { PostCallsRequestBodyOptions };
var PostCallsRequestBody = /** @class */ (function (_super) {
    __extends(PostCallsRequestBody, _super);
    function PostCallsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=announcement_at" }),
        __metadata("design:type", String)
    ], PostCallsRequestBody.prototype, "announcementAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=announcement_id" }),
        __metadata("design:type", String)
    ], PostCallsRequestBody.prototype, "announcementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caller_id" }),
        __metadata("design:type", String)
    ], PostCallsRequestBody.prototype, "callerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], PostCallsRequestBody.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hangup_announcement_id" }),
        __metadata("design:type", String)
    ], PostCallsRequestBody.prototype, "hangupAnnouncementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hangup_at" }),
        __metadata("design:type", String)
    ], PostCallsRequestBody.prototype, "hangupAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", PostCallsRequestBodyOptions)
    ], PostCallsRequestBody.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], PostCallsRequestBody.prototype, "to", void 0);
    return PostCallsRequestBody;
}(SpeakeasyBase));
export { PostCallsRequestBody };
var PostCalls202ApplicationJson = /** @class */ (function (_super) {
    __extends(PostCalls202ApplicationJson, _super);
    function PostCalls202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Call" }),
        __metadata("design:type", String)
    ], PostCalls202ApplicationJson.prototype, "call", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Location" }),
        __metadata("design:type", String)
    ], PostCalls202ApplicationJson.prototype, "location", void 0);
    return PostCalls202ApplicationJson;
}(SpeakeasyBase));
export { PostCalls202ApplicationJson };
var PostCallsRequest = /** @class */ (function (_super) {
    __extends(PostCallsRequest, _super);
    function PostCallsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostCallsRequestBody)
    ], PostCallsRequest.prototype, "request", void 0);
    return PostCallsRequest;
}(SpeakeasyBase));
export { PostCallsRequest };
var PostCallsResponse = /** @class */ (function (_super) {
    __extends(PostCallsResponse, _super);
    function PostCallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCallsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostCallsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCalls202ApplicationJson)
    ], PostCallsResponse.prototype, "postCalls202ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCallsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OneannouncementsPostResponses400ContentApplication1jsonSchema)
    ], PostCallsResponse.prototype, "oneannouncementsPostResponses400ContentApplication1jsonSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OneannouncementsPostResponses403ContentApplication1jsonSchema)
    ], PostCallsResponse.prototype, "oneannouncementsPostResponses403ContentApplication1jsonSchema", void 0);
    return PostCallsResponse;
}(SpeakeasyBase));
export { PostCallsResponse };
