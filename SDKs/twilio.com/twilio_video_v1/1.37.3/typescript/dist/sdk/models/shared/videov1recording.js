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
import { RecordingEnumCodecEnum } from "./recordingenumcodecenum";
import { RecordingEnumFormatEnum } from "./recordingenumformatenum";
import { RecordingEnumStatusEnum } from "./recordingenumstatusenum";
import { RecordingEnumTypeEnum } from "./recordingenumtypeenum";
export var VideoV1RecordingStatusCallbackMethodEnum;
(function (VideoV1RecordingStatusCallbackMethodEnum) {
    VideoV1RecordingStatusCallbackMethodEnum["Head"] = "HEAD";
    VideoV1RecordingStatusCallbackMethodEnum["Get"] = "GET";
    VideoV1RecordingStatusCallbackMethodEnum["Post"] = "POST";
    VideoV1RecordingStatusCallbackMethodEnum["Patch"] = "PATCH";
    VideoV1RecordingStatusCallbackMethodEnum["Put"] = "PUT";
    VideoV1RecordingStatusCallbackMethodEnum["Delete"] = "DELETE";
})(VideoV1RecordingStatusCallbackMethodEnum || (VideoV1RecordingStatusCallbackMethodEnum = {}));
var VideoV1Recording = /** @class */ (function (_super) {
    __extends(VideoV1Recording, _super);
    function VideoV1Recording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codec" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "codec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=container_format" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "containerFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VideoV1Recording.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], VideoV1Recording.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grouping_sids" }),
        __metadata("design:type", Object)
    ], VideoV1Recording.prototype, "groupingSids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], VideoV1Recording.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media_external_location" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "mediaExternalLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], VideoV1Recording.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], VideoV1Recording.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_sid" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "sourceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=track_name" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "trackName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], VideoV1Recording.prototype, "url", void 0);
    return VideoV1Recording;
}(SpeakeasyBase));
export { VideoV1Recording };
