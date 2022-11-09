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
import { MediaProcessorEnumStatusEnum } from "./mediaprocessorenumstatusenum";
export var MediaV1MediaProcessorStatusCallbackMethodEnum;
(function (MediaV1MediaProcessorStatusCallbackMethodEnum) {
    MediaV1MediaProcessorStatusCallbackMethodEnum["Head"] = "HEAD";
    MediaV1MediaProcessorStatusCallbackMethodEnum["Get"] = "GET";
    MediaV1MediaProcessorStatusCallbackMethodEnum["Post"] = "POST";
    MediaV1MediaProcessorStatusCallbackMethodEnum["Patch"] = "PATCH";
    MediaV1MediaProcessorStatusCallbackMethodEnum["Put"] = "PUT";
    MediaV1MediaProcessorStatusCallbackMethodEnum["Delete"] = "DELETE";
})(MediaV1MediaProcessorStatusCallbackMethodEnum || (MediaV1MediaProcessorStatusCallbackMethodEnum = {}));
var MediaV1MediaProcessor = /** @class */ (function (_super) {
    __extends(MediaV1MediaProcessor, _super);
    function MediaV1MediaProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], MediaV1MediaProcessor.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], MediaV1MediaProcessor.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], MediaV1MediaProcessor.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=ended_reason" }),
        __metadata("design:type", String)
    ], MediaV1MediaProcessor.prototype, "endedReason", void 0);
    __decorate([
        Metadata({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], MediaV1MediaProcessor.prototype, "extension", void 0);
    __decorate([
        Metadata({ data: "json, name=extension_context" }),
        __metadata("design:type", String)
    ], MediaV1MediaProcessor.prototype, "extensionContext", void 0);
    __decorate([
        Metadata({ data: "json, name=max_duration" }),
        __metadata("design:type", Number)
    ], MediaV1MediaProcessor.prototype, "maxDuration", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], MediaV1MediaProcessor.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MediaV1MediaProcessor.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], MediaV1MediaProcessor.prototype, "statusCallback", void 0);
    __decorate([
        Metadata({ data: "json, name=status_callback_method" }),
        __metadata("design:type", String)
    ], MediaV1MediaProcessor.prototype, "statusCallbackMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MediaV1MediaProcessor.prototype, "url", void 0);
    return MediaV1MediaProcessor;
}(SpeakeasyBase));
export { MediaV1MediaProcessor };
