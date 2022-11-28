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
import { MediaRecordingEnumFormatEnum } from "./mediarecordingenumformatenum";
import { MediaRecordingEnumStatusEnum } from "./mediarecordingenumstatusenum";
export var MediaV1MediaRecordingStatusCallbackMethodEnum;
(function (MediaV1MediaRecordingStatusCallbackMethodEnum) {
    MediaV1MediaRecordingStatusCallbackMethodEnum["Head"] = "HEAD";
    MediaV1MediaRecordingStatusCallbackMethodEnum["Get"] = "GET";
    MediaV1MediaRecordingStatusCallbackMethodEnum["Post"] = "POST";
    MediaV1MediaRecordingStatusCallbackMethodEnum["Patch"] = "PATCH";
    MediaV1MediaRecordingStatusCallbackMethodEnum["Put"] = "PUT";
    MediaV1MediaRecordingStatusCallbackMethodEnum["Delete"] = "DELETE";
})(MediaV1MediaRecordingStatusCallbackMethodEnum || (MediaV1MediaRecordingStatusCallbackMethodEnum = {}));
var MediaV1MediaRecording = /** @class */ (function (_super) {
    __extends(MediaV1MediaRecording, _super);
    function MediaV1MediaRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], MediaV1MediaRecording.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], MediaV1MediaRecording.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], MediaV1MediaRecording.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], MediaV1MediaRecording.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MediaV1MediaRecording.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], MediaV1MediaRecording.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media_size" }),
        __metadata("design:type", Number)
    ], MediaV1MediaRecording.prototype, "mediaSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processor_sid" }),
        __metadata("design:type", String)
    ], MediaV1MediaRecording.prototype, "processorSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], MediaV1MediaRecording.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], MediaV1MediaRecording.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_sid" }),
        __metadata("design:type", String)
    ], MediaV1MediaRecording.prototype, "sourceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MediaV1MediaRecording.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], MediaV1MediaRecording.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], MediaV1MediaRecording.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MediaV1MediaRecording.prototype, "url", void 0);
    return MediaV1MediaRecording;
}(SpeakeasyBase));
export { MediaV1MediaRecording };
