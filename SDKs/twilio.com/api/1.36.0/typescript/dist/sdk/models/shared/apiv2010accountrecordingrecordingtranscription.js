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
import { RecordingTranscriptionEnumStatusEnum } from "./recordingtranscriptionenumstatusenum";
var ApiV2010AccountRecordingRecordingTranscription = /** @class */ (function (_super) {
    __extends(ApiV2010AccountRecordingRecordingTranscription, _super);
    function ApiV2010AccountRecordingRecordingTranscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "price", void 0);
    __decorate([
        Metadata({ data: "json, name=price_unit" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "priceUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=recording_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "recordingSid", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=transcription_text" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "transcriptionText", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountRecordingRecordingTranscription.prototype, "uri", void 0);
    return ApiV2010AccountRecordingRecordingTranscription;
}(SpeakeasyBase));
export { ApiV2010AccountRecordingRecordingTranscription };
