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
var StoryIdCollaboratorsUseridPutPathParams = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsUseridPutPathParams, _super);
    function StoryIdCollaboratorsUseridPutPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsUseridPutPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_collaborator_userid" }),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsUseridPutPathParams.prototype, "storyCollaboratorUserid", void 0);
    return StoryIdCollaboratorsUseridPutPathParams;
}(SpeakeasyBase));
export { StoryIdCollaboratorsUseridPutPathParams };
var StoryIdCollaboratorsUseridPutRequest = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsUseridPutRequest, _super);
    function StoryIdCollaboratorsUseridPutRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoryIdCollaboratorsUseridPutPathParams)
    ], StoryIdCollaboratorsUseridPutRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StoryCollaborator)
    ], StoryIdCollaboratorsUseridPutRequest.prototype, "request", void 0);
    return StoryIdCollaboratorsUseridPutRequest;
}(SpeakeasyBase));
export { StoryIdCollaboratorsUseridPutRequest };
var StoryIdCollaboratorsUseridPutResponse = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsUseridPutResponse, _super);
    function StoryIdCollaboratorsUseridPutResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsUseridPutResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoryIdCollaboratorsUseridPutResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StoryIdCollaboratorsUseridPutResponse.prototype, "problemDetail", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StoryCollaborator)
    ], StoryIdCollaboratorsUseridPutResponse.prototype, "storyCollaborator", void 0);
    return StoryIdCollaboratorsUseridPutResponse;
}(SpeakeasyBase));
export { StoryIdCollaboratorsUseridPutResponse };
