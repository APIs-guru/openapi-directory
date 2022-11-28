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
var CreateCommentPathParams = /** @class */ (function (_super) {
    __extends(CreateCommentPathParams, _super);
    function CreateCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], CreateCommentPathParams.prototype, "videoId", void 0);
    return CreateCommentPathParams;
}(SpeakeasyBase));
export { CreateCommentPathParams };
var CreateCommentRequestBody = /** @class */ (function (_super) {
    __extends(CreateCommentRequestBody, _super);
    function CreateCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], CreateCommentRequestBody.prototype, "text", void 0);
    return CreateCommentRequestBody;
}(SpeakeasyBase));
export { CreateCommentRequestBody };
var CreateCommentSecurity = /** @class */ (function (_super) {
    __extends(CreateCommentSecurity, _super);
    function CreateCommentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateCommentSecurity.prototype, "oauth2", void 0);
    return CreateCommentSecurity;
}(SpeakeasyBase));
export { CreateCommentSecurity };
var CreateCommentRequest = /** @class */ (function (_super) {
    __extends(CreateCommentRequest, _super);
    function CreateCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCommentPathParams)
    ], CreateCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.comment+json" }),
        __metadata("design:type", CreateCommentRequestBody)
    ], CreateCommentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCommentSecurity)
    ], CreateCommentRequest.prototype, "security", void 0);
    return CreateCommentRequest;
}(SpeakeasyBase));
export { CreateCommentRequest };
var CreateCommentResponse = /** @class */ (function (_super) {
    __extends(CreateCommentResponse, _super);
    function CreateCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCommentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Comment)
    ], CreateCommentResponse.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CreateCommentResponse.prototype, "error", void 0);
    return CreateCommentResponse;
}(SpeakeasyBase));
export { CreateCommentResponse };
