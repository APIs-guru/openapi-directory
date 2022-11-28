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
var AddTagsToChannelPathParams = /** @class */ (function (_super) {
    __extends(AddTagsToChannelPathParams, _super);
    function AddTagsToChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], AddTagsToChannelPathParams.prototype, "channelId", void 0);
    return AddTagsToChannelPathParams;
}(SpeakeasyBase));
export { AddTagsToChannelPathParams };
var AddTagsToChannelRequestBody = /** @class */ (function (_super) {
    __extends(AddTagsToChannelRequestBody, _super);
    function AddTagsToChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", Array)
    ], AddTagsToChannelRequestBody.prototype, "tag", void 0);
    return AddTagsToChannelRequestBody;
}(SpeakeasyBase));
export { AddTagsToChannelRequestBody };
var AddTagsToChannelSecurity = /** @class */ (function (_super) {
    __extends(AddTagsToChannelSecurity, _super);
    function AddTagsToChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AddTagsToChannelSecurity.prototype, "oauth2", void 0);
    return AddTagsToChannelSecurity;
}(SpeakeasyBase));
export { AddTagsToChannelSecurity };
var AddTagsToChannelRequest = /** @class */ (function (_super) {
    __extends(AddTagsToChannelRequest, _super);
    function AddTagsToChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddTagsToChannelPathParams)
    ], AddTagsToChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.tag+json" }),
        __metadata("design:type", AddTagsToChannelRequestBody)
    ], AddTagsToChannelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddTagsToChannelSecurity)
    ], AddTagsToChannelRequest.prototype, "security", void 0);
    return AddTagsToChannelRequest;
}(SpeakeasyBase));
export { AddTagsToChannelRequest };
var AddTagsToChannelResponse = /** @class */ (function (_super) {
    __extends(AddTagsToChannelResponse, _super);
    function AddTagsToChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddTagsToChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddTagsToChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], AddTagsToChannelResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], AddTagsToChannelResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], AddTagsToChannelResponse.prototype, "tags", void 0);
    return AddTagsToChannelResponse;
}(SpeakeasyBase));
export { AddTagsToChannelResponse };
