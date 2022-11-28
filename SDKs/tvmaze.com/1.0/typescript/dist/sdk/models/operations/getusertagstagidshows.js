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
var GetUserTagsTagIdShowsPathParams = /** @class */ (function (_super) {
    __extends(GetUserTagsTagIdShowsPathParams, _super);
    function GetUserTagsTagIdShowsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag_id" }),
        __metadata("design:type", Number)
    ], GetUserTagsTagIdShowsPathParams.prototype, "tagId", void 0);
    return GetUserTagsTagIdShowsPathParams;
}(SpeakeasyBase));
export { GetUserTagsTagIdShowsPathParams };
export var GetUserTagsTagIdShowsEmbedEnum;
(function (GetUserTagsTagIdShowsEmbedEnum) {
    GetUserTagsTagIdShowsEmbedEnum["Show"] = "show";
})(GetUserTagsTagIdShowsEmbedEnum || (GetUserTagsTagIdShowsEmbedEnum = {}));
var GetUserTagsTagIdShowsQueryParams = /** @class */ (function (_super) {
    __extends(GetUserTagsTagIdShowsQueryParams, _super);
    function GetUserTagsTagIdShowsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", String)
    ], GetUserTagsTagIdShowsQueryParams.prototype, "embed", void 0);
    return GetUserTagsTagIdShowsQueryParams;
}(SpeakeasyBase));
export { GetUserTagsTagIdShowsQueryParams };
var GetUserTagsTagIdShowsRequest = /** @class */ (function (_super) {
    __extends(GetUserTagsTagIdShowsRequest, _super);
    function GetUserTagsTagIdShowsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserTagsTagIdShowsPathParams)
    ], GetUserTagsTagIdShowsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserTagsTagIdShowsQueryParams)
    ], GetUserTagsTagIdShowsRequest.prototype, "queryParams", void 0);
    return GetUserTagsTagIdShowsRequest;
}(SpeakeasyBase));
export { GetUserTagsTagIdShowsRequest };
var GetUserTagsTagIdShowsResponse = /** @class */ (function (_super) {
    __extends(GetUserTagsTagIdShowsResponse, _super);
    function GetUserTagsTagIdShowsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserTagsTagIdShowsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserTagsTagIdShowsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TagInstance }),
        __metadata("design:type", Array)
    ], GetUserTagsTagIdShowsResponse.prototype, "tagInstances", void 0);
    return GetUserTagsTagIdShowsResponse;
}(SpeakeasyBase));
export { GetUserTagsTagIdShowsResponse };
