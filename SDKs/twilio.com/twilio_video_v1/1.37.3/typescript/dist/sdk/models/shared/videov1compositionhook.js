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
import { CompositionHookEnumFormatEnum } from "./compositionhookenumformatenum";
export var VideoV1CompositionHookStatusCallbackMethodEnum;
(function (VideoV1CompositionHookStatusCallbackMethodEnum) {
    VideoV1CompositionHookStatusCallbackMethodEnum["Head"] = "HEAD";
    VideoV1CompositionHookStatusCallbackMethodEnum["Get"] = "GET";
    VideoV1CompositionHookStatusCallbackMethodEnum["Post"] = "POST";
    VideoV1CompositionHookStatusCallbackMethodEnum["Patch"] = "PATCH";
    VideoV1CompositionHookStatusCallbackMethodEnum["Put"] = "PUT";
    VideoV1CompositionHookStatusCallbackMethodEnum["Delete"] = "DELETE";
})(VideoV1CompositionHookStatusCallbackMethodEnum || (VideoV1CompositionHookStatusCallbackMethodEnum = {}));
var VideoV1CompositionHook = /** @class */ (function (_super) {
    __extends(VideoV1CompositionHook, _super);
    function VideoV1CompositionHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], VideoV1CompositionHook.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio_sources" }),
        __metadata("design:type", Array)
    ], VideoV1CompositionHook.prototype, "audioSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio_sources_excluded" }),
        __metadata("design:type", Array)
    ], VideoV1CompositionHook.prototype, "audioSourcesExcluded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VideoV1CompositionHook.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], VideoV1CompositionHook.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], VideoV1CompositionHook.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VideoV1CompositionHook.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], VideoV1CompositionHook.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], VideoV1CompositionHook.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], VideoV1CompositionHook.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], VideoV1CompositionHook.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], VideoV1CompositionHook.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trim" }),
        __metadata("design:type", Boolean)
    ], VideoV1CompositionHook.prototype, "trim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], VideoV1CompositionHook.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=video_layout" }),
        __metadata("design:type", Object)
    ], VideoV1CompositionHook.prototype, "videoLayout", void 0);
    return VideoV1CompositionHook;
}(SpeakeasyBase));
export { VideoV1CompositionHook };
