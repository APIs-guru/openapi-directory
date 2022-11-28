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
var EditEmbedPresetAlt1PathParams = /** @class */ (function (_super) {
    __extends(EditEmbedPresetAlt1PathParams, _super);
    function EditEmbedPresetAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preset_id" }),
        __metadata("design:type", Number)
    ], EditEmbedPresetAlt1PathParams.prototype, "presetId", void 0);
    return EditEmbedPresetAlt1PathParams;
}(SpeakeasyBase));
export { EditEmbedPresetAlt1PathParams };
export var EditEmbedPresetAlt1RequestBodyOutroEnum;
(function (EditEmbedPresetAlt1RequestBodyOutroEnum) {
    EditEmbedPresetAlt1RequestBodyOutroEnum["Nothing"] = "nothing";
})(EditEmbedPresetAlt1RequestBodyOutroEnum || (EditEmbedPresetAlt1RequestBodyOutroEnum = {}));
var EditEmbedPresetAlt1RequestBody = /** @class */ (function (_super) {
    __extends(EditEmbedPresetAlt1RequestBody, _super);
    function EditEmbedPresetAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outro" }),
        __metadata("design:type", String)
    ], EditEmbedPresetAlt1RequestBody.prototype, "outro", void 0);
    return EditEmbedPresetAlt1RequestBody;
}(SpeakeasyBase));
export { EditEmbedPresetAlt1RequestBody };
var EditEmbedPresetAlt1Request = /** @class */ (function (_super) {
    __extends(EditEmbedPresetAlt1Request, _super);
    function EditEmbedPresetAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditEmbedPresetAlt1PathParams)
    ], EditEmbedPresetAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.preset+json" }),
        __metadata("design:type", EditEmbedPresetAlt1RequestBody)
    ], EditEmbedPresetAlt1Request.prototype, "request", void 0);
    return EditEmbedPresetAlt1Request;
}(SpeakeasyBase));
export { EditEmbedPresetAlt1Request };
var EditEmbedPresetAlt1Response = /** @class */ (function (_super) {
    __extends(EditEmbedPresetAlt1Response, _super);
    function EditEmbedPresetAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditEmbedPresetAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditEmbedPresetAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], EditEmbedPresetAlt1Response.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Presets)
    ], EditEmbedPresetAlt1Response.prototype, "presets", void 0);
    return EditEmbedPresetAlt1Response;
}(SpeakeasyBase));
export { EditEmbedPresetAlt1Response };
