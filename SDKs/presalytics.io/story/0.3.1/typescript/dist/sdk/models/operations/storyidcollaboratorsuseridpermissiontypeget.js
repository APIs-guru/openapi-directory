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
var StoryIdCollaboratorsUseridPermissiontypeGetPathParams = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsUseridPermissiontypeGetPathParams, _super);
    function StoryIdCollaboratorsUseridPermissiontypeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsUseridPermissiontypeGetPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissiontype" }),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsUseridPermissiontypeGetPathParams.prototype, "permissiontype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_collaborator_userid" }),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsUseridPermissiontypeGetPathParams.prototype, "storyCollaboratorUserid", void 0);
    return StoryIdCollaboratorsUseridPermissiontypeGetPathParams;
}(SpeakeasyBase));
export { StoryIdCollaboratorsUseridPermissiontypeGetPathParams };
var StoryIdCollaboratorsUseridPermissiontypeGetRequest = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsUseridPermissiontypeGetRequest, _super);
    function StoryIdCollaboratorsUseridPermissiontypeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoryIdCollaboratorsUseridPermissiontypeGetPathParams)
    ], StoryIdCollaboratorsUseridPermissiontypeGetRequest.prototype, "pathParams", void 0);
    return StoryIdCollaboratorsUseridPermissiontypeGetRequest;
}(SpeakeasyBase));
export { StoryIdCollaboratorsUseridPermissiontypeGetRequest };
var StoryIdCollaboratorsUseridPermissiontypeGetResponse = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsUseridPermissiontypeGetResponse, _super);
    function StoryIdCollaboratorsUseridPermissiontypeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsUseridPermissiontypeGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoryIdCollaboratorsUseridPermissiontypeGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StoryIdCollaboratorsUseridPermissiontypeGetResponse.prototype, "problemDetail", void 0);
    return StoryIdCollaboratorsUseridPermissiontypeGetResponse;
}(SpeakeasyBase));
export { StoryIdCollaboratorsUseridPermissiontypeGetResponse };
