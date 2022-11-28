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
var RemoveVideosFromProjectAlt1PathParams = /** @class */ (function (_super) {
    __extends(RemoveVideosFromProjectAlt1PathParams, _super);
    function RemoveVideosFromProjectAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], RemoveVideosFromProjectAlt1PathParams.prototype, "projectId", void 0);
    return RemoveVideosFromProjectAlt1PathParams;
}(SpeakeasyBase));
export { RemoveVideosFromProjectAlt1PathParams };
var RemoveVideosFromProjectAlt1QueryParams = /** @class */ (function (_super) {
    __extends(RemoveVideosFromProjectAlt1QueryParams, _super);
    function RemoveVideosFromProjectAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=should_delete_clips" }),
        __metadata("design:type", Boolean)
    ], RemoveVideosFromProjectAlt1QueryParams.prototype, "shouldDeleteClips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" }),
        __metadata("design:type", String)
    ], RemoveVideosFromProjectAlt1QueryParams.prototype, "uris", void 0);
    return RemoveVideosFromProjectAlt1QueryParams;
}(SpeakeasyBase));
export { RemoveVideosFromProjectAlt1QueryParams };
var RemoveVideosFromProjectAlt1Security = /** @class */ (function (_super) {
    __extends(RemoveVideosFromProjectAlt1Security, _super);
    function RemoveVideosFromProjectAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemoveVideosFromProjectAlt1Security.prototype, "oauth2", void 0);
    return RemoveVideosFromProjectAlt1Security;
}(SpeakeasyBase));
export { RemoveVideosFromProjectAlt1Security };
var RemoveVideosFromProjectAlt1Request = /** @class */ (function (_super) {
    __extends(RemoveVideosFromProjectAlt1Request, _super);
    function RemoveVideosFromProjectAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveVideosFromProjectAlt1PathParams)
    ], RemoveVideosFromProjectAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveVideosFromProjectAlt1QueryParams)
    ], RemoveVideosFromProjectAlt1Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveVideosFromProjectAlt1Security)
    ], RemoveVideosFromProjectAlt1Request.prototype, "security", void 0);
    return RemoveVideosFromProjectAlt1Request;
}(SpeakeasyBase));
export { RemoveVideosFromProjectAlt1Request };
var RemoveVideosFromProjectAlt1Response = /** @class */ (function (_super) {
    __extends(RemoveVideosFromProjectAlt1Response, _super);
    function RemoveVideosFromProjectAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveVideosFromProjectAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveVideosFromProjectAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], RemoveVideosFromProjectAlt1Response.prototype, "error", void 0);
    return RemoveVideosFromProjectAlt1Response;
}(SpeakeasyBase));
export { RemoveVideosFromProjectAlt1Response };
