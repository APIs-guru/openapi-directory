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
var CreateCommentAlt1PathParams = /** @class */ (function (_super) {
    __extends(CreateCommentAlt1PathParams, _super);
    function CreateCommentAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], CreateCommentAlt1PathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], CreateCommentAlt1PathParams.prototype, "videoId", void 0);
    return CreateCommentAlt1PathParams;
}(SpeakeasyBase));
export { CreateCommentAlt1PathParams };
var CreateCommentAlt1RequestBody = /** @class */ (function (_super) {
    __extends(CreateCommentAlt1RequestBody, _super);
    function CreateCommentAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], CreateCommentAlt1RequestBody.prototype, "text", void 0);
    return CreateCommentAlt1RequestBody;
}(SpeakeasyBase));
export { CreateCommentAlt1RequestBody };
var CreateCommentAlt1Security = /** @class */ (function (_super) {
    __extends(CreateCommentAlt1Security, _super);
    function CreateCommentAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateCommentAlt1Security.prototype, "oauth2", void 0);
    return CreateCommentAlt1Security;
}(SpeakeasyBase));
export { CreateCommentAlt1Security };
var CreateCommentAlt1Request = /** @class */ (function (_super) {
    __extends(CreateCommentAlt1Request, _super);
    function CreateCommentAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCommentAlt1PathParams)
    ], CreateCommentAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.comment+json" }),
        __metadata("design:type", CreateCommentAlt1RequestBody)
    ], CreateCommentAlt1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCommentAlt1Security)
    ], CreateCommentAlt1Request.prototype, "security", void 0);
    return CreateCommentAlt1Request;
}(SpeakeasyBase));
export { CreateCommentAlt1Request };
var CreateCommentAlt1Response = /** @class */ (function (_super) {
    __extends(CreateCommentAlt1Response, _super);
    function CreateCommentAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCommentAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCommentAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Comment)
    ], CreateCommentAlt1Response.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CreateCommentAlt1Response.prototype, "error", void 0);
    return CreateCommentAlt1Response;
}(SpeakeasyBase));
export { CreateCommentAlt1Response };
