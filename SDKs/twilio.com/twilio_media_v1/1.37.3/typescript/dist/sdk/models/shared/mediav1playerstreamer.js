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
import { PlayerStreamerEnumEndedReasonEnum } from "./playerstreamerenumendedreasonenum";
import { PlayerStreamerEnumStatusEnum } from "./playerstreamerenumstatusenum";
export var MediaV1PlayerStreamerStatusCallbackMethodEnum;
(function (MediaV1PlayerStreamerStatusCallbackMethodEnum) {
    MediaV1PlayerStreamerStatusCallbackMethodEnum["Head"] = "HEAD";
    MediaV1PlayerStreamerStatusCallbackMethodEnum["Get"] = "GET";
    MediaV1PlayerStreamerStatusCallbackMethodEnum["Post"] = "POST";
    MediaV1PlayerStreamerStatusCallbackMethodEnum["Patch"] = "PATCH";
    MediaV1PlayerStreamerStatusCallbackMethodEnum["Put"] = "PUT";
    MediaV1PlayerStreamerStatusCallbackMethodEnum["Delete"] = "DELETE";
})(MediaV1PlayerStreamerStatusCallbackMethodEnum || (MediaV1PlayerStreamerStatusCallbackMethodEnum = {}));
var MediaV1PlayerStreamer = /** @class */ (function (_super) {
    __extends(MediaV1PlayerStreamer, _super);
    function MediaV1PlayerStreamer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], MediaV1PlayerStreamer.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], MediaV1PlayerStreamer.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], MediaV1PlayerStreamer.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ended_reason" }),
        __metadata("design:type", String)
    ], MediaV1PlayerStreamer.prototype, "endedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], MediaV1PlayerStreamer.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_duration" }),
        __metadata("design:type", Number)
    ], MediaV1PlayerStreamer.prototype, "maxDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], MediaV1PlayerStreamer.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MediaV1PlayerStreamer.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], MediaV1PlayerStreamer.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], MediaV1PlayerStreamer.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MediaV1PlayerStreamer.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=video" }),
        __metadata("design:type", Boolean)
    ], MediaV1PlayerStreamer.prototype, "video", void 0);
    return MediaV1PlayerStreamer;
}(SpeakeasyBase));
export { MediaV1PlayerStreamer };
