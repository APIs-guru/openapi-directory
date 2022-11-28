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
var GetShopScriptTagsSecurity = /** @class */ (function (_super) {
    __extends(GetShopScriptTagsSecurity, _super);
    function GetShopScriptTagsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetShopScriptTagsSecurity.prototype, "oAuth2", void 0);
    return GetShopScriptTagsSecurity;
}(SpeakeasyBase));
export { GetShopScriptTagsSecurity };
export var GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum;
(function (GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum) {
    GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum["Shop"] = "shop";
    GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum["ThanksPage"] = "thanks_page";
})(GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum || (GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum = {}));
var GetShopScriptTags200ApplicationJsonScriptTags = /** @class */ (function (_super) {
    __extends(GetShopScriptTags200ApplicationJsonScriptTags, _super);
    function GetShopScriptTags200ApplicationJsonScriptTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetShopScriptTags200ApplicationJsonScriptTags.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], GetShopScriptTags200ApplicationJsonScriptTags.prototype, "displayScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetShopScriptTags200ApplicationJsonScriptTags.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrity" }),
        __metadata("design:type", String)
    ], GetShopScriptTags200ApplicationJsonScriptTags.prototype, "integrity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], GetShopScriptTags200ApplicationJsonScriptTags.prototype, "makeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth_application_id" }),
        __metadata("design:type", Number)
    ], GetShopScriptTags200ApplicationJsonScriptTags.prototype, "oauthApplicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], GetShopScriptTags200ApplicationJsonScriptTags.prototype, "src", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], GetShopScriptTags200ApplicationJsonScriptTags.prototype, "updateDate", void 0);
    return GetShopScriptTags200ApplicationJsonScriptTags;
}(SpeakeasyBase));
export { GetShopScriptTags200ApplicationJsonScriptTags };
var GetShopScriptTags200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetShopScriptTags200ApplicationJson, _super);
    function GetShopScriptTags200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_tags", elemType: GetShopScriptTags200ApplicationJsonScriptTags }),
        __metadata("design:type", Array)
    ], GetShopScriptTags200ApplicationJson.prototype, "scriptTags", void 0);
    return GetShopScriptTags200ApplicationJson;
}(SpeakeasyBase));
export { GetShopScriptTags200ApplicationJson };
var GetShopScriptTagsRequest = /** @class */ (function (_super) {
    __extends(GetShopScriptTagsRequest, _super);
    function GetShopScriptTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShopScriptTagsSecurity)
    ], GetShopScriptTagsRequest.prototype, "security", void 0);
    return GetShopScriptTagsRequest;
}(SpeakeasyBase));
export { GetShopScriptTagsRequest };
var GetShopScriptTagsResponse = /** @class */ (function (_super) {
    __extends(GetShopScriptTagsResponse, _super);
    function GetShopScriptTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetShopScriptTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetShopScriptTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetShopScriptTags200ApplicationJson)
    ], GetShopScriptTagsResponse.prototype, "getShopScriptTags200ApplicationJsonObject", void 0);
    return GetShopScriptTagsResponse;
}(SpeakeasyBase));
export { GetShopScriptTagsResponse };
