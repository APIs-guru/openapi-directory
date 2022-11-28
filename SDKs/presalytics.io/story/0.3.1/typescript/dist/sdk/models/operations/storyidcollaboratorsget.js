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
var StoryIdCollaboratorsGetPathParams = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsGetPathParams, _super);
    function StoryIdCollaboratorsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsGetPathParams.prototype, "id", void 0);
    return StoryIdCollaboratorsGetPathParams;
}(SpeakeasyBase));
export { StoryIdCollaboratorsGetPathParams };
var StoryIdCollaboratorsGetRequest = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsGetRequest, _super);
    function StoryIdCollaboratorsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoryIdCollaboratorsGetPathParams)
    ], StoryIdCollaboratorsGetRequest.prototype, "pathParams", void 0);
    return StoryIdCollaboratorsGetRequest;
}(SpeakeasyBase));
export { StoryIdCollaboratorsGetRequest };
var StoryIdCollaboratorsGetResponse = /** @class */ (function (_super) {
    __extends(StoryIdCollaboratorsGetResponse, _super);
    function StoryIdCollaboratorsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoryIdCollaboratorsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoryIdCollaboratorsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StoryIdCollaboratorsGetResponse.prototype, "problemDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.StoryCollaborator }),
        __metadata("design:type", Array)
    ], StoryIdCollaboratorsGetResponse.prototype, "storyCollaborators", void 0);
    return StoryIdCollaboratorsGetResponse;
}(SpeakeasyBase));
export { StoryIdCollaboratorsGetResponse };
