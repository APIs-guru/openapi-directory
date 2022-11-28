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
var EditEmbedPresetPathParams = /** @class */ (function (_super) {
    __extends(EditEmbedPresetPathParams, _super);
    function EditEmbedPresetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preset_id" }),
        __metadata("design:type", Number)
    ], EditEmbedPresetPathParams.prototype, "presetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], EditEmbedPresetPathParams.prototype, "userId", void 0);
    return EditEmbedPresetPathParams;
}(SpeakeasyBase));
export { EditEmbedPresetPathParams };
export var EditEmbedPresetRequestBodyOutroEnum;
(function (EditEmbedPresetRequestBodyOutroEnum) {
    EditEmbedPresetRequestBodyOutroEnum["Nothing"] = "nothing";
})(EditEmbedPresetRequestBodyOutroEnum || (EditEmbedPresetRequestBodyOutroEnum = {}));
var EditEmbedPresetRequestBody = /** @class */ (function (_super) {
    __extends(EditEmbedPresetRequestBody, _super);
    function EditEmbedPresetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outro" }),
        __metadata("design:type", String)
    ], EditEmbedPresetRequestBody.prototype, "outro", void 0);
    return EditEmbedPresetRequestBody;
}(SpeakeasyBase));
export { EditEmbedPresetRequestBody };
var EditEmbedPresetRequest = /** @class */ (function (_super) {
    __extends(EditEmbedPresetRequest, _super);
    function EditEmbedPresetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditEmbedPresetPathParams)
    ], EditEmbedPresetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.preset+json" }),
        __metadata("design:type", EditEmbedPresetRequestBody)
    ], EditEmbedPresetRequest.prototype, "request", void 0);
    return EditEmbedPresetRequest;
}(SpeakeasyBase));
export { EditEmbedPresetRequest };
var EditEmbedPresetResponse = /** @class */ (function (_super) {
    __extends(EditEmbedPresetResponse, _super);
    function EditEmbedPresetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditEmbedPresetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditEmbedPresetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], EditEmbedPresetResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Presets)
    ], EditEmbedPresetResponse.prototype, "presets", void 0);
    return EditEmbedPresetResponse;
}(SpeakeasyBase));
export { EditEmbedPresetResponse };
