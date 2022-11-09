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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var StoryIdCollaboratorsInactivePostPathParams = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsInactivePostPathParams, _super);
    function StoryIdCollaboratorsInactivePostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsInactivePostPathParams.prototype, "id", void 0);
    return StoryIdCollaboratorsInactivePostPathParams;
}(SpeakeasyBase));
export { StoryIdCollaboratorsInactivePostPathParams };
var StoryIdCollaboratorsInactivePostRequest = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsInactivePostRequest, _super);
    function StoryIdCollaboratorsInactivePostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StoryIdCollaboratorsInactivePostPathParams)
    ], StoryIdCollaboratorsInactivePostRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], StoryIdCollaboratorsInactivePostRequest.prototype, "request", void 0);
    return StoryIdCollaboratorsInactivePostRequest;
}(SpeakeasyBase));
export { StoryIdCollaboratorsInactivePostRequest };
var StoryIdCollaboratorsInactivePostResponse = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsInactivePostResponse, _super);
    function StoryIdCollaboratorsInactivePostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsInactivePostResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StoryIdCollaboratorsInactivePostResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StoryIdCollaboratorsInactivePostResponse.prototype, "problemDetail", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StoryCollaborator)
    ], StoryIdCollaboratorsInactivePostResponse.prototype, "storyCollaborator", void 0);
    return StoryIdCollaboratorsInactivePostResponse;
}(SpeakeasyBase));
export { StoryIdCollaboratorsInactivePostResponse };
