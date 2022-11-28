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
var DiscussionApiGetTopicsForFolderPathParams = /** @class */ (function (_super) {
    __extends(DiscussionApiGetTopicsForFolderPathParams, _super);
    function DiscussionApiGetTopicsForFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folderId" }),
        __metadata("design:type", Number)
    ], DiscussionApiGetTopicsForFolderPathParams.prototype, "folderId", void 0);
    return DiscussionApiGetTopicsForFolderPathParams;
}(SpeakeasyBase));
export { DiscussionApiGetTopicsForFolderPathParams };
export var DiscussionApiGetTopicsForFolderFieldsEnum;
(function (DiscussionApiGetTopicsForFolderFieldsEnum) {
    DiscussionApiGetTopicsForFolderFieldsEnum["None"] = "None";
    DiscussionApiGetTopicsForFolderFieldsEnum["Comments"] = "Comments";
    DiscussionApiGetTopicsForFolderFieldsEnum["CommentCount"] = "CommentCount";
    DiscussionApiGetTopicsForFolderFieldsEnum["Content"] = "Content";
    DiscussionApiGetTopicsForFolderFieldsEnum["LastComment"] = "LastComment";
    DiscussionApiGetTopicsForFolderFieldsEnum["All"] = "All";
})(DiscussionApiGetTopicsForFolderFieldsEnum || (DiscussionApiGetTopicsForFolderFieldsEnum = {}));
var DiscussionApiGetTopicsForFolderQueryParams = /** @class */ (function (_super) {
    __extends(DiscussionApiGetTopicsForFolderQueryParams, _super);
    function DiscussionApiGetTopicsForFolderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DiscussionApiGetTopicsForFolderQueryParams.prototype, "fields", void 0);
    return DiscussionApiGetTopicsForFolderQueryParams;
}(SpeakeasyBase));
export { DiscussionApiGetTopicsForFolderQueryParams };
var DiscussionApiGetTopicsForFolderRequest = /** @class */ (function (_super) {
    __extends(DiscussionApiGetTopicsForFolderRequest, _super);
    function DiscussionApiGetTopicsForFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscussionApiGetTopicsForFolderPathParams)
    ], DiscussionApiGetTopicsForFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscussionApiGetTopicsForFolderQueryParams)
    ], DiscussionApiGetTopicsForFolderRequest.prototype, "queryParams", void 0);
    return DiscussionApiGetTopicsForFolderRequest;
}(SpeakeasyBase));
export { DiscussionApiGetTopicsForFolderRequest };
var DiscussionApiGetTopicsForFolderResponse = /** @class */ (function (_super) {
    __extends(DiscussionApiGetTopicsForFolderResponse, _super);
    function DiscussionApiGetTopicsForFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DiscussionApiGetTopicsForFolderResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiscussionApiGetTopicsForFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.DiscussionTopicContract }),
        __metadata("design:type", Array)
    ], DiscussionApiGetTopicsForFolderResponse.prototype, "discussionTopicContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiscussionApiGetTopicsForFolderResponse.prototype, "statusCode", void 0);
    return DiscussionApiGetTopicsForFolderResponse;
}(SpeakeasyBase));
export { DiscussionApiGetTopicsForFolderResponse };
