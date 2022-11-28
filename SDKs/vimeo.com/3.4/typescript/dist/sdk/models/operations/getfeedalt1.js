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
export var GetFeedAlt1TypeEnum;
(function (GetFeedAlt1TypeEnum) {
    GetFeedAlt1TypeEnum["Appears"] = "appears";
    GetFeedAlt1TypeEnum["CategoryFeatured"] = "category_featured";
    GetFeedAlt1TypeEnum["Channel"] = "channel";
    GetFeedAlt1TypeEnum["FacebookFeed"] = "facebook_feed";
    GetFeedAlt1TypeEnum["Following"] = "following";
    GetFeedAlt1TypeEnum["Group"] = "group";
    GetFeedAlt1TypeEnum["Likes"] = "likes";
    GetFeedAlt1TypeEnum["OndemandPublish"] = "ondemand_publish";
    GetFeedAlt1TypeEnum["Share"] = "share";
    GetFeedAlt1TypeEnum["TaggedWith"] = "tagged_with";
    GetFeedAlt1TypeEnum["TwitterTimeline"] = "twitter_timeline";
    GetFeedAlt1TypeEnum["Uploads"] = "uploads";
})(GetFeedAlt1TypeEnum || (GetFeedAlt1TypeEnum = {}));
var GetFeedAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetFeedAlt1QueryParams, _super);
    function GetFeedAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetFeedAlt1QueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFeedAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetFeedAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetFeedAlt1QueryParams.prototype, "type", void 0);
    return GetFeedAlt1QueryParams;
}(SpeakeasyBase));
export { GetFeedAlt1QueryParams };
var GetFeedAlt1Security = /** @class */ (function (_super) {
    __extends(GetFeedAlt1Security, _super);
    function GetFeedAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetFeedAlt1Security.prototype, "oauth2", void 0);
    return GetFeedAlt1Security;
}(SpeakeasyBase));
export { GetFeedAlt1Security };
var GetFeedAlt1Request = /** @class */ (function (_super) {
    __extends(GetFeedAlt1Request, _super);
    function GetFeedAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFeedAlt1QueryParams)
    ], GetFeedAlt1Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFeedAlt1Security)
    ], GetFeedAlt1Request.prototype, "security", void 0);
    return GetFeedAlt1Request;
}(SpeakeasyBase));
export { GetFeedAlt1Request };
var GetFeedAlt1Response = /** @class */ (function (_super) {
    __extends(GetFeedAlt1Response, _super);
    function GetFeedAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFeedAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFeedAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Activity31 }),
        __metadata("design:type", Array)
    ], GetFeedAlt1Response.prototype, "activity31s", void 0);
    return GetFeedAlt1Response;
}(SpeakeasyBase));
export { GetFeedAlt1Response };
