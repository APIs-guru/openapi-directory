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
var AddVideoTagsPathParams = /** @class */ (function (_super) {
    __extends(AddVideoTagsPathParams, _super);
    function AddVideoTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], AddVideoTagsPathParams.prototype, "videoId", void 0);
    return AddVideoTagsPathParams;
}(SpeakeasyBase));
export { AddVideoTagsPathParams };
var AddVideoTagsRequestBody = /** @class */ (function (_super) {
    __extends(AddVideoTagsRequestBody, _super);
    function AddVideoTagsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddVideoTagsRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], AddVideoTagsRequestBody.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], AddVideoTagsRequestBody.prototype, "perPage", void 0);
    return AddVideoTagsRequestBody;
}(SpeakeasyBase));
export { AddVideoTagsRequestBody };
var AddVideoTagsSecurity = /** @class */ (function (_super) {
    __extends(AddVideoTagsSecurity, _super);
    function AddVideoTagsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AddVideoTagsSecurity.prototype, "oauth2", void 0);
    return AddVideoTagsSecurity;
}(SpeakeasyBase));
export { AddVideoTagsSecurity };
var AddVideoTagsRequest = /** @class */ (function (_super) {
    __extends(AddVideoTagsRequest, _super);
    function AddVideoTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoTagsPathParams)
    ], AddVideoTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.tag+json" }),
        __metadata("design:type", AddVideoTagsRequestBody)
    ], AddVideoTagsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoTagsSecurity)
    ], AddVideoTagsRequest.prototype, "security", void 0);
    return AddVideoTagsRequest;
}(SpeakeasyBase));
export { AddVideoTagsRequest };
var AddVideoTagsResponse = /** @class */ (function (_super) {
    __extends(AddVideoTagsResponse, _super);
    function AddVideoTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVideoTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVideoTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], AddVideoTagsResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], AddVideoTagsResponse.prototype, "tags", void 0);
    return AddVideoTagsResponse;
}(SpeakeasyBase));
export { AddVideoTagsResponse };
