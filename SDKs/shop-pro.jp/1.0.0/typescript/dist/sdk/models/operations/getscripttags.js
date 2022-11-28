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
var GetScriptTagsSecurity = /** @class */ (function (_super) {
    __extends(GetScriptTagsSecurity, _super);
    function GetScriptTagsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetScriptTagsSecurity.prototype, "oAuth2", void 0);
    return GetScriptTagsSecurity;
}(SpeakeasyBase));
export { GetScriptTagsSecurity };
export var GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum;
(function (GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum) {
    GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum["All"] = "all";
    GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum["Shop"] = "shop";
    GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum["ThanksPage"] = "thanks_page";
    GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum["Cart"] = "cart";
})(GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum || (GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum = {}));
var GetScriptTags200ApplicationJsonScriptTags = /** @class */ (function (_super) {
    __extends(GetScriptTags200ApplicationJsonScriptTags, _super);
    function GetScriptTags200ApplicationJsonScriptTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], GetScriptTags200ApplicationJsonScriptTags.prototype, "displayScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetScriptTags200ApplicationJsonScriptTags.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], GetScriptTags200ApplicationJsonScriptTags.prototype, "makeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], GetScriptTags200ApplicationJsonScriptTags.prototype, "src", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], GetScriptTags200ApplicationJsonScriptTags.prototype, "updateDate", void 0);
    return GetScriptTags200ApplicationJsonScriptTags;
}(SpeakeasyBase));
export { GetScriptTags200ApplicationJsonScriptTags };
var GetScriptTags200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetScriptTags200ApplicationJson, _super);
    function GetScriptTags200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_tags", elemType: GetScriptTags200ApplicationJsonScriptTags }),
        __metadata("design:type", Array)
    ], GetScriptTags200ApplicationJson.prototype, "scriptTags", void 0);
    return GetScriptTags200ApplicationJson;
}(SpeakeasyBase));
export { GetScriptTags200ApplicationJson };
var GetScriptTagsRequest = /** @class */ (function (_super) {
    __extends(GetScriptTagsRequest, _super);
    function GetScriptTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScriptTagsSecurity)
    ], GetScriptTagsRequest.prototype, "security", void 0);
    return GetScriptTagsRequest;
}(SpeakeasyBase));
export { GetScriptTagsRequest };
var GetScriptTagsResponse = /** @class */ (function (_super) {
    __extends(GetScriptTagsResponse, _super);
    function GetScriptTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetScriptTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetScriptTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScriptTags200ApplicationJson)
    ], GetScriptTagsResponse.prototype, "getScriptTags200ApplicationJsonObject", void 0);
    return GetScriptTagsResponse;
}(SpeakeasyBase));
export { GetScriptTagsResponse };
